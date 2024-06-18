import React, { useEffect, useRef, useState } from 'react';
import './Hero2.css'; // Import your CSS file
import img1 from '../Assests/img1.jpg';
import img3 from '../Assests/acerr.jpg';
import img2 from '../Assests/len.jpg';
import img4 from '../Assests/img4.png';


export const Hero = () => {
    const [items] = useState([
        { imgSrc: img1 },
        { imgSrc: img2 },
        { imgSrc: img3 },
        { imgSrc: img4 },
    ]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeRunning = 3000;
    const timeAutoNext = 6000;
    const nextButtonRef = useRef(null);
    const prevButtonRef = useRef(null);
    const sliderRef = useRef(null);
    const thumbnailBorderRef = useRef(null);
    const timeoutRef = useRef(null);
    const autoNextTimeoutRef = useRef(null);

    useEffect(() => {
        const nextDom = nextButtonRef.current;
        const prevDom = prevButtonRef.current;

        const showSlider = (type) => {
            const sliderDom = sliderRef.current;
            const thumbnailItemsDom = Array.from(thumbnailBorderRef.current.children);
            
            if (type === 'next') {
                sliderDom.appendChild(sliderDom.firstElementChild);
                thumbnailBorderRef.current.appendChild(thumbnailItemsDom[0]);
                sliderDom.parentElement.classList.add('next');
            } else {
                sliderDom.prepend(sliderDom.lastElementChild);
                thumbnailBorderRef.current.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
                sliderDom.parentElement.classList.add('prev');
            }

            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                sliderDom.parentElement.classList.remove('next');
                sliderDom.parentElement.classList.remove('prev');
            }, timeRunning);

            clearTimeout(autoNextTimeoutRef.current);
            autoNextTimeoutRef.current = setTimeout(() => {
                nextDom.click();
            }, timeAutoNext);
        };

        const handleNextClick = () => showSlider('next');
        const handlePrevClick = () => showSlider('prev');

        if (nextDom && prevDom) {
            nextDom.addEventListener('click', handleNextClick);
            prevDom.addEventListener('click', handlePrevClick);
        }

        autoNextTimeoutRef.current = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);

        return () => {
            clearTimeout(timeoutRef.current);
            clearTimeout(autoNextTimeoutRef.current);
            if (nextDom) nextDom.removeEventListener('click', handleNextClick);
            if (prevDom) prevDom.removeEventListener('click', handlePrevClick);
        };
    }, [timeRunning, timeAutoNext]);

    return (
        <div className='hero'>
            <div className="carousel">
                <div className="list" ref={sliderRef}>
                    {items.map((item, index) => (
                        <div className={`item ${index === currentIndex ? 'active' : ''}`} key={index}>
                            <img src={item.imgSrc} alt={`Slide ${index + 1}`} />
                            <div className="content">
                                <div className="author">{item.author}</div>
                                <div className="title">{item.title}</div>
                                <div className="topic">{item.topic}</div>
                                <div className="des">{item.description}</div>
                                <div className="buttons">
                                    <button>SEE MORE</button>
                                    <button>SUBSCRIBE</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="thumbnail" ref={thumbnailBorderRef}>
                    {items.map((item, index) => (
                        <div className="item" key={index}>
                            <img src={item.imgSrc} alt={`Thumbnail ${index + 1}`} />
                            <div className="content">
                                {/* <div className="title">Name Slider</div> */}
                                {/* <div className="description">Description</div> */}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button ref={prevButtonRef} id="prev">{'<'}</button>
                    <button ref={nextButtonRef} id="next">{'>'}</button>
                </div>
                <div className="time"></div>
            </div>
        </div>
    );
};

export default Hero;
