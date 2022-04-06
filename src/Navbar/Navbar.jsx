import React, {useState} from 'react'
import '../Navbar/Navbar.css'

function Navbar(props) {
  const [active, setActive] = useState ('navMenu');
  
    const navToggle = () => {
      active === 'navMenu' 
      ? setActive('navMenu navActive') 
      : setActive('navMenu')
  };

  return (
    <nav className='nav'>
      <a href="#" className='brandButton'>Team 4.2 Calculator</a>
      <ul className={active}>
        <li className='navItem'><a href="#" className='navLink'>Home</a></li>
        <li className='navItem'><a href="#" className='navLink'>Addition</a></li>
        <li className='navItem'><a href="#" className='navLink'>Multiplication</a></li>
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