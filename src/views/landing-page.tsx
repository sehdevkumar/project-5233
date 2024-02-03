import { useEffect } from 'react'
import useHttpHook from '../store/thunk/http-hook'

const LandingPage = () => {
  const httpRquest = useHttpHook()

  useEffect(() => {
    httpRquest.request('GET', 'https://api.publicapis.org/entriess').then((res) => {
      console.log('I will kill you',res)
    })

    return () => {
      httpRquest.cancelRequest()
    }
  }, [])

  return (
    <>
      <div className=" w-full h-full items-center justify-end grid grid-cols-2 text-white">
        <div className="text-[clamp(30px,1vw,35px)] flex text-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          neque corrupti excepturi, minima explicabo eius. Nihil, fugit earum
          alias, provident est quas quia dolores fuga porro atque, eos esse
          quos! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tenetur earum alias natus voluptatum facere blanditiis aliquam
          corporis? Vel illo quia, doloribus veritatis eum obcaecati voluptas
          nulla asperiores rerum porro aspernatur.
        </div>
        <img
          loading="lazy"
          className="object-cover w-full h-full"
          src="../../public/assets/sky-view1.jpg"
        />
      </div>

      <div className=" w-full h-full items-center justify-end grid grid-cols-2 text-white">
        <img
          loading="lazy"
          className="object-cover w-full h-full"
          src="../../public/assets/angular-react.jpg"
        />
        <div className="text-[clamp(30px,1vw,35px)] flex text-center items-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
          neque corrupti excepturi, minima explicabo eius. Nihil, fugit earum
          alias, provident est quas quia dolores fuga porro atque, eos esse
          quos! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Tenetur earum alias natus voluptatum facere blanditiis aliquam
          corporis? Vel illo quia, doloribus veritatis eum obcaecati voluptas
          nulla asperiores rerum porro aspernatur.
        </div>
      </div>
    </>
  )
}

export { LandingPage }
