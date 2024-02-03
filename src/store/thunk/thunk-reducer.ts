import { createReducer } from '@reduxjs/toolkit'
import { httpAsyncThunk } from './async-http-thunk'

export type HttpInitialState<T> = {
  data: T
  error: T
  isLoading: boolean
}

export const initialState: HttpInitialState<unknown> = {
  data: undefined,
  error: undefined,
  isLoading: false,
}

export const thunkReducer = createReducer(initialState, (builder) => {
  builder.addCase(httpAsyncThunk.pending, (state) => {
    state.data = undefined
    state.error = undefined
    state.isLoading = true;
  })

  builder.addCase(httpAsyncThunk.fulfilled, (state, action) => {
    state.data = action.payload
    state.isLoading = false;
  })

  builder.addCase(httpAsyncThunk.rejected, (state, action) => {
    state.data = undefined
    state.error = action.error
    state.isLoading = false;

  })
})
