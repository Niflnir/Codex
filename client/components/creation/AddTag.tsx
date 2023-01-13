import AddTagIcon from "../svg/AddTagIcon";

const AddTag = () => {
  return (
    <div className="flex border border-sec px-2 py-1 font-sc text-sm text-sec rounded-lg items-center space-x-2 cursor-pointer group hover:bg-sec transition delay-50 duration-200">
      <AddTagIcon className="w-5 h-5" pathClassName="group-hover:fill-black" />
      <div className="group-hover:text-black pt-0.5">ADD TAG</div>
    </div>
  );
};

export default AddTag;
