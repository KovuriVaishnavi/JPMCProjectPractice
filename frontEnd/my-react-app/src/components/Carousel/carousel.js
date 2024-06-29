import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carousel.css';

export default function Carousel({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };

  useEffect(() => {
    const textElements = document.querySelectorAll('.carousel-item .carousel-text');
    textElements.forEach((element) => {
      element.classList.add('fade-in');
    });
  }, []);

  return (
    <div className="carousel-container">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-caption">
            <form className="d-flex justify-content-center" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-yellow text-white" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://img.freepik.com/free-photo/top-view-delicious-mayyonaise-salad-with-greens-vegetables-dark-space_140725-75694.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-text">
              <div className="main-text">Welcome to RecipeRadar!</div>
              <div className="sub-text">We are dedicated to bringing you the best recipes from around the world.</div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/u54aQPzwbWc/maxresdefault.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-text">
              <div className="main-text">Join Our Community</div>
              <div className="sub-text">Share and discover new recipes, tips, and culinary adventures.</div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://www.thestatesman.com/wp-content/uploads/2020/01/vf-4.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-text">
              <div className="main-text">Explore Our Recipes</div>
              <div className="sub-text">From quick and easy meals to gourmet dishes. Happy cooking!</div>
            </div>
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
  );
}
