import { NextPage, NextPageContext } from "next";
import Header from "../../components/header";
import Sidebar from "../../components/Sidebar";
import { useEffect, useState } from "react";
import MyCodexIcon from "../../components/svg/MyCodexIcon";
import useRequest from "../../hooks/use-request";
import { Spell } from "../../utils/interfaces";
import SpellLayout from "../../components/mycodex/SpellLayout";
import Preview from "../../components/creation/Preview";
import axios from "axios";

const MyCodex: NextPage = () => {
  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<Array<string>>([]);
  const [body, setBody] = useState<string>("");
  const [favouriteCount, setFavouriteCount] = useState<number>(0);
  const [preview, setPreview] = useState<boolean>(false);
  const [mySpells, setMySpells] = useState<Array<Spell>>([]);
  const [favouritesList, setFavouritesList] = useState<Array<string>>([]);
  const [favouritesSpells, setFavouritesSpells] = useState<Array<Spell>>([]);
  const [tab, setTab] = useState<boolean>(true);

  const getSpells = useRequest({
    url: "/api/mycodex/spells",
    method: "get",
    onSuccess: (data) => {
      setMySpells(data);
    },
  });

  const getFavouritesList = useRequest({
    url: "/api/mycodex/favourites",
    method: "get",
    onSuccess: (data) => {
      setFavouritesList(data.favouritesList);
      setFavouritesSpells(data.favouriteSpells);
    },
  });

  // const getCsvFile = async () => {
  //   try {
  //     const response = await axios.get("/api/mycode/csv", {
  //       responseType: "blob", // important
  //     });
  //     const url = window.URL.createObjectURL(new Blob([response.data]));
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.setAttribute("download", "report.csv");
  //     document.body.appendChild(link);
  //     link.click();
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };
  //
  useEffect(() => {
    // Get all of the user's spells
    axios.get("/api/mycodex/favourites");
    getSpells.doRequest();
    getFavouritesList.doRequest();
  }, [preview]);

  return (
    <div className="flex-col-center pb-32 relative min-h-screen bg-center bg-cover bg-black font-mg min-w-[700px]">
      <Header
        icon={<MyCodexIcon className="w-7 h-7" pathClassName="fill-sec" />}
        title="My Codex"
      />
      <Sidebar />
      <div className="flex space-x-64 mt-24 text-3xl">
        {/* <button onClick={() => getCsvFile()}>csv</button> */}
        <div
          className={`${tab ? "text-sec" : "text-gray"} cursor-pointer`}
          onClick={() => setTab(true)}
        >
          My Spells
        </div>
        <div
          className={`${tab ? "text-gray" : "text-saf"} cursor-pointer`}
          onClick={() => setTab(false)}
        >
          Favourites
        </div>
      </div>
      <div
        className={`flex flex-col overflow-auto absolute bg-pri w-full h-2/3 top-1/6 ${tab ? "border-sec" : "border-saf"
          } border-y`}
      >
        {tab
          ? mySpells.map((spell) => (
            <SpellLayout
              key={Math.random().toString(16).slice(2)}
              id={spell.id}
              title={spell.title}
              tags={spell.tags}
              body={spell.body}
              favourite={favouritesList.includes(spell.id)}
              favouriteCount={spell.favouriteCount}
              colour="sec"
              setPreview={setPreview}
              setId={setId}
              setTitle={setTitle}
              setTags={setTags}
              setBody={setBody}
              setFavouriteCount={setFavouriteCount}
            />
          ))
          : favouritesSpells.map((spell) => (
            <SpellLayout
              key={Math.random().toString(16).slice(2)}
              id={spell.id}
              title={spell.title}
              tags={spell.tags}
              body={spell.body}
              favourite={favouritesList.includes(spell.id)}
              favouriteCount={spell.favouriteCount}
              colour="saf"
              setPreview={setPreview}
              setTitle={setTitle}
              setId={setId}
              setTags={setTags}
              setBody={setBody}
              setFavouriteCount={setFavouriteCount}
            />
          ))}
      </div>
      <Preview
        id={id}
        title={title}
        tags={tags}
        body={body}
        setTags={() => { }}
        preview={preview}
        setPreview={setPreview}
        creation={false}
        favouritesList={favouritesList}
        setFavouritesList={setFavouritesList}
        favouriteCount={favouriteCount}
      />
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

export default MyCodex;
