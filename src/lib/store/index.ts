import { configureStore } from '@reduxjs/toolkit'
import tab from './slice/tab'

export const makeStore = () => {
  return configureStore({
    reducer: {
      tab
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
