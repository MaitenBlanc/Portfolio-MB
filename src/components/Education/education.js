import React from "react";
import { useTranslation } from "react-i18next";
import imageOB from '../../assets/images/formacion/Open-Bootcamp.png';
import imageAlura from '../../assets/images/formacion/alura.png';
import imageAP from '../../assets/images/formacion/argentina-programa.png';
import imageCUI from '../../assets/images/formacion/cui.png';
import imageDeyel from '../../assets/images/formacion/deyel.png';
import imageUADER from '../../assets/images/formacion/logo-uader.png';
import imageUTN from '../../assets/images/formacion/logo-utn.svg';
import imageTicmas from '../../assets/images/formacion/ticmas.png';
import './education.css';




function EducationIteration() {

    const [t, i18n] = useTranslation('global');

    const data = [
        {
            "id": 1,
            "image": imageUADER,
            "title": t("education.uader.title"),
            "text": t("education.uader.text"),
            "imageSize": "80%"
        },
        {
            "id": 2,
            "image": imageUTN,
            "title": t("education.utn.title"),
            "text": t("education.utn.text"),
            "imageSize": "12%"
        },
        {
            "id": 3,
            "image": imageAlura,
            "title": t("education.front.title"),
            "text": t("education.front.text"),
            "imageSize": "30%"
        },
        {
            "id": 4,
            "image": imageAlura,
            "title": t("education.react.title"),
            "text": t("education.react.text"),
            "imageSize": "30%"
        },
        {
            "id": 5,
            "image": imageOB,
            "title": t("education.fullStack.title"),
            "text": t("education.fullStack.text"),
            "imageSize": "30%"
        },
        {
            "id": 6,
            "image": imageAP,
            "title": t("education.arg.title"),
            "text": t("education.arg.text"),
            "imageSize": "30%"
        },
        {
            "id": 7,
            "image": imageDeyel,
            "title": t("education.deyel.title"),
            "text": t("education.deyel.text"),
            "imageSize": "30%"
        },
        {
            "id": 8,
            "image": imageAlura,
            "title": t("education.python.title"),
            "text": t("education.python.text"),
            "imageSize": "30%"
        },
        {
            "id": 9,
            "image": imageTicmas,
            "title": t("education.mobile.title"),
            "text": t("education.mobile.text"),
            "imageSize": "60%"
        },
        {
            "id": 10,
            "image": imageCUI,
            "title": t("education.english.title"),
            "text": t("education.english.text"),
            "imageSize": "40%"
        }
    ];

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