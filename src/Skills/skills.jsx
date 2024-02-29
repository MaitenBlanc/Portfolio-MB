import 'bootstrap';
import React from 'react';
import './skills.css';
import Data from './skills.js';

const Skills = () => {
    return (
        <div div className='card cardSkill'>
            <div className='cardGroup'>
                <item>
                    {Data.map(item => (
                        <img className='imageCard' src={`${item.image}`} alt={`Logo: ${item.title}`} />
                    ))}
                </item>
            </div>
            <div className="cardBody">
                <item>
                    {Data.map(item => (
                        <h5 className="cardTitle">{item.title}</h5>
                    ))}
                </item>
            </div>
        </div>

    );
}

export default Skills;
