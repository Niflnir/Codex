import type { NextPage } from "next";
import CreationPhoto from "../../public/images/creationPhoto.jpg";
import CodexPhoto from "../../public/images/sunset.jpg";
import ExplorePhoto from "../../public/images/exploree.jpg";
import HomeIcon from "../../components/svg/homeIcon";
import HomeModal from "../../components/home/HomeModal";
import Router from "next/router";
import Header from "../../components/header";
import Sidebar from "../../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="flex-col-center pb-32 relative min-h-screen bg-black font-mg min-w-[700px]">
      <Header
        icon={<HomeIcon className="w-7 h-7" pathClassName="fill-sec" />}
        title="HOME"
      />
      <Sidebar />
      <div className="flex fixed opacity-30 w-full h-screen bg-center bg-cover bg-gh"></div>
      <div className="text-3xl text-saffron mt-28 mb-16">
        What Would You Like To Do?
      </div>
      <div className="space-y-32">
        <HomeModal
          title="Creation"
          subTitle="Create a Code Spell"
          bgPhoto={CreationPhoto}
          clickHandler={() => Router.push("/creation")}
        />
        <HomeModal
          title="My Codex"
          subTitle="Your Code Spells"
          bgPhoto={CodexPhoto}
          clickHandler={() => Router.push("/mycodex")}
        />
        <HomeModal
          title="Explore"
          subTitle="World of Code Spells"
          bgPhoto={ExplorePhoto}
          clickHandler={() => Router.push("/explore")}
        />
      </div>
    </div>
  );
};

// Home.getInitialProps = async (ctx: NextPageContext) => {
//   // Check if cookie is set, if not set, redirect to login screen
//   if (!ctx.req?.headers.cookie) {
//     return {
//       redirect: {
//         destination: "/login",
//       },
//     };
//   }
//   const client = buildClient(ctx);
//   const { data } = await client.get("/api/users/currentuser");
//   return data;
// };

export default Home;
