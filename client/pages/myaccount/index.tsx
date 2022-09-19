import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import LoadingScreen from "../../components/loadingScreen";
import EditIcon from "../../components/svg/editIcon";
import SaveIcon from "../../components/svg/saveIcon";
import changeRequest from "../../utils/changeRequest";

const MyAccount: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [edit, setEdit] = useState<boolean>(false);

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

  const editHandler = async () => {
    if(edit){
      const response = await changeRequest('post', '/api/users/username', {"email": email, "username": username});
      console.log(response.result);
      window.location.reload();
    }
    setEdit(!edit);
  }

  return (
    <div className="flex flex-col relative min-h-screen bg-blue font-pd items-center min-w-[1300px]">
      <Header screen="myaccount"/>
      <div className="flex flex-grow min-w-full items-center justify-center h-full">
        <div className="bg-white flex flex-col rounded-xl divide-y divide-saffron w-7/12">
          <div className="p-2 flex flex-row mx-4 mt-2 mb-1 justify-center">
            <div className="ml-4 text-md md:text-xl text-saffron">My Account</div>
          </div>
          <div className="relative flex flex-row">
            <div className="px-20 pt-10 pb-12 space-y-12 justify-center items-center flex flex-col">
              <div className="rounded-full w-80 h-80  border border-saffron flex justify-center items-center overflow-hidden">
                <img className="w-80 h-80" src="api/images/19e6ff94f579fef7891c55bf3d6faf11"/>
              </div>
              <textarea placeholder="Write a fun description of yourself!" className="p-2 border border-saffron rounded-xl w-full" rows={5}/>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row mx-16 mt-32 mb-2 text-2xl text-saffron tracking-wider space-x-2">
                <div>Username</div>
                <div className="cursor-pointer mt-0.5" onClick={editHandler}>
                  {edit ? 
                    <SaveIcon className='w-7 h-7 p-0.5 group hover:scale-150 rounded-md duration-150' pathClassName='fill-saffron' />
                    : 
                    <EditIcon className='w-7 h-7 p-0.5 group hover:scale-150 rounded-md duration-150' pathClassName='fill-saffron' />}
                </div>
              </div>
              <div className="mx-16">
              {edit ? 
                <textarea value={username} 
                    onChange={e => setUsername(e.target.value)} 
                    className='outline-gray-300 rounded-md outline outline-1 focus:outline-saffron w-full p-2 resize-none' 
                    rows={1} 
                /> 
                : username}
              </div>
              <div className="mx-16 mt-24 mb-2 text-2xl text-saffron tracking-wider">
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
