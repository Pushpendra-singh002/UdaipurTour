import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'

function FeedUpdate() {
  const {id} = useParams()
    const [values, setValues] = useState({
        username:"",
        rating:"",
        title:"",
        comment:"",
    })
  const navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:5002/api/customer/${id}`)
        .then((res)=>{
            const feedData = res.data.data;
            setValues({
                username:feedData?.username  || "", 
                rating:feedData?.rating  || "",
                title:feedData?.title  || "",
                comment:feedData?.comment  || "", 
            })
        }).catch((err)=>{
            console.log(err, 'err')
        })
    },[id])

    
  


    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:5002/api/customer/${id}`,{
            username: values.username,
            rating: values.rating,
            comment: values.comment,
            title:values.title,
        }, {
      headers: {
          'Content-Type': 'application/json'
      }
  }).then((res)=>{
    console.log(res.data)
    navigate('/feed')
  }).catch((err)=>{
    console.log(err ,"err")
  })
    }
  return (
    <div>
        <Navbar/>
       <div style={{ maxWidth: "600px", margin: "50px auto", padding: "20px" }}>
      
            {/* Form to Add data */}
            <form onSubmit={handleSubmit}style={{  marginBottom: "20px" ,border:"1px solid black", borderRadius:"5px", width:"100%",margin:"30px",padding:"20px"}}>
            <h1>Add data</h1>
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor='user'>
                  <b>
                  username:
                  </b>
                  <input
                    type="text"
                    id='user'
                    value={values.username}
                    onChange={(e) => setValues({...values, username:e.target.value})}
                    style={{ width: "100%",  marginTop: "5px" }}
                  />
                </label >
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor='comment'>
                    <b>
                  Comment:
                    </b>
                  <textarea
                  id='comment'
                    value={values.comment}
                    onChange={(e) => setValues({...values, comment:e.target.value})}
                    style={{ width: "100%",  marginTop: "5px" }}
                  />
                </label>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor='title'>
                    <b>
                  Title:
                    </b>
                  <input
                  id='title'
                    value={values.title}
                    onChange={(e) => setValues({...values, title:e.target.value})}
                    style={{ width: "100%", marginTop: "5px" }}
                  />
                </label>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor='rating'>
                    <b>
                  Rating:
                    </b>
                  <select
                  id='rating'
                    value={values.rating}
                    onChange={(e) => setValues({ ...values, rating: Number(e.target.value) })}
                    // onChange={(e) => setValues(Number({...values, rating:e.target.value}))}
                    style={{ width: "100%", marginTop: "5px" }}
                  >
                    <option value={1}>1 - Poor</option>
                    <option value={2}>2 - Fair</option>
                    <option value={3}>3 - Good</option>
                    <option value={4}>4 - Very Good</option>
                    <option value={5}>5 - Excellent</option>
                  </select>
                </label>
              </div>
              <button type="submit" className='btn btn-info' style={{cursor: "pointer" }}>
                Submit Review
              </button>
            </form>
      
          </div>
    </div>
  )
}

export default FeedUpdate
