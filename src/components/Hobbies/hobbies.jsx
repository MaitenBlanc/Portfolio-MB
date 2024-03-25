import React from 'react';
import Data from './hobbies.js';
import 'bootstrap';
import './hobbies.css';

const Hobbies = () => {
    return (
        <div className='cardHobbies' >
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

export default Hobbies;
