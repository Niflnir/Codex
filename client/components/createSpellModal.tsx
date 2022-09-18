import axios from "axios";
import postRequest from "../hooks/postRequest";
import { ChangeEventHandler, useRef, useState } from "react"

export default () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [files, setFiles] = useState<FileList>();
  const [errors, setErrors] = useState<React.ReactElement | null>(null);
  const [errorShown, setErrorShown] = useState<boolean>(false);
  const uploadRef = useRef<HTMLInputElement>(null);

  const createSpellHandler = async() => {
    const result = await postImage();
    const response = await postRequest('api/spells', {'title': title, 'body': body, 'imagePaths': result.imagePaths}); 
    if(response.errors){
      setErrors(response.errors);
      setErrorShown(true);
      setTimeout(() => setErrorShown(false), 1500);
    }
    else{
      window.location.reload();
    }
  }

  const postImage = async () => {
    const formData = new FormData();
    if(files){
      for(let i = 0; i < files.length; i++){
        formData.append("images", files[i]);
      }
      const result = await axios.post('api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}});
      return result.data;
    }
    return [];
  }

  const fileSelected: ChangeEventHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    const files = e.target.files;
    console.log(files)
    if(files !== null) setFiles(files);
  }

  const handleUpload = () => {
    uploadRef.current?.click();
  }

  return (
    <div className="relative flex flex-col bg-white py-5 rounded-xl border-[2px] border-saffron text-base space-y-3" onClick={(e) => e.stopPropagation()}>
      <div className="pb-2 px-7 text-2xl text-saffron">
        Create Code Tip Spell
      </div>
      <hr className="border-saffron"/>
      <div className="flex px-7 pt-1 flex-col space-y-2">
        <label>Title:</label>
        <textarea value={title} onChange={e => setTitle(e.target.value)} className="w-[600px] py-1 px-2 outline outline-1 outline-gray-300 rounded-md focus:outline-saffron" rows={1} required/>
      </div>
      <div className="flex px-7 flex-col space-y-2">
        <label>Body:</label>
        <textarea value={body} onChange={e => setBody(e.target.value)} className="py-1 px-2 box-border leading-normal outline outline-1 outline-gray-300 rounded-md focus:outline-saffron" rows={14} required/>
      </div>
      <div className="flex justify-center">
        <button className="shadow-md hover:opacity-80 duration-200 outline-none bg-saffron border border-saffron py-1 px-1.5 text-white rounded-md my-1" onClick={handleUpload}>Choose files</button>
        <div className="py-1 px-2 my-1">{files ? files.length : "No"} files chosen</div>
      </div>
      <input ref={uploadRef} className="border-gray-300 border-[1px] hidden" type="file" multiple onChange={fileSelected} name="images" accept="image/*"/>
      <div className="flex justify-center pt-2">
        <button className="p-2 text-saffron border-[1px] outline-saffron border-saffron rounded-lg hover:bg-saffron hover:text-white transition hover:scale-125" type="submit" onClick={createSpellHandler}>Create Spell</button>
      </div>
      {errorShown && 
      <div className="absolute bg-none w-full h-full flex items-center justify-center animate-fade2">
        <div className="bg-red-400 p-5 rounded-2xl text-white">
          {errors}
        </div>
      </div>}
    </div>
  )
}
