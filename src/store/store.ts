import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { thunkReducer } from './thunk/thunk-reducer'
import { githubProfileReducer } from './reducers/git-hub-reducers';

const store = configureStore({
  reducer:{thunkReducer,githubProfileReducer},
  devTools: true,
})
 
type RootState = ReturnType<typeof store.getState>;
type dispatchType = typeof store.dispatch
const globalDispatch = useDispatch<dispatchType>;
 const useAppSelector: TypedUseSelectorHook<RootState> = useSelector<RootState>;

export { store, globalDispatch,useAppSelector }
 