import React from "react";
import imageOB from '../assets/images/formacion/Open-Bootcamp.png';
import imageAlura from '../assets/images/formacion/alura.png';
import imageAP from '../assets/images/formacion/argentina-programa.png';
import imageCUI from '../assets/images/formacion/cui.png';
import imageDeyel from '../assets/images/formacion/deyel.png';
import imageUADER from '../assets/images/formacion/logo-uader.png';
import imageUTN from '../assets/images/formacion/logo-utn.svg';
import imageTicmas from '../assets/images/formacion/ticmas.png';
import './education.css';


const data = [
    {
        "id": 1,
        "image": imageUADER,
        "title": "Licenciatura en Sistemas de Información",
        "text": "En curso - Universidad Autónoma de Entre Ríos",
        "imageSize": "80%"
    },
    {
        "id": 2,
        "image": imageUTN,
        "title": "Ingeniería en Sistemas de Información",
        "text": "Universidad Tecnológica Nacional",
        "imageSize": "12%"
    },
    {
        "id": 3,
        "image": imageAlura,
        "title": "Desarrollo Front End",
        "text": "Alura/Oracle",
        "imageSize": "30%"
    },
    {
        "id": 4,
        "image": imageAlura,
        "title": "Formación React",
        "text": "Alura/Oracle",
        "imageSize": "30%"
    },
    {
        "id": 5,
        "image": imageOB,
        "title": "Desarrollo Full Stack",
        "text": "Open Bootcamp",
        "imageSize": "30%"
    },
    {
        "id": 6,
        "image": imageAP,
        "title": "Desarrollo Front End",
        "text": "Argentina Programa 4.0",
        "imageSize": "30%"
    },
    {
        "id": 7,
        "image": imageDeyel,
        "title": "Citizen Deyel Plus",
        "text": "Deyel - Low code",
        "imageSize": "30%"
    },
    {
        "id": 8,
        "image": imageAlura,
        "title": "Python, Data Science",
        "text": "Alura/Oracle",
        "imageSize": "30%"
    },
    {
        "id": 9,
        "image": imageTicmas,
        "title": "Desarrollo de Aplicaciones Móviles",
        "text": "Ticmas",
        "imageSize": "60%"
    },
    {
        "id": 10,
        "image": imageCUI,
        "title": "Inglés B2",
        "text": "CUI UBA",
        "imageSize": "40%"
    }
];

function EducationIteration() {
    return (
        data.map((data) => {
            return (
                <div className='card cardEd'>
                    <img src={data.image} className="card-img-top imageEd" alt={data.text} style={{ width: data.imageSize }} />
                    <div className="card-body bodyEd">
                        <h1 className="card-text">{data.title}</h1>
                        <p className="card-text">{data.text}</p>
                    </div>
                </div>
            );
        }
        ))
};

export default EducationIteration;