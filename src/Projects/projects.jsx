import React from 'react';
import 'bootstrap';
import CarouselBarber from './carouselBarber.jsx';
import CarouselAluraGeek from './carouselAluraGeek.jsx';
import CarouselEncrypt from './carouselEncrypt.jsx';

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
        </div>

    );
}

export default Projects;
