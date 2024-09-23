import React from 'react';
import './our-certification.css'
import MainVideo from "../../Accets/WhatsApp Video 2024-09-23 at 11.55.16 AM.mp4";
import HeadingIcon from "../../Accets/Group 1.png";
import Pic1 from "../../Accets/image.png";
import Pic2 from "../../Accets/image (1).png";
import Pic3 from "../../Accets/image (2).png";
import Pic4 from "../../Accets/image (3).png";
import Pic5 from "../../Accets/image (4).png";
import Pic6 from "../../Accets/image (5).png";
import Pic7 from "../../Accets/image (6).png";
import Pic8 from "../../Accets/image (7).png";
import Pic9 from "../../Accets/image(8).png";


const AboutUs = () => {
  return (
      <div className='container'>
        <div className='ourCertifications'>
          <h2><img src={HeadingIcon} /><span>Our</span><span>Certification</span></h2>
          <div className='certificates'>
            <div className='cert-box'>
              <img src={Pic1} />
              <h4>Certificate of Registration</h4>
              <p>ISO 14001 : 2015</p>
            </div>
            <div className='cert-box'>
              <img src={Pic2} />
              <h4>Certificate of Registration</h4>
              <p>ISO 9001 : 2015</p>
            </div>
            <div className='cert-box'>
              <img src={Pic3} />
              <h4>Certificate of Registration</h4>
              <p>ISO 45001 : 2018</p> 
            </div>
            <div className='cert-box'>
              <img src={Pic4} />
              <h4>Government of India</h4>
              <p>Importer-Exporter code</p>
            </div>
            <div className='cert-box'>
              <img src={Pic9} />
              <h4>Certificate of Compliance</h4>
              <p>UQ- 20211001116</p>
            </div>
            <div className='cert-box'>
              <img src={Pic5} />
              <h4>Certificate of Compliance</h4>
              <p>CE- 1825</p>
            </div>
            <div className='cert-box'>
              <img src={Pic6} />
              <h4>Bureau Of Indian Standards</h4>
              <p>Licence No. CM/L 9481693</p>
            </div>
            <div className='cert-box'>
              <img src={Pic7} />
              <h4>Bureau Of Indian Standards</h4>
              <p>Licence No. CM/L 1948473</p>
            </div>
            <div className='cert-box'>
              <img src={Pic8} />
              <h4>Certificate of Registration</h4>
              <p>ISO 9001 : 2015</p>
            </div>
          </div>

        </div>
      </div>
  );
};



export default AboutUs;
