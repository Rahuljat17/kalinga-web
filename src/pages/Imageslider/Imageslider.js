import React, { useState, useEffect, useRef } from "react";
import './Imageslider.css'; // Make sure to use the correct path
import imageslider from '../../Accets/sliderimage.png';

const Imageslider = () => {
    const [active, setActive] = useState(0);
    const listRef = useRef(null);
    const dotsRef = useRef([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const itemsRef = useRef([]);

    const lengthItems = 4; // Total number of slides - 1 (index-based)

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
        <>
            <div className="slider">
                <div className="list" ref={listRef}>
                    {[1, 2, 3, 4, 5].map((_, index) => (
                        <div
                            key={index}
                            className="item"
                            ref={(el) => (itemsRef.current[index] = el)}
                        >
                            <img
                                src={imageslider}
                                alt={`image${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
                <div className="buttons">
                    <button id="prev" onClick={handlePrev} ref={prevRef}></button>
                    <button id="next" onClick={handleNext} ref={nextRef}></button>
                </div>
                <ul className="dots">
                    {[...Array(5)].map((_, index) => (
                        <li
                            key={index}
                            className={active === index ? 'active' : ''}
                            onClick={() => setActive(index)}
                            ref={(el) => (dotsRef.current[index] = el)}
                        ></li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Imageslider;
