
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
     <nav className='navbar-cont'>
        <a className='logo'>
        <img src="https://res.cloudinary.com/alex4191/image/upload/v1683322690/New_Project_yprq4t.png" alt="freeCodeCamp logo"></img>
        </a>
            <ul className='nav-links'>
                <li className='nav-item'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/desarrollador">Develop</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink to="/administrador">Admin</NavLink>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar