import React from 'react'

export default function Card(props) {
    return (
        <>
         <div className="card m-5" id='card' style={{ backgroundImage: `url('https://source.unsplash.com/random/300x300/${props.recipename}')` }}>
                <div class="card-body text-dark bg-opacity-50">

                    <h4 class="card-title ">{props.recipename}</h4>
                    <p class="card-text">{props.description}</p>
                    <button href="#" class="btn btn-primary">RECIPE</button>
                </div>
            </div>
        </>
    )
}
