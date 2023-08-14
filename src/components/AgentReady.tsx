import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import Image from 'next/image';
import { Separator } from './ui/separator';
import MessageOnCallpanel from './MessageOnCallpanel';

type Props = {
   agentStatusReady: boolean;
   isOnline: boolean;
};

const AgentReady: React.FC<Props> = (props: Props) => {
   const { agentStatusReady, isOnline } = props;
   return (
      <section className='flex items-center w-3/4'>
         <Image src={agentStatusReady && isOnline ? '/assets/png/whatsapp.png' : '/assets/png/whatsapp-offline.png'} alt='whatsapp' width={35} height={35} />
         <MessageOnCallpanel agentStatusReady={agentStatusReady} isOnline={isOnline} />
      </section>
   );
};

export default AgentReady;
