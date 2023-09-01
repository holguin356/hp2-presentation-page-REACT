import AceptTerms from './AceptsTerms';
import React from 'react';
import logo from '../Assets/logobig.png';
import './Loading.css';

function LoadingBar() {
  return (
    <div className='popup'>
      <div className='container'>
      <img src={logo}></img>
      <p>Me llamo Sebastian Holguin <br/>Estudiante de desarrollo de sofware</p>
       <div className='aceppt'><AceptTerms/></div>  
      </div>
    </div>
  )
}

export default LoadingBar