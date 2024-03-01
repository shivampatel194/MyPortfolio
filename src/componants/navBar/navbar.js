import React from 'react'
import logo from '../../assets/icon.png';
import {Link} from 'react-scroll';
import '../../componants/navBar/navbar.css'
import contactIcon from '../../assets/contact.png'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar'>
      <img src={logo} alt='logo' className='icon'></img>

      <div className='desktopMenu'>
        <Link className='menuItem'> Home </Link>
        <Link className='menuItem'> Projects </Link>
        <Link className='menuItem'> Educations </Link>
        <Link className='menuItem'> Experiance </Link>


    </div>

      <button className='desktopMenubtn'>
    
        <img src= {contactIcon} alt='contactIcon' className='desktopIcon'></img>
        Contact Me
        
      </button>

      </nav>
      
    </div>
  )
}

export default Navbar