import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Carousel({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchCriteria}/${searchTerm}`);
  };

  return (
    <div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id='carousel'>
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <form className="d-flex" onSubmit={handleSearch}>
                <select
                  className="form-select me-2"
                  value={searchCriteria}
                  onChange={(e) => setSearchCriteria(e.target.value)}
                  style={{ width: '150px', backgroundColor:'green'}}  
                >
                  <option value="name">Name</option>
                  <option value="ingredient">Ingredients</option>
                  <option value="cuisine">Cuisines</option>
                </select>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
              </form>
            </div>
            <div className="carousel-item active">
              <img src="https://www.anniebkay.com/wp-content/uploads/2017/05/FoodIsEverything-WhatIsIttoYou-byAnnieBKay-anniebkay.com_-1024x512.png" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "contain !important" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://static.squarespace.com/static/547f440ee4b083f708d22c06/54807685e4b03d7255aa38d9/5480768ae4b03d7255aa3b1c/1417705098427/1000w/" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "contain !important" }} alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg" className="d-block w-100" style={{ filter: "brightness(30%)", objectFit: "contain !important" }} alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
