import axios from "axios";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";

interface Header {
  screen: string;
}

export default (props: Header) => {
  const [animateLogo, setAnimateLogo] = useState<boolean>(false);

  const logoutHandler = async () => {
    await axios.post('api/users/signout');
    Router.push('/auth/login')
  }

  return(
    <div className="relative flex flex-row bg-white items-center min-w-full h-1/6">
      <div className={`pt-1 px-1 cursor-pointer ${animateLogo && "animate-logo"}`} onClick={() => setAnimateLogo(true)} onAnimationEnd={() => setAnimateLogo(false)}>
        <Image src="/../public/images/Logo.png" alt="" width={60} height={50}/>
      </div>
      <div className="text-2xl text-blue ml-2">CODEX</div>
      {props.screen === "mycodex" && <div className="ml-24 bg-saffron py-4 px-9 text-lg text-white tracking-wide">My Codex</div>}
      {props.screen !== "mycodex" && 
        <div className="ml-24 py-4 px-9 text-lg tracking-wide hover:bg-saffron hover:text-white cursor-pointer duration-300" onClick={() => Router.push('/mycodex')}>
          My Codex
        </div>}
      
      {props.screen === "codexplore" && <div className="bg-saffron py-4 px-9 text-lg text-white tracking-wide">CODEXplore</div>}
      {props.screen !== "codexplore" && 
        <div className="py-4 px-9 text-lg tracking-wide hover:bg-saffron hover:text-white cursor-pointer duration-300" onClick={() => Router.push('/codexplore')}>
          CODEXplore
        </div>}

      {props.screen === "myaccount" && <div className="bg-saffron py-4 px-9 text-lg text-white tracking-wide">My Account</div>}
      {props.screen !== "myaccount" && 
        <div className="py-4 px-9 text-lg tracking-wide hover:bg-saffron hover:text-white cursor-pointer duration-300" onClick={() => Router.push('/myaccount')}>
          My Account
        </div>}
      <div className="absolute text-lg right-8 cursor-pointer hover:text-red-600 hover:scale-125 duration-150" onClick={logoutHandler}>
        Logout
      </div>
   </div>
  )
}
