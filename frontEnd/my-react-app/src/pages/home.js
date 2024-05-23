import React from 'react'
import Navbar from '../components/navbar'
import Card from '../components/card'
import Carousel from '../components/carousel'
import { useState,useEffect } from 'react'
export default function Home() {
  const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:3002/recipes')
            .then(response => response.json())
            .then(data => setRecipes(data))
            .catch(error => console.error('Error fetching images:', error));
    }, []);
  return (
    <>
    <div >
    <Navbar></Navbar>
    <Carousel></Carousel>
    <div className="grid-container">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="grid-item">
                    <Card recipename={recipe.name} description={`lets make amazing ${recipe.name}` }></Card>
                </div>
            ))}
        </div>
    
    </div>
    </>
  )
}
