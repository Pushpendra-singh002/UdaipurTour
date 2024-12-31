import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function Packupdate() {
  const {id} = useParams()
  const [values, setValues]= useState({
    adults:"",
    children:"",
    username:"",
    email:"",
    phone:"",
   tourcode:"",
    date:"",
    package:"",
    price:"",
    heading:"",
    duration:"",
    facility:"",
  })

  useEffect(()=>{
    axios.get(`http://localhost:5002/api/udaipur/${id}`)
    .then((res)=>{
      const packages = res.data.data
      setValues({
         adults : packages?.adults || "",
        children: packages?.children || "",
        username:packages?.username || "",
        email:packages?.email || "",
        phone:packages?.phone || "",
        tourcode:packages?.tourcode||'',
        date:packages?.date || "",
        package:packages?.package || "",
        price:packages?.price || "",
        heading:packages?.heading || "",
        duration:packages?.duration || "",
        facility:packages?.facility || "",
      })
    })
  },[id])

const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.put(`http://localhost:5002/api/udaipur/${id}`,{
      username: values.username,
      phone: values.phone,
      email: values.email,
      children:values.children,
      adults:values.adults,
      date:values.date,
      heading:values.heading,
      tourcode:values.tourcode,
        price:values.price,
        duration:values.duration,
        facility:values.facility
  }, {
      headers: {
          'Content-Type': 'application/json'
      }
  }).then((res)=>{
    console.log(res.data)
    navigate('/packget')
  }).catch((err)=>{
    console.log(err ,"err")
  })

  }

  return (
    <div>
        <Navbar/>
        <div className="row d-flex justify-content-center align-items-center" style={{marginTop:"50px"}}>
    <div className='card' style={{width:"40rem", marginTop:"40px"}}>
    <form className="col-md-12" onSubmit={handleSubmit}>
      <h2 className="text">PLEASE FILL YOUR DETAILS HERE:</h2>
      <br></br>
      <div className='row'>
     <div className='col mb-3'>
     <label htmlFor="Adults" className="col-sm-3 col-form-label">
          Adults:
        </label>
      <select className="form-select" id='Adults' defaultValue="Select Adults" value={values.adults} onChange={(e) => setValues({...values, adults: e.target.value})} aria-label="Default select example">
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
     <select className="form-select" id='children' defaultValue="Select children" value={values.children} onChange={(e) => setValues({...values, children: e.target.value})} aria-label="Default select example">
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
          value={values.date}
          onChange={(e)=>{setValues({...values,date:e.target.value})}} />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="username" className="col-sm-3 col-form-label">
          username:
        </label>
        <div className="col-sm-9">
          <input type="text" placeholder="Enter username" className="form-control" id="username" required
          value={values.username} 
          onChange={(e)=>{setValues({...values,username: e.target.value})}} />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
          Email:
        </label>
        <div className="col-sm-9">
          <input type="email" className="form-control" id="inputEmail3" placeholder="Enter Email address" required 
          value={values.email}
            onChange={(e)=>{setValues({...values, email: e.target.value})}}
           />
        </div>
      </div>


      <div className="row mb-3">
        <label htmlFor="quantity" className="col-sm-3 col-form-label">
          Mo Number:
        </label>
        <div className="col-sm-9">
          
          <input type="number"  className="form-control" id="quantity" placeholder="Enter Mobile Number" value={values.phone}  onChange={(e)=>{setValues({...values, phone:  e.target.value})}} />
        </div>
      </div>
    
    <>
      {/* Package username */}
      <div className="row mb-3">
        <label htmlFor="heading" className="col-sm-3 col-form-label">
          Package username:
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="heading"
            placeholder="Enter Package username"
            value={values.heading}
            onChange={(e) => setValues({...values, heading: e.target.value})}
            required
          />
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
            value={values.price}
            onChange={(e) => setValues({...values, price: e.target.value})}
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="Duration" className="col-sm-3 col-form-label">
          Duration:
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="Duration"
            placeholder="Enter Duration"
            value={values.duration}
            onChange={(e) => setValues({...values, duration: e.target.value})}
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="facility" className="col-sm-3 col-form-label">
        Facility:
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="facility"
            placeholder="Enter Package username"
            value={values.facility}
            onChange={(e) => setValues({...values, facility: e.target.value})}
            required
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="facility" className="col-sm-3 col-form-label">
        Tourcode:
        </label>
        <div className="col-sm-9">
          <input
            type="text"
            className="form-control"
            id="facility"
            placeholder="Enter Package username"
            value={values.tourcode}
            onChange={(e) => setValues({...values, tourcode: e.target.value})}
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


   
  )
}

export default Packupdate
