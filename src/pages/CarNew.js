import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Layout from './Layout'
import { FaPencilAlt } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
function CarNew() {
      const [carOptionsList, setCarOptionsList] = useState([{ type: '',list:''}]);
      const [faq, setFaq] = useState([{question:'', answer:""}])
      const [data, setData] = useState([])
       const [image, setImage] = useState('')
       const [seater, setSeater ] = useState('')
       const [price , setPrice] = useState('')
       const [facility, setFacility]= useState([{listF:'', listS:""}]) // facility
       const [carheading, setCarheading] = useState('')
       const [carname, setCarname] = useState('') // carname
      //  const [heading , setheading] = useState('')
     const [searchTerm , setSearchTerm] = useState('')
     const [currentPage, setCurrentPage]= useState(1)
     const recordsperPage = 5;
    const lastIndex = currentPage * recordsperPage;
    const firstIndex = lastIndex - recordsperPage
    
    const filteredData = data.filter((item) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
      return (
        (item.carname && item.carname.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.seater && item.seater.toLowerCase().includes(lowerCaseSearchTerm)) ||
        (item.price && item.price.toString().includes(searchTerm)) // Convert price to a string
      );
    });
    
    

     const records = filteredData.slice(firstIndex, lastIndex);
     const npage = Math.ceil(filteredData.length / recordsperPage)
     const number = [...Array(npage + 1).keys()].slice(1)

    function PrevPage(){
      if(currentPage !== 1){
        setCurrentPage(currentPage - 1)
      }
    }
     function nextPage(){
      if(currentPage !== npage){
        setCurrentPage(currentPage + 1)
      }
     }
     function changeCPage(id){
      setCurrentPage(id)
     }

       const [desc , setDesc] = useState('')
       const [whychoose , setWhychoose] = useState([{listf:'', lists:''}])
       const handleprice=(e)=>{
        setPrice(e.target.value)
      }
     
      const handlefdesc=(e)=>{
        setDesc(e.target.value)
      }
     
      const handlecarheading = (e)=>{
      setCarheading(e.target.value)
     }
    
     const handlecarname = (e)=>{
      setCarname(e.target.value)
     }
     const handleseater =(e)=>{
      setSeater(e.target.value)
     }
      const handleSubmit=(e)=>{
        e.preventDefault();    
        console.log(image, price,facility,carname,carheading,faq)
        const formData = new FormData()
         formData.append('image',image);
         formData.append('desc', desc)
         formData.append('carOptionsList',JSON.stringify(carOptionsList));
         formData.append('faq',JSON.stringify(faq));
         formData.append('price', price)
         formData.append('whychoose',JSON.stringify(whychoose))
         
         formData.append('seater', seater)
         formData.append('facility',JSON.stringify(facility))
         formData.append('carname',carname)
         formData.append('carheading',carheading)
      axios.post('http://localhost:5002/api/carrental',formData)
      .then((res)=>{
        console.log(res.data)
       ; // Check the content of carOptionsList

      }).catch((err)=>{
        console.log('err', err)
      })
      }
      const handleCarOptionChange = (index, field, value) => {
        const updatedOptions = [...carOptionsList];
        updatedOptions[index][field] = value;
        setCarOptionsList(updatedOptions);
      };
      const handleFaq = (index, field, value) => {
        const updatedOptionsFaq = [...faq];
        updatedOptionsFaq[index][field] = value;
        setFaq(updatedOptionsFaq);
      };
      const addCarOption = () => {
        setCarOptionsList([...carOptionsList, {type:"", list:''  }]);
      };
      const addFaq = () => {
        setFaq([...faq, {question:"", answer:''  }]);
      };
      const handlefacility = (index, field, value) => {
        const updatedOptionsFacility = [...facility];
        updatedOptionsFacility[index][field] = value;
        setFacility(updatedOptionsFacility);
      };
      const addFacility = () => {
        setFacility([...facility, {listF:"", listS:''  }]);
      };
      const handlechoose = (index, field, value) => {
        const updatedOptionswhy = [...whychoose];
        updatedOptionswhy[index][field] = value;
        setWhychoose(updatedOptionswhy);
      };
      const addchoose = () => {
        setWhychoose([...whychoose, {listf:"", lists:''  }]);
      };
      const handleDelete =(id)=>{
        axios.delete(`http://localhost:5002/api/carrental/${id}`)
        .then((res)=>{
          console.log(res.data)
          const deletedata = data.filter(item => item._id !== id)
          setData(deletedata);
        })
      }
         useEffect(()=>{
    axios.get('http://localhost:5002/api/carrental')
    .then((res)=>{
      console.log(res.data.data)
     setData(res.data.data)
    })
   },[])

  return (
    <div>
      <Navbar/>
      <Layout/>

         <div className='content' style={{marginTop:"50px"}}>
            <div className='d-flex justify-content-center align-item-center'>
              <div >
              <h1 style={{marginTop:"20px", marginLeft:"40px"}} className=''>Car Rental</h1>
                <form className='form'>
                <div className="mb-3">
                     <label htmlFor="carname" className="htmlForm-label">Carname:</label><br></br>
                       <input type="text" className="htmlForm-control"
                          value={carname}
                            onChange={handlecarname}
                                required
                                 autoComplete="off"
                       id="carname" placeholder="Enter carname" carname="carname" style={{width:"100%", border:'1px solid'}}/>
                </div>
                <div className="mb-3">
                     <label htmlFor="ima" className="htmlForm-label">Image:</label><br></br>
                       <input type="file" className="htmlForm-control"
                             onChange={(e) => setImage(e.target.files[0])}
                                required  autoComplete="off"
                       id="ima" placeholder="Enter Image" carname="ima" style={{width:"100%", border:'1px solid'}}/>
                </div>
                <div className="mb-3">
                     <label htmlFor="car" className="htmlForm-label">desc:</label><br></br>
                       <input type="text" className="htmlForm-control"
                          value={desc}
                            onChange={handlefdesc}
                                required
                                 autoComplete="off"
                       id="car" placeholder="Enter descrition" carname="car" style={{width:"100%", border:'1px solid'}}/>
                </div>
                <div className='md-3'>
      <h3>Car List:</h3>
       {carOptionsList.map((option, index) => (
        <div key={index}>
           <label htmlFor={`type-${index}`} className="htmlForm-label">Type:</label><br></br>
          <input
            type="text"
            id={`type-${index}`}
            name={`type-${index}`}
            placeholder="list"
            value={option.type}
            style={{width:"100%", border:'1px solid'}}
            onChange={(e) => handleCarOptionChange(index, 'type', e.target.value)}
            required
          />
           <label htmlFor={`list-${index}`} className="htmlForm-label">List:</label><br></br>
          <input
            type="text"
            id={`list-${index}`}
            name={`list-${index}`}
            placeholder="list"
            value={option.list}
            style={{width:"100%", border:'1px solid'}}
            onChange={(e) => handleCarOptionChange(index, 'list', e.target.value)}
            required
          />
        </div>
               
      ))}       
       <b>Add more Points</b><br></br>
      <button type="button" className='btn' style={{ backgroundColor:"#4ac4f3" ,marginRight:"80px"}} onClick={addCarOption}>
        Add More
      </button> 
      </div>
      <div className='md-3'>
      <h3>Add Facility:</h3>
       {facility.map((option, index) => (
        <div key={index}>
           <label htmlFor={`listF-${index}`} className="htmlForm-label">Type:</label><br></br>
          <input
            type="text"
            id={`listF-${index}`}
            name={`listF-${index}`}
            placeholder="list"
            value={option.listF}
            style={{width:"100%", border:'1px solid'}}
            onChange={(e) => handlefacility(index, 'listF', e.target.value)}
            required
          />
           <label htmlFor={`lists-${index}`} className="htmlForm-label">List:</label><br></br>
          <input
            type="text"
            id={`listS-${index}`}
            name={`listS-${index}`}
            placeholder="list"
            value={option.listS}
            style={{width:"100%", border:'1px solid'}}
            onChange={(e) => handlefacility(index, 'listS', e.target.value)}
            required
          />
        </div>
               
      ))}       
       <b>Add more Points</b><br></br>
      <button type="button" className='btn' style={{ backgroundColor:"#4ac4f3" ,marginRight:"80px"}} onClick={addFacility}>
        Add More 
      </button> 
      </div>
      <div className='md-3'>
        <h3>ADD FAQ</h3>
      {faq.map((option, index) => (
        <div key={index}>
           <label htmlFor={`question-${index}`} className="htmlForm-label">Question:</label><br></br>
          <input
            type="text"
            id={`question-${index}`}
            name={`question-${index}`}
            placeholder="list"
            value={option.question}
            style={{width:"100%", border:'1px solid'}}
            onChange={(e) => handleFaq(index, 'question', e.target.value)}
            required
          />
           <label htmlFor={`answer-${index}`} className="htmlForm-label">Answer:</label><br></br>
          <input
            type="text"
            id={`answer-${index}`}
            name={`answer-${index}`}
            placeholder="list"
            value={option.answer}
            style={{width:"100%", border:'1px solid'}}
            onChange={(e) => handleFaq(index, 'answer', e.target.value)}
            required
          />
        </div>
               
      ))} 
      <b>Add more Faq Question & Answer</b><br></br>
      <button type="button" className='btn' style={{ backgroundColor:"#4ac4f3" ,marginRight:"80px"}} onClick={addFaq}>
        Add More FAQ
      </button> 
      </div>

      <div className='md-3'>
      <h3>why Choose:</h3>
       {whychoose.map((option, index) => (
        <div key={index}>
           <label htmlFor={`listf-${index}`} className="htmlForm-label">List:</label><br></br>
          <input
            type="text"
            id={`listf-${index}`}
            name={`listf-${index}`}
            placeholder="list"
            value={option.listf}
            style={{width:"100%", border:'1px solid'}}
            onChange={(e) => handlechoose(index, 'listf', e.target.value)}
            required
          />
           <label htmlFor={`lists-${index}`} className="htmlForm-label">List:</label><br></br>
          <input
            type="text"
            id={`lists-${index}`}
            name={`lists-${index}`}
            placeholder="list"
            value={option.lists}
            style={{width:"100%", border:'1px solid'}}
            onChange={(e) => handlechoose(index, 'lists', e.target.value)}
            required
          />
        </div>
               
      ))}       
       <b>Add more Points</b><br></br>
      <button type="button" className='btn' style={{ backgroundColor:"#4ac4f3" ,marginRight:"80px"}} onClick={addchoose}>
        Add More
      </button> 
      </div>
                <div className="mb-3">
                     <label htmlFor="price" className="htmlForm-label">price:</label><br></br>
                       <input type="text" className="htmlForm-control"
                          value={price}
                            onChange={handleprice}
                                required   autoComplete="off"
                       id="price" placeholder="Enter Price" carname="price" style={{width:"100%", border:'1px solid'}}/>
                </div>
                 <div className="mb-3">
                     <label htmlFor="seater" className="htmlForm-label">Seater:</label><br></br>
                       <input type="text" className="htmlForm-control"
                          value={seater}
                            onChange={handleseater}
                                required   autoComplete="off"
                       id="seater" placeholder="Enter Tour Code" carname="seater" style={{width:"100%", border:'1px solid'}}/>
                </div> 
               
                <div className="mb-3">
                     <label htmlFor="carheading" className="htmlForm-label">carheading:</label><br></br>
                       <input type="text" className="htmlForm-control"
                          value={carheading}
                            onChange={handlecarheading}
                                required   autoComplete="off"
                       id="carheading" placeholder="Enter carheading" carname="carheading" style={{width:"100%", border:'1px solid'}}/>
                </div>
               
                
                <button type='submit' className='btn' style={{ border:"1px solid", color:"#5f6b97"}} onClick={handleSubmit}>submit</button>
                </form>
                <br></br>
                
                
              </div>
              
              </div>
              <div className="content">
 <div className="mb-3" style={{margin:"20px",}}>
                     <label htmlFor="facility" className="htmlForm-label"><strong>search car:</strong></label><br></br>
                       <input type="text" className="htmlForm-control"
                          value={searchTerm}
                            onChange={(e)=>setSearchTerm(e.target.value)}
                                required   autoComplete="off"
                       id="facility" placeholder="Enter facility" carname="facility" style={{width:"300px", border:'1px solid'}}/>
                </div>
  {records.length > 0 ? (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Image</th>
          <th>Car Name</th>
          <th>Price</th>
          {/* <th>Facility</th> */}
          {/* <th>Car Heading</th> */}
          <th> Update</th>
          <th>Delete</th>
          <th>View</th>
          {/* <th>list</th> */}
        </tr>
      </thead>
      <tbody>
        {records.map((item, index) => (
          <tr key={index}>
            <td>
              <img
                src={`http://localhost:5002/${item.imageUrl}`}
                style={{
                  width: "100px",
                  height: "100px",
                   marginBottom: "5px",
                }}
                alt="...."
              />
            </td>
            <td>{item.carname}</td>
            <td>{item.price}</td>
            {/* <td>{item.facility}</td> */}
            {/* <td>{item.carheading}</td> */}
            
            <td>
              <Link
                to={`/carupdate/${item._id}`}
                className="btn"
                style={{
                  marginTop: "5px",
                  backgroundColor: "#4ac4f3",
                  width:"50px"
                }}
              >
                <b><FaPencilAlt style={{fontSize:"30px"}}/></b>
              </Link>
            </td>
            <td>
              <button
                className="btn btn-danger"
                style={{ border: "none", background: "#0b1a53" ,  width:"50px"}}
                onClick={() => {
                  const confirmBox = window.confirm(
                    "Do you really want to delete this item ?"
                  );
                  if (confirmBox === true) {
                    handleDelete(item._id);
                  }
                }}
              >
                <b>
                <AiTwotoneDelete style={{fontSize:"30px",marginTop: "5px",}}/>
                </b>
              </button>
            </td>
            <td>
              <Link
                to={`/single/${item._id}`}
                className="btn btn-info"
                style={{
                  backgroundColor: "#4ac4f3",
                
                }}
              >
                <b>Read More</b>
              </Link>
            </td>
            <td>
  {Array.isArray(item.carOptionsList) &&
    item.carOptionsList.map((car, index) => (
      <div key={index}>
        {/* <b>{car.type}</b> */}
        {/* <b style={{ marginLeft: "10px" }}>{car.list}</b> */}
        
      </div>
      
    ))
    }
</td>

              
          </tr>
        ))}
      </tbody>
    </table>
  ) : (
    <p>No data</p>
  )}
</div>
 
           
    </div>
    <nav style={{marginLeft:"20%"}}>
    <ul className='pagination'>    
  <li className='page-item'>
    <button href='#' className='page-link' onClick={PrevPage}>Prev</button>
  </li>
  {  number.map((n, item)=>(
  
  
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
  )
}

export default CarNew
