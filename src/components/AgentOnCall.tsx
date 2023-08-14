import React, { useState } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import Image from 'next/image'
import { Separator } from './ui/separator'
import { Badge } from './ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Counter from './Counter'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { Button } from './ui/button'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { changeCallTime, changeMsgOnCall } from '@/redux/features/callStatusSlice'
import MessageOnCallpanel from './MessageOnCallpanel'
import CallActions from './CallActions'

type Props = {
   agentStatusReady: boolean
   isOnline: boolean
}

const AgentOnCall = (props: Props) => {
   const { agentStatusReady, isOnline } = props
   const isMsgOnCall = useAppSelector((state) => state.callStatus.isMsgOnCall)
   const counterTime = useAppSelector((state) => state.callStatus.counterTime)

   const dispatch = useAppDispatch()

   const handleMsgOnCall = () => {
      dispatch(changeMsgOnCall())
      dispatch(changeCallTime(counterTime))
   }

   return (
      <section className='flex items-center w-3/4'>
         <CallActions />
         {!isMsgOnCall ? (
            <div className='relative ml-1 md:ml-10'>
               <Badge className='bg-green-100 -top-3 left-0 absolute text-green-600 text-xs p-0 px-1'>active</Badge>
               <div className={`ml-2 px-3 py-2 border border-green-300 rounded flex ${agentStatusReady && isOnline ? '' : 'bg-gray-200'}`}>
                  <DropdownMenu>
                     <DropdownMenuTrigger>
                        <span className='flex items-center'>
                           <Image src='/assets/icons/whatsapp.svg' alt='whatsapp' width={20} height={20} />
                           <span className='ml-1'>
                              <Image src='./assets/icons/down-arrow.svg' alt='down-arrow' width={10} height={10} />
                           </span>
                        </span>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent>
                        <DropdownMenuItem>Whatsapp</DropdownMenuItem>
                        <DropdownMenuItem>SMS</DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
                  <Separator orientation='vertical' className='mx-2 h-5' />
                  <div className='mx-2'>
                     <span className='flex items-center text-gray-500 text-sm' onClick={handleMsgOnCall}>
                        Send a message
                     </span>
                  </div>
               </div>
            </div>
         ) : (
            <MessageOnCallpanel agentStatusReady={agentStatusReady} isOnline={isOnline} />
         )}
         <div className='ml-auto flex space-x-2 > *'>
            <span>
               <Select>
                  <SelectTrigger className='w-[180px] text-gray-500'>
                     <SelectValue placeholder='Set disposition' />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectItem value='light'>Connected</SelectItem>
                     <SelectItem value='dark'>Completed</SelectItem>
                     <SelectItem value='system'>Cancelled</SelectItem>
                  </SelectContent>
               </Select>
            </span>
            <Button variant='default' className='bg-green-600'>
               Dispose Call
            </Button>
         </div>
      </section>
   )
}

export default AgentOnCall
