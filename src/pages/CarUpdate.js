
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  useNavigate, useParams, } from 'react-router-dom';
import Navbar from './Navbar';

function CarUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    heading: "",
    carOptions: [{ type: "", price: "" }],
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/carrental/${id}`)
      .then((res) => {
        const carData = res.data.data;
        setValues({
          heading: carData?.heading || "",
          carOptions: carData?.carOptions || [{ type: "", price: "" }],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const handleCarOptionChange = (index, field, value) => {
    const updatedOptions = [...values.carOptions];
    updatedOptions[index][field] = value;
    setValues({ ...values, carOptions: updatedOptions });
  };

  const addCarOption = () => {
    setValues({
      ...values,
      carOptions: [...values.carOptions, { type: "", price: "" }],
    });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5001/api/carrental/${id}`, values, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log('Success:', res.data);
      alert('Edit successful');
      navigate('/carrental');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='color'>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center ">
        <form onSubmit={handleEdit} className="form">
          <h2>Update Car Rental</h2>
          <div className="mb-3">
            <label htmlFor="heading" className="form-label"><b style={{color:"whitesmoke"}}> Heading:</b></label>
            <input
              type="text"
              className="form-control"
              value={values.heading}
              onChange={(e) => setValues({ ...values, heading: e.target.value })}
              required
              id="heading"
              placeholder="Enter heading"
            />
          </div>
          <h3>Car Options:</h3>
          {values.carOptions.map((option, index) => (
            <div key={index} className="mb-3">
              <label htmlFor={`type-${index}`} className="htmlForm-label"><b style={{color:"whitesmoke"}}>Type:</b></label>
          
              <input
              id={`type-${index}`}
              name={`type-${index}`}
                type="text"
                placeholder="Type"
                value={option.type}
                onChange={(e) => handleCarOptionChange(index, 'type', e.target.value)}
                required
              />
              <br></br>
              <br></br>
              <label htmlFor={`price-${index}`} className="htmlForm-label"><b style={{color:"whitesmoke"}}>Price:</b></label>
              <input
              id={`price-${index}`}
              name={`price-${index}`}
                type="number"
                placeholder="Price"
                value={option.price}
                onChange={(e) => handleCarOptionChange(index, 'price', e.target.value)}
                required
              />
            </div>
          ))}
          <button type="button" onClick={addCarOption} className="btn btn-primary mb-3">
            Add Another Option
          </button>
          <br></br>
          <br></br>
          <button type="submit" className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default CarUpdate;
