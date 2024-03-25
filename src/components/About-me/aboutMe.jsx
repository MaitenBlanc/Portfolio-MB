import React from 'react';
import { useTranslation } from 'react-i18next';
import './aboutMe.css';

const AboutMe = () => {

    const [t, i18n] = useTranslation('global');

    return (
        <div className='aboutMe'>
            <h2 className='title'>{t("menu.aboutMe")}:</h2>
            <p className='aboutMe-text'>
                &emsp; {t("aboutMe.text1")} <br></br>
                &emsp; {t("aboutMe.text2")}<br></br>
                &emsp; {t("aboutMe.text3")}<br></br>
            </p>

        </div>
    );
}

export default AboutMe;
