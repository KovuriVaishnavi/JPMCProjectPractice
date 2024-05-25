function RecipeForm(){
return(
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{color:"orange"}}>
                  RecipeForm
                </p>
                <form className="mx-1 mx-md-4">
                  <div className="d-flex flex-row align-items-center mb-4">
                  <i className="fa-solid fa-utensils me-3" style={{fontSize:"25px", color:"orange"}}/>
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        placeholder="Enter Recipe Name"
                      />
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fa-solid fa-list me-3"  style={{fontSize:"25px", color:"orange"}}/>
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <textarea
                        type="text"
                        id="form3Example4c"
                        className="form-control"
                        name="ingredients" rows="4" cols="50" required
                        placeholder="enter ingredients"
                      />
                      
                      
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fa-solid fa-lightbulb me-3"  style={{fontSize:"25px", color:"orange"}}/>
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <textarea
                        type="text"
                        id="form3Example4c"
                        className="form-control"
                        name="instructions" rows="4" cols="50" required
                        placeholder="enter instructions"
                      />
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fa-solid fa-bowl-food me-3" style={{fontSize:"25px", color:"orange"}}></i>
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <input
                        type="text"
                        id="form3Example4cd"
                        className="form-control"
                        placeholder="enter cuisine name"
                      />
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fa-solid fa-triangle-exclamation me-3"  style={{fontSize:"25px", color:"orange"}} />
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <input
                        type="text"
                        id="form3Example4cd"
                        className="form-control"
                        placeholder="enter difficulty level"
                      />
                      
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                  <i class="fa-solid fa-image me-3" style={{fontSize:"25px", color:"orange"}} />
                    <div
                      data-mdb-input-init=""
                      className="form-outline flex-fill mb-0"
                    >
                      <input
                        type="text"
                        id="form3Example4cd"
                        className="form-control"
                        placeholder="please paste image url"
                      />
                      
                    </div>
                  </div>
                  
                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button
                      type="button"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-lg" style={{backgroundColor:"orange"}}
                    >
                    Add Recipe
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2" style={{ width: "624px", height: "780px" }}>
  <img
    src="https://source.unsplash.com/random/900x700/?food"
    className="img-fluid"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
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

)
}
export default RecipeForm;