import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { IoIosArrowForward } from "react-icons/io";
function Packagesupdate() {
    const {id} = useParams()
    const [values ,setValues]= useState({
    imageUrl : null,
    price:"",
    tourcode:"",
    duration:"",
    name:"",
    facility:"",
    })
   
    const navigate = useNavigate();
    useEffect(()=>{
     axios.get(`http://localhost:5002/api/packages/${id}`)
     .then((res)=>{
      const packages = res.data.data
        setValues({
        imageUrl: packages?.imageUrl || "",
        facility: packages?.facility || "",
        name : packages?.name || "",
        duration:packages?.duration || "" ,
        tourcode:packages?.tourcode || "",
        price:packages?.price|| ""

        })
     })
    },[id])
  const handleEdit =(e)=>{
  e.preventDefault();
  const formData = new FormData()
  formData.append('facility', values.facility)
  formData.append('name',values.name)
  formData.append('duration',values.duration)
  formData.append('tourcode', values.tourcode)
  formData.append('price',values.price)
  if(values.imageUrl && typeof values.imageUrl !== "string"){
    formData.append('imageUrl', values.imageUrl)
  }
  axios.put(`http://localhost:5002/api/packages/${id}`,formData,{
    headers:{
    'Content-Type': 'multipart/form-data'
    }
  }).then((res)=>{
    console.log(res.data)
    alert('edit success full')
    navigate('/package')
  }).catch(err => console.log('err', err))


  }
  return (
    <div className='color'>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <div className="d-flex justify-content-center align-items-center ">
        
      <span style={{textAlign:"center", fontSize:"20px"}}>
      <b><Link to="/packages" style={{textDecoration:"none", color:"black"}}> Package</Link> <IoIosArrowForward/> <IoIosArrowForward/> Update Package</b></span>
    </div>
        <div className='d-flex justify-content-center align-item-center'>
        <div >
          
          <form className='form' onSubmit={handleEdit}>
          <h2>Update Package</h2>
          <div className="mb-3">
               <label htmlFor="img" className="htmlForm-label">Image:</label><br></br>
                 <input type="file" className="htmlForm-control"
                       onChange={(e) => setValues({...values ,imageUrl : e.target.files[0]})}
                          required
                 id="img" placeholder="Enter Image" name="img" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="price" className="htmlForm-label">price:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={values.price}
                      onChange={(e)=>setValues({...values, price: e.target.value})}
                          required
                 id="price" placeholder="Enter Price" name="price" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="tour" className="htmlForm-label">Tour Code:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={values.tourcode}
                      onChange={(e)=>setValues({...values , tourcode: e.target.value})}
                          required
                 id="tour" placeholder="Enter Tour Code" name="tour" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="name" className="htmlForm-label">name:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={values.name}
                      onChange={(e)=>setValues({...values, name:e.target.value})}
                          required
                 id="name" placeholder="Enter name" name="name" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="duration" className="htmlForm-label">Duration:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={values.duration}
                      onChange={(e)=>setValues({...values, duration:e.target.value})}
                          required
                 id="duration" placeholder="Enter Duration" name="duration" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="facility" className="htmlForm-label">facility:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={values.facility}
                      onChange={(e)=>setValues({...values, facility: e.target.value})}
                          required
                 id="facility" placeholder="Enter facility" name="facility" style={{width:"100%", border:'1px solid'}}/>
          </div>
          
          <button type='submit' className='btn' style={{ border:"1px solid", color:"#5f6b97"}} >submit</button>
          </form>
          
        </div>
        </div>
    </div>
  )
}

export default Packagesupdate
