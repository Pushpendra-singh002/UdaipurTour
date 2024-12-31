import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='logo fixed-top'><h4><b>Keen Tour`s and Travel</b></h4></div>
    </div>
  )
}

export default Navbar


// import React, { useState , useEffect } from 'react'
// import axios from 'axios'
// import { useParams } from 'react-router-dom'
// import Navbar from './Navbar'
// import Slidebar2 from './slidebar2';
// import { useNavigate } from 'react-router-dom'
// import Footer from './Footer'
// function Userfull() {
//   const { id, } = useParams() || {}  
//  const [userId, setUserId]= useState({_id:''})
//     const [name, setName]= useState({username:""})
//     const [email, setEmail]= useState({email:""})
//     const [phone, setPhone]=useState({phone:""})
//     const [address, setAddress]= useState('')
//     const [classes, setClasses]= useState()
//     const [city , setCity]= useState('')    
//     const [state, setState]=useState('')
//     const [gender, setGender]= useState('')
//     const [language, setLanguage]= useState('')
//     const [date, setDate]= useState('')    
// const navigate = useNavigate()
//     useEffect(() => {
//       const storedUserId = sessionStorage.getItem('userId'); // Retrieve userId from sessionStorage
//       const storedUsername = sessionStorage.getItem('username');
//       const storedPhone = sessionStorage.getItem('phone');
//       const storedEmail = sessionStorage.getItem('email');
//     //  const storeAddress = sessionStorage.getItem('address');
//       console.log('Session data:', {
//         storedUserId, 
//        storedUsername, storedPhone, storedEmail, 
//       });
//       if (storedUserId 
//        && storedUsername && storedPhone && storedEmail
//         ) {
//           setUserId(storedUserId );
//           setName(storedUsername); // Set name directly to the string
//           setPhone(storedPhone); // Set phone directly to the string
//           setEmail(storedEmail); 
//           // setAddress(storeAddress)
//       } else if (id) {
//           // Fetch user data from the backend
//           axios.get(`http://localhost:5000/api/user/${id}`)
//               .then((res) =>{ setUserId(res.data._id)
//                 setName(res.data.username);
//           setPhone(res.data.phone);
//           setEmail(res.data.email);
//           // setAddress(res.data.address)
//                 sessionStorage.setItem('userId', res.data._id);
//                 sessionStorage.setItem('username', res.data.username);
//                 sessionStorage.setItem('phone', res.data.phone);
//                 sessionStorage.setItem('email', res.data.email);
//                 // sessionStorage.setItem('address', res.data.address);
                
//        } )
//               .catch((err) => console.log('Error fetching user data:', err));
//       } else {
//           console.error('No user ID found in URL or sessionStorage');
//       }
//   }, [id]);


//     const handleSubmit = (e) => {
//       e.preventDefault();
      
//       axios.post(`http://localhost:5000/api/users`, {
//         // user:user, // Replace with actual user ID if available or from context
//         userId,
//         username:name,
//         email,
//         phone,
//         address,
//         classes,
//         city,
//         state,
//         gender,
//         language,
//         date,
//       })
//       .then(result => {
//         console.log(result);
//         navigate(`/users/${id}`)
//       })
//       .catch(err => console.log(err));
//     };
//   return (
//     <div>
   
//        <Navbar/>
//        <Slidebar2/>
//        <div className='home3'>
//     <div className='d-flex justify-content-center align-item-center color ' style={{padding:"20px"}}>
       
//       <div className=" color1 p-3 rounded ">
//   <h2>Add your Full details</h2>
//   <form onSubmit={handleSubmit}>
//   <div className="mb-3 mt-3">
//   <input 
//         type="text" 
//         placeholder="Enter User ID" 
//         value={userId} 
//         className='heddin'
//         // onChange={(e) => setUserId(e.target.value)} 
//         onChange={(e) => setUserId( e.target.value )} 
//       />
//       </div>
//   <div className="mb-3 mt-3">
//       <label htmlFor="name"><b>Name:</b></label><br></br>
//       <b><input type="name" style={{background:"#a0a2bd", border:"none", color:"#5f6b97"}} className="form-control rounded-1 " id="name" placeholder="Enter Name" name="name"
//        value={name}
//        onChange={(e)=>setName(e.target.value)}  required
     
//       /></b>
//     </div>
//     <div className="mb-3 mt-3">
//       <label htmlFor="email"><b>Email:</b></label><br></br>
//      <b> <input type="email" style={{background:"#a0a2bd", border:"none", color:"#5f6b97"}} className="form-control rounded-1" id="email" placeholder="Enter email" name="email"
//        value={email}
//        onChange={(e)=>setEmail(e.target.value)}
       
//       /></b>
//     </div>
//     <div className="mb-3 mt-3">
//       <label htmlFor="phone"><b>Phone:</b></label><br></br>
//     <b>  <input type="name" style={{background:"#a0a2bd", border:"none", color:"#5f6b97"}} className="form-control rounded-1" id="phone" placeholder="Enter phone no." name="phone"
//        value={phone}
//        onChange={(e)=>setPhone(e.target.value)}  required
//       /></b>
//     </div>
//     {/* <div className="mb-3">
//       <label htmlFor="psswd"><b>Password:</b></label><br></br>
//       <input type="password" style={{background:"#a0a2bd", border:"none", color:"#5f6b97"}} className="form-control rounded-1" id="psswd" placeholder="Enter password" name="psswd" 
//        value={password}
//        onChange={(e)=> setPassword(e.target.value)}  required
//       />
//     </div> */}
//     <div className="mb-3">
//       <label htmlFor="pwd"><b>Address</b></label><br></br>
//       <input type="text" style={{background:"#a0a2bd", border:"none", color:"#5f6b97"}} className="form-control rounded-1" id="pwd" placeholder="Enter password" name="pwd" 
//        value={address}
//        onChange={(e)=> setAddress(e.target.value)}  required
//       />
//     </div>
//     <div className="mb-3 mt-3">
//       <label htmlFor="classes"><b>classes:</b></label><br></br>
//       <input type="name" style={{background:"#a0a2bd", border:"none", color:"#5f6b97"}} className="form-control rounded-1 " id="classes" placeholder="Enter Name" name="name"
//        value={classes}
//        onChange={(e)=>setClasses(e.target.value)}
//        required
//       />
//     </div>
//     <div className="mb-3 mt-3">
//       <label htmlFor="date"><b>Date of birth:</b></label><br></br>
//       <input type="date" style={{background:"#a0a2bd", border:"none", color:"#5f6b97"}} className="form-control rounded-1" id="date" placeholder="Enter email" name="date"
//        value={date}
//        onChange={(e)=>setDate(e.target.value)}  required
//       />
//     </div>
//     <div className="mb-3">
//     <label htmlFor="city" >City :</label><br></br>
//     <input type="text" className="form-control rounded-1"
//     value={city}
//     onChange={e => setCity( e.target.value)}
//     required
//     id="city" placeholder="Enter Ctiy name" name="city" style={{width:"100%",background:"#a0a2bd", border:"none", color:"#5f6b97",height:"35px"}}/>
//   </div>  
//   <div className="mb-3 mt-3">
//     <label htmlFor="state" >State:</label><br></br>
//     <input type="text" className="form-control rounded-1" 
//     value={state}
//     onChange={e => setState(e.target.value)}
//     required
//     id="state" placeholder="Enter Address" name="state" style={{width:"100%",background:"#a0a2bd", border:"none", color:"#5f6b97",height:"35px"}}/>
//   </div>   
//      <div>
//         <label>Gender:</label>
//         <select value={gender} className="form-control rounded-1" onChange={e => setGender(e.target.value)} style={{width:"100%",background:"#a0a2bd", border:"none", color:"#5f6b97",height:"35px"}} required>
//           <option value="">Select Gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>

//       <div>
//         <label>Language:</label>
//         <select value={language} className="form-control rounded-1" onChange={(e) => setLanguage(e.target.value)} style={{width:"100%",background:"#a0a2bd", border:"none", color:"#5f6b97",height:"35px"}} required>
//           <option value="">Select Language</option>
//           <option value="English">English</option>
//           <option value="Spanish">Spanish</option>
//           <option value="French">French</option>
//           <option value="Hindi">Hindi</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>
// <br></br>
//       {/* <Link className="NavLink" type="submit" to={`/users/${id}`} >ADD </Link> */}
  
//     <button type="submit" className="btn btn-success w-100 rounded-1">ADD</button>
//     </form>
//     {/* <p>Already Have an Account  </p> */}
//     {/* <Link to="/login" className='btn btn-default  w-100  rounded-1 text-decoration-none' style={{background:"#0b1a53", border:"none", color:"#5f6b97"}}> LOGIN </Link> */}
    
//   <div>
  
//   </div>
// </div>
//  <div className="mb-3 mt-3">
//  {/* {user ? (
//         <div>
//           <h2>{user.address}</h2>
//           <p>{user.city}</p>
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )} */}
//   </div>
//     </div>
   
//     <Footer/>
//     </div>
//     </div>
//   )
// }

// export default Userfull

