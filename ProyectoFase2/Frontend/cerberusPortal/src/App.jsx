import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Administrador from "./pages/Adminstrador";
import Desarrollador from "./pages/Desarrollador";
import Tendencia from "./pages/Tendencia";
import Home from "./pages/Home";
import NoExiste from "./pages/NoExiste";

import './App.css'
import Navbar from "./components/Navbar";


function App() {
 

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/administrador" element={<Administrador/>} />
        <Route path="/desarrollador" element={<Desarrollador/>} />
        <Route path="/tendencia" element={<Tendencia/>} />
        <Route path="*" element={<NoExiste/>} />
      </Routes>
    </>
  )
}

export default App
