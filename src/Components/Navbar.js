import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () =>{
    setMenuOpen(!menuOpen)
  }


  const location = useLocation()
  return (
    <div className='navbar'>
      <h1 className='logo'>Movies;</h1>
      <div className={`menuIcon ${menuOpen ? 'open' : ''}`} onClick={handleNav}>
        {menuOpen ? <MdClose className='icon'/> : <MdMenu className='icon'/>}
      </div>
      <ul className={`items ${menuOpen ? 'open' : ''}`}>
        <Link className='to' to='/' onClick={() => setMenuOpen(false)}><li className={`item ${location.pathname === '/' ? 'active' : ''}`}>Home</li></Link>
        <Link className='to' to='/favorites' onClick={() => setMenuOpen(false)}><li className={`item ${location.pathname === '/favorites' ? 'active' : ''}`}>Favorites</li></Link>
      </ul>
    </div>
  )
}

export default Navbar