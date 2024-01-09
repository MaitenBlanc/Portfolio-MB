import React from 'react';
import 'bootstrap';
import CarouselBarber from './carouselBarber.jsx';
import CarouselAluraGeek from './carouselAluraGeek.jsx';

const Projects = () => {
    return (
        <div className='project' >
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
