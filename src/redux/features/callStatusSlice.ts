import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CallState = {
   agentOnline: boolean
   callStarted: boolean
   isMsgOnCall: boolean
   counterTime: number
   onCallTime: number
   onBreakTime: number
}

const initialState: CallState = {
   agentOnline: false,
   callStarted: false,
   isMsgOnCall: false,
   counterTime: 0,
   onCallTime: 0,
   onBreakTime: 0,
}

export const call = createSlice({
   name: 'call',
   initialState,
   reducers: {
      changeCallStatus: (state) => {
         state.callStarted = !state.callStarted
      },
      changeMsgOnCall: (state) => {
         state.isMsgOnCall = !state.isMsgOnCall
      },
      changeCounterTime: (state) => {
         state.counterTime += 1
      },
      resetCounterTime: (state) => {
         state.counterTime = 0
      },
      changeCallTime: (state, action) => {
         state.onCallTime = action.payload
      },
   },
})

export const { changeCallStatus, changeMsgOnCall, changeCounterTime, resetCounterTime, changeCallTime } = call.actions
export default call.reducer
