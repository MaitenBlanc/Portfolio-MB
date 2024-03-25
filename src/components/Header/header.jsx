import React from 'react';
import { useTranslation } from 'react-i18next';
import './header.css';

const Header = () => {

    const [t, i18n] = useTranslation('global');

    return (
        <div className='containerHeader'>
            <h1 className='name'><i class="bi bi-code-slash" id='iconName'></i> Maitén Guadalupe Blanc</h1>
            {/* <div className='containerBtn'>
                <button className='btn' onClick={() => i18n.changeLanguage('es')}><i class="bi bi-globe"></i> ES</button>
                <button className='btn' onClick={() => i18n.changeLanguage('en')}><i class="bi bi-globe"></i> EN</button>
            </div> */}
        </div>
    );
}

export default Header;
