import React from 'react'

export default function Card(props) {
    return (
        <>

          <div className="card" style={{ width: "100%" }}>
            <img src={`https://source.unsplash.com/random/900×700/?${props.recipename}`} className="card-img-top" alt={props.recipename} style={{ objectFit: "cover", width: "100%", height: "200px" }} />
            <div className="card-body">
              <h5 className="card-title">{props.recipename}</h5>
              <p>lets make amazing {props.description}</p>
            </div>
          </div>
        
        </>
    )
}
