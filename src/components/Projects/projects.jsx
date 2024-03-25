import 'bootstrap';
import React from 'react';
import CarouselAluraGeek from './carouselAluraGeek.jsx';
import CarouselBarber from './carouselBarber.jsx';
import CarouselEncrypt from './carouselEncrypt.jsx';
import CarouselOrders from './carouselOrders.jsx';

const Projects = () => {
    return (
        <div className='project' >
            <div>
                <CarouselEncrypt></CarouselEncrypt>
            </div>
            <div>
                <CarouselBarber></CarouselBarber>
            </div>
            <div>
                <CarouselAluraGeek></CarouselAluraGeek>
            </div>
            <div>
                <CarouselOrders></CarouselOrders>
            </div>
        </div>

    );
}

export default Projects;
