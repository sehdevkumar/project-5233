import { useSelector } from 'react-redux'
import './App.css'
import HttpLoader from './shared/components/http-loader'
import { store, useAppSelector } from './store/store'
import { initAxiosInstanceFromBaseUrl } from './store/thunk/axios-instance'
import CursorPage from './views/cursor-handler-page'
import { useContext, useEffect, useState } from 'react'

function App() {
  // init the base url
  initAxiosInstanceFromBaseUrl('')

  // Get the Loading state
  const loading = useAppSelector((state)=> state.thunkReducer);

  const [isLoading,setLoading] = useState<boolean>(true)
  
  useEffect(()=> {
    setLoading(loading.isLoading);
  } ,[loading])

  return (
    <>
      { isLoading && <HttpLoader />}
      <CursorPage isLoading="{isLoading}"/>
    </>
  )
}

export default App
