import { StaticImageData } from "next/image";
import { ReactElement } from "react";

interface HeaderProps {
  icon: ReactElement;
  title: String;
}

export const Header = (props: HeaderProps) => {
  return (
    <div className="fixed flex px-4 py-1 mb-16 w-full text-3xl bg-pri text-sec items-center space-x-3 z-10">
      <>{props.icon}</>
      <div className="pt-1">{props.title}</div>
    </div>
  );
};

export default Header;
