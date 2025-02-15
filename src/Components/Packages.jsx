import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Package from '../Images/Package.jpeg';
import axios from 'axios';
import { FaAngleDoubleRight, FaHome } from 'react-icons/fa';
import '../Components/Packages.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Packages() {
  // const packages = [
  //   {
  //     img: Package1,
  //     title: 'SIMPLY UDAIPUR TOUR PACKAGE',
  //     price: 'Rs.6,599/person',
  //     duration: '1N/2D Available',
  //     facility: '3Star/Equiv.',
  //   },
  //   {
  //     img: Package2,
  //     title: 'UDAIPUR HOLIDAY PACKAGE WITH KUMBHALGARH & RANKAKPUR',
  //     price: 'Rs.11,999/person',
  //     duration: '2N/3D Available',
  //     facility: '3Star/Equiv.',
  //   },
  //   {
  //     img: Package3,
  //     title: 'UDAIPUR TOUR WITH HALDI GHATI, EKLING JI NAGDA',
  //     price: 'Rs.11,499/person',
  //     duration: '2N/3D Available',
  //     facility: '3Star/Equiv.',
  //   },
  //   {
  //     img: Package4,
  //     title: 'SIMPLY UDAIPUR TOUR PACKAGE',
  //     price: 'Rs.11,799/person',
  //     duration: '2N/3D Available',
  //     facility: '3Star/Equiv.',
  //   },
  //   {
  //     img: Package5,
  //     title: 'MOUNT ABU TOUR PACKAGE WITH UDAIPUR',
  //     price: 'Rs.6,599/person',
  //     duration: '3N/4D Available',
  //     facility: '3Star/Equiv.',
  //   },
  //   {
  //     img: Package6,
  //     title: 'UDAIPUR TOUR PACKAGE WITH KUMBHALGARH & CHITORGARDH',
  //     price: 'Rs.6,599/person',
  //     duration: '1N/2D Available',
  //     facility: '3Star/Equiv.',
  //   },
  //   {
  //     img: Package7,
  //     title: 'Udaipur Travel Package with Jodhpur & Jaisalmer',
  //     price: 'Rs.26,499/person',
  //     duration: '5N/6D Available',
  //     facility: '3Star/Equiv.',
  //   },
  //   {
  //     img: Package8,
  //     title: 'Udaipur Trip with Mount Abu, Jodhpur & Jaisalmer',
  //     price: 'Rs.31,499/person',
  //     duration: '6N/7D Available',
  //     facility: '3Star/Equiv.',
  //   },
  //   {
  //     img: Package9,
  //     title: 'Udaipur Tourism Package with Chittorgarh',
  //     price: 'Rs.11,799/person',
  //     duration: '2N/3D Available',
  //     facility: '3Star/Equiv.',
  //   },

  // ];
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:5002/api/packages')
    .then((res)=>{
      console.log(res.data.data)
      setData(res.data.data)
    })
  },[])  

  return (
    <div>
      <Navbar />

      {/* Image */}
      <div className="full-page-image" style={{marginTop:"60px", height:"500px"}}>
        <a className="navbar-brand1" href="#nav">
          <img src={Package} className="package" alt="package" />
        </a>
      </div>
      {/* Image close */}

      {/* Heading */}
      <div className="page-nav no-margin row">
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <h2 className="animated-heading">Our Packages</h2>
            <br />
            <ul className="breadcrumb">
              <li>
                <a href="/home" className="home-link">
                  <FaHome /> Home
                </a>
              </li>
              <li>
                <FaAngleDoubleRight /> Packages
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Heading close */}

      {/* Packages */}
      <br />
      <div style={{ marginTop: '40px',padding:"20px", backgroundColor: '#f5f5f5' }}>
        <h2 className="h2">
          <b>TOUR PACKAGES</b>
        </h2>
        <p className="custom-paragraph d-flex justify-content-center">
          <i>Popular Udaipur & Rajasthan packages</i>
        </p>

      

        <section id="package" className="portfolio section">
        <div className="container1">
          <div className="row gy-4 isotope-container">
           {data.length > 0 ? data.map((item,index)=>(
           
              <div className="col-lg-3 col-md-6 portfolio-item" key={index}>
                <div className="card">
                  <div className="card-body text-center">
                    <img src={`http://localhost:5002/${item.imageUrl}`} className="img-fluid hover-effect" style={{height:"200px"}} alt={item.title} />
                    <div>
                    <h5>
                      <Link
                        className="pack"
                        to={`/Packagedetails`}
                        state={item}
                        title="More Details"
                      >
                        {item.name}
                      </Link>
                    </h5>
                    <p><b>Price:</b> {item.price}</p>
                    <p><b>Duration:</b> {item.duration}</p>
                    <p><b>Facility:</b> {item.facility}</p>
                    <p><b>Tour Code : {item.tourcode}</b></p>
                    </div>
                  </div>
                </div>
              </div>
           )):"not data"
           }
          </div>
        </div>
        </section>
      </div>
      {/* Packages close */}

      {/* contact */}
      <div className='div' style={{ marginTop: '60px' }}>
        <h4><b>Have Queries? Please call +(91) 9829119492</b> |<Link className='link'>Email: tours@udaipurtraveling.com</Link> 
        </h4>
      </div>
      {/* contact end */}

      <Footer />
    </div>
  );
}

export default Packages;
