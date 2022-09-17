import Logo from "./svg/logo"

const LoadingScreen = () => {
  return (
      <div className="fixed w-full h-full bg-gray-200 bg-opacity-75 duration-500 flex flex-col">
        <div className="m-auto">
          <Logo className="w-64 h-64" />
        </div>
      </div>
  )
}

export default LoadingScreen;
