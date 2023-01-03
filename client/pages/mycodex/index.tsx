import axios from "axios";
import type { NextPage, NextPageContext } from "next";
import Image from "next/image";
import Header from "../../components/header";
import Spell from "../../components/spell";
import SpellModal from "../../components/spellModal";
import CreateSpellModal from "../../components/createSpellModal";
import LoadingScreen from "../../components/loadingScreen";
import { useEffect, useState } from "react";
import { SpellTip } from "../../utils/interfaces";
import { setLoadingState } from "../../redux/loadingSlice";
import { useDispatch } from "react-redux";

const getSpellsURL = "api/spells";
const getFavouritesURL = "api/favourites";
const getFavouriteSpellsURL = "api/favourites/spells";

const MyCodex: NextPage = () => {
  const dispatch = useDispatch();

  const [showSpell, setShowSpell] = useState<boolean>(false);
  const [createSpell, setCreateSpell] = useState<boolean>(false);
  const [spells, setSpells] = useState<Array<SpellTip>>([]);
  const [currentSpell, setCurrentSpell] = useState<SpellTip>({} as SpellTip);
  const [favourite, setFavourite] = useState<boolean>(false);

  useEffect(() => {
    mySpellsHandler();
  }, []);

  const mySpellsHandler = async () => {
    try {
      dispatch(setLoadingState(true));
      const response = await axios.get(getSpellsURL);
      setSpells(response.data);
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => dispatch(setLoadingState(false)), 1000);
  };

  const favouritesHandler = async () => {
    dispatch(setLoadingState(true));
    // get array of ids of favourited spells
    const response = await axios.get(getFavouritesURL);
    // get spell data based on ids
    if (response.data.length) {
      const res = await axios.post(getFavouriteSpellsURL, {
        spells: response.data[0].spells,
      });
      setSpells(res.data);
    } else {
      setSpells([]);
    }
    setTimeout(() => dispatch(setLoadingState(false)), 1000);
  };

  const showSpellHandler = async (spell: SpellTip) => {
    const response = await axios.get(`api/favourites/${spell.id}`);
    setCurrentSpell({
      id: spell.id,
      title: spell.title,
      body: spell.body,
      imagePaths: spell.imagePaths,
    });
    setFavourite(!!response.data.length);
    setShowSpell(true);
  };

  return (
    <div className="flex-col-center relative min-h-screen bg-blue font-pd min-w-[700px]">
      <Header screen="mycodex" />
      <div className="flex flex-grow min-w-full items-center justify-center h-full">
        <div className="bg-white flex flex-col rounded-xl divide-y divide-gray-300 w-3/4">
          <div className="p-2 flex flex-row mx-4 mt-2 mb-1">
            <Image
              src="/../public/images/Vector.png"
              alt=""
              width={35}
              height={30}
            />
            <div className="ml-4 text-md md:text-xl text-saffron">
              My Codex Spells
            </div>
          </div>
          <div className="flex flex-row divide-x divide-gray-300">
            <div className="flex-col-center pt-6 text-xs min-w-[160px] md:min-w-[210px] md:text-base">
              <button onClick={mySpellsHandler} className="btn-mycodex-blue">
                My Spells
              </button>
              <button className="btn-mycodex-blue mt-10">Not-My Spells</button>
              <button
                onClick={favouritesHandler}
                className="btn-mycodex-blue mt-10"
              >
                Favourites
              </button>
              <button
                onClick={() => setCreateSpell(true)}
                className="btn-mycodex-saffron mt-96 mb-4"
              >
                Create Spell
              </button>
            </div>
            <div className="flex flex-col w-full text-xs md:text-base">
              {spells.map((spell) => (
                <Spell
                  handler={() => showSpellHandler(spell)}
                  key={spell.id}
                  id={spell.id}
                  title={spell.title}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <LoadingScreen />
      {showSpell && (
        <div className="modal-base" onClick={() => setShowSpell(false)}>
          <SpellModal spell={currentSpell} favourite={favourite} />
        </div>
      )}
      {createSpell && (
        <div className="modal-base" onClick={() => setCreateSpell(false)}>
          <CreateSpellModal />
        </div>
      )}
    </div>
  );
};

export const getServerSideProps = async (ctx: NextPageContext) => {
  // Check if cookie is set, if not set, redirect to login screen
  if (!ctx.req?.headers.cookie) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }
  return {
    props: {},
  };
};

export default MyCodex;
