import React,{useState} from "react";
import '../Imageslider/Imageslider.css';
import imageslider from '../../Accets/sliderimage.png';

const Imageslider = () => {
    const images = [
        imageslider,
        imageslider,
        imageslider,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };
    return (
        <>
            <div>
                <div className="slider">
                    <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {images.map((image, index) => (
                            <div className="slide" key={index}>
                                <img src={image} alt={`Slide ${index}`} />
                            </div>
                        ))}
                    </div>

                    <button className="prev" onClick={prevSlide}>❮</button>
                    <button className="next" onClick={nextSlide}>❯</button>

                    <div className="dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${index === currentIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}
export default Imageslider;