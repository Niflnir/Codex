import { Dispatch, SetStateAction } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import useRequest from "../../hooks/use-request";
import HeartIcon from "../svg/HeartIcon";
import Tag from "./Tag";

interface PreviewProps {
  preview: boolean;
  title: string;
  tags: string[];
  body: string;
  setPreview: Dispatch<SetStateAction<boolean>>;
  setTags: Dispatch<SetStateAction<string[]>>;
  creation: boolean;
}

const Preview = (props: PreviewProps) => {
  const { doRequest, errors } = useRequest({
    url: "/api/creation/spell",
    method: "post",
    body: {
      title: props.title,
      tags: props.tags,
      body: props.body,
      favouriteCount: 0,
    },
    onSuccess: () => window.location.reload(),
  });
  return (
    <>
      <div className="flex justify-center text-lg text-red-400 font-sc">
        {errors}
      </div>
      <div
        className={`w-full h-full bg-black ${props.preview ? "opacity-95" : "opacity-0"
          } absolute inset-0 ${props.preview ? "z-30" : "-z-10"} transition`}
        onClick={() => props.setPreview(false)}
      ></div>
      <div
        className={`absolute flex flex-col top-1/10 left-1/8 w-9/12 h-3/4 bg-pri ${props.preview ? "opacity-100" : "opacity-0"
          } border border-sec rounded-xl ${props.preview ? "z-30" : "invisible"
          } px-5 py-3 transition space-y-5`}
      >
        <div className="flex text-white text-2xl font-sc">
          {props.title}
          <div className="absolute right-5 flex items-center space-x-3">
            <HeartIcon className="w-6 h-6" pathClassName={`stroke-sec`} />
            <div className={`font-mg text-3xl text-sec`}>0</div>
          </div>
        </div>
        <div className="flex space-x-3 text-white text-lg">
          {props.tags.map((tag) => (
            <Tag
              tag={tag}
              tags={props.tags}
              setTags={props.setTags}
              colour="sec"
              enableDelete={false}
              fontSize="md"
            />
          ))}
        </div>
        <SyntaxHighlighter
          className="rounded-md"
          language="javascript"
          style={nord}
        >
          {props.body}
        </SyntaxHighlighter>
      </div>
      {props.creation && (
        <button
          className={`absolute top-9/10 mr-10 py-1 px-2 border border-sec text-sec text-3xl rounded-md hover:text-black hover:bg-sec transition delay-50 ${props.preview ? "opacity-100" : "opacity-0"
            } ${props.preview ? "z-30" : "invisible"}`}
          onClick={doRequest}
        >
          Create
        </button>
      )}
    </>
  );
};

export default Preview;
