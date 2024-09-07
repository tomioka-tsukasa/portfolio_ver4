import { configureStore } from '@reduxjs/toolkit'
import modalCtrl from './slice/modalCtrl'
import navigationCtrl from './slice/navigationCtrl'

export const makeStore = () => {
  
  return configureStore({
    reducer: {
      modalCtrl,
      navigationCtrl
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
