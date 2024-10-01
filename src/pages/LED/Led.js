import React from "react";
import '../LED/Led.css';
import rightlogo from '../../Accets/arrow.png';
import ledlogo from '../../Accets/logoservice.png';
import mrlogo1 from '../../Accets/image (2).png';
import mrlogo2 from '../../Accets/image (3).png';
import mrlogo3 from '../../Accets/image (4).png';
import mrlogo4 from '../../Accets/image (5).png';
import mrlogo5 from '../../Accets/image (6).png';
import mrlogo6 from '../../Accets/image (7).png';
import mrlogo7 from '../../Accets/image (8).png';
import mrlogo8 from '../../Accets/image (9).png';
import mrlogo9 from "../../Accets/scroollogo2.png";
import Marquee from "react-fast-marquee";

const Led = () => {
    const images = [
        mrlogo1,
        mrlogo2,
        mrlogo3,
        mrlogo4,
        mrlogo5,
        mrlogo6,
        mrlogo7,
        mrlogo8,
        mrlogo9,
    ];
    const products = [
        { item: 'LED street lights', power: '18w, 24w, 40w, 60w, 90w, 120w' },
        { item: 'LED bulb', power: '5w, 7w, 9w, 12w' },
        { item: 'LED flat panel', power: '3w, 6w, 12w, 18w' },
        { item: 'LED industrial panel', power: '24w, 36w, 45w' },
        { item: 'LED surface panel', power: '12w, 18w' },
        { item: 'LED tube lights', power: '10w, 20w' },
    ];
    return (
        <>
            <div>
                <div className="background-container">
                    <div className="text-container">
                        <h1 className="text-primary">LED</h1>
                        <h2 className="text-secondary">Illuminate your space with vibrant LED lights, blending style <br /> and energy efficiency for a brighter, more colourful ambience.</h2>
                    </div>
                </div>
                {/*  */}
                <div className="led-customerbody">
                    <div className="led-customer-scrollbody">
                        <div className="led-customer-scroll">
                            {/* <img src={ledlogo} className="led-logo"/> */}
                            {/* <h2 className="led-logo-text-span"> <img src={ledlogo} className="led-logo" />Our <span className="led-logo-span">Customers</span> </h2> */}
                            <h2 className="wires-title">
                                <img src={ledlogo} className="wires-logo-image" />Our <span className="wires-span-text"> Customers</span>
                            </h2>
                        </div>
                        <div className="product-marquee">
                            <div class="marquee marquee--8">
                                <img class="marquee__item" src={mrlogo1} width="100" height="100" alt="" />
                                <img class="marquee__item" src={mrlogo2} width="100" height="100" alt="" />
                                <img class="marquee__item" src={mrlogo3} width="100" height="100" alt="" />
                                <img class="marquee__item" src={mrlogo4} width="100" height="100" alt="" />
                                <img class="marquee__item" src={mrlogo5} width="100" height="100" alt="" />
                                <img class="marquee__item" src={mrlogo6} width="100" height="100" alt="" />
                                <img class="marquee__item" src={mrlogo7} width="100" height="100" alt="" />
                                <img class="marquee__item" src={mrlogo8} width="100" height="100" alt="" />
                            </div>
                        </div>
                        {/* table */}
                        <div className="products-container">
                            {/* <h1><span className="icon"><img src={ledlogo} className="led-logo" /></span> Our <span className="highlight">Products</span></h1> */}
                            <h2 className="wires-title">
                                <img src={ledlogo} className="wires-logo-image" />Our <span className="wires-span-text"> Products</span>
                            </h2>
                            <table className="products-table">
                                <thead>
                                    <tr>
                                        <th>Items</th>
                                        <th>Power(W)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={index}>
                                            <td><img src={rightlogo} className='logo-arrow' style={{margin: "5px 10px 0px 0"}} />{product.item}</td>
                                            <td>{product.power}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Led;