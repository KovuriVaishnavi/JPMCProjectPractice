import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RateRecipe from '../RateRecipe/RateRecipe';
import RatingShow from '../RatingShow/RatingShow';
import './showRecipe.css'; // Import the CSS file
function ShowRecipe() {
  const [recipe, setRecipe] = useState();
  const [userDetailsMap, setUserDetailsMap] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const userDetailsString = localStorage.getItem('userDetails');
  const userDetails = userDetailsString ? JSON.parse(userDetailsString) : {}; // Parse JSON if available, or default to an empty object
  const userId = userDetails._id;
  const [comment, setComment] = useState("");
  const [commentAdded, setCommentAdded] = useState(false); // State to trigger comment section refresh
  const [islike, setislike] = useState(false);
  const [isfavorite, setisfavorite] = useState(false);
  const [showcomments, setshowcomments] = useState(false);
  const [text, settext] = useState("see comments");
  const [hasRated, setHasRated] = useState(true);
  // Fetch recipe details on initial render and whenever id changes
  useEffect(() => {
    if (userId && id) {
      axios.get(`http://localhost:3001/api/recipes/search/id/${id}`)
        .then(response => {
          setRecipe(response.data);
          const userRating = response.data.Rating.find(r => r._id === userId);
              if (userRating) {
                setHasRated(false);
              }
        })
        .catch(error => {
          console.error('Error fetching recipe details:', error);
        });
    }

    if (userId) {
      axios.get(`http://localhost:3001/api/user/getdetails/${userId}`)
        .then(response => {
          const user = response.data;
          setislike(user.likes && user.likes.includes(id));
          setisfavorite(user.favorites && user.favorites.includes(id));
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [userId, id, commentAdded, showcomments, settext]);

  // Handle like functionality
  function handleLike() {
    if (userId && recipe) {
      axios.post(`http://localhost:3001/api/recipes/${userId}/like`, { recipeId: id })
        .then(res => {
          console.log(res.data);
          setislike(!islike);
         
          // Optionally update UI based on like/unlike response
        })
        .catch(error => {
          console.error('Error liking recipe:', error);
        });
    }
  }

  function toggleComments() {
    if (showcomments) {
      settext("see comments");
    } else {
      settext("hide comments");
    }
    setshowcomments(!showcomments);
  }

  // Handle favorite functionality
  function handleFavorite() {
    if (userId && id) {
      axios.post(`http://localhost:3001/api/recipes/${userId}/favorite`, { recipeId: id })
        .then(res => {
          console.log(res.data);
          setisfavorite(!isfavorite);
        })
        .catch(error => {
          console.error('Error liking recipe:', error);
        });
    }
  }

  // Handle comment submission
  function handleCommentSubmit() {
    if (comment.trim() === "") {
      return;
    }
    axios.post(`http://localhost:3001/api/recipes/${userId}/addcomment`, { recipeId: id, comment: comment })
      .then(res => {
        console.log(res.data);
        setRecipe(prevRecipe => ({
          ...prevRecipe,
          comments: [...prevRecipe.comments, res.data.comment]
        }));
        setComment("");
        setCommentAdded(!commentAdded); 
        document.querySelector(".editable-comment").innerHTML = "";// Trigger re-render of comments section
      })
      .catch(error => {
        console.error('Error adding comment:', error);
      });
  }

  // Fetch user details for each comment
  useEffect(() => {
    if (recipe && recipe.comments) {
      recipe.comments.forEach(comment => {
        if (comment && comment.user && !userDetailsMap[comment.user]) {
          axios.get(`http://localhost:3001/api/user/getdetails/${comment.user}`)
            .then(response => {
              setUserDetailsMap(prevMap => ({
                ...prevMap,
                [comment.user]: response.data.username
              }));
              
            })
            .catch(error => {
              console.error('Error fetching user details:', error);
            });
        }
      });
    }
  }, [recipe, userDetailsMap]);

  // Scroll to comments section
  function handleReadMoreClick(event) {
    event.preventDefault();
    const commentsSection = document.getElementById("comments-section");
    commentsSection.scrollIntoView({ behavior: "smooth" });
  }

  // Navigate to user detail page
  function handleUsernameClick(userId) {
    axios.get(`http://localhost:3001/api/user/getdetails/${userId}`)
      .then(response => {
        navigate(`/user/${userId}`, { state: { user: response.data } });
      })
      .catch(error => {
        console.error('Error fetching user details:', error);
      });
  }

  return (
    <div className="recipe-container">
      <div className="recipe-content">
        <div className="recipe-details">
          <div className="recipe-header">
            {recipe && recipe.name && <h1>{recipe.name}</h1>}
            {recipe && <RatingShow rating={recipe.averageRating} />}
          </div>
          <div className="recipe-comments">
            {recipe && recipe.comments && recipe.comments.length > 0 && (
              <p>
                {recipe.comments && recipe.comments[0] && recipe.comments[0].comment && recipe.comments[0].comment}..........
                {recipe.comments.length > 0 && <a href="#" className="read-more no-underline-link" onClick={handleReadMoreClick} >Read More</a>}
              </p>
            )}
          </div>
          <div>
          </div>
          <div className="recipe-ingredients-count">
            {recipe && recipe.ingredients && <p>{recipe.ingredients.length} ingredients</p>}
          </div>
          <div className="recipe-actions">
            <i onClick={handleLike} className="fa-solid fa-thumbs-up someclass" style={{ color: islike ? "yellowgreen" : '', fontSize: 40 }} />
            <i onClick={handleFavorite} className="fa-solid fa-star someclass" style={{ color: isfavorite ? "orange" : '', fontSize: 40, marginLeft: '10px' }} />
          </div>
        </div>
        <div className="recipe-image">
          {recipe && recipe.image && (
            <img src={recipe.image} alt="Sample image" />
          )}
        </div>
      </div>
      <div className="recipe-extra">
        <hr className="divider" />
        <h3>
          <i className="fa-solid fa-list" /> Ingredients
        </h3>
        <ul>
          {recipe && recipe.ingredients && recipe.ingredients.length > 0 && recipe.ingredients.map((ingredient, index) => (
            <li key={index}>
              <i className="fas fa-check" style={{ color: "green" }} />
              {ingredient}
            </li>
          ))}
        </ul>
        <hr className="divider" />
        <h3>
          <i className="fas fa-lightbulb" /> Follow these instructions...
        </h3>
        {recipe && recipe.instructions && <p className="instructions">{recipe.instructions}</p>}
        <div id="comments-section">
          <hr className="divider" />
          <h3>
            <i className="fa-solid fa-comments" /> Comments
          </h3>
          <p>Write your comment</p>
          <div
            contentEditable="true"
            className="editable-comment"
            onInput={(event) => setComment(event.target.innerText)}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={handleCommentSubmit} className='btn' style={{ backgroundColor: 'orange' }}>Submit Comment</button>
            <button onClick={toggleComments} className='btn' style={{ backgroundColor: 'orange' }}>{text}</button>
          </div>
          {showcomments && recipe && recipe.comments && recipe.comments.length > 0 && recipe.comments.map((comment, index) => (
            <div key={index} className="comment">
              <hr className="divider" />
              <li>
                <a href="#" className='no-underline-link'onClick={() => handleUsernameClick(comment.user)}>
                  {userDetailsMap[comment.user] || comment.user}
                </a>
              </li>
              <li>{comment && comment.comment && comment.comment}</li>
            </div>
          ))}
          {hasRated && (
            <RateRecipe recipeId={id} userId={userId} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowRecipe;
