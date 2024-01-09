import React from 'react';
import Data from './education.jsx';
import 'bootstrap';
import './education.css';

const Education = () => {
    return (
        <div>
            <div div className='cardEducation' >
                <div className='cardGroup'>
                    <item>
                        {Data.map(item => (
                            <img className='imageCardEducation' src={`${item.image}`} alt={`Logo: ${item.title}`} />
                        ))}
                    </item>
                </div>
            </div>
            <div className="cardBodyEducation">
                <article>
                    {Data.map(item => (
                        <h5 className="cardTitleEducation">{item.title}</h5>
                    ))}
                </article>
                <article className="cardSubtitleEducation">
                    {Data.map(item => (
                        <p>{item.text}</p>
                    ))}
                </article>
            </div>
        </div>
    );
}

export default Education;
