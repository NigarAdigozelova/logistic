import { combineReducers, configureStore } from '@reduxjs/toolkit'
import loginSlice from './reducers/loginSlice'
import registerSlice from './reducers/registerSlice'

const reducer = combineReducers({
    register: registerSlice,
    login:loginSlice

    });
export const store = configureStore({
  reducer
})
