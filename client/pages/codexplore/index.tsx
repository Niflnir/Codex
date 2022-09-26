import axios from "axios";
import { NextPage, NextPageContext } from "next";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import LoadingScreen from "../../components/loadingScreen";
import EditIcon from "../../components/svg/editIcon";
import SaveIcon from "../../components/svg/saveIcon";
import changeRequest from "../../utils/changeRequest";

const Codexplore: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, [])

  return (
    <div className="flex flex-col relative min-h-screen bg-blue font-pd items-center min-w-[1300px]">
      <Header screen="codexplore"/>
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

