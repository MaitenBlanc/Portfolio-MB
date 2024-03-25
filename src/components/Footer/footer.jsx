import React from 'react';
import { useTranslation } from "react-i18next";
import gitHub from '../../assets/images/contacto/logo-github.svg';
import gMail from '../../assets/images/contacto/logo-gmail.svg';
import linkedIn from '../../assets/images/contacto/logo-linkedin.svg';
import wsp from '../../assets/images/contacto/logo-wsp.svg';
import './footer.css';

const Footer = () => {

    const [t, i18n] = useTranslation('global');

    return (
        <div className='containerFooter'>
            <div className='containerLogo'>
                <a href='https://www.linkedin.com/in/maiten-guadalupe-blanc/' target='_blank' rel='noreferrer'>
                    <img className='logo' src={linkedIn} alt='Logo LinkedIn' />
                </a>
                <a href='https://github.com/MaitenBlanc' target='_blank' rel='noreferrer'>
                    <img className='logo' src={gitHub} alt='Logo LinkedIn' />
                </a>
                <a href='mailto:maitengblanc@gmail.com?subject=Consulta%20a%20Mait%C3%A9n%20Blanc' target='_blank' rel='noreferrer'>
                    <img className='logo' src={gMail} alt='Logo LinkedIn' />
                </a>
                <a href='https://wa.me/+5493442575618?text=¡Hola! ¿Cómo estás?' target='_blank' rel='noreferrer'>
                    <img className='logo' src={wsp} alt='Logo LinkedIn' />
                </a>
            </div>
            <h3 className='dev'>{t("footer.dev")}</h3>
        </div>
    );
}

export default Footer;