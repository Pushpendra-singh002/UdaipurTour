import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import Navbar from './Navbar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { FaPencilAlt } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";


function Packages() {
  const [suc,setSuc]= useState('')
  const [data, setData] = useState([])
  const [image, setImage] = useState('')
  const [price , setPrice] = useState('')
  const [facility, setFacility]= useState('') // facility
  const [duration, setDuration] = useState('')
  const [name, setName] = useState('') // name
  const [tourcode , setTourcode] = useState('')
  console.log(image)

  //  FILTER METHOD FOR PACKAGES ============================================================
 
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
   const recordsperPage = 6;
   const lastIndex =currentPage * recordsperPage;
   const firstIndex = lastIndex - recordsperPage;
  
   const filteredData = data.filter(
    (item) =>
      // item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
   ( item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()))||
    item.price.toString().toLowerCase().includes(searchTerm.toLowerCase)||
      item.facility.toLowerCase().includes(searchTerm.toLowerCase())
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
  
  
  const navigate = useNavigate('')
  const handleprice=(e)=>{
    setPrice(e.target.value)
  }
 
  const handlefacility=(e)=>{
    setFacility(e.target.value)
  }
 
  const handleDuration = (e)=>{
  setDuration(e.target.value)
 }

 const handlename = (e)=>{
  setName(e.target.value)
 }
 const handleTour =(e)=>{
  setTourcode(e.target.value)
 }
  const handleSubmit=()=>{
    console.log(image, price,tourcode,facility,name,duration)
    const formData = new FormData()
     formData.append('image',image);
     formData.append('price', price)
     formData.append('tourcode', tourcode)
     formData.append('facility',facility)
     formData.append('name',name)
     formData.append('duration',duration)
  axios.post('http://localhost:5002/api/packages',formData)
  .then((res)=>{
    console.log(res.data)
  }).catch((err)=>{
    console.log('err', err)
  })
  }

  useEffect(()=>{
    axios.get('http://localhost:5002/api/packages')
    .then((res)=>{
      console.log(res.data.data)
      setData(res.data.data)
    })
  },[])
  useEffect(()=>{
    axios.get('http://localhost:5002/packages',{withCredentials: true})
  
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
    const handleDelete =(id)=>{
      axios.delete(`http://localhost:5002/api/packages/${id}`)
      .then((res)=>{
        console.log(res.data)
        const deletedata = data.filter(item => item._id !== id)
        setData(deletedata);
      })
    }
  return (
    <div>
      <Navbar/>
        <Layout/>
        <div className='hidden'>{suc}</div>
      <div className='content' style={{marginTop:"50px"}}>
        <h1>Package</h1>
      <div className='d-flex justify-content-center align-item-center'>
        <div >
          <form className='form'>
          <div className="mb-3">
               <label htmlFor="name" className="htmlForm-label">Package Name:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={name}
                      onChange={handlename}
                          required
                           autoComplete="off"
                 id="name" placeholder="Enter name" name="name" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="ima" className="htmlForm-label">Image:</label><br></br>
                 <input type="file" className="htmlForm-control"
                       onChange={(e) => setImage(e.target.files[0])}
                          required  autoComplete="off"
                 id="ima" placeholder="Enter Image" name="ima" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="price" className="htmlForm-label">price:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={price}
                      onChange={handleprice}
                          required   autoComplete="off"
                 id="price" placeholder="Enter Price" name="price" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="tour" className="htmlForm-label">Tour Code:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={tourcode}
                      onChange={handleTour}
                          required   autoComplete="off"
                 id="tour" placeholder="Enter Tour Code" name="tour" style={{width:"100%", border:'1px solid'}}/>
          </div>
         
          <div className="mb-3">
               <label htmlFor="duration" className="htmlForm-label">Duration:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={duration}
                      onChange={handleDuration}
                          required   autoComplete="off"
                 id="duration" placeholder="Enter Duration" name="duration" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="facility" className="htmlForm-label">facility:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={facility}
                      onChange={handlefacility}
                          required   autoComplete="off"
                 id="facility" placeholder="Enter facility" name="facility" style={{width:"100%", border:'1px solid'}}/>
          </div>
          
          <button type='submit' className='btn' style={{ border:"1px solid", color:"#5f6b97"}} onClick={handleSubmit}>submit</button>
          </form>
          <br></br>
          
          
        </div>
       
      </div>
      <div className='container-fluid mt-3' >
        <div className='row'>
        <label htmlFor="search" style={{ display: 'block', fontWeight: 'bold' }}>               Search by Package Name:
     </label>
        <input
            type="text"
            placeholder="Search by username..."
            id='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px", width:"300px" }}
          />
         
  <div className="">
      {records.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              
              <th>Image</th>
               <th>Package Name</th>
              <th>Price</th>
              <th>Facility</th>
              <th>Duration</th>
              <th>Tour Code</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {records.map((item, index) => (
              <tr key={index}>
                <td>
                <td><img src={`http://localhost:5002/${item.imageUrl}`} style={{width:"100px", height:"100px", border:"1px solid", borderRadius:"5px" , marginBottom:"10px"}} alt='....'></img></td>
                </td>
                <td>
                 {item.name}
                </td>
                <td>{item.price}</td>
                <td>{item.facility}</td>
                <td>{item.duration}</td>
                <td>{item.tourcode}</td>
                <td>
                  <Link
                    to={`/packagesedit/${item._id}`}
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
    </div>
  );
}

export default Packages;



