import { createReducer } from '@reduxjs/toolkit'
import { httpAsyncThunk } from './async-http-thunk'

export type HttpInitialState<T> = {
  data: T
}

export const initialState: HttpInitialState<unknown>  = {
    data: undefined
}

export const thunkReducer = createReducer(initialState,(builder)=> {
    builder.addCase(httpAsyncThunk.pending,(state,action)=> {
      state.data = undefined;         
    })

    builder.addCase(httpAsyncThunk.fulfilled,(state,action)=> {
      state.data = action.payload;         
    })

     builder.addCase(httpAsyncThunk.rejected,(state,action)=> {
      state.data = action.error;         
    })
})
