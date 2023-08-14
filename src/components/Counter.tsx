'use client'
import { changeCallTime, changeCounterTime, resetCounterTime } from '@/redux/features/callStatusSlice'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import React, { useEffect } from 'react'

type CounterProps = {
   className?: string
   resetCounter?: boolean
}

const Counter: React.FC<CounterProps> = ({ className, resetCounter }: CounterProps) => {
   const counterTime = useAppSelector((state) => state.callStatus.counterTime)
   const dispatch = useAppDispatch()

   useEffect(() => {
      const interval = setInterval(() => {
         dispatch(changeCounterTime())
      }, 1000)

      return () => {
         if (resetCounter) dispatch(resetCounterTime())
         clearInterval(interval)
      }
   }, [])

   const formatTime = (totalSeconds: number) => {
      const minutes = Math.floor(totalSeconds / 60)
      const seconds = totalSeconds % 60
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
   }

   return (
      <div className='flex items-center justify-center'>
         <p className={`${className || 'text-6xl font-semibold'}`}>{formatTime(counterTime)}</p>
      </div>
   )
}

export default Counter
