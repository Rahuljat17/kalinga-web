import React, { useState, useEffect, useRef } from "react";
import './Imageslider.css'; // Make sure to use the correct path

// Import your images
import sliderImage1 from '../../Accets/sliderimage.png';
import sliderImage2 from '../../Accets/homeslider.jpg';
import sliderImage3 from '../../Accets/homeslider2.jpg';
import logo from '../../Accets/homeslider.jpg';

const Imageslider = () => {
    const images = [sliderImage1, sliderImage2, sliderImage3]; // Store multiple images here
    const [active, setActive] = useState(0);
    const listRef = useRef(null);
    const dotsRef = useRef([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const itemsRef = useRef([]);

    const lengthItems = images.length - 1; // Total number of slides - 1 (index-based)

    const reloadSlider = (index) => {
        if (listRef.current && itemsRef.current[index]) {
            const checkLeft = itemsRef.current[index].offsetLeft;
            listRef.current.style.left = -checkLeft + 'px';

            const lastActiveDot = dotsRef.current[active];
            if (lastActiveDot) lastActiveDot.classList.remove('active');
            dotsRef.current[index].classList.add('active');
        }
    };

    const handleNext = () => {
        const newActive = active + 1 > lengthItems ? 0 : active + 1;
        setActive(newActive);
    };

    const handlePrev = () => {
        const newActive = active - 1 < 0 ? lengthItems : active - 1;
        setActive(newActive);
    };

    useEffect(() => {
        reloadSlider(active);
    }, [active]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval); // Cleanup on component unmount
    }, [active]);

    return (
        <div className="slider">
            <div className="list" ref={listRef}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="item"
                        ref={(el) => (itemsRef.current[index] = el)}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                        />

                    </div>
                ))}
            </div>

            <ul className="dots">
                {images.map((_, index) => (
                    <li
                        key={index}
                        className={active === index ? 'active' : ''}
                        onClick={() => setActive(index)}
                        ref={(el) => (dotsRef.current[index] = el)}
                    ></li>
                ))}
            </ul>
        </div>
    );
};

export default Imageslider;
