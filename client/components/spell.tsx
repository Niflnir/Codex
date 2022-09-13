import { MouseEventHandler } from "react";

interface Spell {
  title: string;
  id: string;
  handler: MouseEventHandler;
}

const Spell = (props:Spell) => {
  return (
    <button onClick={props.handler} id={props.id} className="outline-none group bg-white py-2 px-3 text-left border-b-[1px] border-b-gray-300 active:border-none hover:bg-blue hover:text-white hover:text-lg md:hover:text-xl duration-300">
      <div className="flex justify-between">
        {props.title}
      </div>
    </button>
  )
}

export default Spell;
