import React from 'react'

export default function Carousel() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide" style={{maxHeight: "300px"}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://source.unsplash.com/random/900x700/?pizza" className="d-block w-100"  style={{height: "100%", objectFit: "cover"}}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x700/?tea" className="d-block w-100"  style={{height: "100%", objectFit: "cover"}} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100"  style={{height: "100%", objectFit: "cover"}}/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}
