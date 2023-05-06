import { useState, useEffect } from "react"
import SubCards from "../components/SubCards"
import axios from "axios"

function Adminstrador() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/Cerberus/consulta1").then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.log(error);
      setData([]);
    })

  }, []);

  return (
    <div className="main-content">
       {data.map((item) => (
          <SubCards key={item.Id} nombre={item.Nombre} Ocupacion={item.Ocupacion} />
      ))}
      
    </div>
    
  )
}

export default Adminstrador