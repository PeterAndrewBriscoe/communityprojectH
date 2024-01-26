import React from "react";

import { Carousel, Card } from 'react-bootstrap';

import './HomePage.css'

function HomePage(){ 

    return <>
    <section id="home-carousel">
        <div id="home-carousel-overlay"><h1>Welcome!</h1></div>
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
    </section>
    <section id="trending-destinations">
        <h3>Trending Destinations</h3>

        <div class="destinations-block">
            <img src="https://picsum.photos/50/50" alt="img"/>
        </div>

    </section>

    </>
}

export default HomePage;