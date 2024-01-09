import React, { useState } from 'react';
import './projects.css';

export default function CarouselBarber() {
    const images = [
        "barberia-home.png",
        "barberia-productos.PNG",
        "barberia-contacto.PNG",
    ]

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [loaded, setLoaded] = useState(false);

    const selectedNewImage = (index, images, next = true) => {
        setLoaded(false);
        setTimeout(() => {
            const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
            const nextIndex =
                next ? condition ? selectedIndex + 1 : 0
                    : condition ? selectedIndex - 1 : images.length - 1;
            setSelectedImage(images[nextIndex]);
            setSelectedIndex(nextIndex);
        }, 250)
    }

    const previous = () => {
        selectedNewImage(selectedIndex, images, false);
    }

    const next = () => {
        selectedNewImage(selectedIndex, images);
    }

    return (
        <div>
            <div className='containerTitle'>
                <a className='titleProject' href='https://maitenblanc.github.io/Barberia-Alura/' target='_blank' rel='noreferrer'>
                    Barbería Alura
                </a>
                <a className='clickMe' href='https://maitenblanc.github.io/Barberia-Alura/' target='_blank' rel='noreferrer'>
                    &emsp;<i class="bi bi-box-arrow-left"></i>&nbsp;
                    Click
                </a>
            </div>
            <div className='carousel'>
                <button className='carouselButton' onClick={previous}>
                    <i class="bi bi-arrow-left-circle-fill"></i>
                </button>
                <img className={`carouselImg ${loaded ? "loaded" : ""}`} src={require(`../assets/images/proyectos/${selectedImage}`)} alt='Barbería' onLoad={() => setLoaded(true)} />
                <button className='carouselButton' onClick={next}>
                    <i class="bi bi-arrow-right-circle-fill"></i>
                </button>
            </div>

        </div>
    )
}