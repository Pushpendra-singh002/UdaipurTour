import React, { useState, useEffect } from 'react'
import {Link, useParams} from "react-router-dom";
import Navbar from './Navbar'
import Tours1 from '../Images/Tours1.jpg'
import { IoMdHappy } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa6";
import Footer from './Footer';
import "../Components/CarRentalDetails.css";
import * as emailjs from "emailjs-com"
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function CarRentalDetails() {
     const { id, } = useParams() || {}  

     const [item, setItem] = useState({
      carname:"",
      price:"",
     })
     const [data , setData] = useState([])
     const [name, setName]= useState({username:""})
     const [email, setEmail]= useState({email:""})
     const [phone, setPhone]=useState({phone:""})
     const [children, setChildren]= useState('')
     const [adults, setAdults]= useState('')
     const [date, setDate]= useState('')    
   
     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);
    
       
   useEffect(() => {
       const fetchUserData = async () =>{
       const storedUsername = ('username');
       const storedPhone = ('phone');
       const storedEmail = ('email');
       
       if ( storedUsername && storedPhone && storedEmail) {
           setName(storedUsername); 
           setPhone(storedPhone); 
           setEmail(storedEmail); 
          
       } else if (id) {
           try{
       const res = await axios.get(`http://localhost:5002/api/user/${id}`);
              
                
           setName(res.data.username);
           setPhone(res.data.phone);
           setEmail(res.data.email);
           sessionStorage.setItem('username', res.data.username);
           sessionStorage.setItem('phone', res.data.phone);
           sessionStorage.setItem('email', res.data.email);
          } catch(err) {
           console.error('Error fetching user data:', err);
       }
       } else {
           console.error('No user ID found in URL or sessionStorage');
       }
      };
      fetchUserData();
     }, [id]);

     useEffect(() => {
      const fetchCarDetails = async () => {
        setLoading(true);
        try {
          const res = await axios.get(`http://localhost:5002/api/carrental/${id}`);
          const packages = res.data.data || {};
          setItem({
            carname: packages.carname || "",
            price: packages.price || "",
          });
        } catch (err) {
          setError('Failed to load car details');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
  
      if (id) fetchCarDetails();
    }, [id]);
    
    useEffect(()=>{
      axios.get('http://localhost:5002/api/customer')
      .then((res)=>{
        console.log(res.data)
        setData(res.data.data)
     })
    },[])
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        await axios.post(`http://localhost:5002/api/users`, {
          username: name,
          email,
          phone,
          date,
          adults,
          children,
          carname: item.carname, 
          price: item.price,
        });
        alert("Form submitted successfully!")
        Sendmail();
       
      } catch (err) {
        console.error('Error submitting form:', err);
      }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
     
    function Sendmail(){
      const Data ={
       to_name:name,
       to_email:email,
       to_date:Date,
       to_number:Number,
      }
      const Service_id ="service_1h1fhod";
      const Template_id="template_3muncdj";
      const user_id="N3BHC6W8StLNJFr3z"
   
      emailjs.send(Service_id,Template_id,Data,user_id)
      .then(
       function(response){
         alert("Message send successfully")
   
         setName("");
         setEmail("");
       
         setDate("");
         setPhone("");
       },
       function(error){
         console.log(error)
       }
      )
      
     }
   
     const renderStars = (rating) => {
      return "★".repeat(rating) + "☆".repeat(5 - rating); 
    };
  
    
    const getRatingLabel = (rating) => {
      const labels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
      return labels[rating - 1];
    };

    const chunkArray = (arr, size) =>
      arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);
    const carouselChunks = chunkArray(data, 3); // Adjust size as needed
    
   
     return (
    <div>
    <Navbar/>
    {/* main */}
     <div className='conatiner fluid' style={{marginTop:"100px"}}>
    <div className='row'>

    <div className="col-md-6">
            <div className="row align-items-left">
              <div className='card' style={{ width: "30rem", marginTop: "40px" }}>
                <h3 className='cardetails'>UDAIPUR CAR RENTAL BOOKING:</h3>
                <br />
                {item.carname ? (
                  <div className="text-start">
                    <h5>Car Rental Booking / Request</h5>
                    <p>Car Details and Service Information</p>
                    <p>
                      <strong>Car Type:</strong> {item.carname}
                    </p>
                    <p>
                      <strong>Price:</strong> ₹{item.price}
                    </p>
                    <p>Final Amount will be calculated and sent to your email address.</p>
                  </div>
                ) : (
                  <p>No car selected. Please go back and select a car.</p>
                )}
              </div>
            </div>
    </div>
    
    <div className='col-md-5'>
            <div className="row d-flex justify-content-between align-items-end">
              <div className='card' style={{ width: "40rem", marginTop: "40px" }}>
                <form className="col-md-12" onSubmit={handleSubmit}>
                  <h2 className="text">PLEASE FILL YOUR DETAILS HERE:</h2>
                  <br />
                  <div className='row'>
                    <div className='col mb-3'>
                      <label htmlFor="Adults" className="col-sm-3 col-form-label">Adults:</label>
                      <select
                        className="form-select"
                        id='Adults'
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        required
                      >
                        <option value="">Select Adults</option>
                        {[...Array(10).keys()].map(num => (
                          <option key={num + 1} value={num + 1}>{num + 1}</option>
                        ))}
                      </select>
                    </div>

                    <div className='col mb-3'>
                      <label htmlFor="children" className="col-sm-3 col-form-label">Children</label>
                      <select
                        className="form-select"
                        id='children'
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                        required
                      >
                        <option value="">Select Children</option>
                        {[...Array(10).keys()].map(num => (
                          <option key={num + 1} value={num + 1}>{num + 1}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="Date" className="col-sm-3 col-form-label">Date of Travel:</label>
                    <div className="col-sm-9">
                      <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Name:</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">Email:</label>
                    <div className="col-sm-9">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label htmlFor="quantity" className="col-sm-3 col-form-label">Mo Number:</label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        className="form-control"
                        id="quantity"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                 
                     <div className="row mb-3">
                    <label htmlFor="carname" className="col-sm-3 col-form-label">Car name:</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="carname"
                        value={item.carname}
                        onChange={(e) => setItem({ ...item, carname: e.target.value })}

                        required
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label htmlFor="carname" className="col-sm-3 col-form-label">Price:</label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="carname"
                        value={item.price}
                        onChange={(e) => setItem({ ...item, price: e.target.value })}

                        required
                      />
                    </div></div>
                  <button type="submit" className="custom-button btn btn-info"  onClick={()=>{Sendmail()}}>Submit Form</button>
                  <br />
                  <br />
                </form>
              </div>
            </div>
    </div>
       
     </div>
     </div>
    {/* main close */}

    {/* Review part */}
    
    <div className='container'>
    <div className="row align-items">
    <div className="col-md-9 text-section">
      <h3 className='heading'>What our customers say?</h3>
      <button 
        type="button" 
        className="btn btn-lg btn-outline-light" 
        style={{ color: '#4ac4f3' }}  
        onClick={() => window.location.href = `/reviewdetails/${id}`}>
        <b>FINISH YOUR REVIEW</b>
      </button>
      <p><i><b>Rajasthan's most popular tourist destination</b></i></p>
    </div>
    </div>
    
    {/* <div>
        <h2>All data:</h2>
        <br></br>
       
        {data.length === 0 ? (
          <p>No data yet. Be the first to add one!</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {data.map((review, index) => (
              <li
                key={index}
                style={{
                  
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
            
      {!review.hidden && (
        <>
        <strong>{review.username}</strong>
        <p>{review.title}</p>
          <p>{review.comment}</p>
          <p>
            Rating:{" "}
            <span style={{ color: "#FFD700", fontSize: "18px" }}>
              {renderStars(review.rating)}
            </span>{" "}
            ({getRatingLabel(review.rating)})
          </p>
        </>
      )}
                
             
             
           
              </li>
              
            ))}
          </ul>
        )}
        <br></br>
     
    </div> */}

    <div className='container-fluid'>
  <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {carouselChunks.map((chunk, index) => (
        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
          <div className="row" style={{ padding: "20px",backgroundColor:"#f8f9fa", borderRadius:"5px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.9)", }}> 
            {chunk.map((review, i) => (
                <div className="col-md-4" key={i}>
                <strong>{review.username}</strong>
                <p>{review.title}</p>
                  <p>{review.comment}</p>
                  <p>
                    Rating:{" "}
                    <span style={{ color: "#FFD700", fontSize: "18px" }}>
                      {renderStars(review.rating)}
                    </span>{" "}
                    ({getRatingLabel(review.rating)})
                  </p>
                </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Carousel Controls */}
    <button className="carousel-control-prev" type="button" data-bs-target="#reviewCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#reviewCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
</div>

    </div> 
 
    {/* Review close */}

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

    {/* contact   */}
    <div className='div'style={{marginTop:"60px"}}>
      <h4><b>Have Queries? Please call +(91) 9829119492</b>|<Link className='link'>Email: tours@udaipurtraveling.com</Link> 
       </h4>
    </div>
    {/* contact end */}
    <Footer/>
   
    </div>
  )
}
export default CarRentalDetails