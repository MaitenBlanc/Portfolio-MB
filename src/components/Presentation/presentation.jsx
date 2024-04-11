import React from 'react';
import { useTranslation } from 'react-i18next';
import photo from '../../assets/images/Foto.jpg';
import './presentation.css';

const Presentation = () => {

    const [t, i18n] = useTranslation('global');

    return (
        <div className='presentationGrid'>
            <div className='presentationDiv'>
                <p className='presentationText'>&ensp;&ensp;&ensp;{t("presentation.presentationText1")} </p>
                <p className='presentationText'>&ensp;&ensp;&ensp;{t("presentation.presentationText2")}</p>
                <p className='presentationText'>&ensp;&ensp;&ensp;{t("presentation.presentationText3")}</p>
            </div>
            <div className='image'>
                <img src={photo} alt='Foto de Maitén Blanc' className='photo' />
                <a className='cv' href={t("cv.url")}' target='blank'>
                    <i class="bi bi-file-earmark-person"></i> {t("cv.cv")}</a>
            </div>
        </div>
    );
}

export default Presentation;
