import React, { useEffect, useState } from 'react';
import './menu.css';

export default function Buttons() {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.screen.width > 1000) {
                setSticky(window.scrollY > 200)
                console.log(window.scrollY);
            } else {
                setSticky(window.scrollY < 0);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

    return (
        <nav className={`${sticky ? 'sticky' : ''}`} >
            <input type='checkbox' id='check' />
            <label for='check' className='checkbtn'>
                <i className='fas fa-bars'></i>
            </label>
            <nav className='menu'>
                <ul className='listMenu'>
                    <li className='menuLI'>
                        <a class='active' href='#aboutMe' className='menuItem'>Sobre Mí</a>
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
            </nav>
        </nav>
    );
}