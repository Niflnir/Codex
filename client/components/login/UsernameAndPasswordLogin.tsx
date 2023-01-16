import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";

export default () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { doRequest, errors } = useRequest({
    url: "/api/auth/login",
    method: "post",
    body: {
      username,
      password,
    },
    onSuccess: () => Router.push("/home"),
  });

  const loginHandler = () => {
    doRequest();
  };

  return (
    <>
      <div className="space-y-9 mb-16">
        <div className="flex justify-center text-lg text-red-400 font-sc">
          {errors}
        </div>
        <div className="flex relative items-center justify-start space-x-3">
          <div className="text-xl text-sec">username :</div>
          <input
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="absolute px-1.5 py-0.5 left-1/4 w-2/3 font-sc text-sec bg-pri border-sec border rounded-md"
            autoComplete="off"
            type="text"
          />
        </div>
        <div className="flex relative items-center justify-start space-x-3">
          <div className="text-xl text-sec">Password :</div>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="absolute px-1.5 py-0.5 left-1/4 w-2/3 font-sc text-sec bg-pri border-sec border rounded-md"
            autoComplete="off"
            type="text"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="px-2 py-1 text-xl text-sec border border-sec rounded-md hover:text-pri hover:bg-sec transition delay-50"
          onClick={() => {
            loginHandler();
          }}
        >
          login
        </button>
      </div>
    </>
  );
};
