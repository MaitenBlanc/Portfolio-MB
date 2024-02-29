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
            <nav class="navbar navbar-expand-lg bg-transparent" >
                <div className="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#aboutMe">Sobre Mí</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#titleSkills">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#hobbies">Hobbies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#education">Formación</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#projects">Proyectos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </nav>
    );
}