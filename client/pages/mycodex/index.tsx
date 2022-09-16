import axios from "axios";
import type { NextPage, NextPageContext } from "next";
import Image from "next/image";
import Header from "../../components/header";
import Spell from "../../components/spell";
import SpellModal from "../../components/spellModal";
import CreateSpellModal from "../../components/createSpellModal";
import Logo from "../../components/svg/logo";
import { useEffect, useState } from "react";

interface SpellTip {
  title: string;
  body: string;
  imagePaths?: Array<string>;
  id: string;
}

const MyCodex: NextPage = () => {
  const [isShown, setIsShown] = useState<boolean>(false);

  const [createSpell, setCreateSpell] = useState<boolean>(false);
  const [spells, setSpells] = useState<Array<SpellTip>>([]);
  const [id, setId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [imagePaths, setImagePaths] = useState<Array<string>>([]);

  const [favourite, setFavourite] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  useEffect(() => {
    mySpellsHandler();
  }, [])

  const mySpellsHandler = async () => {
    try{
      setLoading(true);
      const response = await axios.get('api/spells');
      setSpells(response.data);
      setTimeout(() => setLoading(false), 1500);
    } catch(err){
      console.log(err);
    }
  }
  
  const favouritesHandler = async () => {
    setLoading(true);
    // get array of ids of favourited spells
    const response = await axios.get('api/favourites');
    // get spell data based on ids
    if(response.data.length){
      const res = await axios.post('api/favourites/spells', {"spells": response.data[0].spells});
      setSpells(res.data);
    }
    else{
      setSpells([]);
    }
    setTimeout(() => setLoading(false), 1000);
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
    <div className="flex flex-col relative min-h-screen bg-blue font-pd items-center min-w-[700px]">
      <Header screen="mycodex"/>
      <div className="flex flex-grow min-w-full items-center justify-center h-full">
        <div className="bg-white flex flex-col rounded-xl divide-y divide-gray-300 w-3/4">
          <div className="p-2 flex flex-row mx-4 mt-2 mb-1">
            <Image src="/../public/images/Vector.png" alt="" width={35} height={30}/>
            <div className="ml-4 text-md md:text-xl text-saffron">My Codex Spells</div>
          </div>
          <div className="flex flex-row divide-x divide-gray-300">
            <div className="flex flex-col items-center pt-6 text-xs min-w-[160px] md:min-w-[210px] md:text-base">
              <button onClick={mySpellsHandler} className="btn-mycodex-blue">My Spells</button>
              <button className="btn-mycodex-blue mt-10">Not-My Spells</button>
              <button onClick={favouritesHandler} className="btn-mycodex-blue mt-10">Favourites</button>
              <button onClick={() => setCreateSpell(true)} className="btn-mycodex-saffron mt-96 mb-4">Create Spell</button>
            </div>
            <div className="flex flex-col w-full text-xs md:text-base">
              {!loading && spells.map(spell => <Spell handler={() => showSpellHandler(spell)} key={spell.id} id={spell.id} title={spell.title} />)}
            </div>
          </div>
        </div>
      </div>
      {loading && 
      <div className="fixed w-full h-full bg-gray-200 bg-opacity-75 duration-500 flex flex-col">
        <div className="m-auto">
          <Logo className="w-64 h-64" />
        </div>
      </div>}
      {isShown && 
      <div className="fixed w-full h-full bg-gray-900 bg-opacity-50 flex flex-row justify-center items-center duration-500 animate-fade" onClick={() => setIsShown(false)}>
        <SpellModal id={id} title={title} body={body} imagePaths={imagePaths} favourite={favourite} />
      </div>}
      {createSpell && 
      <div className="fixed w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center duration-500 animate-fade" onClick={() => setCreateSpell(false)}>
        <CreateSpellModal />
      </div>}
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

export default MyCodex;


