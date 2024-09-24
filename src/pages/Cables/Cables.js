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
        "PVC insulated Sheathed/ Unsheathed Single Core/ Multi Core Cables as per IS : 694/ 1990",
        "KALINGA PREMIUM PVC INSULATED SINGLE/MULTICORE PVC SHEATHED CABLES CONFORMING TO IS 194- 1990",
        "KALINGA PREMIUM COPPER CONDUCTOR PVC INSULATED UNSEATHERED FLEXIBLE WIRES & CORDS FOR PANELS & FLEXIBLE WIRING CONFORMING TO IS: 694-1990",
        "KALINGA PREMIUM COPPER CONDUCTOR PVC INSULATED UNSEATHERED HOUSE & INDUSTRIAL WIRES CONFORMING TO IS: 694- 1990",
        "KALINGA PREMIUM COPPER CONDUCTOR PVC INSULATED SINGLE/MULTICORE PVC SHEATHERED CABLES CONFORMING TO IS 694- 1990",
        "KALINGA PREMIUM COPPER CONDUCTOR PVC INSULATED UNSEATHERED MULTISTRAND WIRES FOR HOUSE & INDUSTRIAL WIRING CONFORMING TO IS: 694- 1990",
        "KALINGA PREMIUM COPPER CONDUCTOR PVC SEATHERED 3CORE SUBMERSIBLE FLAT WITH ANNEALED BEAR MULTISTANDED COPPER CONDUCTOR SUITABLE FOR 650/110 VOLTS",
        "KALINGA PREMIUM PVC INSULATED AND PVC SHEATHED ARMORED/ UNARMORED SINGLE CORE/ MULTI CORE CABLES AS PER IS 1554 PART- 1)- 1988",
        "KALINGA PREMIUM SINGLE CORE PVC INSULATED AND PVC SHEATHED ARMORED/ UNARMORED POWER CABLES WITH ALUMINIUM CONDUCTOR SUITABLE FOR 1100 VOLTS.",
        "KALINGA PREMIUM TWO CORE PVC INSULATED AND PVC SHEATHED ARMORED/ UNARMORED POWER CABLES WITH ALUMINIUM COPPER CONDUCTOR SUITABLE FOR 1100 VOLTS.",
        "KALINGA PREMIUM THREE CORE PVC INSULATED AND PVC SHEATHED ARMORED/ UNARMORED POWER CABLES WITH ALUMINIUM COPPER CONDUCTOR SUITABLE FOR 1100 VOLTS.",
        "KALINGA PREMIUM THREE & HALF CORE PVC INSULATED AND PVC SHEATHED ARMORED/ UNARMORED POWER CABLES WITH ALUMINIUM COPPER CONDUCTOR SUITABLE FOR 1100 VOLTS.",
        "KALINGA PREMIUM FOUR CORE PVC INSULATED AND PVC SHEATHED ARMORED/ UNARMORED POWER CABLES WITH ALUMINIUM COPPER CONDUCTOR SUITABLE FOR 1100 VOLTS.",
        "KALINGA PREMIUM PVC INSULATED ARMORED/ UNARMORED WITH COPPER CONDUCTOR SUITABLE FOR 1100 VOLTS.",
        "KALINGA PREMIUM 1.1 kV SINGLE CORE XPLE INSULATED UNARMORED AND ARMORED CABLES WITH ALUMINIUM/ COPPER CONDUCTOR TO IS 7098 (PART-1)- 1988",
        "KALINGA PREMIUM 1.1 kV TWO CORE XPLE INSULATED UNARMORED AND ARMORED CABLES WITH ALUMINIUM/ COPPER CONDUCTOR TO IS 7098 (PART-1)- 1988",
        "KALINGA PREMIUM 1.1 kV THREE CORE XPLE INSULATED UNARMORED AND ARMORED CABLES WITH ALUMINIUM/ COPPER CONDUCTOR TO IS 7098 (PART-1)- 1988",
        "KALINGA PREMIUM 1.1 kV THREE & HALF CORE XPLE INSULATED UNARMORED AND ARMORED CABLES WITH ALUMINIUM/ COPPER CONDUCTOR TO IS 7098 (PART-1)- 1988",
        "KALINGA PREMIUM 1.1 kV FOUR CORE XPLE INSULATED UNARMORED AND ARMORED CABLES WITH ALUMINIUM/ COPPER CONDUCTOR TO IS 7098 (PART-1)- 1988",
        "KALINGA PREMIUM XPLE INSULATED UNARMORED/ ARMORED CABLES WITH COPPER CONDUCTOR TO IS 7098 (PART-1)- 1988",
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
                    <h3>Engineered for durability, our cables ensure smooth power transmission and connectivity, making them ideal for residential and industrial use.</h3>
                </div>
            </div>
            <div className="cables-customerslide">
                <div className="cables-customermain">
                    <h3 className="cables-textslide"><img src={logoserv} className="cables-cuto-image" />Our <span className="cables-custo-span">Customers</span></h3>
                </div>
                <div className="cablepage-container">
                    <div className="left-side-text">
                    </div>
                    <div className="cablepage-marquee">
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
            <div className="product-list">
                <h2 className="product-heading"><img src={logoserv} className="cables-cuto-image-product" />Our <span className="cables-spantext">Products</span></h2>
                <ul className="product-items">
                    <h3 className="product-cable-text">items</h3>
                    {productscables.map((product, index) => (
                        <li key={index} className="product-item">
                            <span><img src={arrowlogoty} className="arrow-cable-li" /></span> {product}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Cables;