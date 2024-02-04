import { createReducer } from '@reduxjs/toolkit'
import { HttpInitialState } from '../../typings/app-comman-typings'
import {
  FetchGihubFailedAction,
  FetchGihubSucessAction,
} from '../actions/github-actions'

const initialState: HttpInitialState<any> = {
  data: undefined,
  error: undefined,
  isLoading: true,
}

const githubProfileReducer = createReducer(initialState, (builder) => {
  builder.addCase(FetchGihubSucessAction, (state, action) => {
    state.data = action.payload
    state.error = undefined
    state.isLoading = false
  })

  builder.addCase(FetchGihubFailedAction, (state, action) => {
    state.data = undefined
    state.error = action.payload
    state.isLoading = false
  })
})

export {githubProfileReducer}
