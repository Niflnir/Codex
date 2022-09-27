import axios from "axios";
import { NextPage, NextPageContext } from "next";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import LoadingScreen from "../../components/loadingScreen";
import Spell from "../../components/spell";
import changeRequest from "../../utils/changeRequest";
import { SpellTip } from "../../utils/interfaces";

const Codexplore: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [spells, setSpells] = useState<Array<SpellTip>>([]);
  const [isShown, setIsShown] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [imagePaths, setImagePaths] = useState<Array<string>>([]);

  const [favourite, setFavourite] = useState<boolean>(false);

  useEffect(() => {
    getSpells();
    setTimeout(() => setLoading(false), 1500);
  }, [])

  const getSpells = async() => {
    const response = await axios.get("/api/spells/all");
    setSpells(response.data);
  }

  const showSpellHandler = async (spell: SpellTip) => {
    const response = await axios.get(`api/favourites/${spell.id}`);
    setTitle(spell.title);
    setBody(spell.body);
    spell.imagePaths && setImagePaths(spell.imagePaths);
    setId(spell.id);
    setFavourite(!!response.data.length);
    setIsShown(true);
  }

  return (
    <div className="flex flex-col relative min-h-screen bg-blue font-pd items-center min-w-[1300px]">
      <Header screen="codexplore"/>
      <div className="flex flex-grow min-w-full items-center justify-center h-full">
        <div className="bg-white flex flex-col rounded-xl divide-y divide-gray-300 w-3/4">
          <div className="py-2 flex flex-row">
            <div className="ml-4 text-md md:text-xl text-saffron">Codexplore</div>
          </div>
          <div className="flex flex-row divide-x divide-gray-300">
            <div className="flex flex-col items-center pt-6 text-xs min-w-[160px] md:min-w-[210px] md:text-base">
              <button className="p-5 border-black border rounded-lg">Hot Spells</button>
              <button className="btn-mycodex-blue mt-10">Not-My Spells</button>
              <button className="btn-mycodex-blue mt-10">Favourites</button>
            </div>
            <div className="flex flex-col w-full text-xs md:text-base">
              {!loading && spells.map(spell => <Spell handler={() => showSpellHandler(spell)} key={spell.id} id={spell.id} title={spell.title} />)}
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadingScreen />}
    </div>
  )
} 

export const getServerSideProps = async (ctx:NextPageContext) => {
  // Check if cookie is set, if not set, redirect to login screen
  if(!ctx.req?.headers.cookie){
    return {
      redirect: {
        destination: "/auth/login"
      }
    }
  }
  return {
      props: {},
  };
};

export default Codexplore;

