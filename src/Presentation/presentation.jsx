import React from 'react';
import photo from '../assets/images/Foto.jpg';
import './presentation.css';

const Presentation = () => {
    return (
        <div className='presentationGrid'>
            <p className='presentationText'>¡Hola! Mi nombre es Maitén. <br></br>
                Soy estudiante de Ingeniería en Sistemas de Información.<br></br>
                Actualmente vivo en Concepción del Uruguay, Entre Ríos, Argentina.</p>
            <img src={photo} alt='Foto de Maitén Blanc' className='photo' />
            <a className='cv' href='https://maitenblanc.github.io/CV/' target='blank'>
                <i class="bi bi-file-earmark-person"></i> Visualizar CV aquí</a>
        </div>
    );
}

export default Presentation;
