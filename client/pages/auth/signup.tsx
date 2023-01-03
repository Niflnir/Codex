import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";
import { useState } from "react";
import useRequest from "../../hooks/use-request";
import Logo from "../../public/images/Logo.png";

const SignUp: NextPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { doRequest, errors } = useRequest({
    url: "/api/users/signup",
    method: "post",
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push("/auth/login"),
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    doRequest();
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-split-bg font-pd min-w-[550px]">
      <div className="pt-12 pb-4 flex flex-col m-6 space-y-0 bg-white shadow-lg rounded-2xl w-2/5 min-w-[500px]">
        <div className="flex px-6 pb-5 items-center justify-center space-x-3">
          <Image src={Logo} />
          <div className="h2 ml-2 text-3xl text-blue">CODEX</div>
        </div>
        <div className="flex flex-col px-6 py-12 text-center items-center">
          <div className="text-saffron text-xl">
            Inscribe your magical coding journey
          </div>
        </div>
        <div className="flex flex-col px-6 items-center">
          <div className="text-red-400">{errors}</div>
          <form onSubmit={onSubmit} className="flex flex-col items-center">
            <div className="relative mt-12">
              <input
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-primary peer"
                type="text"
              />
              <label className="top-[-17px] text-sm left-0 text-gray-400 opacity-90 font-thin absolute pointer-events-none">
                Email
              </label>
            </div>
            <div className="relative mt-12">
              <input
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-primary peer"
                type="password"
              />
              <label className="top-[-17px] text-sm left-0 text-gray-400 opacity-90 font-thin absolute pointer-events-none">
                Password
              </label>
            </div>
            <button className="mt-16 rounded-3xl bg-white text-blue outline outline-1 outline-blue hover:bg-blue hover:text-white px-5 py-2 text-lg transition delay-50">
              Sign up
            </button>
          </form>
          <div className="pt-20 text-gray-400 text-base space-x-1">
            <span>Existing Codex?</span>
            <Link href="/auth/login">
              <a
                href=""
                className="hover:underline hover:text-blue outline-none"
              >
                Log In
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
