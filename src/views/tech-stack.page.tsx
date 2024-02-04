const TechStackPage = () => {
  return (
      <div className="container mx-auto text-center pb-10">
        <h2 className="text-4xl font-bold text-[lime] mb-20 ">Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-x-20">
          <div className="react-env">
            <div className="text-center mb-10 text-xl">React Eco</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              <div className="p-6 rounded-sm  shadow-sm flex flex-col items-center">
                <img
                  src="../../public/assets/react.svg"
                  alt="React"
                  className="w-20 h-16 mb-4"
                />
                <p className="text-blue-300 font-semibold">React</p>
              </div>
              <div className=" p-6rounded-sm  shadow-sm flex flex-col items-center">
                <img
                  src="../../public/assets/tailwind-logo.png"
                  alt="Tailwind CSS"
                  className="w-20 h-16 mb-4"
                />
                <p className="text-blue-300 font-semibold">Tailwind CSS</p>
              </div>
              <div className="p-6rounded-sm  shadow-sm flex flex-col items-center">
                <img
                  src="../../public/assets/redux.dark.svg"
                  alt="Tailwind CSS"
                  className="w-30 h-16 mb-4"
                />
                <p className="text-blue-300 font-semibold">Redux & Toolkit</p>
              </div>
              <div className="p-6rounded-sm  shadow-sm flex flex-col items-center">
                <img
                  src="../../public/assets/axios.png"
                  alt="Tailwind CSS"
                  className="w-30 h-16 mb-4"
                />
                <p className="text-blue-300 font-semibold">Axios</p>
              </div>
            </div>
          </div>

          <div className="angular-env">
            <div className="text-center mb-10  text-xl">Angular Eco</div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
              <div className="p-6 rounded-sm  shadow-sm flex flex-col items-center">
                <img
                  src="../../public/assets/angular-icon.png"
                  alt="React"
                  className="w-20 h-16 mb-4"
                />
                <p className="text-blue-300 font-semibold">Angular 11+</p>
              </div>

              <div className=" p-6rounded-sm  shadow-sm flex flex-col items-center">
                <img
                  src="../../public/assets/ngrx2.svg"
                  alt="Tailwind CSS"
                  className="w-20 h-16 mb-4"
                />
                <p className="text-blue-300 font-semibold">Ngrx</p>
              </div>
              <div className="p-6rounded-sm  shadow-sm flex flex-col items-center">
                <img
                  src="../../public/assets/rxjs.png"
                  alt="Tailwind CSS"
                  className="w-30 h-16 mb-4"
                />
                <p className="text-blue-300 font-semibold">Rxjs</p>
              </div>

              <div className="p-6rounded-sm  shadow-sm flex flex-col items-center">
                <img
                  src="../../public/assets/scss.svg"
                  alt="Tailwind CSS"
                  className="w-30 h-16 mb-4"
                />
                <p className="text-blue-300 font-semibold">SCSS</p>
              </div>

               <div className="p-6rounded-sm  shadow-sm flex flex-col items-center">
                <img
                  src="../../public/assets/ts.png"
                  alt="Tailwind CSS"
                  className="w-30 h-16 mb-4"
                />
                <p className="text-blue-300 font-semibold">TypesScript</p>
              </div>
            </div>
          </div>

          {/* Add more tech stack items as needed */}
        </div>
      </div>
  )
}

export default TechStackPage
