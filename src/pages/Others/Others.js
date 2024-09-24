import React from "react";
import '../Others/Others.css';
import otherser from '../../Accets/logoservice.png';
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
import othercard1 from '../../Accets/other6.png';
import othercard2 from '../../Accets/other5.png';
import othercard3 from '../../Accets/other4.png';
import othercard4 from '../../Accets/other3.png';
import othercard5 from '../../Accets/other2.png';
import othercard6 from '../../Accets/otherone.png';
import meterlogo from '../../Accets/analogometer.png';
import tapelogo from '../../Accets/tapeimage.png';

const Others = () => {
    const images = [
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
            <div>
                <div className="background-container-others">
                    <div className="text-container-others">
                        <h1 className="text-primary-others">Others</h1>
                        <h2 className="text-secondary-others">From protecting your circuits with reliable MCBs to ensuring <br /> secure insulation with durable PVC tape, and monitoring <br />power usage with precision meters, our range of essential  <br />products guarantees safety, efficiency, and accuracy for all  <br />your electrical needs. </h2>
                    </div>
                </div>
                {/* slider */}
                <div className="otherpage-customerslide">
                    <div className="otherpage-customermain">
                        <h3 className="otherpage-textslide">
                            <img src={otherser} className="otherpage-cuto-image" />
                            Our <span className="otherpage-custo-span">Customers</span>
                        </h3>
                    </div>
                    <div className="otherpage-container">
                        <div className="left-side-text">
                        </div>
                        <div className="otherpage-marquee">
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
                {/* card */}
                <div className="Insulation-card-body">
                    <div className="Insulation-towerlogo">
                        <h3 className="Insulation-textimage"><img src={otherser} className="Insulation-image-other" />Our <span className="Insulation-image-otherspan">Products</span></h3>
                    </div>
                    <div className="mcb-main">
                        <h3 className="mcb-main-text">MCBs</h3>
                    </div>
                    {/*  */}
                    <div className="mcb-grid-container">
                        <div className="mcb-grid">
                            <img src={othercard1} alt="Image 1" className="mcbimage-body"/>
                            <img src={othercard2} alt="Image 2" className="mcbimage-body"/>
                            <img src={othercard3} alt="Image 3" className="mcbimage-body"/>
                            <img src={othercard4} alt="Image 4" className="mcbimage-body"/>
                            <img src={othercard5} alt="Image 5" className="mcbimage-body"/>
                            <img src={othercard6} alt="Image 6" className="mcbimage-body"/>
                        </div>
                    </div>
                    {/* insulation con */}
                    <div className="PVC-Insulation-con">
                        <h1 className="PVC-Insulation-textone">PVC Insulation Tape</h1>
                    </div>
                    <div className="tape-main-body">
                       <div className="tape-grid-body">
                        <img src={tapelogo} className="tape-image-main"/>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Others;