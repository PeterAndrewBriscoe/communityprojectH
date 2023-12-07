import React from "react";

import Carousel from 'react-bootstrap/Carousel';

import './Destinations.css'

// Note: Used this site for dummy photos: https://picsum.photos/

function Destinations(){ 

    return <>
        <h1>Destinations Page</h1>

        <Carousel>
            <Carousel.Item>
                <img src="https://picsum.photos/seed/picsum/1000/500" alt="First slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://picsum.photos/id/16/1000/500" alt="2nd slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://picsum.photos/1000/500" alt="3rd slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://picsum.photos/id/18/1000/500" alt="3rd slide"/>
            </Carousel.Item>
            <Carousel.Item>
                <img src="https://picsum.photos/id/57/1000/500" alt="3rd slide"/>
            </Carousel.Item>
        </Carousel>

        

        
    </>
}

export default Destinations;