
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import Layout from './Layout'
 import { useNavigate,Link} from 'react-router-dom'

const Carrental = () => {
  // const {id} = useParams();
  const [heading, setHeading] = useState('');
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate()
  const [data , setData] = useState([])
  const [carOptions, setCarOptions] = useState([{ type: '', price: '' }]);
  const [suc, setSuc]= useState('')
  
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1)
   const recordsperPage = 6;
   const lastIndex =currentPage * recordsperPage;
   const firstIndex = lastIndex - recordsperPage;
  
   const filteredData = data.filter(
    (item) =>
      // item.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.heading.toLowerCase().includes(searchTerm.toLowerCase()) 
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

  const handleheading = (e) => {
    setHeading(e.target.value);
  };

  const handleCarSelect = (cardIndex, car) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [cardIndex]: car,
    }));
  };
  
  const handleRedirect = (cardIndex) => {
    const selectedCar = selectedOptions[cardIndex];
    const packageTitle = data[cardIndex].heading;
  
    if (selectedCar) {
      navigate(`/user`, {
        state: {
          heading: packageTitle,
          type: selectedCar.type,
          price: selectedCar.price,
        },
      });
    }
  };
  

  const handleCarOptionChange = (index, field, value) => {
    const updatedOptions = [...carOptions];
    updatedOptions[index][field] = value;
    setCarOptions(updatedOptions);
  };

  const addCarOption = () => {
    setCarOptions([...carOptions, { type: '', price: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCarRental = { heading, carOptions };

    try {
      const response = await axios.post('http://localhost:5001/api/carrental', newCarRental);
      console.log('Car rental added:', response.data);
      setData(data)
    } catch (error) {
      console.error('Error adding car rental:', error);
    }
  };
  const handleDelete =(id)=>{
        axios.delete(`http://localhost:5001/api/carrental/${id}`)
        .then((res)=>{
          console.log(res.data)
          const deletedata = data.filter(item => item._id !== id)
          setData(deletedata);
        })
      }
         useEffect(()=>{
    axios.get('http://localhost:5001/api/carrental')
    .then((res)=>{
      console.log(res.data.data)
     setData(res.data.data)
    })
   },[])

     useEffect(()=>{
    axios.get('http://localhost:5001/carrental',{withCredentials: true})
  
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
   
  return (
    <div>
      <Navbar/>
      <Layout/>
      <div className='hidden'>{suc}</div>
      <div className='content' style={{marginTop:"50px"}}>
      <div className='d-flex justify-content-center align-item-center '>
    <form onSubmit={handleSubmit} style={{  marginBottom: "20px" ,border:"1px solid black", borderRadius:"5px", width:"380px",margin:"30px",padding:"20px"}}>
      <h2>Add Car Rental</h2>
      <div className="mb-3">
                <label htmlFor="heading" className="htmlForm-label">Heading:</label><br></br>
                <input type="text" className="htmlForm-control"
                   value={heading}                    onChange={handleheading}
                          required
                 id="heading" placeholder="Enter heading" name="heading" style={{width:"100%", border:'1px solid'}}/>         </div>
     <div className='md-3'>
      <h3>Car Options:</h3>
      {carOptions.map((option, index) => (
        <div key={index}>
           <label htmlFor={`type-${index}`} className="htmlForm-label">Type:</label><br></br>
          <input
            type="text"
            id={`type-${index}`}
            name={`type-${index}`}
            placeholder="Type"
            value={option.type}
            style={{width:"100%", border:'1px solid'}}
            onChange={(e) => handleCarOptionChange(index, 'type', e.target.value)}
            required
          />
          <br></br>
           <label htmlFor={`price-${index}`} className="htmlForm-label">Price:</label><br></br>
          <input
            type="number"
            placeholder="Price"
            id={`price-${index}`}
            name={`price-${index}`}
            style={{width:"100%", border:'1px solid'}}
            value={option.price}
            onChange={(e) => handleCarOptionChange(index, 'price', e.target.value)}
            required
          />
        </div>
        
      ))}
      </div>
      <br></br>
      <b>Add more Car type and Price</b><br></br>
      <button type="button" className='btn' style={{ backgroundColor:"#4ac4f3" ,marginRight:"80px"}} onClick={addCarOption}>
        Add More
      </button>
      

      <button type="submit" className='btn btn-success'>Submit</button>
    </form>
</div>

    <div className="container mt-5">
    <label htmlFor="search" style={{ display: 'block', fontWeight: 'bold' }}>               Search by Package Name:
     </label>
        <input
            type="text"
            id='search'
            placeholder="Search by username..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: "10px", padding: "5px", width:"300px" }}
          />
  <div className="row">
 
    {records.map((item, cardIndex) => (
      <div className="col-md-4 mb-4" key={cardIndex}>
        <div className="card custom-card">
          <div className="card-body text-center">
            <h2 className="card-title mb-4">{item.heading}</h2>
            <div className="d-flex flex-column gap-2 mb-4">
              {item.carOptions.map((car, index) => (
                <button
                  key={index} 
                  
                  className="btn btn-outline car-btn"
                  onClick={() => handleCarSelect(cardIndex, car)}
                ><b>
                  {car.type}
                  </b>
                </button>
              ))}
            </div>
            <div className="price-display">
              {selectedOptions[cardIndex] ? (
                
                <button style={{ backgroundColor:"#4ac4f3" }}
                  className="btn btn-outline price-btn"
                  onClick={() => handleRedirect(cardIndex)}
                 
                >
                  Book Now: ₹{selectedOptions[cardIndex].price}
                </button>
              ) : (
                <button className="btn btn-outline"  style={{border:"none", }} disabled>
                  Select a car to see the price
                </button>
              )}
            </div>
            <Link to={`/car/${item._id}`} className='btn' style={{ backgroundColor:"#4ac4f3" ,marginRight:"80px"}}><b>Update</b></Link>
             
            <button
              className="btn btn-danger mt-2"
              onClick={() => {
                const confirmBox = window.confirm(
                  "Do you really want to delete this item?"
                );
                if (confirmBox === true) {
                  handleDelete(item._id);
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    ))}
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
    </div>
  );
};

export default Carrental;


