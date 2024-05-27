import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function ShowRecipe() {
  const [recipe, setRecipe] = useState();
  const { id } = useParams();


 
  useEffect(() => {
    axios.get(`http://localhost:3001/api/recipes/search/id/${id}`)
    .then(response=>{
      console.log(response.data)
      setRecipe(response.data)})
  
  },[])


  function handleReadMoreClick(event) {
    event.preventDefault();
    const commentsSection = document.getElementById("comments-section");
    commentsSection.scrollIntoView({ behavior: "smooth" });
  }
  
  
  return (
    <>

     <div style={{ width: "100vw" }} className="d-flex justify-content-center align-items-center">
      
         <div style={{ borderRadius: 5, marginBottom: 20 }}>
           <div style={{ width: 1132, height: 400, borderRadius: 5, display: "flex", padding: 10 }}>
             <div style={{ flex: 1 }}>
               <div style={{ margin: 10 }}>
                 {recipe && recipe.name && <h1>{recipe.name}</h1>}
               </div>
               <div style={{ margin: 10, fontSize: 20 }}>
                 <p>Rating..</p>
               </div>
               <div style={{ margin: 10 }}>
               {recipe && recipe.comments && recipe.comments.length > 0 && (
  <p>
    {recipe.comments[0].comment}
    {recipe.comments.length > 1 && <a href="#" className="ms-2" onClick={handleReadMoreClick}>Read More</a>}
  </p>
)}


               </div>
               <div style={{ margin: 10, display: "inline-block", fontSize: 50 }}>
                 {recipe && recipe.ingredients&&<p>{recipe.ingredients.length} ingredients</p>}
               </div>
               <div style={{ margin: 10, display: "flex", alignItems: "center" }}>
                 <div className="me-3">
                   <i className="fa-solid fa-thumbs-up" style={{ color: "yellowgreen", fontSize: 50 }} />
                 </div>
                 <div>
                   <i className="fa-solid fa-star" style={{ color: "orange", fontSize: 50 }} />
                 </div>
               </div>
             </div>
             <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2" style={{ flex: 1 }}>
              {recipe && recipe.image&& <img
                style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: 10 }}
                src={recipe.image}
                className="img-fluid"
                alt="Sample image"
              />}
            </div>
          </div>
          <div>
            <hr style={{ height: 1, border: 0, backgroundColor: "gray", margin: "100px" }} />
            <div style={{ margin: 10 }}>
              <h3 style={{ color: "orange" }}>
                <i className="fa-solid fa-list" style={{ marginRight: "5px", color: "orange", fontSize: "25px" }} />
                Ingredients
              </h3>
              <ul style={{ listStyleType: "none" }}>
              {recipe && recipe.ingredients&&recipe.ingredients.length>0&&recipe.ingredients.map((ingredient, index) => (
                  <li key={index} style={{ fontFamily: "Dancing Script", cursive: true, fontOpticalSizing: "auto", fontWeight: 400, fontStyle: "normal", fontSize: "25px" }}>
                    <i className="fas fa-check" style={{ marginRight: "50px", color: "green" }} />
                    {ingredient}
                  </li>
                ))}




              </ul>
            </div>
            <div style={{ width: "1132px", margin: "0 auto" }}>
              <hr style={{ height: 1, border: 0, backgroundColor: "gray", margin: "100px" }} />
              <h3 style={{ margin: "20px", color: "orange" }}>
                <i className="fas fa-lightbulb" />
                Follow these instructions...
              </h3>
              {recipe && recipe.instructions &&<p style={{ margin: "20px", fontFamily: "Dancing Script", cursive: true, fontOpticalSizing: "auto", fontWeight: 400, fontStyle: "normal", fontSize: "25px" }}>
                {recipe.instructions}
              </p>}
            </div>
            <div id="comments-section">
              <hr style={{ height: 1, border: 0, backgroundColor: "gray", margin: "100px" }} />
              <h3 style={{ margin: "20px", color: "orange" }}>
                <i className="fa-solid fa-comments" style={{ marginRight: "5px" }} />
                Comments
              </h3>
              <div>
                <hr style={{ height: 1, border: 0, backgroundColor: "gray", marginLeft: "100px", marginRight: "100px", marginTop: "20px", marginBottom: "20px" }} />
                <p>please write your comment</p>
                <div
                  contentEditable="true"
                  style={{ border: "1px solid #ccc", minHeight: "50px", padding: "5px", borderRadius: "5px", outline: "none" }}
                  onInput={(event) => {
                
                    const comment = event.target.innerText;
                    console.log(comment);
                  }}
                />
               {recipe && recipe.comments && recipe.comments.length &&recipe.comments.map((comment, index) => (
                  <div key={index} style={{ margin: "10px" }}>
                    <hr style={{ height: 1, border: 0, backgroundColor: "gray", marginLeft: "100px", marginRight: "100px", marginTop: "20px", marginBottom: "20px" }} />
                    <li style={{ listStyleType: "none" }}>{comment._id}</li>
                    <li style={{ listStyleType: "none", margin: "10px", fontFamily: "Dancing Script", cursive: true, fontOpticalSizing: "auto", fontSize: "25px", fontWeight: 400, fontStyle: "normal" }}>{comment.comment
                    }</li>
                  </div>
                ))}
              </div>








            </div>




          </div>


        </div>


     </div> 
    </>
  );


}
export default ShowRecipe;