
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from './Navbar';
// import logo from '../image/logo.jpg'
function Login() {
   
   const [errors, setErrors] = useState({});
   
   const [formData, setFormData]= useState({
    email:'',
    password:'',
   })
   
   const navigate = useNavigate()

   const handleChange = (e)=>{
   
    const {name , value} = e.target
setFormData({
  ...formData, [name] :value
})

   }
    axios.defaults.withCredentials = true;

   const handleSubmit = (e) =>{
     e.preventDefault();
     axios.post('http://localhost:5002/login', { 
       email: formData.email,
      password: formData.password,})

      
     
      .then(result => {
        if (result.data.Status === "Success") {
          const userId = result.data.id;
          sessionStorage.setItem('userId', userId);
      
          // Fetch user details using userId
          axios.get(`http://localhost:5002/api/user/${userId}`)
          .then(profileRes => {
            const userData = profileRes.data;
            sessionStorage.setItem('username', userData.username);
            sessionStorage.setItem('phone', userData.phone);
            sessionStorage.setItem('email', userData.email);
           
            if (result.data.role === "admin") {
              navigate(`/Dashboard`);
              alert('Admin login successful');
            } else {
              alert('login successful');
              // navigate(`/user/${userId}`);
              navigate('/home')
            }
          })
          .catch(profileErr => {
            console.error("Error fetching user profile: ", profileErr);
          });
        } else {
          alert('login failed')
          console.error('Login failed');
        }
      })
      .catch(err => {
        console.error("Login error: ", err);
        // alert('Incorrect password');
      });
    const validationErrors={}
    if(!formData.email.trim()){
      validationErrors.email = "email is required"
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)){
      validationErrors.email = "email is not valid"
    }
    if(!formData.password.trim()){
      validationErrors.password = "password is required"
    }else if(formData.password.length<4){
      validationErrors.password = "password should be at least 4 char"
      // navigate('/login')
    }

    setErrors(validationErrors)
    if(Object.keys(validationErrors).length === 0){
      console.log("login successfull")
    }else{
      alert("password in incorrect")
    }
    

  }
  return(
    <div className='login'>
       <Navbar/>
    <div className='color'>
     
     
        
    <div className='d-flex justify-content-center align-item-center '>
    
      <div className=" color1 p-3 rounded form">
  <h2>Login

  </h2>
  <form onSubmit={handleSubmit}>
  
    <div className="mb-3 mt-3">
      <label htmlFor="email"><b>Email:</b></label><br></br>
      <input type="email" className="form-control rounded-1" style={{ border:"none", }} id="email" placeholder="Enter email" name="email"
       value={formData.email}
      //  onChange={(e)=>setEmail(e.target.value)}
      onChange={handleChange}
       required
       autoComplete='off'
      />
      {errors.email && <span>{errors.email}</span> }     
    </div>
    <div className="mb-3">
      <label htmlFor="pwd"><b>Password:</b></label><br></br>
      <input type="password" className="form-control rounded-1" style={{ border:"none", }} id="pwd" placeholder="Enter password" name="password" 
       value={formData.password}
      //  onChange={(e)=> setPassword(e.target.value)}
      onChange={handleChange}
       required
      />
         {errors.password && <span>{errors.password}</span> }   
    </div>
    <button type='submit' className='btn btn-default border w-100 rounded-1 text-decoration-none' style={{ border:"none", color:"black"}}><b>Login</b></button>
    <br></br>
    <Link to="/forgotpassword"  style={{color:'white'}}>Forgotpassword</Link>
    <br></br><br></br>
    <Link to="/signup" className='btn btn-default border w-100 rounded-1 text-decoration-none ' style={{  border:"none", color:"white"}}> SIGN UP </Link>
    </form>
    </div>
    </div></div>
    </div>
    
  )
}

export default Login;
