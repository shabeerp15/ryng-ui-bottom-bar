'use client'
import BottomNavigation from '@/components/BottomNavigation'
import { Checkbox } from '@/components/ui/checkbox'
import { changeCallStatus } from '@/redux/features/callStatusSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'

export default function Home() {
   const callStarted = useAppSelector((state) => state.callStatus.callStarted)
   const onCallTime = useAppSelector((state) => state.callStatus.onCallTime)

   const dispatch = useAppDispatch()

   return (
      <>
         <span className='space-x-2 > *'>
            <Checkbox checked={callStarted} onClick={() => dispatch(changeCallStatus())} />
            <span>call start {onCallTime ? onCallTime : ''}</span>
         </span>
         <BottomNavigation />
      </>
   )
}
