import axios, { AxiosResponse } from 'axios'
import { globalDispatch } from '../store'
import { HttpRequest, httpAsyncThunk } from './async-http-thunk'

const useHttpHook = () => {
  const useAppDispatch = globalDispatch()

  const signalList: AbortController[] = []

  const request = (
    method: 'GET' | 'POST' | 'DELETE' | 'PUT',
    url: string,
    params?: object,
    body?: object,
    loadingText?: 'Loading...',
  ): Promise<AxiosResponse<unknown>> => {
    return new Promise((resolve, reject) => {
      const abortController = new AbortController()
      const signal = abortController.signal
      signalList.push(abortController)

      const requestPayload: HttpRequest = {
        signal: signal,
        method: method,
        url: url,
        params: params,
        data: body,
        loadingText: loadingText,
      }

      const asyncThunk = httpAsyncThunk(requestPayload)

      useAppDispatch(asyncThunk)
        .then((result) => resolve(result.payload as AxiosResponse))
        .catch((error) => {
          if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message)
            reject(new Error('Request canceled'))
          } else {
            reject(error)
          }
        })
    })
  }

  const cancelRequest = () => {
    signalList?.forEach((d) => {
      d?.abort()
    })
  }

  return { request, cancelRequest }
}

export default useHttpHook
