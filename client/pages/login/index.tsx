import { NextPage } from "next";
import Link from "next/link";
import UsernameAndPasswordLogin from "../../components/login/UsernameAndPasswordLogin";

const Login: NextPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen font-mg min-w-[550px] bg-black">
      <div className="flex flex-col px-32 pt-12 pb-4 bg-pri border border-sec shadow-lg rounded-2xl w-2/5 min-w-[500px]">
        <div className="flex items-center justify-center mb-12">
          <div className="text-4xl text-sec">CODEX</div>
        </div>
        <div className="flex items-center justify-center mb-20">
          <div className="text-2xl text-sec">the world of spells</div>
        </div>
        <UsernameAndPasswordLogin />
        <div className="flex flex-col px-6 items-center">
          <div className="pt-20 text-gray-400 text-base space-x-1">
            <Link href="/signup">
              <a
                href=""
                className="hover:underline hover:text-sec outline-none"
              >
                Create Account
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;