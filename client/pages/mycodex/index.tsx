import { NextPage } from "next";
import Header from "../../components/header";
import Sidebar from "../../components/Sidebar";
import { useState } from "react";
import MyCodexIcon from "../../components/svg/MyCodexIcon";
import Spell from "../../components/mycodex/spell";

const MyCodex: NextPage = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const [mySpells, setMySpells] = useState<Array<typeof Spell>>([]);
  const [favouriteSpells, setFavouriteSpells] = useState<Array<typeof Spell>>(
    []
  );
  const [tab, setTab] = useState<boolean>(false);
  return (
    <div className="flex-col-center pb-32 relative min-h-screen bg-center bg-cover bg-black font-mg min-w-[700px]">
      <Header
        icon={<MyCodexIcon className="w-7 h-7" pathClassName="fill-sec" />}
        title="My Codex"
      />
      <Sidebar />
      <div className="flex space-x-64 mt-24 text-3xl">
        <div
          className={`${tab ? "text-sec" : "text-gray"} cursor-pointer`}
          onClick={() => setTab(true)}
        >
          My Spells
        </div>
        <div
          className={`${tab ? "text-gray" : "text-saffron"} cursor-pointer`}
          onClick={() => setTab(false)}
        >
          Favourites
        </div>
      </div>
      <div
        className={`flex flex-col overflow-auto absolute bg-pri w-full h-2/3 top-1/6 ${tab ? "border-sec" : "border-saffron"
          } border-y`}
      ></div>
    </div>
  );
};

export default MyCodex;
