import React,{useEffect, useState}  from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import Navbar from './Navbar';
// import Footer from './Footer';
// import MahindraThar from '../Images/MahindraThar.jpg';
import '../Components/CarDetails.css'

function CarDetails() {
  const [data, setData] = useState([])
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
        desc:""
    })

    useEffect(()=>{
      axios.get('http://localhost:5002/api/carrental')
      .then((res)=>{
        console.log(res.data.data)
       setData(res.data.data)
      })
     },[])

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
           })
        })
       },[id])

 return (
    <div>
      <Navbar/>


        <div className='singlepage main'>

        {item ? (

          <div className='parent'>
         
          
         <div className='child-home-5' style={{width:"100%", marginTop:"60px"}}>
              <img src={`http://localhost:5002/${item.imageUrl}`} alt="item"
              style={{width:"400px",height:'300px', mixBlendMode:"darken"}}
              className='item CARCSS d-flex justify-content-center align-items-center'
              />
              <h1>{item.carname} on Rent in Udaipur</h1>
              <h5><b>Starting from INR  {item.price}/Day</b></h5>
              <div
        className="bottom right-100 p-3 whatsapp-container"
        style={{ zIndex: "6", left: "initial" }}
      >
        <a
          href="https://wa.me/9001897580?text=Hello How can I help you?"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="btn btn-outline-info">
            <b>WHATSAPP</b>
          </button>
        </a>
      </div>

              <Link className='btn btn-info' to={`/carrental/details/${id}`}>Book Now</Link>
              <h5>{item.desc}</h5>
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
             
              <h6>carheading : {item.carheading}</h6>
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
      
      <div className='container-fluid'>
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
     </div>
        </div>
    
        
     {/* <Footer/> */}
    </div>
  )
}

export default CarDetails