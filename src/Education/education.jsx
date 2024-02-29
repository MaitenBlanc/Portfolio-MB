import 'bootstrap';
import EducationIteration from './education';
import './education.css';

const Education = () => {
    return (
        <div className='containerCard'>
            {/* <div div className='cardEducation' >
                <div className="card">
                    <item>
                        {Data.map(item => (
                            <img className='card-img-top' src={`${item.image}`} alt={`Logo: ${item.title}`} />
                        ))}
                    </item>
                </div>
                <div className="card-body">
                    <article>
                        {Data.map(item => (
                            <h5 className="card-text">{item.title}</h5>
                        ))}
                        {Data.map(item => (
                            <p>{item.text}</p>
                        ))}
                    </article>
                </div>
            </div> */}
            <EducationIteration></EducationIteration>
        </div>
    );
}

export default Education;

