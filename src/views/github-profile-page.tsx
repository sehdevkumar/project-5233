import { useEffect, useState } from 'react'
import { GitHubUser } from '../typings/api-typings'
import { useAppSelector } from '../store/store'

const GitHubProfilePage = () => {
  const [gitProfile, setGitProfile] = useState<GitHubUser>()
  const gitSelector = useAppSelector((state) => state.githubProfileReducer)

  useEffect(() => {
    setGitProfile(gitSelector?.data)
  }, [gitSelector?.data])

  return (
    <>
      <div className="font-serif text-center text-4xl font-bold text-[lime] mb-20 ">
        Github Profile
      </div>
      <div className="w-full flex flex-row flex-wrap md:flex-nowrap sm:flex-wrap gap-x-10">
        <div className="p-4 w-full grid justify-center ">
          <img
            src={gitProfile?.avatar_url}
            alt={gitProfile?.name}
            className="rounded-full w-100 md:200 sm:100 lg:400"
          />
          <h1 className="text-2xl font-bold">{gitProfile?.name}</h1>
          <p className="text-gray-600">{gitProfile?.bio}</p>
          <p className="text-gray-700">Followers: {gitProfile?.followers}</p>
          {/* Add more elements and styling based on your requirements */}
        </div>
          <div className="p-4 w-full grid justify-center ">
          <img
            src={gitProfile?.avatar_url}
            alt={gitProfile?.name}
            className="rounded-full w-100 md:200 sm:100 lg:400"
          />
          <h1 className="text-2xl font-bold">{gitProfile?.name}</h1>
          <p className="text-gray-600">{gitProfile?.bio}</p>
          <p className="text-gray-700">Followers: {gitProfile?.followers}</p>
          {/* Add more elements and styling based on your requirements */}
        </div>
      </div>
      
    </>
  )
}

export { GitHubProfilePage }
