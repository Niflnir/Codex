import axios from "axios";
import { useState } from "react";
import EditIcon from "./svg/editIcon";
import FavouriteIcon from "./svg/favouriteIcon";
import SaveIcon from "./svg/saveIcon";
import DeleteIcon from "./svg/deleteIcon";
import changeRequest from "../utils/changeRequest";
import { SpellTip } from "../utils/interfaces";

interface SpellModal {
  spell: SpellTip;
  favourite: boolean;
}

export default (props: SpellModal) => {
  const [favourite, setFavourite] = useState<boolean>(props.favourite);
  const [edit, setEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(props.spell.title);
  const [body, setBody] = useState<string>(props.spell.body);
  const [imagePaths, setImagePaths] = useState<Array<string>>(
    props.spell.imagePaths || []
  );
  const [imageModal, setImageModal] = useState<string>();
  const [showImage, setShowImage] = useState<boolean>(false);
  const [errors, setErrors] = useState<React.ReactElement | null>(null);
  const [errorShown, setErrorShown] = useState<boolean>(false);

  const favouriteHandler = () => {
    favourite
      ? axios.delete(`api/favourites/${props.spell.id}`)
      : axios.post("api/favourites", { id: props.spell.id });
    setFavourite(!favourite);
  };

  const deleteHandler = async () => {
    const response = await changeRequest(
      "delete",
      `api/spells/${props.spell.id}`,
      {}
    );
    if (response.errors) {
      setErrors(response.errors);
      setErrorShown(true);
      setTimeout(() => setErrorShown(false), 1500);
    } else {
      window.location.reload();
    }
  };

  const editHandler = async () => {
    if (edit) {
      await axios.put(`api/spells/${props.spell.id}`, {
        title: title,
        body: body,
      });
      window.location.reload();
    }
    setEdit(!edit);
  };

  const imageHandler = (imagePath: string) => {
    if (imagePath === imageModal) {
      setShowImage(!showImage);
    } else {
      setImageModal(imagePath);
      setShowImage(true);
    }
  };

  return (
    <>
      <div
        className="flex flex-col bg-white w-1/2 rounded-xl border-[1.5px] border-saffron divide-y divide-saffron"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-row text-xl p-4 relative justify-between items-center">
          {edit ? (
            <textarea
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="outline-gray-300 outline outline-1 focus:outline-saffron w-5/6 h-full p-2 resize-none"
              rows={1}
            />
          ) : (
            <textarea
              value={title}
              className="bg-transparent resize-none overflow-auto"
              rows={1}
              disabled
            />
          )}
          <div
            title="Edit"
            className="absolute right-32 cursor-pointer"
            onClick={editHandler}
          >
            {edit ? (
              <SaveIcon
                className="w-7 h-7 p-0.5 group hover:scale-150 rounded-md duration-150"
                pathClassName="fill-saffron"
              />
            ) : (
              <EditIcon
                className="w-7 h-7 p-0.5 group hover:scale-150 rounded-md duration-150"
                pathClassName="fill-saffron"
              />
            )}
          </div>
          <div
            title="Favourite"
            className="absolute right-16 hover:scale-150 duration-150 mx-2 group cursor-pointer"
            onClick={favouriteHandler}
          >
            <FavouriteIcon
              className="w-7 h-7"
              pathClassName={`${favourite ? "fill-red-500" : "fill-white stroke-gray-900"
                }`}
            />
          </div>
          <div
            title="Delete"
            className="absolute right-3 hover:scale-150 duration-150 mx-2 group cursor-pointer"
            onClick={deleteHandler}
          >
            <DeleteIcon className="w-6 h-6" pathClassName="fill-saffron" />
          </div>
        </div>
        <div className="p-4 h-2/3">
          {edit ? (
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="resize-none outline-gray-300 outline outline-1 focus:outline-saffron w-full h-full p-2"
              rows={15}
            />
          ) : (
            <textarea
              disabled
              className="w-full h-full bg-transparent resize-none overflow-auto"
              value={body}
              rows={15}
            />
          )}
        </div>
        <div className="flex flex-row justify-center items-center p-5 space-x-3">
          {imagePaths.map((imagePath) => (
            <img
              key={imagePath}
              className="w-24 h-16 cursor-pointer"
              src={imagePath}
              onClick={() => imageHandler(imagePath)}
            />
          ))}
        </div>
      </div>
      {showImage && (
        <img
          className="w-5/12 h-2/3 pl-12 py-5 animate-fade"
          src={imageModal}
        />
      )}
      {errorShown && (
        <div className="absolute bg-none w-full h-full flex items-center justify-center animate-fade2">
          <div className="bg-red-400 p-5 rounded-2xl text-white">{errors}</div>
        </div>
      )}
    </>
  );
};
