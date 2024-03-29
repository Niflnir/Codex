import { NextPage, NextPageContext } from "next";
import { useState } from "react";
import Header from "../../components/header";
import Sidebar from "../../components/Sidebar";
import CreationIcon from "../../components/svg/CreationIcon";
import AddTag from "../../components/creation/AddTag";
import Tag from "../../components/creation/Tag";
import Preview from "../../components/creation/Preview";
import { useDispatch } from "react-redux";
import { setAlertState } from "../../redux/alertSlice";
import Alert from "../../components/Alert";
import { setAlertMessageState } from "../../redux/alertMessageSlice";

const Creation: NextPage = () => {
  const [body, setBody] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [preview, setPreview] = useState<boolean>(false);
  const [tags, setTags] = useState<Array<string>>([]);
  const dispatch = useDispatch();

  const previewHandler = () => {
    if (body.trim() !== "" && title.trim() !== "") setPreview(true);
    else {
      dispatch(setAlertMessageState("Body must be filled"));
      dispatch(setAlertState(true));
      setTimeout(() => dispatch(setAlertState(false)), 1000);
    }
  };
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
          <input
            maxLength={60}
            className="bg-pri w-10/12 px-2 font-sc rounded-sm"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex space-x-3 text-white text-lg">
          <div className="text-2xl mr-2.5">Tags :</div>
          {tags.map((tag) => (
            <Tag
              key={Math.random().toString(16).slice(2)}
              tag={tag}
              tags={tags}
              setTags={setTags}
              enableDelete={true}
              colour="sec"
              fontSize="md"
            />
          ))}
          {tags.length < 6 && <AddTag tags={tags} setTags={setTags} />}
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
            onClick={previewHandler}
          >
            Preview
          </button>
        </div>
      </div>
      <Preview
        id={""}
        key={Math.random().toString(16).slice(2)}
        title={title}
        tags={tags}
        setTags={setTags}
        preview={preview}
        setPreview={setPreview}
        body={body}
        creation={true}
        favouritesList={[]}
        favouriteCount={0}
        setFavouritesList={setTags}
      />
      <Alert />
    </div>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  // Check if cookie is set, if not set, redirect to login screen
  if (!ctx.req?.headers.cookie) {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
  return {
    props: {},
  };
};

export default Creation;
