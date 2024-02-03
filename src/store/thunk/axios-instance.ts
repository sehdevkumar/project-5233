import axios, { AxiosInstance } from 'axios'

export let axiosInstance: AxiosInstance

export function initAxiosInstanceFromBaseUrl(baseUrl: string) {
  axiosInstance = axios.create({
    baseURL: baseUrl,
  })
}
