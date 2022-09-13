import axios from "axios";
import { ChangeEventHandler, useState } from "react"

export default () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [files, setFiles] = useState<FileList>();
  const [imagePaths, setImagePaths] = useState<Array<string>>([]);

  const createSpellHandler = async() => {
    const result = await postImage();
    setImagePaths(result.imagePaths);
    await axios({ method:'post', url:'api/spells', data:{'title': title, 'body': body, 'imagePaths': result.imagePaths}})
    window.location.reload();
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

  return (
    <div className="flex flex-col bg-white py-5 rounded-xl border-[2px] border-saffron text-base space-y-3" onClick={(e) => e.stopPropagation()}>
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
        <input className="border-gray-300 border-[1px]" type="file" multiple onChange={fileSelected} name="images" accept="image/*"/>
      <div className="flex justify-center pt-2">
        <button className="p-2 text-saffron border-[1px] outline-saffron border-saffron rounded-lg hover:bg-saffron hover:text-white transition hover:scale-125" type="submit" onClick={createSpellHandler}>Create Spell</button>
      </div>
    </div>
  )
}
