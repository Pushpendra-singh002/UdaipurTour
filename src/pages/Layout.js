import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi"
import { FaHome, FaUserAlt,  FaCar,FaShoppingBasket,  FaUserEdit} from "react-icons/fa";
// FaChalkboardTeacher, FaUserEdit ,
import { CgMenu } from "react-icons/cg";
// import Navbar from './Navbar'
import axios from "axios";
const Layout = () => {
  // const {id} = useParams();
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate()
  const toggleSidebar = () => {
    setOpenMenu(!openMenu);
  };
  const handleLogout =()=>{
    axios.get("http://localhost:5002/logout")
    .then((res)=>{
     if(res.data.status){
     navigate('/login')
      
     }
    }
   ).catch(err=> 
     console.log(err)
   )
   }
  return (
   <div>
    <div className="navbar-div" >
      {/* Mobile Toggle Button */}
     
      <div className="mobile-navbar-btn " onClick={toggleSidebar}>
        <CgMenu />
      </div>
      
     
      {/* Sidebar */}
      <div className={`sidebar ${openMenu ? 'active' : ''}`}>
        
        <ul className="navbar-ul">
          <li>
        <h4 className="logo1"><b>Keen Tour</b></h4>
        </li>
          <li className="navbar-item">
            <Link className="NavLink" to={`/Dashboard`} onClick={toggleSidebar}>
              <FaHome className="menu-icon" />
              <span className="menu-text">Dashboard</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="NavLink" to={`/package`} onClick={toggleSidebar}>
              <FaUserAlt className="menu-icon" />
              <span className="menu-text">Packages</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="NavLink" to={`/carnew`} onClick={toggleSidebar}>
              <FaCar className="menu-icon" />
              <span className="menu-text">Car Rental </span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="NavLink" to={`/order`} onClick={toggleSidebar}>
            <FaShoppingBasket className="menu-icon"/>
              <span className="menu-text">Booking Car</span>
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="NavLink" to="/feed" onClick={toggleSidebar}>
              <FaUserEdit className="menu-icon" />
              <span className="menu-text">Add Review</span>
            </Link>
          </li>
         
          <li className="navbar-item">
            <Link className="NavLink" to="/packget" onClick={toggleSidebar}>
              <FaUserEdit className="menu-icon" />
              <span className="menu-text">Booking package</span>
            </Link>
          </li>
          <li className="navbar-item NavLink">
              <BiLogOut className="menu-icon" />
              <span className="menu-text" onClick={handleLogout}>Logout</span>
            
          </li>
        </ul>
      </div>

      {/* Content */}

        {/* <Navbar/> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
