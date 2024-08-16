import { configureStore } from '@reduxjs/toolkit'
import counter from './slice/counter'
import clientObject from './slice/clientObject'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter,
      clientObject
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
