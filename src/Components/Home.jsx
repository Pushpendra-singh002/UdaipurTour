/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Navbar from './Navbar'
import { MdOutlineCardTravel } from "react-icons/md";
import { BsPersonFillAdd } from "react-icons/bs";
import { FaHouseFloodWaterCircleArrowRight } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import Carousel1 from '../Images/Carousel1.jpg'
import Carousel3 from '../Images/Carousel3.jpg'
import Carousel2 from '../Images/Carousel2.jpg'
import Car1 from '../Images/Car1.jpg';
import About from '../Images/About.jpg';
import Package6 from '../Images/Package6.jpg';
import Tourism2 from '../Images/Tourism2.jpg';
import Tourism3 from '../Images/fs.jpg';
import tour1 from '../Images/tour1.jpg';
import T from '../Images/lack.jpg';
import Package7 from "../Images/Package7.jpg";
import { FaCar } from "react-icons/fa";
import "./Navbar.css"
import "./Home.css"
import Footer from './Footer'


function Home() {
  return (
    <div>
    <Navbar/>

  {/* Carousel start */}
  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{marginTop:"50px"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner" style={{color:"black"}}>
    <div className="carousel-item active">
      <img src={Carousel1} className="d-block w-100  faded-image" style={{height:"600px"}} alt="Udaipur"/>
      <div className="carousel-caption custom-caption">
        <h1 className="display-3"><b>UDAIPUR</b></h1>
        <h4>A beautiful city that overlooks Lake Pichola with the world-famous Lake Palace appearing to float on the water.</h4>
      <button type="button" className="btn btn-lg btn-outline-dark"  onClick={() => window.location.href =`/udaipurtourism`}><b>TAKE A TOUR</b></button>
      </div>
    </div>
    <div className="carousel-item" style={{color:"black"}}>
      <img src={Carousel2} className="d-block w-100  faded-image" style={{height:"600px", marginTop:"50px"}} alt="City Palace"/>
      <div className="carousel-caption custom-caption">
        <h1 className="display-3"><b>City Palace, Udaipur: A Regal Marvel</b></h1>
        <h4>The City Palace in Udaipur is a stunning architectural masterpiece that reflects the grandeur of Rajasthan's royal heritage.</h4>
        <button type="button" className="btn btn-lg btn-outline-dark"  onClick={() => window.location.href =`/udaipurtourism`}><b>TAKE A TOUR</b></button>
      </div>
    </div>
    <div className="carousel-item"  style={{color:"black"}}>
      <img src={Carousel3} className="d-block w-100 faded-image" style={{height:"600px"}}  alt="City of Lakes"/>
      <div className="carousel-caption custom-caption">
        <h1 className="display-3"><b>Udaipur: The City of Lakes</b></h1>
        <h4><b>Nestled in the heart of Rajasthan, Udaipur is a mesmerizing blend of history, culture, and natural beauty.</b></h4>
        <button type="button" className="btn btn-lg btn-outline-dark"  onClick={() => window.location.href =`/udaipurtourism`}><b>TAKE A TOUR</b></button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
    </div>
{/* Carousel end */}

  {/* about  */}
  <div className='main' marginTop='50px'>
  <div className='container' style={{marginTop:"50px"}}>

  <div className="row align-items">
    <div className="col-md-6 text-section">
      <h3 className='heading'>Welcome to Udaipur - City of Lakes</h3>
      <p><i><b>Rajasthan's most popular tourist destination</b></i></p>
      <p>Welcome to the world’s most romantic city settled in lush ranges of Aravalis, the city of Udaipur which is one of the most popular tourist destination in India. 
         Enjoy the enchanting look of the grand palaces, temples, appealing lakes, havellis and much more in the trip to the Venice of the East, Udaipur.
      </p>
      <p>Nestled in the heart of Rajasthan, Udaipur is a mesmerizing blend of history, culture, and natural beauty. Renowned as the "City of Lakes," it is home to shimmering waters, majestic palaces, and vibrant markets. 
         Whether strolling along the serene banks of Lake Pichola or exploring the grandeur of City Palace, Udaipur offers an unforgettable glimpse into India’s royal heritage.</p>
      <button type="button" className="btn btn-lg btn-outline-dark"  onClick={() => window.location.href =`/udaipurtourism`}>ABOUT UDAIPUR</button>
    </div>
    <div className="col-md-6 ">
      <div className="parent">
    <div class="row row-cols-1 row-cols-md-2 g-4  ">
  <div class="col child 
  ">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
   
      <img src={Package6} alt="Avatar" style={{width:"250px",height:"250px"}} />
    </div>
    <div className="flip-card-back">
     <MdOutlineCardTravel className='icon'/>
     <button type="button" className="btn btn-lg "  onClick={() => window.location.href =`/packages`}><b>TOUR PACKAGE & ITINERARY</b></button>
      <p>Explore Udaipur starting</p> 
      <p>at 2999/- per day</p>
    </div>
  </div>
  </div>
  
  </div>

  <div class="col child">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Car1} alt="Avatar" style={{width:"250px",height:"250px"}} />
    </div>
    <div class="flip-card-back">
    <FaCar className='icon'/>
    <button type="button" className="btn btn-lg "  onClick={() => window.location.href =`/carrental`}><b>CAR AND TAXI RENTAL</b></button>
      <p>Local and outstation car</p> 
      <p>rental services.</p>
    </div>
  </div>
  </div>
   
  </div>

  <div class="col child">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Package7} alt="Avatar" style={{width:"250px",height:"250px"}} />
    </div>
    <div class="flip-card-back">
    <FaHouseFloodWaterCircleArrowRight className='icon'/>
    <button type="button" className="btn btn-lg "  onClick={() => window.location.href =`/udaipurtourism`}><b>UDAIPUR TOURISM GUIDE</b></button>
      
      <p>Tourist information and</p> 
      <p>Udaipur city guide.</p>
    </div>
  </div>
  </div>
   
  </div>

  <div class="col child">
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={tour1} alt="Avatar" style={{width:"250px",height:"250px"}} />
    </div>
    <div class="flip-card-back">
    <BsPersonFillAdd className='icon' />
    <button type="button" className="btn btn-lg "  onClick={() => window.location.href =`/contact`}><b>365⨯7 HELP DESK</b></button>
      
      <p>Tour & Car Booking</p> 
      <p>travel assistance.</p>
    </div>
  </div>
  </div>
   
  </div>

</div>
</div>
    

     
    </div>
  </div>
</div>
  </div>
   {/* about close */}

   {/* about second */}
   <div className='container' style={{marginTop:"50px" ,display:"flex",justifyContent:"center", alignItems:"center", padding:"auto"}}>
   <div className="row align-items-center">
  <div className="col-md-6">
    <img src={About} className="pac img-fluid" style={{height:"300px", padding:"20px"}} alt="package" />
  </div>
  <div className="col-md-6 text-section1">
    <h3 style={{color:"black"}}><b>Tourist Attractions in Udaipur & Sightseeing information</b></h3>
    <p>
    Explore the mesmerizing world in the most popular tourist destination in India, Udaipur that is also popular as most loving place in India. 
    There are several attractive tourist spots in this dazzling city that can fill the senses of travelers with most beautiful memories that they can cherish forever.
    </p>
   
    <button type="button" className="btn btn-lg "  onClick={() => window.location.href =`/udaipurtourism`}>More Details<FaArrowRight /></button>
  </div>
 </div>


   </div>
   {/* about second close */}

   {/*Testimonial  */}
   <div class="container" id="testimonials-section">
  <div class="row">
    <div class="col-md-8 mx-auto text-center">
      <h2 class="testimonials-heading">UDAIPUR TOURISM</h2>
      <p className='p'><i>A Preview of Udaipur Tourist Destinations</i></p>
      <div id="testimonialsCarousel" class="carousel slide" data-bs-ride="carousel">
      <br></br>
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#testimonialsCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div class="carousel-inner"style={{padding:"20px"}}> 
          <div class="carousel-item active">
            <div class="testimonials-img-box">
              <img src={T} alt="" />
            </div>
            <p class="testimonials-text" style={{padding:"20px"}}>"The Lake Palace was built in 1743-1746. It is made of marble and is situated on Jag Niwas island in Lake Pichola. 
            It was originally built as a royal summer palace, but is now a luxury 5 Star hotel,
            operating under the “Taj Hotels Resorts and Palaces” banner."
           </p>
            <p class="testimonials-overview"><b>Lake Palace</b></p>
            <p className='p'>Udaipur</p>
           
          <br></br>
          </div>
          <div class="carousel-item" style={{padding:"20px"}}>
            <div class="testimonials-img-box" >
              <img src={Tourism2} alt="" />
            </div>
            <p class="testimonials-text"> "Standing on the east bank of Lake Pichola is a massive series of palaces built at different times from 1559. 
            The balconies of the palace provide panoramic views of the “Jag Niwas."</p>
            <p class="testimonials-overview"><b>City Palace</b></p>
            <p className='p'>Udaipur</p>
          </div>
          <div class="carousel-item" style={{padding:"20px"}}>
            <div class="testimonials-img-box" >
              <img src={Tourism3} alt="" />
            </div>
            <p class="testimonials-text">"Fateh Sagar Lake is situated in the north of Lake Picholas.
             It was originally built by Maharana Jai Singh in the year 1678 AD, but later on reconstructed and extended by Maharana Fateh Singh after much destruction was caused by heavy rains. 
             In 1993-1994, the water vanished from the lake, but in 2005-2006, the lake regained its water."</p>
            <p class="testimonials-overview"><b>Fateh Sagar Lake</b></p>
            <p className='p'>Udaipur</p>
          </div>
        </div>
      
        <br></br>
        <button class="carousel-control-prev"  type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next"   type="button" data-bs-target="#testimonialsCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
   </div>
   {/* Testimonial end */}
  <Footer/>
    </div>
  )
}

export default Home