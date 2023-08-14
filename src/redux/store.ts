import { configureStore } from '@reduxjs/toolkit'
import callReducer from './features/callStatusSlice'

export const store = configureStore({
   reducer: {
      callStatus: callReducer,
   },
   devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
