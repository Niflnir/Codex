interface SpellProps {
  body: string;
  borderColour: string;
  favourites: number;
}

const Spell = (props: SpellProps) => {
  return (
    <div
      className={`flex w-full px-2 py-1 text-white font-sc text-2xl border-y ${props.borderColour} cursor-pointer hover:bg-saffron hover:text-black transition delay-50 duration-150`}
    >
      <div className="hover:scale-110">{props.body}</div>
    </div>
  );
};

export default Spell;
