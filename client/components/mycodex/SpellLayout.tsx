import { Dispatch, SetStateAction } from "react";
import Tag from "../creation/Tag";
import FavouriteIcon from "../svg/favouriteIcon";

interface SpellProps {
  id: string;
  title: string;
  tags: Array<string>;
  body: string;
  colour: string;
  favourite: boolean;
  favouriteCount: number;
  setPreview: Dispatch<SetStateAction<boolean>>;
  setId: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setTags: Dispatch<SetStateAction<Array<string>>>;
  setBody: Dispatch<SetStateAction<string>>;
  setFavouriteCount: Dispatch<SetStateAction<number>>;
}

const SpellLayout = (props: SpellProps) => {
  const clickHandler = () => {
    props.setPreview(true);
    props.setId(props.id);
    props.setTitle(props.title);
    props.setBody(props.body);
    props.setTags(props.tags);
    props.setFavouriteCount(props.favouriteCount);
  };

  return (
    <div
      onClick={clickHandler}
      className={`flex bg-pri relative items-center w-full px-2 py-1.5 text-white font-sc text-2xl border-y border-${props.colour
        } cursor-pointer ${props.colour == "sec" ? "hover:bg-sec" : "hover:bg-saf"
        } hover:text-black transition delay-50 duration-150 group`}
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
      <div className="flex absolute right-5 items-center space-x-2">
        <FavouriteIcon
          className="w-6 h-6"
          pathClassName={`${props.favourite
              ? props.colour === "sec"
                ? "fill-sec stroke-black stroke-[4px]"
                : "fill-saf stroke-black stroke-[4px]"
              : `fill-pri stroke-${props.colour} stroke-2`
            }`}
        />
        <div
          className={`font-mg text-md text-${props.colour} group-hover:text-pri group-hover:font-semibold font-normal`}
        >
          {props.favouriteCount}
        </div>
      </div>
    </div>
  );
};

export default SpellLayout;
