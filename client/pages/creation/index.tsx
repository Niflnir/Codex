import { NextPage } from "next";
import Header from "../../components/header";
import Sidebar from "../../components/Sidebar";
import CreationIcon from "../../components/svg/CreationIcon";
import SyntaxHighlighter from "react-syntax-highlighter";
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { useState } from "react";
import AddTag from "../../components/creation/AddTag";

const Creation: NextPage = () => {
  const [body, setBody] = useState<string>("");
  const [preview, setPreview] = useState<boolean>(false);
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
        <div className="flex space-x-5 text-white text-lg">
          <div className="text-2xl">Tags :</div>
          <AddTag />
        </div>
        <div className="flex space-x-5 text-white">
          <div className="text-2xl">Body :</div>
          <textarea
            value={body}
            rows={22}
            className="bg-pri p-2 w-10/12 font-sc resize-none rounded-sm"
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="flex w-10/12 justify-center pt-14 pl-28">
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
          } absolute inset-0 ${preview ? "z-30" : "z-0"
          } transition delay-50 duration-200`}
        onClick={() => setPreview(false)}
      ></div>
      <div
        className={`absolute flex flex-col top-1/8 left-1/8 w-9/12 h-2/3 bg-pri ${preview ? "opacity-100" : "opacity-0"
          } border border-sec rounded-xl ${preview ? "z-30" : "z-0"
          } px-5 py-3 transition delay-50 duration-200 space-y-5`}
      >
        <div className="flex text-white text-2xl font-sc">
          Best practices for React Components
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
