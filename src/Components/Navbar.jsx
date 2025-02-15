import React from 'react'
// import Logo from '../Images/Logo.jpg'
// import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Navbar() {
 
  const navigate = useNavigate()
  const handleLogout =()=>{
    axios.get("http://localhost:5002/logout")
    .then((res)=>{
     if(res.data.status){
     navigate('/login')
      
     }
    }
   ).catch(err=> 
     console.log(err)
   )
   }


  return (
    <div>
    <div>
   
   
    <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor:"#4ac4f3" }}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#nav" style={{ marginRight: '7%' }}>
      {/* <img src={Logo} className="logo" alt="Logo" width={130} height={120} /> */}
      <h2 className='text-white' style={{fontFamily: "cursive"}}><b><i>Keen Tour's and Travel</i></b></h2>
    </a>
    <button 
        className="navbar-toggler btn btn-outline-light align-middle btn-btn-primary border border-2" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#navbarNav" 
        aria-controls="navbarNav" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
       
      >
        <span className="navbar-toggler-icon"></span>
      </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">HOME</Link>
        </li>
       <li className="nav-item">
          <Link className="nav-link text-white" to="/packages">PACKAGES</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/carRentalfront">CAR RENTAL</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/udaipurtourism">UDAIPUR TOURISM</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">CONTACT US</Link>
        </li>
        <li className="nav-item">
        <span className="btn btn-outline-light align-middle btn-btn-primary" onClick={handleLogout}>Logout</span>
    
        </li>
      </ul>
    </div>
   
  </div>
    </nav> 
    {/* </Navbar end> */}

    </div>
    </div>
  )
}

export default Navbar

