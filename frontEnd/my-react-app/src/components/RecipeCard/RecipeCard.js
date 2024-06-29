import React from 'react'

export default function RecipeCard(props) {
    return (
        <>

          <div className="card" style={{ width: "100%",borderRadius: '0'}}>
            <img src={props.image} className="card-img-top" alt={props.recipename} style={{ objectFit: "cover", width: "100%", height: "200px" }} />
            <div className="card-body">
              <h5 className="card-title">{props.recipename}</h5>
              <p>{props.description}</p>
            </div>
          </div>
        
        </>
    )
}
