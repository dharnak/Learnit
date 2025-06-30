import React from 'react'
import '../css/Niv.css'
import { Link } from 'react-router-dom'



function Niv() {
  return (
    <div>
      <header className='nivmain'>
            <div className='sub1'>          
                    <Link to="/Home"><h1>learnIT</h1></Link>
            </div>
            <div className='sub5'>
                <h1>explore</h1>
            </div>
            <div className='sub2'>
                <input className='inputsub' type='search'></input>
            </div>
            <div className='sub3'>
              <Link to="/udemybusness"  className='text'>learnIT busness</Link>
             <Link to="/Mylearning" className='text'>Instructor</Link>
             <Link to="/about" className='text'>My learning</Link>
             <Link to="/backendcall" className='text'>backend api</Link>
            </div>
            <div className='sub4'>
               <i class="fa-regular fa-heart"></i>
               <i id="carticon" class="fa-brands fa-opencart"></i>
               <i class="fa-regular fa-bell"></i>
            </div>
      </header>
      <div className='header2'>
        <h1>Developement</h1>
        <h1>busness</h1>
        <h1>IT</h1>
        <h1>Software</h1>
        <h1>hacking</h1>
        <h1>DM</h1>
        <h1>mern stack</h1>

      </div>
    </div>
  )
}

export default Niv