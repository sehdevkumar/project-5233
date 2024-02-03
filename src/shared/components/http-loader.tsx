
import '../css/loaders.css'

export default function HttpLoader() {
  return (
    <div className=" overflow-hidden w-full h-full bg-[#191919] fixed z-[9999999999] transform-[translate(-50%,-50%)] flex justify-center items-center">
         <div className="http-loader"></div>
    </div>
  )
}

