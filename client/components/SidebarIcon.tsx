import Router from "next/router";
import { ReactElement } from "react";

interface SidebarIconProps {
  icon: ReactElement;
  url: string;
  title: string;
}

export const SidebarIcon = (props: SidebarIconProps) => {
  return (
    <div
      title={props.title}
      className="group cursor-pointer p-1 rounded-md hover:scale-125 hover:shadow-xl transition delay-50"
      onClick={() => Router.push({ pathname: props.url })}
    >
      {props.icon}
    </div>
  );
};

export default SidebarIcon;
