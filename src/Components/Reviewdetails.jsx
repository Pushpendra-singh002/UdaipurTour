import React, { useEffect, useState } from "react";
import axios from "axios";

const Reviewdetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5002/api/customer")
      .then((res) => {
        console.log(res.data);
        setData(res.data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const renderStars = (rating) => {
    return "★".repeat(rating) + "☆".repeat(5 - rating);
  };

  const getRatingLabel = (rating) => {
    const labels = ["Poor", "Fair", "Good", "Very Good", "Excellent"];
    return labels[rating - 1];
  };

  const chunkArray = (arr, size) =>
    arr.reduce((acc, _, i) =>
      i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc, []);

  const carouselChunks = chunkArray(data, 100); // Groups of 3 reviews

  return (
    <div className="container-fluid">
      
      <div className="row align-items">
    <div className="col-md-9 text-section">
      <h3 className='heading'>What our customers say?</h3>
      
      
      <p><i><b>Rajasthan's most popular tourist destination</b></i></p>
    </div>
        <div id="reviewCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {carouselChunks.map((chunk, index) => (
              <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                <div className="row justify-content-center">
                  {chunk.map((review, i) => (<div className="col-12 col-md-4 mb-3" key={i}>
                      {!review.hidden && (
                    
                      <div className="card p-3 shadow-sm h-100">
                        <h5 className="fw-bold">{review.username}</h5>
                        <h6 className="text-muted">{review.title}</h6>
                        <p>{review.comment}</p>
                        <p>
                          Rating:{" "}
                          <span style={{ color: "#FFD700", fontSize: "18px" }}>
                            {renderStars(review.rating)}
                          </span>{" "}
                          ({getRatingLabel(review.rating)})
                        </p>
                      </div>
                    
                  )}
                  </div>
                 
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#reviewCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviewdetails;
