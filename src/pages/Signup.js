import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
// import Navbar from './Navbar'

 function Signup() {
    const [name, setName]= useState('')
    const [email, setEmail]= useState('')
    const [phone, setPhone]=useState('')
    const [password, setPassword]= useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:5002/signup', {username:name, email, password,phone})
      .then(result => {console.log(result)
        navigate("/login")
      })

      .catch(err=> console.log(err))
    }
  return (
    <div >
       {/* <Navbar/> */}
       <Navbar/>
    <div className='d-flex justify-content-center align-item-center color ' style={{padding:"20px"}}>
       
      <div className=" color1 p-3 rounded form">
  <h2>Signup</h2>
  <form onSubmit={handleSubmit}>
  <div className="mb-3 mt-3">
      <label htmlFor="name"><b>Name:</b></label><br></br>
      <input type="name" style={{ border:"none", }} className="form-control rounded-1 " id="name" placeholder="Enter Name" name="name"
       value={name}
       onChange={(e)=>setName(e.target.value)}
       required
      />
    </div>
    <div className="mb-3 mt-3">
      <label htmlFor="email"><b>Email:</b></label><br></br>
      <input type="email" style={{border:"none",}} className="form-control rounded-1" id="email" placeholder="Enter email" name="email"
       value={email}
       onChange={(e)=>setEmail(e.target.value)}  required
      />
    </div>
    <div className="mb-3 mt-3">
      <label htmlFor="phone"><b>Phone:</b></label><br></br>
      <input type="name" style={{ border:"none", }} className="form-control rounded-1" id="phone" placeholder="Enter phone no." name="phone"
       value={phone}
       onChange={(e)=>setPhone(e.target.value)}  required
      />
    </div>
    <div className="mb-3">
      <label htmlFor="pwd"><b>Password:</b></label><br></br>
      <input type="password" style={{ border:"none", }} className="form-control rounded-1" id="pwd" placeholder="Enter password" name="pwd" 
       value={password}
       onChange={(e)=> setPassword(e.target.value)}  required
      />
    </div>
    <button type="submit" className="btn  w-100 rounded-1"  style={{ border:"1px solid", color:"#5f6b97", }}><b>Register</b></button>
    </form>
    <p><b style={{color:"white"}}>Already Have an Account  </b></p>
    <Link to="/login" className='btn btn-default  w-100  rounded-1 text-decoration-none' style={{ border:"1px solid", color:"#5f6b97"}}><b> LOGIN</b> </Link>
 
  
</div>
    </div>
    </div>
  )
}
export default Signup;

