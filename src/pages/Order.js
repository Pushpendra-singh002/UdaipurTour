import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Layout from './Layout'
import axios from 'axios'
import {  Link, useNavigate } from 'react-router-dom'

import { FaPencilAlt } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

function Order() {
  // const { id }= useParams()
   const [suc, setSuc]= useState('')
   const[data, setData] =useState([])
   const [searchTerm, setSearchTerm] = useState('');
   const [currentPage, setCurrentPage] = useState(1)
    const recordsperPage = 6;
    const lastIndex =currentPage * recordsperPage;
    const firstIndex = lastIndex - recordsperPage;
    const filteredData = data.filter((item) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
      return (
        item.username.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.carname.toLowerCase().includes(lowerCaseSearchTerm) ||
        item.price.toString().toLowerCase().includes(lowerCaseSearchTerm)
      );
    });
    
    
  
    const records = filteredData.slice(firstIndex, lastIndex);
    const npage = Math.ceil(filteredData.length / recordsperPage)
    const numbers = [ ...Array(npage + 1).keys()].slice(1)
   
    function PrevPage(){
     if(currentPage !== 1)
     setCurrentPage(currentPage -1)
    }
   function nextPage(){
     if(currentPage !== npage){
       setCurrentPage(currentPage + 1)
   }}
   function changeCPage(id){
    setCurrentPage(id)
   }


   useEffect((e)=>{
   axios.get('http://localhost:5002/api/booking')
   .then((res)=>{
    console.log(res.data.data)
    setData(res.data.data)
   })
  },[])

  const handleDelete =(id)=>{
    axios.delete(`http://localhost:5002/api/booking/${id}`)
    .then((res)=>{
      console.log(res.data)
      const datadelete =  data.filter(item => item._id !== id )
      setData(datadelete)
    })
  }

 const navigate = useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:5002/order',{withCredentials: true})
  
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
    <div>
      <Navbar/>
      {suc}
      <Layout/>
      <div className='content' style={{marginTop:"50px", }}>
        <h1>Car Booking</h1>
      <label htmlFor="search" style={{ display: 'block', fontWeight: 'bold' }}>               Search by Package Name:
     </label>
        <input
            type="text"
            id='search'
            placeholder="Search by username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px", width:"300px" }}
          />
  
       
<div className="">
  {records.length > 0 ? (
    <table className="table table-striped">
      <thead>
        <tr>
          
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Car type</th>
          <th>Price</th>
          {/* <th>Seater</th> */}
          <th>Update</th>
          <th>Delete</th>
          {/* <th>View</th> */}
        </tr>
      </thead>
      <tbody>
        {records.map((item, index) => (
          <tr key={index}>
            <td>
             <h6>{item.username}</h6>
            </td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.type}</td>
            {/* <td>{item.seater}</td> */}
            <td>{item.price}</td>
            
            <td>
              <Link
                to={`/orderedit/${item._id}`}
                className="btn"
                style={{
                  marginTop: "5px",
                  backgroundColor: "#4ac4f3",
                
                }}
              >
                <b><FaPencilAlt/>Edit</b>
              </Link>
            </td>
            <td>
              <button
                className="btn btn-danger"
                style={{ border: "none", background: "#0b1a53" }}
                onClick={() => {
                  const confirmBox = window.confirm(
                    "Do you really want to delete this item ?"
                  );
                  if (confirmBox === true) {
                    handleDelete(item._id);
                  }
                }}
              >
                <AiTwotoneDelete/>
                <b>Delete</b>
              </button>
            </td>
           
          
 

              
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No data</p>
  )}
</div>
<nav>
    <ul className='pagination'>    
  <li className='page-item'>
    <button href='#' className='page-link' onClick={PrevPage}>Prev</button>
  </li>
  {  numbers.map((n, item)=>(
  
  
  <li className={`page-item ${currentPage === n ? 'active' : ''}`}  key={item}>
    <button href='#' className='page-link' onClick={()=> changeCPage(n)}>{n}</button>
  </li>
  ))}
  <li className='page-item'>
    <button href='#' className='page-link' onClick={nextPage}>Next</button>
  </li>
    </ul>
  </nav></div>
      
    </div>
  )
}

export default Order




 