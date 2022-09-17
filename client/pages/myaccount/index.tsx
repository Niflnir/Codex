import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import LoadingScreen from "../../components/loadingScreen";

const MyAccount: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<String>("");
  const [email, setEmail] = useState<String>("");

  useEffect(() => {
    getEmail();
    setTimeout(() => setLoading(false), 1500);
  }, [])

  const getEmail = async () => {
    try {
      const res = await axios.get("/api/users/currentuser");
      setEmail(res.data.currentUser.email);
      getUsername(res.data.currentUser.email);
    } catch (err){
      console.log(err);
    }
  }

  const getUsername = async (email: String) => {
    try{
      const res = await axios.get(`/api/users/username/${email}`);
      setUsername(res.data.username);
    } catch (err){
      console.log(err);
    }
  }

  return (
    <div className="flex flex-col relative min-h-screen bg-blue font-pd items-center min-w-[1300px]">
      <Header screen="myaccount"/>
      <div className="flex flex-grow min-w-full items-center justify-center h-full">
        <div className="bg-white flex flex-col rounded-xl divide-y divide-saffron w-7/12">
          <div className="p-2 flex flex-row mx-4 mt-2 mb-1 justify-center">
            <div className="ml-4 text-md md:text-xl text-saffron">My Account</div>
          </div>
          <div className="flex flex-row">
            <div className="px-20 pt-10 pb-12 space-y-12 justify-center items-center flex flex-col">
              <div className="rounded-full w-80 h-80  border border-saffron flex justify-center items-center overflow-hidden">
                <img className="w-80 h-80" src="api/images/19e6ff94f579fef7891c55bf3d6faf11"/>
              </div>
              <textarea placeholder="Write a fun description of yourself!" className="p-2 border border-saffron rounded-xl w-full" rows={5}/>
            </div>
            <div className="flex flex-col">
              <div className="mx-16 mt-32 mb-2 text-xl text-saffron font-semibold tracking-wider">
                Username
              </div>
              <div className="mx-16">
                {username}
              </div>
              <div className="mx-16 mt-24 mb-2 text-xl text-saffron font-semibold tracking-wider">
                Email
              </div>
              <div className="mx-16">
                {email}
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && <LoadingScreen />}
    </div>
  )
} 

export default MyAccount;
