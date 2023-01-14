import { NextPage } from "next";
import { useState } from "react";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Header from "../../components/header";
import Sidebar from "../../components/Sidebar";
import CreationIcon from "../../components/svg/CreationIcon";
import SyntaxHighlighter from "react-syntax-highlighter";
import AddTag from "../../components/creation/AddTag";
import Tag from "../../components/creation/Tag";

const Creation: NextPage = () => {
  const [body, setBody] = useState<string>("");
  const [preview, setPreview] = useState<boolean>(false);
  const [tags, setTags] = useState<Array<string>>([]);

  return (
    <div className="flex-col-center pb-32 relative min-h-screen bg-center bg-cover bg-black font-mg min-w-[700px]">
      <Header
        icon={<CreationIcon className="w-7 h-7" pathClassName="fill-sec" />}
        title="CREATION"
      />
      <Sidebar />
      <div className="absolute flex flex-col top-1/8 w-full pl-1/13 space-y-5 z-10">
        <div className="flex space-x-5 text-white">
          <div className="text-2xl">Title :</div>
          <input className="bg-pri w-10/12 px-2 font-sc rounded-sm" />
        </div>
        <div className="flex space-x-3 text-white text-lg">
          <div className="text-2xl mr-2.5">Tags :</div>
          {tags.map((tag) => (
            <Tag tag={tag} tags={tags} setTags={setTags} />
          ))}
          <AddTag tags={tags} setTags={setTags} />
        </div>
        <div className="flex space-x-5 text-white max-h-144">
          <div className="text-2xl">Body :</div>
          <textarea
            value={body}
            rows={23}
            className="bg-pri px-3 py-2 w-10/12 font-sc resize-none rounded-sm text-lg"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="flex w-10/12 justify-center pt-10 pl-28">
          <button
            className="py-1 px-2 border border-sec text-sec text-3xl rounded-md hover:text-black hover:bg-sec transition delay-50"
            onClick={() => setPreview(true)}
          >
            Preview
          </button>
        </div>
      </div>
      <div
        className={`w-full h-full bg-black ${preview ? "opacity-90" : "opacity-0"
          } absolute inset-0 ${preview ? "z-30" : "z-0"} transition`}
        onClick={() => setPreview(false)}
      ></div>
      <div
        className={`absolute flex flex-col top-1/10 left-1/8 w-9/12 h-3/4 bg-pri ${preview ? "opacity-100" : "opacity-0"
          } border border-sec rounded-xl ${preview ? "z-30" : "invisible"
          } px-5 py-3 transition space-y-5`}
      >
        <div className="flex text-white text-2xl font-sc">
          Best practices for React Components
        </div>
        <div className="flex space-x-3 text-white text-lg">
          {tags.map((tag) => (
            <Tag tag={tag} tags={tags} setTags={setTags} />
          ))}
        </div>
        <SyntaxHighlighter
          className="rounded-md"
          language="javascript"
          style={nord}
        >
          {body}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default Creation;
