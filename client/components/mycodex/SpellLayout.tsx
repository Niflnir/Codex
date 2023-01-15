import { Dispatch, SetStateAction } from "react";
import Tag from "../creation/Tag";
import HeartIcon from "../svg/HeartIcon";

interface SpellProps {
  title: string;
  tags: Array<string>;
  body: string;
  colour: string;
  favouriteCount: number;
  setPreview: Dispatch<SetStateAction<boolean>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setTags: Dispatch<SetStateAction<Array<string>>>;
  setBody: Dispatch<SetStateAction<string>>;
  setFavouriteCount: Dispatch<SetStateAction<number>>;
}

const SpellLayout = (props: SpellProps) => {
  const clickHandler = () => {
    props.setPreview(true);
    props.setTitle(props.title);
    props.setBody(props.body);
    props.setTags(props.tags);
    props.setFavouriteCount(props.favouriteCount);
  };
  return (
    <div
      onClick={clickHandler}
      className={`flex relative items-center w-full px-2 py-1.5 text-white font-sc text-2xl border-y border-${props.colour} cursor-pointer hover:bg-${props.colour} hover:text-black transition delay-50 duration-150`}
    >
      <div className="text-xl">{props.title}</div>
      <div className="absolute left-1/3 flex space-x-2">
        {props.tags.map((tag) => (
          <Tag
            key={Math.random().toString(16).slice(2)}
            tag={tag}
            tags={[]}
            setTags={() => { }}
            enableDelete={false}
            colour={props.colour}
            fontSize="base"
          />
        ))}
      </div>
      <div className="absolute right-3 flex items-center space-x-3">
        <HeartIcon
          className="w-5 h-5"
          pathClassName={`stroke-${props.colour}`}
        />
        <div className={`font-mg text-md text-${props.colour}`}>
          {props.favouriteCount}
        </div>
      </div>
    </div>
  );
};

export default SpellLayout;
