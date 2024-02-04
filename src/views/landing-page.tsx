import { useEffect } from 'react'
import useHttpHook from '../store/thunk/http-hook'
import TechStackPage from './tech-stack.page'
import { globalDispatch } from '../store/store'
import { FetchGihubSucessAction } from '../store/actions/github-actions'
import { GitHubUser } from '../typings/api-typings'
import { GitHubProfilePage } from './github-profile-page'
import { IntroPage } from './intro-page'

const LandingPage = () => {
  const httpRquest = useHttpHook()
  const dipatch = globalDispatch()

  useEffect(() => {
    httpRquest
      ?.request('GET', 'https://api.github.com/users/sehdevkumar')
      ?.then((res) => {
        dipatch(FetchGihubSucessAction(res?.data as GitHubUser))
      })

    return () => {
      httpRquest?.cancelRequest()
    }
  }, [])

  return (
    <>
    <div className="grid gap-y-4">
      
       <div className="w-full h-screen   text-white">
        <IntroPage />
      </div>

      <div className="w-full h-screen   text-white">
        <TechStackPage />
      </div>

      {/* <div className="w-full h-full   text-white">
        <GitHubProfilePage/>
      </div> */}

    </div>
    </>
  )
}

export { LandingPage }
