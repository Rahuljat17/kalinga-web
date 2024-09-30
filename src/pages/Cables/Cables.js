import React from "react";
import '../Cables/Cables.css';
import rectlogo from '../../Accets/cable background.png';
import logoserv from '../../Accets/logoservice.png';
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


const Cables = () => {
    const productscables = [
        {
            heading: "Low Tension Power Cables",
            subheadings: [
                "Xlpe Insulated Power Cables as per IS 7098 (Copper/ Aluminum) (Armoured/ Unarmoured) 1.1Kv suitable",
                "PVC Insulated Power Cables as per IS 1554 (Copper/ Aluminum) (Armoured/ Unarmoured) 1.1Kv suitable",
                "Mining Cables as per Latest DGMS Standards (With Optional Double Armouring) 1.1Kv suitable",
                "Fire Survival Cables 1.1Kv suitable"
            ]
        },
        {
            heading: "High Tension Power Cables",
            subheadings: [
                "Xlpe Insulated Power Cables as per IS 7098 (Copper/ Aluminum) (Armoured/ Unarmoured) Upto 33 Kv",
                "PVC Insulated Power Cables as per IS 1554 (Copper/ Aluminum) (Armoured/ Unarmoured) Upto 33 Kv",
                "Fire Survival Cables Upto 33 Kv"
            ]
        },
        {
            heading: "Control Cables",
            subheadings: [
                "Xlpe Insulated Control Cables as per IS 7098 Copper (Armoured/ Unarmoured)",
                "PVC Insulated Control Cables as per IS 1554 Copper (Armoured/ Unarmoured)",
                "Specialized Control Cables",
                "Fire Retardant Low Smoke Control Cables",
                "Fire Survival Control Cables"
            ]
        }
    ];
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
            <div className="cables-background">
                <div className="cables-background-text">
                    <h1>Cables</h1>
                    <h3>Engineered for durability, our cables ensure smooth power <br />transmission and connectivity, making them ideal for  <br />residential and industrial use.</h3>
                </div>
            </div>
            <div className="cables-customerslide">
                <div className="cables-customermain">
                    <h3 className="cables-textslide"><img src={logoserv} className="cables-cuto-image" />Our <span className="cables-custo-span">Customers</span></h3>
                </div>
                <div className="product-marquee">
                    <div class="marquee marquee--8">
                        <img class="marquee__item" src={slide1} width="100" height="100" alt="" />
                        <img class="marquee__item" src={slide2} width="100" height="100" alt="" />
                        <img class="marquee__item" src={slide3} width="100" height="100" alt="" />
                        <img class="marquee__item" src={slide4} width="100" height="100" alt="" />
                        <img class="marquee__item" src={slide5} width="100" height="100" alt="" />
                        <img class="marquee__item" src={slide6} width="100" height="100" alt="" />
                        <img class="marquee__item" src={slide7} width="100" height="100" alt="" />
                        <img class="marquee__item" src={slide8} width="100" height="100" alt="" />
                    </div>
                </div>
            </div>
            <div className="product-list">
                <h2 className="product-heading"><img src={logoserv} className="cables-cuto-image-product" />Our <span className="cables-spantext">Products</span></h2>
                <ul className="product-items">
                    {productscables.map((product, index) => (
                        <div>
                            <li key={index} className="product-item">
                                <span><img src={arrowlogoty} className="arrow-cable-li" /></span> {product.heading}

                            </li>
                            <ul style={{margin: "10px auto 25px"}}>
                                {product.subheadings.map((subpoint, subIndex) => (
                                    <li key={subIndex} className="product-subpoint">
                                        {subpoint}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Cables;