import { useState } from "react";
import Router from "next/router";
import useRequest from "../../hooks/use-request";
import Link from "next/link";

interface LoginModalInterface {
  buttonName: string;
  url: string;
  redirectUrl: string;
}

const LoginModal = (props: LoginModalInterface) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { doRequest, errors } = useRequest({
    url: props.url,
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push(props.redirectUrl),
  });

  return (
    <>
      <div className="space-y-9 mb-2">
        <div className="flex justify-center text-lg text-red-400 font-sc">
          {errors}
        </div>
        <div className="flex flex-col relative items-center justify-start space-y-1">
          <div className="text-2xl text-sec self-start ml-16">Email</div>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-1.5 py-0.5 w-3/4 font-sc text-sec bg-pri border-sec border rounded-md outline-none focus:border-saf"
            autoComplete="off"
            type="text"
          />
        </div>
        <div className="flex flex-col relative items-center justify-start space-y-1">
          <div className="text-2xl text-sec self-start ml-16">Password</div>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-1.5 py-0.5 w-3/4 font-sc text-sec bg-pri border-sec border rounded-md outline-none focus:border-saf"
            autoComplete="off"
            type="text"
          />
        </div>
      </div>
      <div className="self-end text-sec text-md mr-16">
        <Link href="/forgot">
          <a href="" className="hover:underline hover:text-saf outline-none">
            Forgot Password?
          </a>
        </Link>
      </div>
      <div className="flex justify-center mt-10">
        <button
          className="px-2 py-1 text-2xl text-sec border border-sec rounded-md hover:text-pri hover:bg-sec transition delay-50"
          onClick={() => {
            doRequest();
          }}
        >
          {props.buttonName}
        </button>
      </div>
    </>
  );
};

export default LoginModal;
