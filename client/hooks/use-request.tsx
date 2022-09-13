import axios from 'axios';
import React, { useState } from 'react';

interface UseRequest {
  url: string,
  method: string,
  body?: object,
  onSuccess?: (data?: any) => void;
}

export default({ url, method, body, onSuccess }: UseRequest) => {
  const [errors, setErrors] = useState<React.ReactElement | null>(null);
  
  const doRequest = async () => {
    try {
      setErrors(null);
      const response = await axios({ method: method, url: url, data: body});
      if(onSuccess){
        onSuccess(response.data);
      }
    } catch (err: any) {
      setErrors(
        <div>
          <ul>
              {err.response.data.errors.map((err: any) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div> 
      );
    }
  };
  return { doRequest, errors };
} 
