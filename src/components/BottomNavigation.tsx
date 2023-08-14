'use client';
import React, { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import Image from 'next/image';
import OfflineStatus from './OfflineStatus';
import AgentOnCall from './AgentOnCall';
import Counter from './Counter';
import AgentReady from './AgentReady';
import { useAppSelector } from '@/redux/hooks';

const BottomNavigation = () => {
   const [agentStatusReady, setAgentStatusReady] = useState<boolean>(true);
   const [isOnline, setIsOnline] = useState<boolean>(true);

   const callStarted = useAppSelector((state) => state.callStatus.callStarted);

   useEffect(() => {
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
         window.removeEventListener('online', handleOnline);
         window.removeEventListener('offline', handleOffline);
      };
   }, []);

   return (
      <nav className='fixed bottom-0 w-full bg-white-800 shadow-lg shadow-gray-800'>
         <div className='flex items-center h-16 px-3'>
            <section className='flex justify-start items-center w-1/4'>
               <div className='relative'>
                  <Avatar className={`border-${agentStatusReady && isOnline ? 'green' : 'teal'}-500 border-4`}>
                     <AvatarImage src='https://github.com/shadcn.png' />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className={`bottom-0 left-7 absolute  w-3.5 h-3.5 bg-${agentStatusReady && isOnline ? 'green' : 'red'}-600 border-2 border-white dark:border-gray-800 rounded-full`}></span>
               </div>

               <div className='flex items-center justify-between w-full'>
                  <div className='flex  items-start flex-col justify-center mx-2'>
                     <h4 className='font-bold'>Arun</h4>
                     <div className={`flex rounded items-center justify-between bg-${agentStatusReady && isOnline ? 'teal' : 'red'}-200  px-1`}>
                        <span className='mr-2'>
                           <Image src={agentStatusReady && isOnline ? './assets/icons/headphone.svg' : '/assets/icons/break-1.svg'} alt='headphone' width={15} height={15} />
                        </span>
                        <DropdownMenu>
                           <DropdownMenuTrigger className='text-sm text-gray-500'>{agentStatusReady && isOnline ? 'ready' : <Counter className='text-sm' resetCounter={true} />}</DropdownMenuTrigger>
                           {agentStatusReady && isOnline ? (
                              <DropdownMenuContent>
                                 <DropdownMenuItem onClick={() => setAgentStatusReady(false)}>break-1</DropdownMenuItem>
                                 <DropdownMenuItem onClick={() => setAgentStatusReady(false)}>break-2</DropdownMenuItem>
                              </DropdownMenuContent>
                           ) : (
                              <DropdownMenuContent>
                                 <DropdownMenuItem onClick={() => setAgentStatusReady(true)}>ready</DropdownMenuItem>
                              </DropdownMenuContent>
                           )}
                        </DropdownMenu>
                        <span className='ml-2'>
                           <Image src='./assets/icons/down-arrow.svg' alt='down-arrow' width={12} height={12} />
                        </span>
                     </div>
                  </div>

                  {!isOnline && <OfflineStatus />}
               </div>
            </section>

            {!callStarted && <AgentReady agentStatusReady={agentStatusReady} isOnline={isOnline} />}
            {callStarted && <AgentOnCall agentStatusReady={agentStatusReady} isOnline={isOnline} />}
         </div>
      </nav>
   );
};

export default BottomNavigation;
