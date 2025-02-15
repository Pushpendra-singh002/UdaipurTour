import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import rental1 from '../Images/rental2.jpg'
import '../Components/CarRental.css'
import Tours1 from '../Images/Tours1.jpg'
import { IoMdHappy } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa6";
import Car from '../Images/Car.jpeg'
import { Link } from "react-router-dom";
import { MdEventAvailable } from "react-icons/md";
import { BsBookmarkFill } from "react-icons/bs";
import { IoMdPerson } from "react-icons/io";
import { IoMailOpenOutline } from "react-icons/io5";
import { FaAngleDoubleRight , FaHome } from "react-icons/fa";
import Footer from './Footer';
 import axios from 'axios';
// import { useEffect } from 'react';

function CarRental() {
  const [data, setData] = useState([])


  useEffect(()=>{
    axios.get('http://localhost:5002/api/carrental')
    .then((res)=>{
      console.log(res.data.data)
     setData(res.data.data)
    })
   },[])
 
//   const cardsData = [
//     {
//       title: "Udaipur Airport to city Hotel or vice versa",
//       carOptions: [
//         { type: "Deluxe", price: 899 },
//         { type: "XUV/MUV", price: 1199 },
//         { type: "Tempo Traveller", price: 1999 },
//       ],
//     },
//     {
//       title: "Udaipur Full Day sightseeing 8 Hrs / 80 Kms",
//       carOptions: [
//         { type: "Deluxe", price: 1999 },
//         { type: "XUV/MUV", price: 2499 },
//         { type: "Tempo Traveller", price: 3999 },
//       ],
//     },
//     {
//       title: "Day Return or drop to Eklingji and Nagda",
//       carOptions: [
//         { type: "Deluxe", price: 1099 },
//         { type: "XUV/MUV", price: 1399 },
//         { type: "Tempo Traveller", price: 2499 },
//       ],
//     },
//     {
//       title: "Day Return or drop to Jaisamand Lake & Jagat Temple",
//       carOptions: [
//         { type: "Deluxe", price: 1999 },
//         { type: "XUV/MUV", price: 2499 },
//         { type: "Tempo Traveller", price: 2999 },
//       ],
//     },
//     {
//       title: "Day Return Trip of Chittaurgarh Tour",
//       carOptions: [
//         { type: "Deluxe", price: 2799 },
//         { type: "XUV/MUV", price: 3199 },
//         { type: "Tempo Traveller", price: 4399 },
//       ],
//     },
//     {
//       title: "Day Return Trip of Kumbhalgarh & Ranakpur",
//       carOptions: [
//         { type: "Deluxe", price: 2799 },
//         { type: "XUV/MUV", price: 3399 },
//         { type: "Tempo Traveller", price: 4299 },
//       ],
//     },
//     {
//       title: "Udaipur to Jaipur dropping",
//       carOptions: [
//         { type: "Deluxe", price: 8499 },
//         { type: "XUV/MUV", price: 11999 },
//         { type: "Tempo Traveller", price: 14500 },
//       ],
//     },
//     {
//       title: "Udaipur to Ahmedabad dropping",
//       carOptions: [
//         { type: "Deluxe", price: 5499 },
//         { type: "XUV/MUV", price: 6999 },
//         { type: "Tempo Traveller", price: 9999 },
//       ],
//     },
//     {
//       title: "Udaipur to Jaisalmer dropping",
//       carOptions: [
//         { type: "Deluxe", price: 10500 },
//         { type: "XUV/MUV", price: 13500 },
//         { type: "Tempo Traveller", price: 18999 },
//       ],
//     },

// ];
  
  return (
   <div>
    <Navbar/>

      {/* Image */}
      <div className="full-page-image" style={{marginTop:"60px", width:"100%" ,height:"400px"}}>
  <a className="navbar-brand1" href="#nav">
    <img src={rental1} className="carrental" alt="package" />
  </a>
      </div>
      {/*image close */}

      {/*heading */}
       <div className="page-nav no-margin row">
  <div className="container">
  <div className="row justify-content-center align-items-center text-center">
      <h2 className="animated-heading">Car Rental</h2>
      <br></br>
      <ul className="breadcrumb">
        <li>
          <a href="/home" className="home-link">
            <FaHome /> Home
          </a>
        </li>
        <li>
          <FaAngleDoubleRight /> Car Rental
        </li>
      </ul>
    </div>
  </div>
      </div>
      {/*heading close */}

      {/*CarRental Details */}
      <br></br>
      <div>

      <h2 className='h2'><b>Car Rental in Udaipur</b></h2>

      <div className="horizontal-p-container parent">
        <p className='child'><MdEventAvailable />Available 24x7</p> 
        <p className='child'><BsBookmarkFill />Sedan, MUV/ SUV, Tempo Traveler and more</p>
        <p className='child'><IoMdPerson />Clean & Well Car</p>
        <p className='child'><IoMailOpenOutline />Customize</p>
      </div>

     <div className="rental-summary-card">
  <div className="row">
    <div className="col-md-8 content-section">
      <div className="content">
        <h6 className="title">Rental Summary</h6>
        <br></br>
        <ul className="rental-list">
        <li>Car type booked will have space for your luggage.</li>
        <li>Toll Tax & Parking at actuals.</li>
        <li>Rental Price is Per Car.</li>
        </ul>
       
      </div>
    </div>
    <div className="col-md-4 image-section">
      <img
        src={Car}
        className="img-fluid rounded-start rental-image"
        alt="Rental Car"
      />
    </div>
  </div>
     </div>
      </div>
      {/* CarRental Details close */}

      {/* Car details */}
      <div id="main" className='main1'>
      <div className='container'>
      <h1><b>Book Your Car Today!</b></h1>
      <br></br>
      <p><b>Discover our top-notch selection of featured car models, tailored to meet every travel need in Udaipur</b></p>
      <div className='container-fluid' >
      <div className='row'>


      {data && data.length > 0 ? (
  data.map((item, index) => (
    <div className="col-md-3" key={index} style={{ width: "350px" ,marginBottom:"20px",marginRight:"30px",  borderRadius:"5px", boxShadow:"0 4px 8px 0 rgba(0,0,0,0.9)", transition:"0.3s"}}>
      <img
        src={`http://localhost:5002/${item.imageUrl}`}
        className="carrental"
        alt={item.carname || "Car"}
        style={{ height: "200px", width: "300px" , mixBlendMode:"darken"}}
      />
      <h4 className="h3">
        <b>{item.carname}</b>
      </h4>
      <p>{item.seater}</p>
      <h5 className="h">
        <b>Starting from INR{item.price}</b>
      </h5> 
      <span style={{marginRight:"50px", marginTop:"20px", marginLeft:"20px"}}>
        
      <a href="tel:+1-555-555-1212">
        <button type="button" className="btn btn-outline-info">
          <b>CALL NOW</b>
        </button>
      </a></span>
      {/* <div
        className="bottom right-100 p-3 whatsapp-container"
        style={{ zIndex: "6", left: "initial" }}
      > */}
        <a
          href="https://wa.me/9001897580?text=Hello How can I help you?"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="btn btn-outline-info">
            <b>WHATSAPP</b>
          </button>
        </a>
        
      {/* </div> */}
      <Link
                to={`/cardetails/${item._id}`}
                className="btn btn-info"
                style={{
                  backgroundColor: "#4ac4f3", marginTop: "20px", 
                  width: "100%", padding: "10px", borderRadius: "5px",
                  marginBottom:"20px"
                }}
              >
                <b>View Details</b>
              </Link>
     
    </div>
  ))
      ) : (
  <p>No data</p>
      )}



    



      

  

  </div>



      <br></br>
      {/* <div className='col-md-3'>
      <img src="https://carrentalinudaipur.in/wp-content/uploads/2024/10/toyota-fortuner-transparent.png" style={{height:"200px",width:"300px"}} className="carrental" alt="creta" />
       <h4 className='h3'><b>Hyundai Creta</b></h4>
       <p>4 seater car for you</p>
       <h5 className='h'><b>Starting from INR 2000</b></h5>
      <a href="tel:+1-555-555-1212">
      <button type="button" class="btn btn-outline-info">CALL NOW</button> 
      </a>
    <div className='bottom right-100 p-3 whatsapp-container' style={{zIndex:"6", left:"initial"}}>
  <a href="https://wa.me/9001897580?text=Hello How can I help you?" target="_blank" rel="noreferrer">
  <button type="button" class="btn btn-outline-info">WHATSAPP</button>
  </a>
    </div>
        <button type="button" className="btn btn-lg "  onClick={() => window.location.href =`/carrental/details`}>View Details</button>
      </div> */}
      <br></br>
      {/* <div className='col-md-3'>
      <img src="https://carrentalinudaipur.in/wp-content/uploads/2024/10/mahindra-thar-transparent-1.webp" style={{height:"200px",width:"300px"}} className="carrental" alt="creta" />
       <h4 className='h3'><b>Hyundai Creta</b></h4>
       <p>4 seater car for you</p>
       <h5 className='h'><b>Starting from INR 2000</b></h5>
      <a href="tel:+1-555-555-1212">
      <button type="button" class="btn btn-outline-info">CALL NOW</button> 
      </a>
    <div className='bottom right-100 p-3 whatsapp-container' style={{zIndex:"6", left:"initial"}}>
  <a href="https://wa.me/9001897580?text=Hello How can I help you?" target="_blank" rel="noreferrer">
  <button type="button" class="btn btn-outline-info">WHATSAPP</button>
  </a>
    </div>
        <button type="button" className="btn btn-lg "  onClick={() => window.location.href =`/carrental/details`}>View Details</button>
      </div> */}
      <br></br>
      {/* <div className='col-md-3'>
      <img src="https://carrentalinudaipur.in/wp-content/uploads/2024/10/hyundai-creta-car-transparent-1.webp" style={{height:"200px",width:"300px"}} className="carrental" alt="creta" />
       <h4 className='h3'><b>Hyundai Creta</b></h4>
       <p>4 seater car for you</p>
       <h5 className='h'><b>Starting from INR 2000</b></h5>
      <a href="tel:+1-555-555-1212">
      <button type="button" class="btn btn-outline-info">CALL NOW</button> 
      </a>
    <div className='bottom right-100 p-3 whatsapp-container' style={{zIndex:"6", left:"initial"}}>
  <a href="https://wa.me/9001897580?text=Hello How can I help you?" target="_blank" rel="noreferrer">
  <button type="button" class="btn btn-outline-info">WHATSAPP</button>
  </a>
    </div>
        <button type="button" className="btn btn-lg "  onClick={() => window.location.href =`/carrental/details`}>View Details</button>
      </div> */}
      </div>
      </div>

      </div>


    
      {/* Car details close */}

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
export default CarRental