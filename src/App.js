
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
// import Navbar from './pages/Navbar';
import Carrentals from './pages/Carrental';

import User from './pages/User';
import Signup from './pages/Signup';
import Package from './pages/Package';
import CarUpdate from './pages/CarUpdate';
import Packagesupdate from './pages/Packagesupdate';
import Order from './pages/Order';
import Singlepage from './pages/Singlepage';
import OrderUpdate from './pages/OrderUpdate';
import Pack from './pages/Pack';
import Packbook from './pages/Packbook';
import Packupdate from './pages/Packupdate';
import Feedback from './pages/Feedback';
import FeedUpdate from './pages/FeedUpdate';
import CarNew from './pages/CarNew';
import CarNewUpdate from './pages/CarNewUpdate';
import CarRental from './Components/CarRental';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Tourism from './Components/Tourism';
import Packagedetails from './Components/Packagedetails';
import CarRentalDetails from './Components/CarRentalDetails';
import CarDetails from './Components/CarDetails';
import Reviewdetails from './Components/Reviewdetails';
import Packages from './Components/Packages';
function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/packagesedit/:id" element={<Packagesupdate/>}/>
        <Route path='/car/:id' element={<CarUpdate/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrental" element={<Carrentals />} />
        <Route path="/package" element={<Package />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/layout" element={<Layout />} />
        <Route path='/order' element={<Order/>}/>
        <Route path='/single/:id' element={<Singlepage/>}/>
        <Route path="/orderedit/:id" element={<OrderUpdate/>} />
        <Route path='/pack' element={<Pack/>}/>
        <Route path='/packget' element={<Packbook/>} /> 
        <Route path='/packupdate/:id' element={<Packupdate/>} />
        <Route path='/feed' element={<Feedback/>}/>
        <Route path='/feedupdate/:id' element={<FeedUpdate/>}/>
        <Route path='/carnew' element={<CarNew/>}/>
        <Route path='/carupdate/:id' element={<CarNewUpdate/>}/> 
        {/* <Route path="/home" element={<Home/>} />  */}
        <Route path="/carRentalfront" element={<CarRental/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/udaipurtourism" element={<Tourism/>}></Route>
        <Route path="/packagedetails" element={<Packagedetails/>}></Route>
        <Route path="/carrental/details/:id" element={<CarRentalDetails />} />
       <Route path="/cardetails/:id" element={<CarDetails/>}></Route>
       <Route path="/reviewdetails/:id" element={<Reviewdetails/>}></Route>
       <Route path="/packages" element={<Packages/>}></Route>
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
