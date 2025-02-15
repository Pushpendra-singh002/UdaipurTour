import React from 'react'
import Navbar from './Navbar'
import '../Components/Tourism.css'
import { Link } from 'react-router-dom'
import udaipur from '../Images/udaipur.jpg'
import T from '../Images/T.jpg'
import Tours1 from '../Images/Tours1.jpg'
import { IoMdHappy } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa6";
import Tourism1 from '../Images/Tourism1.jpg'
import Tourism2 from '../Images/Tourism2.jpg'
import Tourism3 from '../Images/Tourism3.jpg'
import Tourism4 from '../Images/Tourism4.jpg'
import Tourism5 from '../Images/Tourism5.jpg'
import Tourism6 from '../Images/Tourism6.jpeg'
import Tourism7 from '../Images/Tourism7.jpg'
import Tourism8 from '../Images/Tourism8.jpg'
import Tourism9 from '../Images/Tourism9.jpg'
import { FaAngleDoubleRight , FaHome } from "react-icons/fa";

function Tourism() {
  return (
    <div>
    <Navbar/>

    
     {/* Image */}
     <div className="full-page-image"  style={{marginTop:"70px", height:"500px"}}>
  <a className="navbar-brand1" href="#nav">
    <img src={udaipur} className="carrental" alt="package" />
  </a>
      </div>
      {/* image close */}

      {/* heading */}
      <div className="page-nav no-margin row">
  <div className="container">
  <div className="row justify-content-center align-items-center text-center">
      <h2 className="animated-heading">Udaipur Tourism</h2>
      <br></br>
      <ul className="breadcrumb">
        <li>
          <a href="/home" className="home-link">
            <FaHome /> Home
          </a>
        </li>
        <li>
          <FaAngleDoubleRight /> Udaipur Tourism
        </li>
      </ul>
    </div>
  </div>
      </div>
      {/* heading close */}

      {/* <main tag> */}
       <div className='main'>

     

      <div className="container">

  <div className="row align-items-center" style={{marginTop:"40px"}}>
    <div className="col-md-6 text-section">
      <h3 className='heading'><b>Udaipur Tourism</b></h3>
      <p>
        The lake city Udaipur that is also popular as ‘Venice of the East’, ‘Kashmir of Rajasthan’, ‘The most romantic city of India’ is the epicenter for performing crafts and arts is the capital of Mewar, the prior princely state. 
        Edged by Aravali’s lush green hills, Udaipur is the beautiful land surrounded by the sapphire water lakes and it is also popularly known as city of Dawn. 
        Architecture of the entire city is flattering and it adorns itself with temples, forts, palaces and hills. This makes it one of the most memorable and enchanting destination that attracts thousands of tourists.
        Abundance of copper and zinc mines is another fact that adds to the popularity of Udaipur.

      </p>
    </div>
    <div className="col-md-6">
      <img src={T} className="pac img-fluid" style={{height:"400px"}}  alt="package" />
    </div>
  </div>

 <div className="row align-items-center" style={{marginTop:"40px"}}>
  <div className="col-md-6">
    <img src={Tourism1} style={{height:"300px"}} className="pac img-fluid" alt="package" />
  </div>
  <div className="col-md-6 text-section">
    <h3 className="heading"><b>Lake Palace</b></h3>
    <p>
    Lake Palace is a superfluity 5 star hotel having 83 suits and rooms highlighting the walls of white marble. Located on the island of Jag Niwas, this refurbished heritage was earlier known as Jag Niwas that was luxury palace of Maharana Jagat Singh II. 4 acres are traversed by the natural foundation of this Palace located in Lake Pichola.
    A speed boat is operated by the hotel for the transport convenience of guests.
     
    </p>
  </div>
 </div>

<br></br>
<div className="row align-items-center" style={{marginTop:"40px"}}>
    <div className="col-md-6 text-section">
      <h3 className='heading'><b>City Palace</b></h3>
      <p>A perfect example of the grandeur enjoyed by the Mewar rulers eras ago is City Palace of Udaipur and it still has appearance that is just magnificent. 
      Located on Lake Pichola’s eastern banks, City Palace boosts the splendid fusion of European, Rajasthani, Mughal and Chinese architecture that makes it one of the most appealing factors of Udaipur.
      Lush green Aravali Mountains encircle the complex of City Palace that provides it a dazzling background and the monuments such as Neemach Mata temple, Jagdish Temple, Monsoon Palace, Jag Mandir, Lake Palace housed in it makes this palace the most appealing destination for the tourists.
     City Palace is completely made with granite and marble and several other factors are there that adds grace to beauty of City Palace such as wall paintings, attractive entreaty of marble work, inlay work, murals, silver work, mirror work.
     

      </p>
    </div>
    <div className="col-md-6">
      <img src={Tourism2} style={{height:"400px"}} className="pac img-fluid" alt="package" />
    </div>
</div>

<br></br>
<div className="row align-items-center" style={{marginTop:"40px"}}>
  <div className="col-md-6">
    <img src={Tourism3} style={{height:"400px"}} className="pac img-fluid" alt="package" />
  </div>
  <div className="col-md-6 text-section">
    <h3 className="heading"><b>Fateh Sagar Lake</b></h3>
    <p>After Jaisamand lake, the second artificial lake of Udaipur is Fateh Sagar Lake named after Maharana Fateh Singh of Mewar and Udaipur.
     The lake is constructed in 1680’s to Lake Pichola’s north and North West of Udaipur.
    With three channels for intake and one channel for overflow, Fateh Sagar Lake is very well organized. Usually, in the rainy season, the overflow channel is brought into play. Area of about 1 sq. km. is covered by the lake in the monsoons. 
    Three small islands embroider Fateh Sager Lake that could be accessed while enjoying boating in the lake. Nehru Park is the lake’s largest island that is developed into a park.
    A small zoo and boat-shaped restaurant are also embraced in this garden. 
    </p>
  </div>
</div>

<br></br>
<div className="row align-items-center" style={{marginTop:"40px"}}>
    <div className="col-md-6 text-section">
      <h3 className='heading'><b>Lake Pichola</b></h3>
      <p>Situated in the city of Udaipur, Lake Pichola is an artificial lake of fresh water named after the Picholi village. Within Lake Pichola are located two island known as Jag Mandir and Jag Niwas and to offer the enthralling views of lake, several palaces have been developed on these islands. Lake Pichola is also counted among the vital identity of the city of Udaipur. One must not miss the boat ride that starts from City Palace’s Rameshwar Ghat on Lake Pichola to get the memorable traveling experience. Two more popular islands are also there on Lake pichola: One is Arsi villas, built by Udaipur’s Maharanas which is a small palace and was formerly an ammo depot. This island also serves as a century for variety of birds such as coots, ducks, terns, ducks, kingfishers, cormorants, egrets etc.



      </p>
    </div>
    <div className="col-md-6">
      <img src={Tourism4} style={{height:"300px"}} className="pac img-fluid" alt="package" />
    </div>
</div>

  <br></br>
<div className="row align-items-center" style={{marginTop:"40px"}}>
  <div className="col-md-6">
    <img src={Tourism5} style={{height:"300px"}} className="pac img-fluid" alt="package" />
  </div>
  <div className="col-md-6 text-section">
    <h3 className="heading"><b>Gulab Bagh and Zoo</b></h3>
    <p>Gulab bagh was built and conceptualized by Maharanba Sajjan Singh and it is also popular as Sajjan Niwas garden. A large assortment of well-preserved roses is housed inside the garden that covers about 100 acres area. Located on Pichola lake’s bank, Gulab bagh is named after the roses that propagate here serves as the main attraction for the place. Several interesting animals are also there in the zoo of which, the ones that are must see are tigers, female leopards and chinkaras. Some huge owls and exceptional parakeets are also there in the bird section inside the zoo. Kids can also have fun and enjoy their visit to Gulab bagh since it also has a small toy train.
    </p>
  </div>
</div>

<br></br>
<div className="row align-items-center" style={{marginTop:"40px"}}>
    <div className="col-md-6 text-section">
      <h3 className='heading'><b>Sahelion ki Bari</b></h3>
      <p>One of the very famous tourist space and a major garden in Udaipur is Saheliyon-ki-bari. 
      Buit by Rana Sangram Singh, Saheliyon ki bari lies in city’s northern part. 
      Garden of the Maidens is the meaning of the word Saheliyon ki bari and one can enjoy the of marble elephants, pool of lotuses, beautifully carved kiosks and number of fountains in this place. 
      Any observer could be mesmerized by the breath taking view of garden’s splendid architecture. The loving ambience of this bravura garden is enhanced further by the pavilions of marble, flowerbeds and lush green lawns. It is believed that this garden was built by Maharana Sangram Singh and he has offered it to his wife as a gift. 
      



      </p>
    </div>
    <div className="col-md-6">
      <img src={Tourism6} style={{height:"400px"}} className="pac img-fluid" alt="package" />
    </div>
</div>


  <br></br>
  <div className="row align-items-center" style={{marginTop:"40px"}}>
  <div className="col-md-6">
    <img src={Tourism7} style={{height:"400px"}} className="pac img-fluid" alt="package" />
  </div>
  <div className="col-md-6 text-section">
    <h3 className="heading"><b>Sajjangarh Palace</b></h3>
    <p>A hilltop luxurious residence in Udaipur city is Sajjangarh Palace that is also popular as Monsoon palace. It is believed that to get the view of his inherited home in Chittorgarh, this palace was built by Maharana at the hilltop. A panoramic view of city’s palaces, lakes as well as the surrounding countryside is offered by the palace. To get the view of the mountain clouds, this palace has been built by Maharana and this is the reason why the palace is also popular as Monsoon Palace. In the evening, beautiful look of sunset could be enjoyed from the palace. At present, Government of Rajasthan’s forest department has the control of Sajjangarh Palace that was formerly owned by the royal family of Mewar.
    

    </p>
  </div>
</div>

<br></br>
<div className="row align-items-center" style={{marginTop:"40px"}}>
    <div className="col-md-6 text-section">
      <h3 className='heading'><b>Moti Magri</b></h3>
      <p>The history of Udaipur city is vast and runs in depth along with Mewar dynasty’s implausible culture and architecture. One of the popular place of the city of dawn, Udaipur that attracts number of tourists is Moti Magri. On the top of Moti Magri is situated Maharana Pratap’s statue. The eye catching view of Fateh Sagar Lake could be enjoyed from Moti magri that is also popular as pearl hill. For the purpose of paying tribute to Maharana Pratap, the fabulous Rajput hero, his statue was built with Chetak, his horse on the top of Moti Magri. This famous statue is prepared in bronze. The height of the statue of Maharana Pratap is 11 feet and its weight is 7 tonnes. 
      To enjoy the serene view of the city of Udaipur, Moti Magri is a perfect spot.


      </p>
    </div>
    <div className="col-md-6">
      <img src={Tourism8} style={{height:"300px"}} className="pac img-fluid" alt="package" />
    </div>
</div>
  

  <br></br>
  <div className="row align-items-center" style={{marginTop:"40px"}}>
  <div className="col-md-6">
    <img src={Tourism9} style={{height:"400px"}} className="pac img-fluid" alt="package" />
  </div>
  <div className="col-md-6 text-section">
    <h3 className="heading"><b>Doodh Talai</b></h3>
    <p>A small pond that is located adjacent to Lake Pichola is Doodh Talai Lake, a very famous tourist destination located in the heart of the city of town, Udaipur. A common link is shared between Doodh talai lake and Lake pichola which is another popular destination of tourists. One can enjoy boat ride, horse and camel rode and delicious food options offered by Doodh talai lake. Small hillocks hosting the Deen Dayal Upadhyay park surrounds Doodh talai lake. This place is widely popular for its managed and compact shape.
     While traveling to Udaipur, one must not miss to explore Doodh Talai lake, the place offering scenic beauty and greenery to make the experience memorable. 
    

    </p>
  </div>
</div>

</div>



       </div>
      {/* </main close> */}

      {/* Image */}
         <div className="full-page-image1">
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

     {/* Footer Start */}
     <footer id="footer" className="footer text-center text-lg-start text-white" style={{ backgroundColor:"#4ac4f3", }}>
  <div className="container p-4 pb-0">
    {/* Footer Top Content */}
    <div className="row">
      
      {/* Company Info / Logo */}
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
      <h6 className="text-uppercase mb-4 font-weight-bold"><i className="bi bi-buildings-fill"></i> UDAIPUR TOUR'S</h6>
      <p>
        A tour of Udaipur offers breathtaking views of Lake Pichola, visits to iconic landmarks like the City Palace and Jag Mandir, 
        and a chance to experience traditional Rajasthani hospitality.
        </p>
      </div>

      {/* Useful Links Section */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
  <h6 className="text-uppercase mb-4 font-weight-bold"> <i className="bi bi-link"></i>Quick Links</h6>
  <ul className="list-unstyled">
    <li>
      <Link
        style={{ textDecoration: 'none', color: 'white' }}
        onMouseEnter={(e) => (e.target.style.color = 'black')}
        onMouseLeave={(e) => (e.target.style.color = 'white')}
        to="/"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        style={{ textDecoration: 'none', color: 'white' }}
        onMouseEnter={(e) => (e.target.style.color = 'black')}
        onMouseLeave={(e) => (e.target.style.color = 'white')}
        to="/packages"
      >
        Packages
      </Link>
    </li>
    <li>
      <Link
        style={{ textDecoration: 'none', color: 'white' }}
        onMouseEnter={(e) => (e.target.style.color = 'black')}
        onMouseLeave={(e) => (e.target.style.color = 'white')}
        to="/carrental"
      >
        Car Rental
      </Link>
    </li>
    <li>
      <Link
        style={{ textDecoration: 'none', color: 'white' }}
        onMouseEnter={(e) => (e.target.style.color = 'black')}
        onMouseLeave={(e) => (e.target.style.color = 'white')}
        to="/udaipurtourism"
      >
        Udaipur Tourism
      </Link>
    </li>
    <li>
      <Link
        style={{ textDecoration: 'none', color: 'white' }}
        onMouseEnter={(e) => (e.target.style.color = 'black')}
        onMouseLeave={(e) => (e.target.style.color = 'white')}
        to="/contact"
      >
        Contact Us
      </Link>
    </li>
  </ul>
     </div>

   

      {/* Contact Information */}
      <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
    
        <h6 className="text-uppercase mb-4 font-weight-bold">  <i className="bi bi-geo-alt-fill"></i>Address</h6>
        <p><i className="fas fa-home mr-3"></i> 1234, Udaipur (Raj.)</p>
        <p><i className="fas fa-envelope mr-3"></i> UdaipurTour's@gmail.com</p>
        <p><i className="fas fa-phone mr-3"></i> 7976496465</p>
      </div>

      {/* Social Media Links */}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3" style={{ color: "white" }}>
        <h6 className="text-uppercase mb-4 font-weight-bold"> <i className="bi bi-substack"></i> Follow Us</h6>
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="bi bi-facebook"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="bi bi-instagram"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i className="bi bi-twitter-x"></i>
          </a>
         
        </section>
        
      </div>
    </div>
  </div>

  {/* Footer Bottom Content */}
  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", color: "white" }}>
  © 2024 Copyright:
  All Rights Reserved

  <a
    href="https://yourwebsite.com/"
    style={{
      textDecoration: "none",
      color: "white",
    }}
    onMouseEnter={(e) => (e.target.style.color = "black")}
    onMouseLeave={(e) => (e.target.style.color = "white")}
  >
     :Udaipur Tour's.  
  </a>
</div>

     </footer>
      {/* Footer end */}

</div>
  )
}

export default Tourism