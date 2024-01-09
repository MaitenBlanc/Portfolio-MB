import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './hobbies.css';
import imageFunc from '../assets/images/hobbies/logo-funcional.png';
import imageMusic from '../assets/images/hobbies/logo-musica.png';
import imageBike from '../assets/images/hobbies/logo-bicicleta.png';
import imageBass from '../assets/images/hobbies/logo-bajo.png';
import imageYoga from '../assets/images/hobbies/logo-yoga.png';
import imageRead from '../assets/images/hobbies/logo-leer.png';

const data = [
    {
        "id": 1,
        "image": imageFunc,
        "title": "Entrenamiento Funcional"
    },
    {
        "id": 2,
        "image": imageMusic,
        "title": "Escuchar Música"
    },
    {
        "id": 3,
        "image": imageBike,
        "title": "Andar en bicicleta"
    },
    {
        "id": 4,
        "image": imageBass,
        "title": "Tocar el bajo"
    },
    {
        "id": 5,
        "image": imageYoga,
        "title": "Yoga - Meditación"
    },
    {
        "id": 6,
        "image": imageRead,
        "title": "Leer"
    },

];

function hobbiesIteration() {
    return (
        data.map((data) => {
            return (
                <Container fluid className='fluid'>
                    <Card>
                        <Card.Img variant="top" src={data.image} className="imageCard" />
                        <Card.Body>
                            <Card.Title className="cardTitle">{data.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Container>
            );
        }
        ))
};

export default hobbiesIteration;