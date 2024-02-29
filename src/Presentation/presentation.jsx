import React from 'react';
import photo from '../assets/images/Foto.jpg';
import './presentation.css';

const Presentation = () => {
    return (
        <div className='presentationGrid'>
            <div className='presentationDiv'>
                <p className='presentationText'>&ensp;&ensp;&ensp;¡Hola! Mi nombre es Maitén. </p>
                <p className='presentationText'>&ensp;&ensp;&ensp;Soy estudiante de Licenciatura en Sistemas de Información y Analista en Sistemas.</p>
                <p className='presentationText'>&ensp;&ensp;&ensp;Actualmente vivo en Concepción del Uruguay, Entre Ríos, Argentina.</p>
            </div>
            <div className='image'>
                <img src={photo} alt='Foto de Maitén Blanc' className='photo' />
                <a className='cv' href='https://maitenblanc.github.io/CV/' target='blank'>
                    <i class="bi bi-file-earmark-person"></i> Visualizar CV aquí</a>
            </div>
        </div>
    );
}

export default Presentation;
