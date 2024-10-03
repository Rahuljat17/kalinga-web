import React from "react";
import '../Wires/Wires.css';
import wirelogo from '../../Accets/logoservice.png';
import rightlogo from '../../Accets/arrow.png';
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
    const wiresproducts = [
        "PVC Insulated Single Core Unsheathed Flexible/Multistrand Wires & Cables with Bare Copper Conductor 1100V Grade IS:694-2010",
        "PVC Insulated Multicore Annealed Bare Copper Wires",
        "Fire Retardant Wires",
        "Fire Retardant Low Smoke And Low Halogen Wires",
        "Fire Survival Wire",
        "3 Core Submersible Cable",
        "Telephone Cable As Per Itd S/ws- 113c & S/ws- 114c",
        "TV Coaxial Cables & CCTV Cables",
        "Computer Cable  For Networking & DSL Wiring",
        "DC UV Resistant Wire"
    ];
    return (
        <>
            <div className="background-container-wires">
                <div className="text-container-wires">
                    <h1 className="text-primary-wires">Wires</h1>
                    <h2 className="text-secondary-wires">Experience unmatched reliability and safety with our premium  <br /> wires, designed for seamless conductivity and long-lasting <br />performance. </h2>
                </div>
            </div>
            <div className="wirespage-customerslide">
                <div className="wirespage-customermain">
                    <h3 className="wirespage-textslide">
                        <img src={wirelogo} className="wirespage-cuto-image" />
                        Our <span className="wirespage-custo-span">Customers</span>
                    </h3>
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
                {/* <div className="wirespage-container">
                    <div className="left-side-text">
                    </div>
                    <div className="wirespage-container">
                        <div className="text-marquee">
                            <div className="scrolling-text">
                            </div>
                        </div>

                        <div className="wirespage-marquee">
                            <div className="marquee-content">
                                {[...images, ...images].map((image, index) => (
                                    <div className="marquee-item" key={index}>
                                        <img src={image} alt={`slide-${index}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="wiresproducts-container">
                <h2><img src={wirelogo} className="wirelogo-table" /><span className="highlight">Our</span> Products</h2>
                <ul className="wiresproducts-list">
                    <h3 className="wirepage-items-text">Items</h3>
                    {wiresproducts.map((wiresproduct, index) => (
                        <li key={index}>
                            {/* <span className="wiresproduct-icon">▶</span> */}
                            <img src={rightlogo} className='logo-arrow' style={{margin: "5px 10px 5px 0"}} />
                            <span style={{textTransform: "capitalize"}} >{wiresproduct}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
export default Wirespage;