import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from './axios-instance'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export type HttpRequest = AxiosRequestConfig & {
  signal?: AbortSignal
  loadingText?: string
}

export const httpAsyncThunk = createAsyncThunk(
  'httpAsyncThunk',
  async (payload: HttpRequest) => {
    let respoonse: AxiosResponse

    try {
      respoonse = await axiosInstance(payload)
      return respoonse
    } catch (error) {
      console.error(error)
    }
  },
)
