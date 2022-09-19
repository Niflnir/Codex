import axios from "axios"

const changeRequest = async (method:string ,url: string, body: object) => {
  let errors:React.ReactElement | null = null;
  let result = null;
  try{
    result = await axios({ method: method, url: url, data: body});
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
  return {"result": result, "errors": errors};
}

export default changeRequest;
