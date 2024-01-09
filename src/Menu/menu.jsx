import React, { useState, useEffect } from 'react';
import './menu.css';

export default function Buttons() {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 200)
            console.log(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <nav className={`${sticky ? 'sticky' : ''}`}>
            <div className='menu'>
                <ul>
                    <li className='menuLI'>
                        <a href='#aboutMe' className='menuItem'>Sobre Mí</a>
                    </li>
                    <li className='menuLI'>
                        <a href='#titleSkills' className='menuItem'>Skills</a>
                    </li>
                    <li className='menuLI'>
                        <a href='#hobbies' className='menuItem'>Hobbies</a>
                    </li>
                    <li className='menuLI'>
                        <a href='#education' className='menuItem'>Formación</a>
                    </li>
                    <li className='menuLI'>
                        <a href='#projects' className='menuItem'>Proyectos</a>
                    </li>
                    <li className='menuLI'>
                        <a href='#contact' className='menuItem'>Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}