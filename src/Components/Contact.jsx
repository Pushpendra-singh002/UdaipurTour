import React from 'react'
import Navbar from './Navbar'
import {Link} from "react-router-dom";
import udaipur from '../Images/udaipur.jpg'
import Tours1 from '../Images/Tours1.jpg'
import { IoMdHappy } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa6";
import { FaAngleDoubleRight , FaHome } from "react-icons/fa";
import '../Components/Contact.css';
import Footer from './Footer'

function Contact() {
  return (
  <div>
      <Navbar/>

      {/* Image */}
       <div className="full-page-image">
  <a className="navbar-brand1" href="#nav">
    <img src={udaipur} className="carrental" alt="package" />
  </a>
      </div>
      {/* image close */}

      {/* heading */}
      <div className="page-nav no-margin row">
  <div className="container">
  <div className="row justify-content-center align-items-center text-center">
      <h2 className="animated-heading">Contact Us</h2>
    
      <ul className="breadcrumb">
        <li>
          <a href="/home" className="home-link">
            <FaHome /> Home
          </a>
        </li>
        <li>
          <FaAngleDoubleRight />Contact Us
        </li>
      </ul>
    </div>
  </div>
      </div>
      {/* heading close */}

    {/* main part */}

      {/* google map */}
      <div className='row'>
      <div className="col-12 md-4">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14510.06167415632!2d73.68893750000001!3d24.60591445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1709542149691!5m2!1sen!2sin" 
    width="100%" 
    title="This is an unique"
    height="500" 
    style={{ border: "0" }} 
    allowFullScreen="" 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade">
  </iframe>
    </div>
      </div>
      {/* map end */}
      
      {/* form */}
      <div id="contact" className="container">
  <div className="row d-flex justify-content-between align-items-start">
    <form className="col-md-6">
      <h3 className="text-start">Contact Us</h3>
      <div className="row mb-3">
        <label htmlFor="name" className="col-sm-3 col-form-label">
          Name:
        </label>
        <div className="col-sm-9">
          <input type="text" placeholder="Enter Name" className="form-control" id="name" />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
          Email:
        </label>
        <div className="col-sm-9">
          <input type="email" className="form-control" id="inputEmail3" placeholder="Enter Email address" />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="mobile" className="col-sm-3 col-form-label">
          Mobile Number:
        </label>
        <div className="col-sm-9">
          <input type="number" className="form-control" id="mobile" placeholder="Enter Mobile Number" />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="exampleFormControlTextarea" className="col-sm-3 col-form-label">
          Enter Message:
        </label>
        <div className="col-sm-9">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea"
            placeholder="Enter Message"
            rows="5"
          />
        </div>
      </div>

      <button type="submit" className="custom-button btn btn-info">
        Submit
      </button>
    </form>

    <div className="col-md-5 text-start address-section" style={{marginTop:"20px"}}>
      <h3>Address</h3>
      <p>Udaipur Tour's</p>
      <p>2/210 - RHB Colony</p>
      <p>Goverdhan Vilas, Udaipur, Rajasthan, INDIA - 313001 / 313002</p>
      <p>Mobile: +91-9829787678.</p>
    </div>
  </div>
      </div>
      {/* form end */}

    {/* main part end */}

      {/* Image */}
       <div className="full-page-image1">
  <a className="navbar-brand1" href="#nav">
    <img src={Tours1} className="carrental" style={{wedth:"100%", height:"570px"}} alt="package" />
  </a>
  <div className="overlay-content">
    <div className="horizontal-content">
      <div className="content-item">
        <IoMdHappy className="icon-happy" />
        <h1><b>3,000</b></h1>
        <h5>+Happy Clients</h5>
      </div>
      <div className="content-item">
        <SlLike  className="icon-happy" />
        <h1><b>Private</b></h1>
        <h5>and Safe Tours</h5>
      </div>
      <div className="content-item">
        <MdSupportAgent  className="icon-happy" />
        <h1><b>365x7</b></h1>
        <h5>Support Desk</h5>
      </div>
      <div className="content-item">
        <FaRegStar className="icon-happy" />
        <h1><b>Excellent</b></h1>
        <h5>Value for Money</h5>
      </div>
    </div>
  </div>
       </div>
      {/* image close */}

      {/* contact */}
       <div className='div' style={{marginTop:"60px"}}>
            <h4><b>Have Queries? Please call +(91) 9829119492</b> |<Link className='link'>Email: tours@udaipurtraveling.com</Link> 
            </h4>
       </div>
      {/* contact end  */}
     <Footer/>
  </div>
  )
}
export default Contact