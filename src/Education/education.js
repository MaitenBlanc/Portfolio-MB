import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './education.css';
import imageUTN from '../assets/images/formacion/logo-utn.svg';
import imageAlura from '../assets/images/formacion/alura.png';
import imageOB from '../assets/images/formacion/Open-Bootcamp.png';
import imageAP from '../assets/images/formacion/argentina-programa.png';
import imageDeyel from '../assets/images/formacion/deyel.png';
import imageTicmas from '../assets/images/formacion/ticmas.png';
import imageCUI from '../assets/images/formacion/cui.png';


const data = [
    {
        "id": 1,
        "image": imageUTN,
        "title": "Ingeniería en Sistemas de Información",
        "text": "En curso - Universidad Tecnológica Nacional"
    },
    {
        "id": 2,
        "image": imageAlura,
        "title": "Desarrollo Front End",
        "text": "Alura/Oracle"
    },
    {
        "id": 3,
        "image": imageAlura,
        "title": "Formación React",
        "text": "Alura/Oracle"
    },
    {
        "id": 4,
        "image": imageOB,
        "title": "Desarrollo Full Stack",
        "text": "Open Bootcamp"
    },
    {
        "id": 5,
        "image": imageAP,
        "title": "Desarrollo Front End",
        "text": "Argentina Programa 4.0"
    },
    {
        "id": 6,
        "image": imageDeyel,
        "title": "Citizen Deyel Plus",
        "text": "Deyel - Low code"
    },
    {
        "id": 7,
        "image": imageAlura,
        "title": "Python, Data Science",
        "text": "Alura/Oracle"
    },
    {
        "id": 8,
        "image": imageTicmas,
        "title": "Desarrollo de Aplicaciones Móviles",
        "text": "Ticmas"
    },
    {
        "id": 9,
        "image": imageCUI,
        "title": "Inglés B2",
        "text": "CUI UBA"
    }
];

function EducationIteration() {
    return (
        data.map((data) => {
            return (
                <Container fluid className='fluid'>
                    <Card>
                        <Card.Img variant="top" src={data.image} className="imageCardEducation" />
                        <Card.Body className="cardBodyEducation">
                            <Card.Title className="cardTitleEducation">{data.title}</Card.Title>
                            <Card.Text className="cardSubtitleEducation">{data.text}</Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            );
        }
        ))
};

export default EducationIteration;