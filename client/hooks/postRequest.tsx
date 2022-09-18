import axios from "axios"

const postRequest = async (url: string, body: object) => {
  let errors:React.ReactElement | null = null;
  let result = null;
  try{
    result = await axios.post(url, body);
    result = result.data;
  } catch (err: any) {
    console.log(err);
    errors = (
      <div>
        <ul>
            {err.response.data.errors.map((err: any) => (
            <li key={err.message}>{err.message}</li>
          ))}
        </ul>
      </div> 
    );
  }
  return {"message": "hello", "result": result, "errors": errors};
}

export default postRequest;
