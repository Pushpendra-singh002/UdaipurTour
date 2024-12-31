import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import { FaPencilAlt } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

function Packbook() {
const [data, setData] = useState([])
const [searchTerm, setSearchTerm] = useState('');
const [currentPage, setCurrentPage] = useState(1)
 const recordsperPage = 6;
 const lastIndex =currentPage * recordsperPage;
 const firstIndex = lastIndex - recordsperPage;

 

 const filteredData = data.filter(
  
  (item) =>
    item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.heading.toLowerCase().includes(searchTerm.toLowerCase())     ||  
      item.date.toLowerCase().includes(searchTerm.toLowerCase()) 
      // (item.price && item.price.toLowerCase().includes(searchTerm.toLowerCase))
);
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
useEffect(()=>{
    axios.get('http://localhost:5002/api/udaipur')
    .then((res)=>{
        console.log(res.data)
        setData(res.data.data)
    }).catch((err)=>{
        console.log(err, 'err')
    })
})
const handleDelete=(id)=>{
    axios.delete(`http://localhost:5002/api/udaipur/${id}`)
    .then((res)=>{
        console.log(res.data)
        const datadelete = data.filter(item => item._id !== id) 
        setData(datadelete)
    }).catch((err)=>{
        console.log(err ,'err')
    })

}

  return (
    <div>
        <Navbar/>
      <Layout/>
      <div className='content' style={{marginTop:"50px"}}>
      <div className='canterner-fluid'>
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
              <th>Package Name</th>
              <th>Price</th>
              <th>Facility</th>
              <th>Duration</th>
              <th>Tour Code</th>
              <th>Date</th>
              <th>Adults</th>
              <th>Children</th>
              <th>Update</th>
              <th>Delete</th>
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
                <td>{item.heading}</td>
                <td>{item.price}</td>
                <td>{item.facility}</td>
                <td>{item.duration}</td>
                <td>{item.tourcode}</td>
                <td>{item.date}</td>
                <td>{item.adults}</td>
                <td>{item.children}</td>
                <td>
                  <Link
                    to={`/packupdate/${item._id}`}
                    className="btn"
                    style={{
                      marginTop: "5px",
                      backgroundColor: "#4ac4f3",
                    
                    }}
                  >
                    <b><FaPencilAlt/></b>
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
                    <b>
                    <AiTwotoneDelete/>
                    </b>
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
  </nav>
    </div>
    </div></div>
  )
}

export default Packbook
