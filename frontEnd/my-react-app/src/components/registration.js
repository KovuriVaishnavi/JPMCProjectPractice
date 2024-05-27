import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './registration.css';

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    preferences: {
      dietraryRestrictions: '',
      favouriteCuisines: '',
    },
    usertype: false,
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => {
      if (type === 'checkbox') {
        return {
          ...prevState,
          [name]: checked,
        };
      }
      if (name === 'dietraryRestrictions' || name === 'favouriteCuisines') {
        return {
          ...prevState,
          preferences: {
            ...prevState.preferences,
            [name]: value,
          },
        };
      }
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, preferences, usertype } = formData;
    if (!username || !email || !password) {
      setError('Name, Email, and Password are required fields.');
      return;
    }

    const dietaryRestrictionsArray = preferences.dietraryRestrictions
      ? preferences.dietraryRestrictions.split(',').map((item) => item.trim())
      : [];
    const favouriteCuisinesArray = preferences.favouriteCuisines
      ? preferences.favouriteCuisines.split(',').map((item) => item.trim())
      : [];

    const updatedFormData = {
      ...formData,
      preferences: {
        dietraryRestrictions: dietaryRestrictionsArray,
        favouriteCuisines: favouriteCuisinesArray,
      },
      usertype: usertype ? 1 : 0,
    };

    try {
      const response = await fetch('http://localhost:3001/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      const result = await response.json();
      if (response.ok) {
        alert(result.message);
        navigate('/login');
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: '#FFA900' }}>
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" style={{ color: '#FFA500' }} />
                        <div className="form-outline flex-fill mb-0">
                          <label htmlFor="username" style={{ color: '#FFA900' }}>
                            Your Name <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="text"
                            id="username"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" style={{ color: '#FFA500' }} />
                        <div className="form-outline flex-fill mb-0">
                          <label htmlFor="email" style={{ color: '#FFA900' }}>
                            Your Email <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" style={{ color: '#FFA500' }} />
                        <div className="form-outline flex-fill mb-0">
                          <label htmlFor="password" style={{ color: '#FFA900' }}>
                            Password <span style={{ color: 'red' }}>*</span>
                          </label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-utensils fa-lg me-3 fa-fw" style={{ color: '#FFA500' }} />
                        <div className="form-outline flex-fill mb-0">
                          <label htmlFor="dietraryRestrictions" style={{ color: '#FFA900' }}>
                            Dietary Restrictions
                          </label>
                          <input
                            type="text"
                            id="dietraryRestrictions"
                            name="dietraryRestrictions"
                            className="form-control"
                            placeholder="Enter dietary restrictions, separated by commas"
                            value={formData.preferences.dietraryRestrictions || ''}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-globe fa-lg me-3 fa-fw" style={{ color: '#FFA500' }} />
                        <div className="form-outline flex-fill mb-0">
                          <label htmlFor="favouriteCuisines" style={{ color: '#FFA900' }}>
                            Favourite Cuisines
                          </label>
                          <input
                            type="text"
                            id="favouriteCuisines"
                            name="favouriteCuisines"
                            className="form-control"
                            placeholder="Enter favourite cuisines, separated by commas"
                            value={formData.preferences.favouriteCuisines || ''}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input custom-checkbox"
                          type="checkbox"
                          name="usertype"
                          id="form2Example3c"
                          checked={formData.usertype}
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="form2Example3c">
                          Register as Admin
                        </label>
                      </div>
                      {error && <div className="alert alert-danger" role="alert">{error}</div>}
                      <div className="form-check d-flex justify-content-center mb-5">
                        <p>
                          Already have an account? <Link to="/login">Login</Link>
                        </p>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-lg"
                          style={{ backgroundColor: '#FFA900', color: '#FFF' }}
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/06/23/0/FNK_Goulash-H_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1592939451186.jpeg"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
