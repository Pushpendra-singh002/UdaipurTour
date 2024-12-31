import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { IoIosArrowForward } from "react-icons/io";
function CarNewUpdate() {
    const {id} = useParams()
    const navigate = useNavigate()
    const [values, setValues] = useState({
      imageUrl: '',
      price: '',
      carname: '',
      carheading: '',
      carOptionsList: [{ type: "", list: "" }],
      facility: [{ listF: "", listS: "" }],
      faq: [{ question: "", answer: "" }],
      whychoose: [{ listf: "", lists: "" }],
      desc: '',
      seater:''
  });

  useEffect(() => {
      axios.get(`http://localhost:5002/api/carrental/${id}`)
          .then((res) => {
              const packages = res?.data?.data || {};
              setValues({
                  imageUrl: packages.imageUrl || "",
                  price: packages.price || "",
                  carname: packages.carname || "",
                  carheading: packages.carheading || "",
                  carOptionsList: packages.carOptionsList || [{ type: "", list: "" }],
                  facility: packages.facility || [{ listF: "", listS: "" }],
                  faq: packages.faq || [{ question: "", answer: "" }],
                  whychoose: packages.whychoose || [{ listf: "", lists: "" }],
                  desc: packages.desc || "",
                  seater: packages.seater|| ""
              });
          })
          .catch(err => console.error("Error fetching data:", err));
  }, [id]);

  const handleCarOptionChange = (index, field, value) => {
      const updatedOptions = [...values.carOptionsList];
      updatedOptions[index][field] = value;
      setValues({ ...values, carOptionsList: updatedOptions });
  };

  const addCarOption = () => {
      setValues({
          ...values,
          carOptionsList: [...values.carOptionsList, { type: "", list: "" }]
      });
  };

  const handlechoose = (index, field, value) => {
      const updatedOptionswhy = [...values.whychoose];
      updatedOptionswhy[index][field] = value;
      setValues({ ...values, whychoose: updatedOptionswhy });
  };

  const addchoose = () => {
      setValues({
          ...values,
          whychoose: [...values.whychoose, { listf: "", lists: "" }]
      });
  };

  const handlefacility = (index, field, value) => {
      const updatedOptionsFacility = [...values.facility];
      updatedOptionsFacility[index][field] = value;
      setValues({ ...values, facility: updatedOptionsFacility });
  };

  const addFacility = () => {
      setValues({
          ...values,
          facility: [...values.facility, { listF: "", listS: "" }]
      });
  };

  const handleFaq = (index, field, value) => {
      const updatedOptionsFaq = [...values.faq];
      updatedOptionsFaq[index][field] = value;
      setValues({ ...values, faq: updatedOptionsFaq });
  };

  const addFaq = () => {
      setValues({
          ...values,
          faq: [...values.faq, { question: "", answer: "" }]
      });
  };

  const handleEdit = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append('carOptionsList', JSON.stringify(values.carOptionsList));
      formData.append('carheading', values.carheading);
      formData.append('carname', values.carname);
      formData.append('faq', JSON.stringify(values.faq));
      formData.append('price', values.price);
      formData.append('whychoose', JSON.stringify(values.whychoose));
      formData.append('desc', values.desc);
      formData.append("seater", values.seater); // Log the seater value
    console.log("Seater:", values.seater);
      formData.append('facility', JSON.stringify(values.facility));

      if (values.imageUrl) {
          formData.append('imageUrl', typeof values.imageUrl === "string" ? values.imageUrl : values.imageUrl);
      }

      axios.put(`http://localhost:5002/api/carrental/${id}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
      })
          .then((res) => {
              console.log(res.data);
              alert('Edit successful');
              navigate('/carnew');
          })
          .catch(err => console.error("Error updating data:", err));
  };
  return (
    <div className='color'>
      <Navbar/>
      <br></br>
      <br></br>
      <br></br>
      <div className="d-flex justify-content-center align-items-center ">
        
      <span style={{textAlign:"center", fontSize:"20px"}}>
      <b><Link to="/packages" style={{textDecoration:"none", color:"black"}}> Package</Link> <IoIosArrowForward/> <IoIosArrowForward/> Update Package</b></span>
    </div>
        <div className='d-flex justify-content-center align-item-center'>
        <div >
          
          <form className='form' onSubmit={handleEdit}>
          <h2>Update Package</h2>
          <div className="mb-3">
               <label htmlFor="img" className="htmlForm-label">Image:</label><br></br>
                 <input type="file" className="htmlForm-control"
                    //  value={values.imageUrl}
                       onChange={(e) => setValues({...values ,imageUrl : e.target.files[0]})}
                          required
                 id="img" placeholder="Enter Image" name="img" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="price" className="htmlForm-label">price:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={values.price}
                      onChange={(e)=>setValues({...values, price: e.target.value})}
                          required
                 id="price" placeholder="Enter Price" name="price" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="tour" className="htmlForm-label">Car Name:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={values.carname}
                      onChange={(e)=>setValues({...values , carname: e.target.value})}
                          required
                 id="tour" placeholder="Enter Tour Code" name="tour" style={{width:"100%", border:'1px solid'}}/>
          </div>
        
          <div className="mb-3">
               <label htmlFor="carheading" className="htmlForm-label">car heading:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={values.carheading}
                      onChange={(e)=>setValues({...values, carheading:e.target.value})}
                          required
                 id="carheading" placeholder="Enter carheading" name="carheading" style={{width:"100%", border:'1px solid'}}/>
          </div>
          <div className="mb-3">
               <label htmlFor="heading" className="htmlForm-label">Descrition:</label><br></br>
                 <textarea type="text" className="htmlForm-control"
                    value={values.desc}
                      onChange={(e)=>setValues({...values, desc:e.target.value})}
                          required
                 id="heading" placeholder="Enter discrition" name="heading" style={{width:"100%", border:'1px solid'}}/>
          </div>
           <div className="mb-3">
               <label htmlFor="seater" className="htmlForm-label">seater:</label><br></br>
                 <input type="text" className="htmlForm-control"
                    value={values.seater}
                      onChange={(e)=>setValues({...values, seater: e.target.value})}
                          required
                 id="seater" placeholder="Enter facility" name="seater" style={{width:"100%", border:'1px solid'}}/>
          </div> 
          <div className='md-3'>
          <h3>Car Options:</h3>
          {values.carOptionsList.map((option, index) => (
                <div key={index} className="mb-3">
                  <label htmlFor={`type-${index}`} className="htmlForm-label">
                    Type:
                  </label>
                  <br></br>
                  <input
                    id={`type-${index}`}
                    name={`type-${index}`}
                    type="text"
                    placeholder="Type"
                    value={option.type}
                    style={{width:"100%", border:'1px solid'}}
                    onChange={(e) => handleCarOptionChange(index, 'type', e.target.value)}
                    required
                  />
                  <br></br>
                  <label htmlFor={`list-${index}`} className="htmlForm-label">
                    List:
                  </label>
                  <br></br>
                  <input
                    id={`list-${index}`}
                    name={`list-${index}`}
                    type="text"
                    placeholder="List"
                    value={option.list}
                    style={{width:"100%", border:'1px solid'}}
                    onChange={(e) => handleCarOptionChange(index, 'list', e.target.value)}
                    required
                  />
                </div>
              ))}
          <button type="button" onClick={addCarOption} className="btn btn-primary mb-3">
            Add Another Option
          </button>
          </div>
          <div className='md-3'>
          <h3>FAQ:</h3>
          {values.faq.map((option, index) => (
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
          <button type="button" onClick={addFaq} className="btn btn-primary mb-3">
            Add Another Option
          </button>
          </div>
          <div className='md-3'>
      <h3>why Choose:</h3>
       {values.whychoose.map((option, index) => (
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
      <div className='md-3'>
      <h3>Add Facility:</h3>
       {values.facility.map((option, index) => (
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
          
          <button type='submit' className='btn' style={{ border:"1px solid", color:"#5f6b97"}} >submit</button>
          </form>
          
        </div>
        </div>
    </div>
  )
}

export default CarNewUpdate
