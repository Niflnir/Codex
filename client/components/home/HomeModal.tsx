import { StaticImageData } from "next/image";
import Image from "next/image";
import { MouseEventHandler } from "react";

interface HomeModalProps {
  title: String;
  subTitle: String;
  bgPhoto: StaticImageData;
  clickHandler: MouseEventHandler;
}

export const HomeModal = (props: HomeModalProps) => {
  return (
    <div
      className="relative flex border border-sec rounded-3xl max-w-5xl max-h-128 overflow-auto cursor-pointer hover:opacity-80 hover:scale-105 transition delay-50 duration-200"
      onClick={props.clickHandler}
    >
      <div className="absolute top-10 left-10 text-white space-y-5 z-10">
        <div className="text-3xl">{props.title}</div>
        <div className="text-md font-sc px-0.5">{props.subTitle}</div>
      </div>
      <Image src={props.bgPhoto} />
    </div>
  );
};

export default HomeModal;
