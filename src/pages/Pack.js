import React, { useEffect, useState }  from 'react'
import {Link,  useParams, useLocation, useNavigate } from "react-router-dom";
import Navbar from './Navbar'
import axios from 'axios';

// import Tours1 from '../Images/Tours1.jpg'
import { IoMdHappy } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa6";
import { RiArrowGoBackFill } from "react-icons/ri";
function Pack() { const location = useLocation();
    const  packageDetails = location.state || {};
    
    
      const { id } = useParams() || {}  
      // const [userId, setUserId]= useState({_id:''})
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
           const [suc, setSuc]= useState('')
         
        
    //  const navigate = useNavigate()
         useEffect(() => {
         
           const storedUsername = sessionStorage.getItem('username');
           const storedPhone = sessionStorage.getItem('phone');
           const storedEmail = sessionStorage.getItem('email');
         //  const storeAddress = sessionStorage.getItem('address');
           console.log('Session data:', {
            //  storedUserId, 
            storedUsername, storedPhone, storedEmail, 
           });
           if ( storedUsername && storedPhone && storedEmail
             ) {
              //  setUserId(storedUserId );
               setName(storedUsername); // Set name directly to the string
               setPhone(storedPhone); // Set phone directly to the string
               setEmail(storedEmail); 
               // setAddress(storeAddress)
           } else if (id) {
               // Fetch user data from the backend
               axios.get(`http://localhost:5002/api/user/${id}`)
                   .then((res) =>{ 
                    // setUserId(res.data._id)
                     setName(res.data.username);
               setPhone(res.data.phone);
               setEmail(res.data.email);
               
                    //  sessionStorage.setItem('userId', res.data._id);
                     sessionStorage.setItem('username', res.data.username);
                     sessionStorage.setItem('phone', res.data.phone);
                     sessionStorage.setItem('email', res.data.email);
                     // sessionStorage.setItem('address', res.data.address);
                     
            } )
                   .catch((err) => console.log('Error fetching user data:', err));
           } else {
               console.error('No user ID found in URL or sessionStorage');
           }
       }, [id]);
     
     
         const handleSubmit = (e) => {
           e.preventDefault();
           
           axios.post(`http://localhost:5002/api/udaipur`, {
             // user:user, // Replace with actual user ID if available or from context
             username:name,
             email,
             phone,
             facility,
             duration,
             price,
             heading,
             date,
             adults,
             children,
             tourcode,
  
           })
           .then(result => {
             console.log(result);
            
           })
           .catch(err => console.log(err));
         };
         const navigate = useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:5002/pack',{withCredentials: true})
  
     .then(result => {
       if (result.data === "Success") {
        setSuc("successded ok")
       }else{
        navigate(`/login`)
       }
     })
     .catch(err => {
       // In case of any error during the request, handle it here
       console.error("Login error: ", err);
       alert('An error occurred during login');
     })
    },) 

  return (
    <div>
      <Navbar/>
      {suc}
   {/* main */}
   <div className='conatiner fluid ' style={{marginTop:"50px", marginLeft:"20px"}}>
    
   <div className='row'>
    <h3 style={{marginTop:"50px", marginLeft:"30px", color:"black"}}>
   <Link style={{color:"black"}} to={'/package'}><RiArrowGoBackFill/> Go Back</Link></h3>
    <div className="col-md-6">
    <div className="row align-items-left">
    <div className='card' style={{width:"30rem", marginTop:"40px"}}>
      <h3 className='cardetails'>UDAIPUR CAR RENTAL BOOKING:</h3>
      <br></br>
      <div className='text-start'>
        <h2 className="cardetails">UDAIPUR PACKAGE BOOKING:</h2>
        <br></br>
              <p><strong>Package:</strong> {packageDetails.name}</p>
              <p><strong>Price:</strong> {packageDetails.price}</p>
              <p><strong>Duration:</strong> {packageDetails.duration}</p>
              <p><strong>Facility:</strong> {packageDetails.facility}</p>
              <p><strong>Tour code:</strong> {packageDetails.tourcode}</p>


          
              <p>Final amount will be calculated and sent to your email address.</p>
        </div>
      
      </div>
    </div>
    </div>

     <div className='col-md-5'>
    <div className="row d-flex justify-content-between align-items-end">
    <div className='card' style={{width:"40rem", marginTop:"40px"}}>
    <form className="col-md-12" onSubmit={handleSubmit}>
      <h2 className="text">PLEASE FILL YOUR DETAILS HERE:</h2>
      <br></br>
      <div className='row'>
     <div className='col mb-3'>
     <label htmlFor="Adults" className="col-sm-3 col-form-label">
          Adults:
        </label>
      <select className="form-select" id='Adults' defaultValue="Select Adults" value={adults} onChange={(e) => setAdults(e.target.value)} aria-label="Default select example">
  {/* <option selected>Adults</option> */}
  <option value="1" selected>1</option>
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
     <label htmlFor="children" className="col-sm-3 col-form-label">
          Children:
        </label>
     <select className="form-select" id='children' defaultValue="Select children" value={children} onChange={(e) => setChildren(e.target.value)} aria-label="Default select example">
  {/* <option selected>Children</option> */}
  <option value="1" selected>1</option>
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
        <label htmlFor="Date" className="col-sm-3 col-form-label">
          Date of Travel:
        </label>
        <div className="col-sm-9">
          <input type="date" placeholder="Enter Date of Travel" className="form-control" id="date" required 
          value={date}
          onChange={(e)=>{setDate(e.target.value)}} />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="name" className="col-sm-3 col-form-label">
          Name:
        </label>
        <div className="col-sm-9">
          <input type="text" placeholder="Enter Name" className="form-control" id="name" required
          value={name} 
          onChange={(e)=>{setName(e.target.value)}} />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
          Email:
        </label>
        <div className="col-sm-9">
          <input type="email" className="form-control" id="inputEmail3" placeholder="Enter exampal@gmail.com" required 
          value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
           />
        </div>
      </div>


      <div className="row mb-3">
        <label htmlFor="quantity" className="col-sm-3 col-form-label">
          Mo Number:
        </label>
        <div className="col-sm-9">
          
          <input type="number"  className="form-control" id="quantity" placeholder="Enter Mobile Number" value={phone}  onChange={(e)=>{setPhone(e.target.value)}} />
        </div>
      </div>
     
    <>
      {/* Package Name */}
      <div className="row mb-3">
        <label htmlFor="heading" className="col-sm-3 col-form-label">
          Package Name:
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="heading"
            placeholder="Enter Package Name"
            value={ packageDetails.name || heading}
            onChange={(e) => setHeading(e.target.value)}
            required
          />
        </div>
      </div>
      {/* <div className="row mb-3">
        <label htmlFor="heading" className="col-sm-3 col-form-label">
          Package Name:
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="heading"
            placeholder="Enter Package Name"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            required
          />
        </div>
      </div> */}
      <div className="row mb-3">
                <label htmlFor="tourcode" className="col-sm-3 col-form-label">
                  Tourcode:
                </label>
                <div className="col-sm-9">
                  <input
                    type="text"
                    className="form-control"
                    id="tourcode"
                    placeholder="Enter Package Name"
                    value={ packageDetails.tourcode|| tourcode }
                    onChange={(e) => setTourcode(e.target.value)}
                    required
                  />
                </div>
              </div> 
      <div className="row mb-3">
        <label htmlFor="Duration" className="col-sm-3 col-form-label">
          Duration:
        </label>
        <div className="col-sm-9">
          <input type="text" placeholder="Enter Duration" className="form-control" id="Duration" required 
          value={packageDetails.duration || duration}
          onChange={(e)=>{setDuration(e.target.value)}} />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="facility" className="col-sm-3 col-form-label">
          Facility:
        </label>
        <div className="col-sm-9">
          <input type="text" placeholder="Enter Facility" className="form-control" id="facility" required 
          value={packageDetails.facility || facility}
          onChange={(e)=>{setFacility(e.target.value)}} />
        </div>
      </div>
    
     
      {/* Price */}
      <div className="row mb-3">
        <label htmlFor="price" className="col-sm-3 col-form-label">
          Price:
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="price"
            placeholder="Enter Price"
            value={packageDetails.price || price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>
    </>

    


      {/* // <div className="row mb-3">
      //   <label htmlFor="exampleFormControlTextarea" className="col-sm-3 col-form-label">
      //     Enter Message:
      //   </label>
      //   <div className="col-sm-9">
      //     <textarea
      //       className="form-control"
      //       id="exampleFormControlTextarea"
      //       placeholder="Enter Message"
      //       rows="5"
      //       onChange={(e)=>{setmsg(e.target.value)}}
      //     />
      //   </div>
      // </div> */}

      <button type="submit"  className="custom-button btn btn-info" >
        Submit Form
      </button>
      <br></br>
      <br></br>
    </form>


  </div>




    </div>
    </div>
 

    </div>
    </div>
   {/* main close */}


    {/* Image */}
     <div className="full-page-image1 " style={{marginTop:"70px"}}>
  <a className="navbar-brand1" href="#nav">
    {/* <img src={Tours1} className="carrental" alt="package" /> */}
  </a>
  <div className="overlay-content">
    <div className="horizontal-content parent">
      <div className="content-item child-home-1">
        <IoMdHappy className="icon-happy" />
        <h1><b>3,000</b></h1>
        <h5>+Happy Clients</h5>
      </div>
      <div className="content-item child-home-1">
        <SlLike  className="icon-happy" />
        <h1><b>Private</b></h1>
        <h5>and Safe Tours</h5>
      </div>
      <div className="content-item child-home-1">
        <MdSupportAgent  className="icon-happy" />
        <h1><b>365x7</b></h1>
        <h5>Support Desk</h5>
      </div>
      <div className="content-item child-home-1">
        <FaRegStar className="icon-happy" />
        <h1><b>Excellent</b></h1>
        <h5>Value for Money</h5>
      </div>
    </div>
  </div>
          </div>
    {/* image close */}

    {/* contact   */}
    <div className='div'style={{marginTop:"60px"}}>
      <h4><b>Have Queries? Please call +(91) 9829119492</b>|<Link className='link'>Email: tours@udaipurtraveling.com</Link> 
       </h4>
    </div>
    {/* contact end */}




  
   </div>
    
  )
}

export default Pack
