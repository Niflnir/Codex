import axios from "axios";
import { useState, useEffect } from "react";
import changeRequest from "../../utils/changeRequest";
import { setLoadingState } from "../../redux/loadingSlice";
import { useDispatch } from "react-redux";
import SaveIcon from "../svg/saveIcon";
import EditIcon from "../svg/editIcon";

export default () => {
  const [description, setDescription] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingState(true));
    getProfile();
    setTimeout(() => dispatch(setLoadingState(false)), 1500);
  }, []);

  const getProfile = async () => {
    const res = await axios.get("/api/myaccount");
    console.log(res.data);
  };

  const editHandler = async () => {
    if (edit) {
      dispatch(setLoadingState(true));
      await changeRequest("post", "/api/myaccount", {
        description: description,
      });
      setTimeout(() => dispatch(setLoadingState(false)), 1500);
    }
    setEdit(!edit);
  };

  return (
    <div className="flex flex-col items-center w-full space-y-5">
      <div className="flex flex-row space-x-2 mt-16">
        <div className="text-2xl text-saffron">About Me</div>
        <div className="cursor-pointer mt-0.5" onClick={editHandler}>
          {edit ? (
            <SaveIcon
              className="w-7 h-7 p-0.5 group hover:scale-150 rounded-md duration-150"
              pathClassName="fill-saffron"
            />
          ) : (
            <EditIcon
              className="w-7 h-7 p-0.5 group hover:scale-150 rounded-md duration-150"
              pathClassName="fill-saffron"
            />
          )}
        </div>
      </div>
      <div className="h-1/2 w-2/3">
        {edit ? (
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-saffron rounded-xl h-full w-full outline-none"
            rows={1}
          />
        ) : (
          <div className="flex p-2 border border-saffron rounded-xl h-full outline-none">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};
