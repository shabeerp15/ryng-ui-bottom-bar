import Image from 'next/image'
import React from 'react'

type Props = {}

const OfflineStatus = (props: Props) => {
   return (
      <div className='flex m-auto'>
         <Image src='assets/icons/offline.svg' alt='offline' width={25} height={25} />
         <span className='ml-2 text-gray-500'>you are offline</span>
      </div>
   )
}

export default OfflineStatus
