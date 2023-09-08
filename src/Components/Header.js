import React from 'react'
import logo from '../Assets/SEHO_LOGO.png'
function Header() {
  return (
    
    <div className='header'>      
      <div className='menu'>
        <ul>
          <li><a href='#'>AboutMe</a></li>
          <li><a href='#'>Projects</a></li>
          <li><a href='#'>Skills</a></li>
          <li><a href='#'>Education</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
      </div>
      <div className='logo'>
        <a href='#'><img src={logo}></img></a>
      </div>
    </div>
  )
}

export default Header