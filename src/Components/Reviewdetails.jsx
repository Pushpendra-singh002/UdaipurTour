import axios from "axios";
import React, { useState } from "react";
import {useParams} from "react-router-dom";

const Feedback = () => {
   const { id, } = useParams() || {}  
   const [data, setdata] = useState([]); 
   const [username, setusername] = useState(""); 
   const [comment, setComment] = useState(""); 
   const [rating, setRating] = useState(1);   
   const [title , setTitle] = useState('')


   
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    if (!username || !comment || !title) {
      alert("Please enter your username and a comment.");
      return;
    }
  
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
  
 

 return (
  <div>
   
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
        <button type="submit" className="btn btn-info" style={{ padding: "5px 10px", cursor: "pointer" }} onClick={() => window.location.href =`/carrental/details/${id}`}>
          Submit Review
        </button>
      </form>
    </div>

      {/* Display data */}
      {/* <div>
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
                
                  padding: "10px",
                  marginBottom: "10px",
            
                }}
              >
            
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
      </div> */}
      
    </div>
    </div>
  );
};

export default Feedback;



