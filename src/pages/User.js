

import React, { useEffect, useState } from 'react';
import { Link,  useParams } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { RiArrowGoBackFill } from "react-icons/ri";
import { IoMdHappy } from "react-icons/io";
import { MdSupportAgent } from "react-icons/md";
import { SlLike } from "react-icons/sl";
import { FaRegStar } from "react-icons/fa6";

function User() {
  const { id } = useParams();


  // State management
  const [item, setItem] = useState({
    carname: "",
    price: "",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [children, setChildren] = useState("");
  const [adults, setAdults] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user details from sessionStorage or API
  useEffect(() => {
    const fetchUserData = async () => {
      const storedUsername = sessionStorage.getItem('username');
      const storedPhone = sessionStorage.getItem('phone');
      const storedEmail = sessionStorage.getItem('email');

      if (storedUsername && storedPhone && storedEmail) {
        setName(storedUsername);
        setPhone(storedPhone);
        setEmail(storedEmail);
      } else if (id) {
        try {
          const res = await axios.get(`http://localhost:5001/api/user/${id}`);
          setName(res.data.username);
          setPhone(res.data.phone);
          setEmail(res.data.email);

          sessionStorage.setItem('username', res.data.username);
          sessionStorage.setItem('phone', res.data.phone);
          sessionStorage.setItem('email', res.data.email);
        } catch (err) {
          console.error('Error fetching user data:', err);
        }
      } else {
        console.error('No user ID found in URL or sessionStorage');
      }
    };

    fetchUserData();
  }, [id]);

  // Fetch car details
  useEffect(() => {
    const fetchCarDetails = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`http://localhost:5001/api/carrental/${id}`);
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:5001/api/users`, {
        username: name,
        email,
        phone,
        date,
        adults,
        children,
        carname: item.carname, 
        price: item.price,
      });
     
    } catch (err) {
      console.error('Error submitting form:', err);
    }
  };

  // Conditional rendering for loading or error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      <div className='container fluid' style={{ marginTop: "50px", marginLeft: "20px" }}>
        <div className='row'>
          <h3 style={{ marginTop: "50px", marginLeft: "30px", color: "black" }}>
            <Link style={{ color: "black" }} to={'/carnew'}>
              <RiArrowGoBackFill /> Go Back
            </Link>
          </h3>

          {/* Car Details */}
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

          {/* Form */}
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
                  <button type="submit" className="custom-button btn btn-info">Submit Form</button>
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br><br></br>
      <div className="overlay-content">
   <div className="horizontal-content parent">
       <div className="content-item child-home-1">
        <IoMdHappy className="icon-happy" style={{font:"70px"}} />
        <h1><b>3,000</b></h1>
         <h5>+Happy Clients</h5>
       </div>
       <div className="content-item child-home-1">
        <SlLike  className="icon-happy" style={{font:"70px"}} />
        <h1><b>Private</b></h1>
        <h5>and Safe Tours</h5>
       </div>
       <div className="content-item child-home-1">
         <MdSupportAgent  className="icon-happy" style={{font:"70px"}}/>
         <h1><b>365x7</b></h1>
        <h5>Support Desk</h5>
       </div>
      <div className="content-item child-home-1">
         <FaRegStar className="icon-happy" style={{font:"70px"}}/>
         <h1><b>Excellent</b></h1>
        <h5>Value for Money</h5>
       </div>
     </div>
   </div>
      {/* Footer Contact */}
      <div className='div' style={{ marginTop: "60px" }}>
        <h4><b>Have Queries? Please call +(91) 9829119492</b> | <Link className='link'>Email: tours@udaipurtraveling.com</Link></h4>
      </div>

    </div>
  );
}

export default User;
