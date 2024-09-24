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
                        <img src={logoone} className="wires-logo-image" />Our <span className="wires-span-text"> Products</span>
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
                {/*  */}
                <div className="casing-capping-container">
                    <h2 className="casing-title"><img src={logoone} className="casing-imagelogo" /> Casing & Capping  <span className="details-text-casing">Details</span></h2>
                    <table className="details-table">
                        <thead>
                            <tr>
                                <th>Size (mm)</th>
                                <th>Qty</th>
                                <th>Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="detail-main-td">Width X Height</td>
                                <td className="detail-main-td">Pcs</td>
                                <td className="detail-main-td">in meters</td>
                            </tr>
                            <tr>
                                {/* <td>Width X Height</td> */}
                                <td>20 - 12 (Heavy) Premium</td>
                                <td>200</td>
                                <td>400</td>
                            </tr>
                            <tr>
                                {/* <td>Pcs</td> */}
                                <td>25 - 16 (Heavy) Premium</td>
                                <td>100</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>30 - 15 (Heavy) Premium</td>
                                <td>100</td>
                                <td>200</td>
                            </tr>
                            <tr>
                                <td>38 - 19 (Heavy) Premium</td>
                                <td>50</td>
                                <td>100</td>
                            </tr>
                            <tr>
                                <td>50 - 18 (Heavy) Premium</td>
                                <td>50</td>
                                <td>100</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="note">Each Casing and Capping Standard length 2 Mtrs</p>
                </div>
            </div>

        </>
    )
}
export default PvcPipes;