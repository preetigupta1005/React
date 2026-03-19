import { useState, useEffect } from "react";
import axios from "axios";
import './FetchApi.css'

export default function FetchApi() {
  const [data, setData] = useState([]);
  const api = "https://jsonplaceholder.typicode.com/comments";

  const getMovie = async () => {
    try {
      const res = await axios.get(api);
      console.log(res.data);

     
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

 
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div >
      <h2>Comments</h2>
      <div className="container">
      

      {data.map((item) => (
        <div key={item.body} className="box">
          <p>{item.body}</p>
          <span>-- {item.name}<br/>
            Mail is- {item.email}
          </span>
          
        </div>
      ))}

      </div>
    </div>
  );
}
