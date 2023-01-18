import { useSelector } from "react-redux";
import { selectAlertMessageState } from "../redux/alertMessageSlice";
import { selectAlertState } from "../redux/alertSlice";

const Alert = () => {
  const alert = useSelector(selectAlertState);
  const alertMessage = useSelector(selectAlertMessageState);

  return (
    <div
      className={`fixed flex w-full h-full bg-transparent ${alert ? "opacity-100" : "opacity-0"
        } transition duration-400 ${alert ? "z-40" : "z-0"}`}
    >
      <div className="m-auto text-xl text-red-400">{alertMessage}</div>
    </div>
  );
};

export default Alert;
