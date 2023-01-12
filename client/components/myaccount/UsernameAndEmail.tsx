import axios from "axios";
import { useState, useEffect } from "react";
import EditIcon from "../../components/svg/editIcon";
import SaveIcon from "../../components/svg/saveIcon";
import changeRequest from "../../utils/changeRequest";
import { setLoadingState } from "../../redux/loadingSlice";
import { useDispatch } from "react-redux";

export default () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);

  const dispatch = useDispatch();

  useEffect(() => {
    getEmail();
    dispatch(setLoadingState(true));
    setTimeout(() => dispatch(setLoadingState(false)), 1500);
  }, []);

  const getEmail = async () => {
    try {
      const res = await axios.get("/api/users/currentuser");
      console.log(res.data);
      setEmail(res.data.currentUser.email);
      getUsername(res.data.currentUser.email);
    } catch (err) {
      console.log(err);
    }
  };

  const getUsername = async (email: String) => {
    try {
      const res = await axios.get(`/api/users/username/${email}`);
      setUsername(res.data.username);
    } catch (err) {
      console.log(err);
    }
  };

  const editHandler = async () => {
    if (edit) {
      dispatch(setLoadingState(true));
      await changeRequest("post", "/api/users/username", {
        email: email,
        username: username,
      });
      setTimeout(() => dispatch(setLoadingState(false)), 1500);
    }
    setEdit(!edit);
  };

  return (
    <div className="flex flex-col mr-6">
      <div className="flex flex-row mx-20 mt-20 mb-2 text-xl text-saffron tracking-wider space-x-2">
        <div>Username</div>
        <div className="cursor-pointer mt-0.5" onClick={editHandler}>
          {edit ? (
            <SaveIcon
              className="icon-base group w-6 h-6"
              pathClassName="fill-saffron"
            />
          ) : (
            <EditIcon
              className="icon-base group w-6 h-6"
              pathClassName="fill-saffron"
            />
          )}
        </div>
      </div>
      <div className="mx-20">
        {edit ? (
          <textarea
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="outline-gray-300 rounded-md outline outline-1 focus:outline-saffron w-full p-2 resize-none"
            rows={1}
          />
        ) : (
          username
        )}
      </div>
      <div className="mx-20 mt-24 mb-2 text-xl text-saffron tracking-wider">
        Email
      </div>
      <div className="mx-20">{email}</div>
    </div>
  );
};
