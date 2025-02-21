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
     const [username, setusername] = useState(""); 
       const [comment, setComment] = useState(""); 
       const [rating, setRating] = useState(1);   
       const [title , setTitle] = useState('')
       

        const handleSubmits = async (e) => {
          e.preventDefault();
        
          // Ensure the user has entered both a username and a comment
          if (!username || !comment || !title) {
            alert("Please enter your username and a comment.");
            return;
          }
        
          // Prepare the data to send
          const newReview = { username, comment, rating , title};
        
          try {
            // Send data to the backend
            const response = await axios.post("http://localhost:5002/api/customer", newReview);
        
            // Handle the response if needed (e.g., show success message or log response)
            console.log("Review added successfully:", response.data);
           navigator('/udaipurtourism')
            // Add the new review to the UI state
            setData([...data, newReview]);
        
            // Clear the form fields
            setusername("");
            setComment("");
            setTitle('')
            setRating(1); // Reset rating to 1
          } catch (error) {
            console.error("Error adding review:", error);
            alert("An error occurred while submitting your review. Please try again.");
          }
        };

  
       
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
   
    
   
     return (
    <div  style={{marginTop:"100px", background:"whitesmoke"}}>
    <Navbar/>
    {/* main */}
     <div className='conatiner fluid'>
    <div className='row'>

    <div className="col-md-5" >
            <div className="row align-items-left">
              <div className='' style={{ marginTop:"40px",padding:"4rem",borderRadius:"5px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.9)",marginLeft:"5%" ,width:"400px"}}>
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
              <div style={{ marginTop: "40px", padding:"10px",boxShadow:"0 4px 8px 0 rgba(0,0,0,0.9)",marginLeft:"10px",}}>
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
   <div className='d-flex justify-content-center align-item-center' >
      {/* Form to Add data */}
      
      <form onSubmit={handleSubmits} style={{  marginBottom: "20px" , borderRadius:"5px", width:"380px",margin:"30px",padding:"20px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.9)"}}>
    <h1>Add Review</h1>
        <div className="mb-3" >
          <label htmlFor="user">
            <b>
            username:
            </b>
            <input
              type="text"
              id="user"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              style={{ width: "300px",marginTop:"2px"}}
            />
          </label>
        </div>
        <div className="mb-3" >
          <label htmlFor="comment">
            <b>
               Comment:
            </b>
            <textarea
            id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{ width: "300px",   }}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="title">
            <b>
            Title:
            </b>
            <br></br>
            <input
            id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "300px",  }}
            />
          </label>
        </div>
        <div className="mb-3" >
          <label htmlFor="rating">
            <b>
            Rating:
            </b>
            <br></br>
            <select id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              style={{ width: "300px",  }}
            >
              <option value={1}>1 - Poor</option>
              <option value={2}>2 - Fair</option>
              <option value={3}>3 - Good</option>
              <option value={4}>4 - Very Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </label>
        </div>
        <button type="submit" className="btn btn-info" style={{ padding: "5px 10px", cursor: "pointer" }}>
          Submit Review
        </button>
      </form>
      </div>
    {/* Review part */}
    
   
 
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