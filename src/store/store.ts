import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { thunkReducer } from './thunk/thunk-reducer'

const store = configureStore({
  reducer:combineReducers([thunkReducer]),
  devTools: true,
})

type dispatchType = typeof store.dispatch
const globalDispatch = useDispatch<dispatchType>;

export { store, globalDispatch }
