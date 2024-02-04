import '../shared/css/animation.css'

const IntroPage = () => {
  return (
    <>
      <div className="grid h-full  p-5 gap-x-10 grid-cols-2 justify-center items-center w-full">
        <img src="../../public/assets/profile.png" className="profile rounded-full w-60 h-60 shadow-orange-300 shadow-sm justify-self-end object-cover" />
        <div className="intro  text-left flex flex-col gap-y-2">
           
           <div className="subtitle font-mono text-[23px]">HI, THERE !</div>
           <div className="animated-text job-title font-mono text-[38px] font-bold ">I'M UI DEVLOPER</div>
        </div>
      </div>
    </>
  )
}

export { IntroPage }
