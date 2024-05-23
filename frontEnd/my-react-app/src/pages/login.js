import React from 'react'
import { useState } from 'react';
export default function Login() {
    
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            password:''
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            console.log(e.target)
            setFormData(prevState => ({
                ...prevState,
                [name]: value
            }));
        };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3002/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Data posted successfully');
                // Handle success (e.g., show success message)
            } else {
                console.error('Failed to post data');
                // Handle error
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };
  return (
    <>
     <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4"  style={{color:'#FFA900' }}>
                        Sign up
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" style={{ color: '#FFA500' }}/>
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Your name"
                              onChange={handleChange}
                            />
                            
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"  style={{ color: '#FFA500' }}/>
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Your Email"
                              onChange={handleChange}
                            />
                           
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" style={{ color: '#FFA500' }}/>
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                              onChange={handleChange}
                            />
                            
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"  style={{ color: '#FFA500' }}/>
                          <div
                            data-mdb-input-init=""
                            className="form-outline flex-fill mb-0"
                          >
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Repeat your password"
                              onChange={handleChange}
                            />
                        
                          </div>
                        </div>
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                            style={{ color: '#FFA500' }}
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        
                            <button
                            type="button"
                            data-mdb-button-init=""
                            data-mdb-ripple-init=""
                            className="btn btn-lg"
                            style={{ backgroundColor: '#FFA900', color: '#FFF' }}
                              onClick={handleSubmit}>
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
    </>
  )
}

