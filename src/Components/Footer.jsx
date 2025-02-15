import React from 'react'

import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div>

      {/* Footer Start */}
      <footer id="footer" className="footer text-center text-lg-start text-white" style={{ backgroundColor:"#4ac4f3" }}>
  <div className="container p-4 pb-0">
    {/* Footer Top Content */}
    <div className="row">
      
      {/* Company Info / Logo */}
      <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
      <h6 className="text-uppercase mb-4 font-weight-bold"><i class="bi bi-buildings-fill"></i> UDAIPUR TOUR'S</h6>
      <p>
        A tour of Udaipur offers breathtaking views of Lake Pichola, visits to iconic landmarks like the City Palace and Jag Mandir, 
        and a chance to experience traditional Rajasthani hospitality.
        </p>
      </div>

      {/* Useful Links Section */}
      <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
  <h6 className="text-uppercase mb-4 font-weight-bold"> <i class="bi bi-link"></i>Quick Links</h6>
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
    
        <h6 className="text-uppercase mb-4 font-weight-bold">  <i class="bi bi-geo-alt-fill"></i>Address</h6>
        <p><i className="fas fa-home mr-3"></i> 1234, Udaipur (Raj.)</p>
        <p><i className="fas fa-envelope mr-3"></i> UdaipurTour's@gmail.com</p>
        <p><i className="fas fa-phone mr-3"></i> 7976496465</p>
      </div>

      {/* Social Media Links */}
      <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3" style={{ color: "white" }}>
        <h6 className="text-uppercase mb-4 font-weight-bold"> <i class="bi bi-substack"></i> Follow Us</h6>
        <section className="mb-4">
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="bi bi-facebook"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="bi bi-instagram"></i>
          </a>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
          <i class="bi bi-twitter-x"></i>
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

export default Footer