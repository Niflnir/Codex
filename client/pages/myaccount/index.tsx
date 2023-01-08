import { NextPage, NextPageContext } from "next";
import Header from "../../components/header";
import LoadingScreen from "../../components/loadingScreen";
import AboutMe from "../../components/myaccount/AboutMe";
import ProfilePicture from "../../components/myaccount/ProfilePicture";
import UsernameAndEmail from "../../components/myaccount/UsernameAndEmail";

const MyAccount: NextPage = () => {
  return (
    <div className="flex flex-col relative min-h-screen bg-blue font-pd items-center min-w-[1300px]">
      <Header screen="myaccount" />
      <div className="flex flex-grow min-w-full items-center justify-center h-full">
        <div className="bg-white flex flex-col rounded-xl divide-y divide-saffron w-7/12">
          <div className="p-2 flex flex-row mt-2 mb-1 justify-center">
            <div className="text-md md:text-xl text-saffron">My Account</div>
          </div>
          <div className="relative flex flex-row">
            <UsernameAndEmail />
            <ProfilePicture />
            <AboutMe />
          </div>
        </div>
      </div>
      <LoadingScreen />
    </div>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  // Check if cookie is set, if not set, redirect to login screen
  if (!ctx.req?.headers.cookie) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }
  return {
    props: {},
  };
};

export default MyAccount;
