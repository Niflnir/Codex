import SidebarIcon from "./SidebarIcon";
import MyCodexIcon from "./svg/MyCodexIcon";
import CreationIcon from "./svg/CreationIcon";
import ExploreIcon from "./svg/ExploreIcon";
import HomeIcon from "./svg/homeIcon";
import { useState } from "react";
import SidebarArrow from "./svg/SidebarArrow";
import LogoutIcon from "./svg/LogoutIcon";
import Router from "next/router";
import useRequest from "../hooks/use-request";

export const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);

  const logoutRequest = useRequest({
    url: "/api/auth/logout",
    method: "get",
    onSuccess: () => Router.push("/login"),
  });

  return (
    <>
      <div
        className={`fixed flex flex-col top-0 ${show ? "translate-x-14" : "translate-x-0"
          } -left-14 w-14 h-screen bg-black z-20 justify-center items-center shadow-xl space-y-5 border-r border-sec transition`}
      >
        <SidebarIcon
          title="Home"
          icon={
            <HomeIcon
              className="w-7 h-7"
              pathClassName="group-hover:fill-sec"
            />
          }
          clickHandler={() => Router.push("/home")}
        />
        <SidebarIcon
          title="Creation"
          icon={
            <CreationIcon
              className="w-7 h-7"
              pathClassName="group-hover:fill-sec"
            />
          }
          clickHandler={() => Router.push("/creation")}
        />
        <div className="pb-10">
          <div
            className={`absolute ${show ? "rotate-180 scale-110" : "translate-x-0 scale-90"
              } left-9 cursor-pointer transition`}
            onClick={() => setShow(!show)}
          >
            <SidebarArrow className="w-10 h-10" pathClassName="" />
          </div>
        </div>
        <SidebarIcon
          title="MyCodex"
          icon={
            <MyCodexIcon
              className="w-7 h-7"
              pathClassName="group-hover:fill-sec"
            />
          }
          clickHandler={() => Router.push("/mycodex")}
        />
        <SidebarIcon
          title="Explore"
          icon={
            <ExploreIcon
              className="w-7 h-7"
              pathClassName="group-hover:fill-sec"
            />
          }
          clickHandler={() => Router.push("/explore")}
        />
        <div className="absolute bottom-2">
          <SidebarIcon
            title="Logout"
            icon={
              <LogoutIcon
                className="w-8 h-8 group-hover:fill-sec"
                pathClassName=""
              />
            }
            clickHandler={logoutRequest.doRequest}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
