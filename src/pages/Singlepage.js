import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Singlepage() {
    const {id} = useParams()
    const [item , setItem] = useState({
        imageUrl:"",
        facility:[{ listF: "", listS: "" }],
        carname:"",
        carheading:"",
        carOptionsList:[{ type: "", list: "" }],
        faq:[{ question: "", answer: "" }],
        price:"",
        whychoose:[{ listf: "", lists: "" }],
        desc:"",
        seater:""
    })
    useEffect(()=>{
        axios.get(`http://localhost:5002/api/carrental/${id}`)
        .then((res)=>{
         const packages = res.data.data
           setItem({
           imageUrl: packages?.imageUrl || "",
           facility: packages?.facility || [{ listF: "", listS: "" }],
           carname : packages?.carname || "",
           carheading:packages?.carheading || "" ,
           carOptionsList:packages?.carOptionsList ||[{ type: "", list: "" }],
           faq:packages?.faq ||[{ question: "", answer: "" }],
           price:packages?.price|| "",
           whychoose: packages?.whychoose || [{ listf: "", lists: "" }],
           desc:packages?.desc || "",
           seater:packages?.seater || "",
           })
        })
       },[id])
  return (
    <div className='singlepagediv'>
    <div className='singlepage' style={{width:"100%", color:"black"}}>
      <h1>Details page</h1>
      {item ? (
        
        <div className='parent'>
         
        
     <div className='child-home-4'>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <h5>carheading : {item.carheading}</h5><div>
          <img src={`http://localhost:5002/${item.imageUrl}`}alt="item"
          style={{width:"100%",height:'300px'}}
          className='item CARCSS'
          />
          <h1>{item.carname} on Rent in Udaipur</h1>
          <h5><b>Starting from INR  {item.price}/Day</b></h5>
          <Link className='btn btn-primary' to={`/users/${id}`}>Book Now</Link></div></div>
          <p><b>{item.desc}</b></p>
          <p><b>{item.seater}</b></p>
          <h1>{item.carheading} Features:</h1>
          <h5><b>{item.carOptionsList.map((car, index) => (
               <div  key={index}>
               
         
                <ul>
                  <li> {car.type}</li>
                  <li>{car.list}</li>
                </ul>
               
                
               </div>
              ))}</b>
              <h1>FAQ:</h1>
              </h5>
               <h5>{item.faq.map((car, index) => (
               <div key={index}>
                <p>
                <b>Question: {car.question}</b><br></br>
                <b >Answer:{car.answer}</b>
                <br></br>
                </p>
               </div>
              ))}</h5>
              <div className='md-3'>
            <h1>Rental Options:</h1>
            <ul>
            <strong>  <li><b>Self-drive adventure:</b> Explore at your own pace</li>
              <li><b>Chauffeur-driven comfort:</b> Expert local drivers
              </li>
              <li>Flexible daily and weekly rates</li></strong>
            </ul>
          </div>
          <h1>Facility : </h1>
          {/* <p><b>{item.facility}</b></p> */}
          <h5>{item.facility.map((car, index) => (
               <div key={index}>
                
                <b> {car.listF}</b>
             <b style={{marginLeft:"10px"}}>{car.listS}</b>
                
              
               </div>
              ))}
              <br></br>
              <h1>Why Choose{item.carname} </h1></h5>
              <h5>{item.whychoose.map((car, index) => (
               <div key={index}>
                <ul>
               <li> <b> {car.listf}</b></li>
               <li>
             <b>{car.lists}</b></li>
                </ul>
              
               </div>
              ))}</h5>
           
         
          <div className='md-3'>
            <h1>Rental Terms</h1>
            <ul>
            <strong>  <li>Minimum age: 24 years</li>
              <li>Full to full fuel policy</li>
              <li>24/7 Rajasthan roadside assistance</li></strong>
            </ul>
          </div>
         <h1>Pickup Locations:</h1>
         <ul>
                  <li> <b>Central Udaipur office near City Palace</b></li>
                  <li><b >Maharana Pratap Airport (nominal charges apply)</b></li>
                </ul>
        </div>
       
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <br></br><br></br><br></br><br></br>
    </div>
    </div>
  )
}

export default Singlepage
