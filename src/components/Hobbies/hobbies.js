import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import imageBass from '../../assets/images/hobbies/logo-bajo.png';
import imageBike from '../../assets/images/hobbies/logo-bicicleta.png';
import imageFunc from '../../assets/images/hobbies/logo-funcional.png';
import imageRead from '../../assets/images/hobbies/logo-leer.png';
import imageMusic from '../../assets/images/hobbies/logo-musica.png';
import imageYoga from '../../assets/images/hobbies/logo-yoga.png';
import './hobbies.css';

function HobbiesIteration() {

    const [t, i18n] = useTranslation('global');

    const data = [
        {
            "id": 1,
            "image": imageFunc,
            "title": t("hobbies.functional")
        },
        {
            "id": 2,
            "image": imageMusic,
            "title": t("hobbies.music")
        },
        {
            "id": 3,
            "image": imageBike,
            "title": t("hobbies.bike")
        },
        {
            "id": 4,
            "image": imageBass,
            "title": t("hobbies.bass")
        },
        {
            "id": 5,
            "image": imageYoga,
            "title": t("hobbies.yoga")
        },
        {
            "id": 6,
            "image": imageRead,
            "title": t("hobbies.books")
        },
    ];

    return (
        data.map((data) => {
            return (
                <Container fluid className='fluid containerHobbies'>
                    <Card>
                        <div className="imgBody">
                            <Card.Img variant="top" src={data.image} className="imageCard" />
                        </div>
                        <Card.Body className="cardBody">
                            <Card.Title className="cardTitle">{data.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </Container>
            );
        }
        ))
};

export default HobbiesIteration;