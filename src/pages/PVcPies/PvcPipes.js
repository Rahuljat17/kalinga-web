import React from "react";
import '../PVcPies/PvcPipes.css';
import pvcpie from '../../Accets/pvcpipes background.png';
import logoone from '../../Accets/logoservice.png';
import Marquee from "react-fast-marquee";
import pvcpipeslogo1 from '../../Accets/image (2).png';
import pvcpipeslogo2 from '../../Accets/image (3).png';
import pvcpipeslogo3 from '../../Accets/image (4).png';
import pvcpipeslogo4 from '../../Accets/image (5).png';
import pvcpipeslogo5 from '../../Accets/image (6).png';
import pvcpipeslogo6 from '../../Accets/image (7).png';
import pvcpipeslogo7 from '../../Accets/image (8).png';
import pvcpipeslogo8 from '../../Accets/image (9).png';
import pvcpipeslogo9 from "../../Accets/scroollogo2.png";
const PvcPipes = () => {
    const data = [
        { size: '20mm', standardPacking: '120 Mtrs.', mediumPerDoz: '115.00', heavyPerDoz: '155.00' },
        { size: '25mm', standardPacking: '75 Mtrs', mediumPerDoz: '130.00', heavyPerDoz: '171.00' },
        { size: '32mm', standardPacking: '45 Mtrs.', mediumPerDoz: '206.00', heavyPerDoz: '375.00' },
        { size: '40mm', standardPacking: '30 Mtrs.', mediumPerDoz: '567.00', heavyPerDoz: '606.00' },
        { size: '50mm', standardPacking: '21 Mtrs.', mediumPerDoz: '', heavyPerDoz: '' },
    ];
    return (
        <>
            <div>
                <div className="background-container-pvcpipes">
                    <div className="pvcpipes-text">
                        <h1 className="pvcpipes-textone">PVC Pipes</h1>
                        <h2 className="pvcpipe-texttwo">Durable and leak-proof, our PVC pipes offer top-quality water <br /> flow solutions for both residential and commercial projects.</h2>
                    </div>
                </div>
                <div>
                    <div className="pvcpipes-scroll">
                        <h2 className="led-logo-text-span"> <img src={logoone} className="led-logo" />Our <span className="led-logo-span">Customers</span> </h2>
                    </div>
                    <div className="marquee-container"> 
                    <Marquee>
                        <img src={pvcpipeslogo1} className="pvcpipes-marquee-logo" />
                        <img src={pvcpipeslogo2} className="pvcpipes-marquee-logo" />
                        <img src={pvcpipeslogo3} className="pvcpipes-marquee-logo" />
                        <img src={pvcpipeslogo4} className="pvcpipes-marquee-logo" />
                        <img src={pvcpipeslogo5} className="pvcpipes-marquee-logo" />
                        <img src={pvcpipeslogo6} className="pvcpipes-marquee-logo" />
                        <img src={pvcpipeslogo7} className="pvcpipes-marquee-logo" />
                        <img src={pvcpipeslogo8} className="pvcpipes-marquee-logo" />
                        <img src={pvcpipeslogo9} className="pvcpipes-marquee-logo" />
                    </Marquee>
                    </div>
                </div>
                <div className="wires-container">
                    <h2 className="wires-title">
                        <span className="dot"></span>Our <span className="highlighted">Products</span>
                    </h2>

                    <div className="wires-table">
                        <div className="table-section">
                            <h3 className="section-title">RIGID P.V.C CONDUIT</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Size</th>
                                        <th>Standard Packing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.size}</td>
                                            <td>{item.standardPacking}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="table-section">
                            <h3 className="section-title">LONG BEND</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Medium Per Doz</th>
                                        <th>Heavy Per Doz</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{item.mediumPerDoz}</td>
                                            <td>{item.heavyPerDoz}</td>
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
export default PvcPipes;