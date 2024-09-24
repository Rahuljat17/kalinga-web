import React from "react";
import '../Wires/Wires.css';
import wirelogo from '../../Accets/logoservice.png';
import slide1 from '../../Accets/slidei1.jpg';
import slide2 from '../../Accets/image (2).png';
import slide3 from '../../Accets/image (3).png';
import slide4 from '../../Accets/image (4).png';
import slide5 from '../../Accets/image (5).png';
import slide6 from '../../Accets/image (6).png';
import slide7 from '../../Accets/image (7).png';
import slide8 from '../../Accets/image (8).png';
import slide9 from '../../Accets/image (9).png';
import slide10 from '../../Accets/scroollogo2.png';
import slide11 from '../../Accets/slidei3.jpg';
import slide12 from '../../Accets/slidei4.jpg';
import slide13 from '../../Accets/slidei2.jpg';
import arrowlogoty from '../../Accets/arrow.png';

const Wirespage = () => {
    const images = [
        // Array of image URLs
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6,
        slide7,
        slide8,
        slide9,
        slide10,
        slide11,
        slide12,
        slide13,
    ];
    return (
        <>
            <div className="background-container-wires">
                <div className="text-container-wires">
                    <h1 className="text-primary-wires">Wires</h1>
                    <h2 className="text-secondary-wires">Experience unmatched reliability and safety with our premium  <br /> wires, designed for seamless conductivity and long-lasting </h2>
                </div>
            </div>
            <div className="wirespage-customerslide">
                <div className="wirespage-customermain">
                    <h3 className="wirespage-textslide">
                        <img src={wirelogo} className="wirespage-cuto-image" />
                        Our <span className="wirespage-custo-span">Customers</span>
                    </h3>
                </div>
                <div className="wirespage-container">
                    <div className="left-side-text">
                    </div>
                    <div className="wirespage-marquee">
                        <div className="marquee-content">
                            {images.map((image, index) => (
                                <div className="marquee-item" key={index}>
                                    <img src={image} alt={`slide-${index}`} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Wirespage;