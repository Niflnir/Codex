import SidebarIcon from "./SidebarIcon";
import MyCodexIcon from "./svg/MyCodexIcon";
import CreationIcon from "./svg/CreationIcon";
import ExploreIcon from "./svg/ExploreIcon";
import HomeIcon from "./svg/homeIcon";
import { useState } from "react";
import SidebarArrow from "./svg/SidebarArrow";
import SettingsIcon from "./svg/SettingsIcon";

export const Sidebar = () => {
  const [show, setShow] = useState<boolean>(false);
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
          url="/home"
        />
        <SidebarIcon
          title="Creation"
          icon={
            <CreationIcon
              className="w-7 h-7"
              pathClassName="group-hover:fill-sec"
            />
          }
          url="/creation"
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
          url="/mycodex"
        />
        <SidebarIcon
          title="Explore"
          icon={
            <ExploreIcon
              className="w-7 h-7"
              pathClassName="group-hover:fill-sec"
            />
          }
          url="/explore"
        />
        <div className="absolute bottom-2">
          <SidebarIcon
            title="Settings"
            icon={
              <SettingsIcon
                className="w-8 h-8"
                pathClassName="group-hover:fill-sec"
              />
            }
            url="/settings"
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
