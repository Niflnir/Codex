import { Dispatch, MouseEventHandler, SetStateAction } from "react";
import XIcon from "../../components/svg/XIcon";

interface TagProps {
  tag: string;
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

const Tag = (props: TagProps) => {
  const deleteHandler: MouseEventHandler = () => {
    const filteredTags = props.tags.filter((tag) => tag != props.tag);
    props.setTags(filteredTags);
  };
  return (
    <div
      className="flex bg-black border border-sec rounded-lg px-2 font-sc text-sec text-md space-x-1 items-center uppercase"
      key={props.tag}
    >
      <div>{props.tag}</div>
      <div className="group" onClick={deleteHandler}>
        <XIcon
          className="w-4 h-4 cursor-pointer"
          pathClassName="group-hover:stroke-saffron"
        />
      </div>
    </div>
  );
};

export default Tag;
