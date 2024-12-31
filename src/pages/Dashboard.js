import React, { useState , useEffect} from 'react'
import Layout from './Layout'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaUserAlt,FaCar } from "react-icons/fa";
import { GoPackage } from "react-icons/go";
import { FaShoppingBasket } from "react-icons/fa";
function Dashboard() {
  // const {id} = useParams()
  const [summery, setSummery] = useState(null)
 const [loading, setLoading] = useState(true);

  const [suc, setSuc]= useState('')
  const navigate = useNavigate()
//========count user ===================================================================================================================
  useEffect(()=>{
    const fetchSummery = async()=>{
     try{
      const summery = await axios.get('http://localhost:5002/api/home',{
       headers:{
         "Authorization":`bearer ${localStorage.getItem('token')}`
       }
      })
      setSummery(summery.data)
      setLoading(false)
     }catch(err){
      if(err.res){
       alert(err.res.data.err)
      }
      console.log(err.message)
     }
    }
    fetchSummery()
   },[])
   if(!loading){
     <div>Loading...</div>
   }
  // ======================================================================================================================
  useEffect(()=>{
    axios.get('http://localhost:5002/Dashboard',{withCredentials: true})
  
     .then(result => {
       if (result.data === "Success") {
        setSuc("successded ok")
       }else{
        navigate(`/login`)
       }
     })
     .catch(err => {
       // In case of any error during the request, handle it here
       console.error("Login error: ", err);
       alert('An error occurred during login');
     })
    },)

  return (
    <div >
      <Navbar/>
     <div className='hidden'> {suc}</div>
      <Layout/>
      <div className='content'>
      
      <div style={{marginTop:"50px"}}>
      <h1>Dashboard</h1>
      <div className='parent'> 

      <div className='child-home-1'>
                <FaUserAlt className="menu-icon"/><br/>
                  <span><h3 className='div-h3'>USER</h3><h4>{summery ? summery.totaluser : 'Loading...'}</h4></span>
                
                </div>
                <div className='child-home-1'>
                <FaCar className="menu-icon"/><br></br>
                  <span><h3 className='div-h3'>Car Rental</h3><h4>{summery ? summery.totalCar : 'Loading...'}</h4></span>
                
                </div>
                <div className='child-home-1'>
                <GoPackage className="menu-icon"/><br/>
                  <span><h3 className='div-h3'>Packages</h3><h4>{summery ? summery.totalBlog : 'Loading...'}</h4></span>
                
                </div>
                <div className='child-home-1'>
                <FaShoppingBasket className="menu-icon"/><br/>
                  <span><h3 className='div-h3'> Car Booking</h3><h4>{summery ? summery.totalorder : 'Loading...'}</h4></span>
                
                </div>
                <div className='child-home-1'>
                <FaShoppingBasket className="menu-icon"/><br/>
                  <span><h3 className='div-h3'>Package Booking</h3><h4>{summery ? summery.totalPackage : 'Loading...'}</h4></span>
                
                </div>
                <div className='child-home-1'>
                <FaShoppingBasket className="menu-icon"/><br/>
                  <span><h3 className='div-h3'>Total Feedback</h3><h4>{summery ? summery.totalFeed : 'Loading...'}</h4></span>
                
                </div>
                </div>
    </div></div></div>
  )
}

export default Dashboard
