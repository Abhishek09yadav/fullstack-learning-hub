import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
export const store = () => {
  return configureStore({
    reducer: {counterReducer},
  })
}
 
// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']