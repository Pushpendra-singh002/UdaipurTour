
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Navbar from './pages/Navbar';
import Carrental from './pages/Carrental';

import User from './pages/User';
import Signup from './pages/Signup';
import Packages from './pages/Packages';
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


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/> } />
        <Route path="/packagesedit/:id" element={<Packagesupdate/>}/>
        <Route path='/car/:id' element={<CarUpdate/>}/>
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/carrental" element={<Carrental />} />
        <Route path="/package" element={<Packages />} />
        <Route path="/user/:id" element={<User />} />
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
      </Routes>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
