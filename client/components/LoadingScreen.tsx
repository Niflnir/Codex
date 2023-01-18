import { selectLoadingState } from "../redux/loadingSlice";
import { useSelector } from "react-redux";
import { NextComponentType } from "next";

const LoadingScreen: NextComponentType = () => {
  const loading = useSelector(selectLoadingState);
  return (
    <>
      {loading && (
        <div className="fixed w-full h-full bg-gray-200 bg-opacity-75 duration-500 flex flex-col">
          <div className="m-auto text-sec">hello</div>
        </div>
      )}
    </>
  );
};

export default LoadingScreen;
