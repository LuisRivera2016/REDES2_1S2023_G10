import { useState, useEffect } from "react"
import Cards from "../components/Cards"
import axios from "axios"

import {ipBackend} from "../config.js"

function Desarrollador() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://"+ipBackend+":5000/api/v1/Cerberus/consulta2").then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log(error);
      setData([]);
    })

  }, []);
  return (
    <div className="main-content">
      {data.map((item) => (
         <Cards key={item.Id} nombre={item.Nombre} Ocupacion={item.Ocupacion} />
      ))}
      
    </div>
  )
}

export default Desarrollador