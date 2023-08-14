import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import Image from 'next/image';
import Counter from './Counter';
import { useAppSelector } from '@/redux/hooks';

type Props = {};

const CallActions = (props: Props) => {
   const isMsgOnCall = useAppSelector((state) => state.callStatus.isMsgOnCall);
   const counterTime = useAppSelector((state) => state.callStatus.counterTime);

   return (
      <div className='dial-actions flex items-center space-x-4 > *'>
         <span>
            <div className='flex -space-x-3 > *'>
               <Avatar className={`border-4 border-green-600 ${isMsgOnCall && 'h-7 w-7'}`}>
                  <AvatarImage src='https://github.com/shadcn.png' />
               </Avatar>
               <Avatar className={`border-4 border-green-600 ${isMsgOnCall && 'h-7 w-7'}`}>
                  <AvatarImage src='https://picsum.photos/200' />
                  <AvatarFallback>MS</AvatarFallback>
               </Avatar>
            </div>
            {isMsgOnCall && <Counter className='text-sm text-gray-500 ml-auto' />}
         </span>
         {!isMsgOnCall && (
            <span>
               <Image src='/assets/png/wave.png' alt='wave' width={100} height={15} />
               <Counter className='text-sm text-gray-500 ml-auto' />
            </span>
         )}

         <span className='flex items-center space-x-2 > *'>
            <span className='bg-gray-300 p-2 rounded-full w-9 h-9 flex items-center justify-center'>
               <Image src='/assets/icons/mute.svg' alt='mute' width={20} height={20} />
            </span>
            <span className='bg-gray-300 p-2 rounded-full w-9 h-9 flex items-center justify-center'>
               <Image src='/assets/icons/pause.svg' alt='mute' width={20} height={20} />
            </span>
            <span className='bg-red-500 rounded-full w-9 h-9 flex items-center justify-center'>
               <Image src='/assets/icons/call-end.svg' alt='mute' width={20} height={20} />
            </span>
         </span>
      </div>
   );
};

export default CallActions;
