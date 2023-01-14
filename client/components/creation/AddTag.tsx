import {
  Dispatch,
  KeyboardEventHandler,
  SetStateAction,
  useState,
} from "react";
import AddTagIcon from "../svg/AddTagIcon";
import XIcon from "../svg/XIcon";

interface AddTagProps {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
}

const AddTag = (props: AddTagProps) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const inputHandler: KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === "Enter") {
      if (value.trim() !== "") props.setTags([...props.tags, value]);
      setValue("");
      setEdit(false);
    }
  };

  return (
    <>
      {edit ? (
        <div className="flex rounded-lg border border-sec bg-black px-2 w-28 font-sc overflow-hidden space-x-2">
          <input
            value={value}
            className="bg-black outline-none w-5/6"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={inputHandler}
          />
          <div
            className="group"
            onClick={() => {
              setEdit(false);
              setValue("");
            }}
          >
            <XIcon
              className="w-4 h-5 mt-1 cursor-pointer"
              pathClassName="group-hover:stroke-saffron"
            />
          </div>
        </div>
      ) : (
        <div
          className="flex border border-sec px-2 py-1 font-sc text-sm rounded-lg items-center space-x-2 cursor-pointer group hover:bg-sec transition delay-50 duration-200"
          onClick={() => setEdit(true)}
        >
          <AddTagIcon
            className="w-5 h-5"
            pathClassName="group-hover:fill-black"
          />
          <div className="group-hover:text-black text-sec pt-0.5">ADD TAG</div>{" "}
        </div>
      )}
    </>
  );
};

export default AddTag;
