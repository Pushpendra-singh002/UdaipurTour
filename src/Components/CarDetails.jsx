import React,{useEffect, useState}  from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios";
import Navbar from './Navbar';
// import Footer from './Footer';
// import MahindraThar from '../Images/MahindraThar.jpg';
import '../Components/CarDetails.css'
import { TiArrowBackOutline } from "react-icons/ti";
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
  <div style={{ padding: "10px", backgroundColor: "whitesmoke" , marginTop: "50px"}}>
      <Navbar />
      <div className="container singlepage">
        {item ? (
          <div className="parent mt-4">
            <div className="child-home-5 w-100">
              <Link to="/carRentalfront" className="btn btn-info mb-3">
                <TiArrowBackOutline /> <b>Back</b>
              </Link>
              <div className="text-center">
               
              <img src={`http://localhost:5002/${item.imageUrl}`}alt="item"
          style={{width:"100%",height:'300px'}}
          className='item CARCSS'
          />
                <h1>{item.carname} on Rent in Udaipur</h1>
                <h5>
                  <b>Starting from INR {item.price}/Day</b>
                </h5>
                <div className="d-flex justify-content-center mt-3">
                  <a
                    href="https://wa.me/9001897580?text=Hello How can I help you?"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-info mx-2"
                  >
                    <b>WHATSAPP</b>
                  </a>
                  <Link to={`/carrental/details/${id}`} className="btn btn-info mx-2">
                    <b>Book Now</b>
                  </Link>
                </div>
              </div>
              <h4 className="mt-4">
                {item.facility.map((car, index) => (
                  <div key={index}>
                    <b>{car.listF}</b> <b className="ml-2">{car.listS}</b>
                  </div>
                ))}
              </h4>
              <h1>{item.carheading}</h1>
              <h5>{item.desc}</h5>
              <h1 className="mt-4">{item.carheading} Features:</h1>
              <ul>
                {item.carOptionsList.map((car, index) => (
                  <li key={index}><b>{car.type}</b>: {car.list}</li>
                ))}
              </ul>
              <h1 className="mt-4">FAQ:</h1>
              {item.faq.map((car, index) => (
                <div key={index}>
                  <b>Question:</b> {car.question}
                  <br />
                  <b>Answer:</b> {car.answer}
                  <br />
                </div>
              ))}
              <h1 className="mt-4">Rental Options:</h1>
              <ul>
                <li><b>Self-drive adventure:</b> Explore at your own pace</li>
                <li><b>Chauffeur-driven comfort:</b> Expert local drivers</li>
                <li>Flexible daily and weekly rates</li>
              </ul>
              <h1 className="mt-4">Why Choose {item.carheading}?</h1>
              <ul>
                {item.whychoose.map((car, index) => (
                  <li key={index}><b>{car.listf}</b>: {car.lists}</li>
                ))}
              </ul>
              <h1 className="mt-4">Pickup Locations:</h1>
              <ul>
                <li><b>Central Udaipur office near City Palace</b></li>
                <li><b>Maharana Pratap Airport (nominal charges apply)</b></li>
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-center">Loading...</p>
        )}
        <h3 className="text-center mt-4 mb-4">More Cars Available for Rent in Udaipur</h3>
        <div className="container">
          <div className="row justify-content-center">
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <div
                  className="col-md-3 card p-3 m-2 shadow-sm"
                  key={index}
                  style={{ width: "300px" }}
                >
                  <img
                    src={`http://localhost:5002/${item.imageUrl}`}
                    className="img-fluid rounded"
                    alt={item.carname}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <h4 className="mt-2"><b>{item.carname}</b></h4>
                  <p>{item.seater}</p>
                  <h5><b>Starting from INR {item.price}</b></h5>
                  <div className="d-flex justify-content-between mt-3">
                    <a href="tel:+1-555-555-1212" className="btn btn-outline-info">
                      <b>CALL NOW</b>
                    </a>
                    <a
                      href="https://wa.me/9001897580?text=Hello How can I help you?"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-info"
                    >
                      <b>WHATSAPP</b>
                    </a>
                  </div>
                  <Link
                    to={`/cardetails/${item._id}`}
                    className="btn btn-info mt-3 w-100"
                  >
                    <b>View Details</b>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center">No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarDetails