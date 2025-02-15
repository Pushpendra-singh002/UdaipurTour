import React from 'react'
import Deluxe from '../Images/Deluxe.png'
import XUV from '../Images/XUV.png'
import TempoTraveller from '../Images/TempoTraveller.png'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";


function Car() {
    const navigate =useNavigate();
    const [data] = useState([]);
    const handleCarSelect = (cardIndex, car) => {
        setSelectedOptions((prev) => ({
          ...prev,
          [cardIndex]: car,
        }));
      };
      const handleRedirect = (cardIndex) => {
        const selectedCar = selectedOptions[cardIndex];
        const packagetitle = data[cardIndex].heading;
        if (selectedCar) {
        navigate(`/carrental/details`, {
            state: {
              heading: packagetitle,
              type: selectedCar.type,
              price: selectedCar.price,
            },
          });
        }
      };

      const [selectedOptions, setSelectedOptions] = useState({});

return (
    <div>

       {/*  Car Details card part */}
       <div className="container-fluid">
      <div className='row'>
      
     
      <div className="col-md-9">
  <div className="row align-items-left">
  <h3 className='headingcar'>TYPES OF CAR:-</h3>
    <div className="col-md-3 image">
       <div className="content-item">
       <img
        src={Deluxe}
        className="img-fluid rental"
        alt="Rental Car"
      />
        <p>Deluxe</p>
        </div>
    </div>
   
        
   <div className="col-md-3 image">
   <div className="content-item">
      <img
        src={XUV}
        className="img-fluid rental"
        alt="Rental Car"
      />
      <p>XUV/MUV</p>
    </div>
    </div>

    <div className="col-md-3 image">
    <div className="content-item">
      <img
        src={TempoTraveller}
        className="img-fluid rental"
        alt="Rental Car"
      />
       <p>TempoTraveller</p>
      </div>
    </div>

    <div className="container mt-5">
      <div className="row">
        {data.map((item, cardIndex) => (
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
                    >
                      {car.type}
                    </button>
                  ))}
                </div>
                <div className="price-display">
                  {selectedOptions[cardIndex] ? (
                    <button
                      className="btn btn-outline price-btn"
                      onClick={() => handleRedirect(cardIndex)}
                    >
                     Book Now:-  ₹{selectedOptions[cardIndex].price}
                    </button>
                  ) : (
                    <button className="btn btn-outline" disabled>
                      Select a car to see the price
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  
  </div>

      </div>

     <div className="col-md-3 ">
  <div className="row align-items-right">
  <h5 className='headingnew'>REQUIREMENT:-</h5>
  </div>
  <p className='text-section'>For custom requirements in Udaipur city  or Outstation travel, 
  please contact us with your travel itinerary and we shall get back to you.</p>


  <h5 className='headingnew'>OUR VEHICLES:-</h5>
  <ul className='vehicle list'>
    <li>Toyota Etios - Deluxe</li>
    <li>Suzuki Dezire - Deluxe</li>
    <li>Toyota Innova - MUV</li>
    <li>Chevrolet Tavera - MUV</li>
    <li>Force Tempo Traveler</li>
  </ul>
     </div>  
  </div>
      </div>
      {/*  Car Details card part end */}

   </div>
  )
}

export default Car

