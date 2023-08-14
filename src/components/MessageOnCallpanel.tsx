import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import Image from 'next/image'
import { Separator } from './ui/separator'

type Props = {
   agentStatusReady: boolean
   isOnline: boolean
}

const MessageOnCallpanel = (props: Props) => {
   const { agentStatusReady, isOnline } = props
   return (
      <>
         <div className={`ml-2 px-3 py-2 border border-gray-300 rounded flex ${agentStatusReady && isOnline ? '' : 'bg-gray-200'}`}>
            <DropdownMenu>
               <DropdownMenuTrigger>
                  <span className='flex items-center'>
                     <Image src='/assets/icons/whatsapp.svg' alt='whatsapp' width={20} height={20} />
                     <span className='ml-1'>
                        <Image src='./assets/icons/down-arrow.svg' alt='headphone' width={10} height={10} />
                     </span>
                  </span>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuItem>Whatsapp</DropdownMenuItem>
                  <DropdownMenuItem>SMS</DropdownMenuItem>
               </DropdownMenuContent>
            </DropdownMenu>
            <Separator orientation='vertical' className='mx-2 h-5' />
            <div className='ml-2'>
               <span className='flex items-center text-gray-500 text-sm'>Select a template & send on whatsapp</span>
            </div>
            <div className='flex items-center justify-center ml-1 md:ml-12 space-x-2 > * '>
               <span className='flex'>
                  <DropdownMenu>
                     <DropdownMenuTrigger>
                        <Image src='./assets/icons/flash.svg' alt='flash' width={12} height={12} />
                     </DropdownMenuTrigger>
                     <DropdownMenuContent>
                        <DropdownMenuItem>template-1</DropdownMenuItem>
                        <DropdownMenuItem>template-2</DropdownMenuItem>
                        <DropdownMenuItem>template-3</DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
               </span>
               <Image src='./assets/icons/mic.svg' alt='mic' width={12} height={12} />
               <Image src='./assets/icons/attachment.svg' alt='attachment' width={14} height={14} />
               <Image src='./assets/icons/emoji.svg' alt='emoji' width={14} height={14} />
            </div>
         </div>
      </>
   )
}

export default MessageOnCallpanel
