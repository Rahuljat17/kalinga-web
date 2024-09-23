import React from 'react';
import './about-us.css'
import MainVideo from "../../Accets/WhatsApp Video 2024-09-23 at 11.55.16 AM.mp4";
import HeadingIcon from "../../Accets/Group 1.png";
import Pic1 from "../../Accets/sudhir sethi[1].png";
import Pic2 from "../../Accets/kunal sethi[1].png";
import Pic3 from "../../Accets/Frame 62.png";
import Pic4 from "../../Accets/Frame 63.png";


const AboutUs = () => {
  return (
      <div className='container'>
        <div className='aboutUs'>
          <video src={MainVideo} autoPlay loop muted></video>
          <div className='contents'>
            <h2><img src={HeadingIcon} /><span>About</span><span>us</span></h2>
            <p>For over six decades, our network of companies has been dedicated to delivering high-quality products and services across various industries. Kalinga Cables & Conduit Company specializes in manufacturing reliable PVC/XLPE insulated wires, cables, and conduits, serving domestic, commercial, and industrial markets. Our commitment to innovation ensures that we meet the evolving needs of electrical installations.</p>

            <p>Kalinga Premium focuses on providing safe and durable house wiring solutions, offering a complete range of products, including electrical meters and PVC tape, for comprehensive electrical setups.</p>

            <p>Expanding beyond the electrical industry, Kalinga Hotels & Resorts offers luxury accommodations in the heart of Manali, with beautiful villas and cottages for a perfect getaway. Additionally, Sahni Strips, under the brand Onwell®, leads in the production of high-performance cables, wires, and aluminum strips for diverse applications. Together, our companies uphold a tradition of quality and trust that has spanned generations.</p>
          </div>
        </div>
        <div className='ourTeams'>
          <h2><img src={HeadingIcon} /><span>Meet our</span><span>team</span></h2>
          <div className='members'>
            <div>
              <img src={Pic1} />
              <p>Mr. Sudhir Sethi</p>
            </div>
            <div>
              <img src={Pic3} />
              <p>Mr. Rajiv Sethi</p>
            </div>
            <div>
              <img src={Pic4} />
              <p>Mr. Atul Sethi</p>
            </div>
            <div>
              <img src={Pic2} />
              <p>Mr. Kunal Sethi</p>
            </div>
          </div>

        </div>
      </div>
  );
};



export default AboutUs;
