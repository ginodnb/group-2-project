import React, {useState} from 'react';
import '../Navbar/Navbar.css';
import 'primeicons/primeicons.css';
import { NavLink } from 'react-router-dom';


function Navbar(props) {
  const [active,setActive] = useState('navMenu');
  
    const navToggle = () => {
      active === 'navMenu' 
      ? setActive('navMenu navActive') 
      : setActive('navMenu')
  };

  return (
    <nav className='nav'>
      <a href="#" className='brandButton'>Team 4.2 Calculator</a>
      <a href='https://github.com/ginodnb/group-2-project' target="_blank" ><i className="pi pi-github" style={{'fontSize': '1.5em'}}></i></a>
      <ul className={active}>
        <li className='navItem'><a href="#" className='navLink'>Home</a></li>
        <li className='navItem'><a href="#" className='navLink'>Addition</a></li>
        <li className='navItem'><a href="/Home" className='navLink'>Multiplication</a></li>
        <li className='navItem'><a href="/Divide" className='navLink'>Divide</a></li>
      </ul>
      <div onClick={navToggle} className="navToggler">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Navbar