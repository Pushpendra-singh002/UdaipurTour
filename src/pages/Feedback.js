import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Layout from "./Layout";
import { Link, useNavigate } from "react-router-dom";

const Feedback = () => {
   const [suc, setSuc]= useState('')
   const [data, setdata] = useState([]); 
   const [username, setusername] = useState(""); 
   const [comment, setComment] = useState(""); 
   const [rating, setRating] = useState(1);   
   const [title , setTitle] = useState('')
   const [searchTerm, setSearchTerm] = useState('');
   const [currentPage, setCurrentPage] = useState(1)
   const recordsperPage = 3;
   const lastIndex =currentPage * recordsperPage;
   const firstIndex = lastIndex - recordsperPage;
    
     const filteredData = data.filter(
      (item) =>
        // item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.username.toLowerCase().includes(searchTerm.toLowerCase()) 
        // ||
        // item.type.toLowerCase().includes(searchTerm.toLowerCase())
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
  
    axios.get('http://localhost:5002/api/customer')
    .then((res)=>{
      console.log(res.data)
      setdata(res.data.data)
   })
  },[])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Ensure the user has entered both a username and a comment
    if (!username || !comment || !title) {
      alert("Please enter your username and a comment.");
      return;
    }
  
    // Prepare the data to send
    const newReview = { username, comment, rating , title};
  
    try {
      // Send data to the backend
      const response = await axios.post("http://localhost:5002/api/customer", newReview);
  
      // Handle the response if needed (e.g., show success message or log response)
      console.log("Review added successfully:", response.data);
  
      // Add the new review to the UI state
      setdata([...data, newReview]);
  
      // Clear the form fields
      setusername("");
      setComment("");
      setTitle('')
      setRating(1); // Reset rating to 1
    } catch (error) {
      console.error("Error adding review:", error);
      alert("An error occurred while submitting your review. Please try again.");
    }
  };
  
  // Convert rating number to stars
  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating); // Full stars and empty stars
  };
  const handleDelete = (id)=>{
    axios.delete(`http://localhost:5002/api/customer/${id}`)
    .then((res)=>{
      const deletedata = data.filter(review => review._id !== id)
      setdata(deletedata)
    })
  }
  // Provide rating labels
  const getRatingLabel = (rating) => {
    const labels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
    return labels[rating - 1];
  };

  const handleHideToggle = async (id) => {
    try {
      const response = await axios.put(`http://localhost:5002/api/customer/${id}/toggleHide`);
  
      // Update the state to reflect the changes
      setdata((prevData) =>
        prevData.map((item) =>
          item._id === id ? { ...item, hidden: response.data.data.hidden } : item
        )
      );
    } catch (error) {
      console.error("Error toggling hide/show state:", error);
      alert("Failed to toggle the visibility. Please try again.");
    }
  };
   
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get('http://localhost:5002/feed',{withCredentials: true})
  
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
  return (<div>
    <Navbar/>
    {suc}
    <Layout/>
    <div  style={{ maxWidth: "600px",  margin: "50px auto", padding: "20px" }}>
<div className='d-flex justify-content-center align-item-center' >
      {/* Form to Add data */}
      
      <form onSubmit={handleSubmit} style={{  marginBottom: "20px" ,border:"1px solid black", borderRadius:"5px", width:"380px",margin:"30px",padding:"20px"}}>
    <h1>Add data</h1>
        <div className="mb-3" >
          <label htmlFor="user">
            <b>
            username:
            </b>
            <input
              type="text"
              id="user"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              style={{ width: "300px",marginTop:"2px"}}
            />
          </label>
        </div>
        <div className="mb-3" >
          <label htmlFor="comment">
            <b>
               Comment:
            </b>
            <textarea
            id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              style={{ width: "300px",   }}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="title">
            <b>
            Title:
            </b>
            <br></br>
            <input
            id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: "300px",  }}
            />
          </label>
        </div>
        <div className="mb-3" >
          <label htmlFor="rating">
            <b>
            Rating:
            </b>
            <br></br>
            <select id="rating"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              style={{ width: "300px",  }}
            >
              <option value={1}>1 - Poor</option>
              <option value={2}>2 - Fair</option>
              <option value={3}>3 - Good</option>
              <option value={4}>4 - Very Good</option>
              <option value={5}>5 - Excellent</option>
            </select>
          </label>
        </div>
        <button type="submit" className="btn btn-info" style={{ padding: "5px 10px", cursor: "pointer" }}>
          Submit Review
        </button>
      </form>
      </div>

      {/* Display data */}
      <div>
        <h2>All data:</h2>
        <br></br>
        <label htmlFor="search" style={{ display: 'block', fontWeight: 'bold' }}>   
                Search by Package Name:
            </label>
        <input
            type="text"
            id="search"
            placeholder="Search by username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px", width:"300px" }}
          />
        {data.length === 0 ? (
          <p>No data yet. Be the first to add one!</p>
        ) : (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {records.map((review, index) => (
              <li
                key={index}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                }}
              >
                
                {/* Conditionally hide/show the review details */}
      {!review.hidden && (
        <>
        <strong>{review.username}</strong>
        <p>{review.title}</p>
          <p>{review.comment}</p>
          <p>
            Rating:{" "}
            <span style={{ color: "#FFD700", fontSize: "18px" }}>
              {renderStars(review.rating)}
            </span>{" "}
            ({getRatingLabel(review.rating)})
          </p>
        </>
      )}
                {/* <p>{review.comment}</p>
                <p>
                  Rating: <span style={{ color: "#FFD700", fontSize: "18px" }}>{renderStars(review.rating)}</span>{" "}
                  ({getRatingLabel(review.rating)})
                </p> */}
               <Link to={`/feedupdate/${review._id}`} className="btn btn-info" style={{marginTop:"7px" , marginRight:"50px"}}> Update</Link>
                <button
               className="btn btn-danger mt-2"
               onClick={() => {
                 const confirmBox = window.confirm(
                   "Do you really want to delete this item?"
                 );
                 if (confirmBox === true) {
                   handleDelete(review._id);
                 }
               }}
             >
               Delete
             </button>
             <button
                    className="btn btn-warning mt-2"
                    onClick={() => handleHideToggle(review._id)}
                    style={{ marginLeft: "10px" }}
                  >
                    {review.hidden ? "Show Data" : "Hide Data"}
                  </button>
              </li>
              
            ))}
          </ul>
        )}
        <br></br>
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
    </div>
    </div>
  );
};

export default Feedback;
