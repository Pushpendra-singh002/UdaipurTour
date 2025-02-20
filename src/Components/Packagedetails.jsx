import React , {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Tours1 from '../Images/Tours1.jpg'
import { IoMdHappy } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa6";
import {Link , useLocation, useParams } from "react-router-dom"
import Footer from './Footer';
import axios from 'axios';

function Packagedetails() {
  
  const { id, } = useParams() || {}  
  const location = useLocation();
  const packageDetails = location.state || {};
  const [name, setName]= useState({username:""})
  const [email, setEmail]= useState({email:""})
  const [phone, setPhone]=useState({phone:""})
  const [facility , setFacility]= useState(packageDetails.facility)
  const [duration, setDuration]= useState(packageDetails.duration)
  const [heading, setHeading] = useState(packageDetails.name);
  const [tourcode, setTourcode] = useState(packageDetails.tourcode);
  const [price, setPrice] = useState(packageDetails.price);
  const [children, setChildren]= useState('')
  const [adults, setAdults]= useState('')
  const [date, setDate]= useState('') 
  
  
  useEffect(() => {
         
    const storedUsername = ('username');
    const storedPhone = ('phone');
    const storedEmail = ('email');

    console.log('Session data:', {
     storedUsername, storedPhone, storedEmail, 
    });
    if ( storedUsername && storedPhone && storedEmail
      ) {
      
        setName(storedUsername); 
        setPhone(storedPhone); 
        setEmail(storedEmail); 
       
    } else if (id) {
  
        axios.get(`http://localhost:5002/api/user/${id}`)
            .then((res) =>{ 
            
            setName(res.data.username);
            setPhone(res.data.phone);
            setEmail(res.data.email);
            sessionStorage.setItem('username', res.data.username);
            sessionStorage.setItem('phone', res.data.phone);
            sessionStorage.setItem('email', res.data.email);
   } )
            .catch((err) => console.log('Error fetching user data:', err));
    } else {
        console.error('No user ID found in URL or sessionStorage');
    }
}, [id]);


  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`http://localhost:5002/api/udaipur`, {
      
      username:name,
      email,
      phone,
      facility,
      duration,
      price,
      heading,
      date,
      adults,
      children

    })
    .then(result => {
      console.log(result);
     
    })
    .catch(err => console.log(err));
  };
  
  
return (
    <div style={{background:"whitesmoke"}}>
    <Navbar/>

    {/* main */}
    <div className='conatiner fluid' style={{marginTop:"100px"}}>
    <div className='row'>
    <div className="col-md-6">
    <div className="row align-items-left">
    <div className='card' style={{width:"30rem", marginTop:"40px"}}>
      <div className='text-start'>
        <h2 className="cardetails">UDAIPUR PACKAGE BOOKING:</h2>
        <br></br>
              <p><strong>Package:</strong> {packageDetails.name}</p>
              <p><strong>Price:</strong> {packageDetails.price}</p>
              <p><strong>Duration:</strong> {packageDetails.duration}</p>
              <p><strong>Facility:</strong> {packageDetails.facility}</p>
              <p><strong>Tour code:</strong>{packageDetails.tourcode}</p>
              <p>Final amount will be calculated and sent to your email address.</p>
        </div>
      
      </div>
    </div>
    </div>
    <div className='col-md-5'>
    <div className="row d-flex justify-content-between align-items-end">
    <div className='' style={{ marginTop: "40px", padding:"10px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.9)",marginLeft:"10px"}}>
    <form className="col-md-12" onSubmit={handleSubmit}>
      <h2 className="text">PLEASE FILL YOUR DETAILS:</h2>
       <br></br>
      <div className='row'>
     <div className='col mb-3'>
      <select className="form-select" 
      aria-label="Default select example"  id='Adults' defaultValue="Select Adults" value={adults} onChange={(e) => setAdults(e.target.value)}>
  <option selected>Adults</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
     </select>
     </div>

     <div className='col mb-3'>
     <select className="form-select" id="children" defaultValue="Select Adults" value={adults} onChange={(e) => setChildren(e.target.value)}
     aria-label="Default select example">
  <option selected>Children</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
     </select>
     </div>
      </div>

      
      <div className="row mb-3">
        <label htmlFor="Package Name" className="col-sm-3 col-form-label">
          Package Name:
        </label>
        <div className="col-sm-9">
          <input    type="text"
            className="form-control"
            id="heading"
            placeholder="Enter Package Name"
            value={ packageDetails.name || heading}
            onChange={(e) => setHeading(e.target.value)}
            required />
        </div>
      </div>

     <div className="row mb-3">
        <label htmlFor="Date" className="col-sm-3 col-form-label">
          Date of Travel:
        </label>
        <div className="col-sm-9">
          <input type="date" placeholder="Enter Date of Travel" className="form-control" id="date"  value={date}
          onChange={(e)=>{setDate(e.target.value)}} />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="name" className="col-sm-3 col-form-label">
          Name:
        </label>
        <div className="col-sm-9">
          <input type="text" placeholder="Enter Name" className="form-control" id="name"   value={name} 
          onChange={(e)=>{setName(e.target.value)}}  />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
          Email:
        </label>
        <div className="col-sm-9">
          <input type="email" className="form-control" id="inputEmail3" placeholder="Enter Email address"  value={email}
            onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="mobile" className="col-sm-3 col-form-label">
          Mo Number:
        </label>
        <div className="col-sm-9">
          <input type="number" className="form-control" id="mobile" placeholder="Enter Mobile Number" value={phone}  onChange={(e)=>{setPhone(e.target.value)}} />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="Price" className="col-sm-3 col-form-label">
          Price:
        </label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="Price" placeholder="Enter Price"   value={packageDetails.price || price}
            onChange={(e) => setPrice(e.target.value)}
            required />
        </div>
      </div>

   
      <div className="row mb-3">
        <label htmlFor="Facility" className="col-sm-3 col-form-label">
          Facility:
        </label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="Facility" placeholder="Enter Facility"
           value={packageDetails.facility || facility}
           onChange={(e)=>{setFacility(e.target.value)}} />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="Duration" className="col-sm-3 col-form-label">
          Duration:
        </label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="Duration" placeholder="Enter Duration"
            value={packageDetails.duration || duration}
            onChange={(e)=>{setDuration(e.target.value)}} />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="Tour code" className="col-sm-3 col-form-label">
          Tour code:
        </label>
        <div className="col-sm-9">
          <input type="text" className="form-control" id="Tour code" placeholder="Enter Tour code"
          value={ packageDetails.tourcode|| tourcode }
                    onChange={(e) => setTourcode(e.target.value)}
                    required />
        </div>
      </div>

      <button type="submit" style={{margin:"10px"}} className="custom-button d-flex justify-content-center align-items-center btn btn-info">
        Submit Form
      </button>
    </form>


  </div>




    </div>
    </div>

    </div>
    </div>
    {/* main closed */}
    
    {/* Image */}
     <div className="full-page-image1" style={{marginTop:"70px"}}>
  <a className="navbar-brand1" href="#nav">
    <img src={Tours1} className="carrental" alt="package" />
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

    {/* conatct */}
      <div className='div'style={{marginTop:"60px"}}>
    <h4><b>Have Queries? Please call +(91) 9829119492</b>|<Link className='link'>Email: tours@udaipurtraveling.com</Link> 
    </h4>
      </div>
    {/* conatct end */}
   <Footer/>
    </div>
  )
}
export default Packagedetails