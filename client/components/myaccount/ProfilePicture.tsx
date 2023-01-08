import { ChangeEventHandler, useRef, useState } from "react";

export default () => {
  const [imagePath, setImagePath] = useState<string>(
    "https://picsum.photos/200/300"
  );
  const [photo, setPhoto] = useState<FileList>();
  const uploadRef = useRef<HTMLInputElement>(null);

  const changePhotoHandler = () => {
    console.log("clicked");
    uploadRef.current?.click();
  };

  const fileSelected: ChangeEventHandler = (
    e: React.ChangeEvent<HTMLFormElement>
  ) => {
    const photo = e.target.files;
    console.log(photo);
    if (photo !== null) setPhoto(photo);
  };

  return (
    <div className="px-20 pt-10 pb-12 space-y-12 justify-center items-center flex flex-col">
      <div className="rounded-full w-72 h-72 border border-saffron flex justify-center items-center overflow-hidden">
        <img
          key={imagePath}
          alt="No Photo Found"
          className="w-72 h-72 cursor-pointer"
          src={imagePath}
        />
      </div>
      <input
        ref={uploadRef}
        className="border-gray-300 border-[1px] hidden"
        type="file"
        onChange={fileSelected}
        name="images"
        accept="image/*"
      />
      <button
        className="shadow-md hover:opacity-80 duration-200 outline-none bg-saffron border border-saffron py-1 px-1.5 text-white rounded-md my-1"
        onClick={changePhotoHandler}
      >
        Change Photo
      </button>
    </div>
  );
};
