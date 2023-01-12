import SidebarIcon from "./SidebarIcon";
import MyCodexIcon from "./svg/MyCodexIcon";
import CreationIcon from "./svg/CreationIcon";
import ExploreIcon from "./svg/ExploreIcon";
import HomeIcon from "./svg/homeIcon";

export const Sidebar = () => {
  return (
    <div className="fixed flex flex-col top-0 left-0 w-10 h-screen bg-black z-20 justify-center items-center shadow-xl space-y-3">
      <SidebarIcon
        icon={
          <HomeIcon className="w-5 h-5" pathClassName="group-hover:fill-sec" />
        }
        url="/home"
      />
      <SidebarIcon
        icon={
          <CreationIcon
            className="w-5 h-5"
            pathClassName="group-hover:fill-sec"
          />
        }
        url="/creation"
      />
      <SidebarIcon
        icon={
          <MyCodexIcon
            className="w-5 h-5"
            pathClassName="group-hover:fill-sec"
          />
        }
        url="/mycodex"
      />
      <SidebarIcon
        icon={
          <ExploreIcon
            className="w-5 h-5"
            pathClassName="group-hover:fill-sec"
          />
        }
        url="/explore"
      />
    </div>
  );
};

export default Sidebar;
