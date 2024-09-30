import React, { useState, useEffect } from 'react';
import './home.css'
import HeroImage from "../../Accets/HeroImage.png";
import logoservice from '../../Accets/logoservice.png';
import { Link } from 'react-router-dom';
import productone from '../../Accets/productone.png';
import productwo from '../../Accets/productwo.png';
import producthree from '../../Accets/producthree.png';
import productfour from '../../Accets/productfour.png';
import productfive from '../../Accets/productfive.png';
import worklogo from '../../Accets/work.png';
import mechanic from '../../Accets/Mechanic.png';
import pageslogo from '../../Accets/Pages.png';
import ticklogo from '../../Accets/tick.png';
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { Box, Typography } from "@mui/material";
import { Construction } from "@mui/icons-material";
import { MdLocationPin } from "react-icons/md";
import rightlogo from '../../Accets/arrow.png';
import mrlogo1 from '../../Accets/image (2).png';
import mrlogo2 from '../../Accets/image (3).png';
import mrlogo3 from '../../Accets/image (4).png';
import mrlogo4 from '../../Accets/image (5).png';
import mrlogo5 from '../../Accets/image (6).png';
import mrlogo6 from '../../Accets/image (7).png';
import mrlogo7 from '../../Accets/image (8).png';
import mrlogo8 from '../../Accets/image (9).png';
import Marquee from "react-fast-marquee";
import Imageslider from '../Imageslider/Imageslider';

const Home = () => {
  const cards = [
    { id: 1, image: productwo, text: 'Wires', redirect: '/wires' },
    { id: 2, image: producthree, text: 'Cables', redirect: '/cables' },
    { id: 3, image: productfour, text: 'PVC Pipes', redirect: '/pvc-pipes' },
    { id: 4, image: productfive, text: 'Lighting', redirect: '/lighting' },
    { id: 5, image: productone, text: 'Other products', redirect: '/others' },
  ];
  const [count, setCount] = useState(65);
  const [Skilled, setSkilled] = useState(650);
  const [licenses, setlicenses] = useState(8);

  return (
    <div>
      {/* <img src={HeroImage} style={{ width: "100%", objectFit: "cover" }} /> */}
      <Imageslider />
      {/* scroll */}
      <div>
        <div className="marquee-container">
          <div className="marquee-text-two">
            <h1 className='worked-title'>Worked with</h1>
          </div>
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
      </div>
      <div className='Our-Products-mainbody'>
        <div className='Our-Products-title'>
          <div className='product-image-section'>
            <img src={logoservice} className='Our-Products-image' />
            <h3 className='product-main-title'>Our <span className='product-title-span'>Products</span></h3>
          </div>
          <div>
            <Link to='/others' className='product-viewll'>View All <span><MdOutlineKeyboardDoubleArrowRight fontSize={20} /></span></Link>
          </div>
        </div>
        <div className="card-grid">
          {cards.map((card) => (
            <Link to={card.redirect}>
              <div key={card.id} className="card">
                <img src={card.image} alt={card.text} className="card-image" />
                <p className="card-text">{card.text}</p>
              </div>
            </Link>
          ))}
        </div>
        {/*  */}
      </div>
      <div className='expertise-main-body'>
        <div className='expertise-body'>
          <div className='expertise-card'>
            <h2 className='expertise-title'>{count} <span><AiOutlinePlus style={{ position: "relative", top: "5px", fontSize: "45px" }} className='expertise-logo-icon' /></span></h2>
            <img src={worklogo} className='expertise-logos' />
            <h3 className='expertise-last-title'>Years of expertise</h3>
          </div>
          <div className='expertise-card'>
            <h2 className='expertise-title'>{Skilled} <span><AiOutlinePlus style={{ position: "relative", top: "5px", fontSize: "45px" }} className='expertise-logo-icon' /></span></h2>
            <img src={mechanic} className='expertise-logos' />
            <h3 className='expertise-last-title'>Skilled professionals</h3>
          </div>
          <div className='expertise-card'>
            <h2 className='expertise-title'>{licenses} <span><AiOutlinePlus style={{ position: "relative", top: "5px", fontSize: "45px" }} className='expertise-logo-icon' /></span></h2>
            <img src={pageslogo} className='expertise-logos' />
            <h3 className='expertise-last-title'>IBS licenced obtained</h3>
          </div>
          <div className='expertise-card'>
            <h2 className='expertise-title-last'>100% <span><AiOutlinePlus style={{ position: "relative", top: "5px", fontSize: "45px" }} className='expertise-logo-icon' /></span></h2>
            <img src={ticklogo} className='expertise-logos' />
            <h3 className='expertise-last-title-two'>IOS 9001 certified</h3>
          </div>
        </div>
      </div>
      {/* certified */}
      <div className='certified-main-body'>
        <div className='certified-image-section'>
          <div className='certified-image-mainbody'>
            <img src={logoservice} className='certified-image' />
            <h3 className='certified-imagetext'>We are <span className='certified-imagespan'>Recognised and Certified</span></h3>
          </div>
          <div>
            <Link to="/our-certification" style={{ textDecoration: "none", fontSize: "9px", display: "flex", alignItems: "center", marginTop: "30px" }}>View All <span><MdOutlineKeyboardDoubleArrowRight fontSize={20} /></span> </Link>
          </div>
        </div>
        <div className='certified-table-main'>
          <div className='certified-table'>
            <div className='left-side'>
              <ul style={{ listStyle: "none" }} className='certified-table-row'>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>ISO 14001 : 2015</li>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>ISO 9001 : 2015</li>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>ISO 45001 : 2018</li>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>IS 1554 : PART 1 : 1988</li>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>IS 14255 : 1995</li>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>BASEC</li>
              </ul>
            </div>
            <div className='vertical-line-two'></div>
            <div className='right-side'>
              <ul style={{ listStyle: "none" }} className='certified-table-row'>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>ISO 7098 : PART 1 : 1988</li>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>IS 694 : 2010</li>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>IS  9537 : PART 3 : 1983</li>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>EN 50575</li>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>CE</li>
                <li> <span><img src={rightlogo} className='logo-arrow' /></span>UKCA</li>

              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* our units */}
      <div className='ourunits-main-body'>
        <div className='ourunits-image-section'>
          <img src={logoservice} className='ourunits-image' />
          <h3 className='product-main-title'>Our <span className='product-title-span'>Units</span></h3>
        </div>
        <div className='ourunits-inside-body'>
          <div className='ourunits-location'>
            <MdLocationPin color='red' fontSize={24} className='bounce-icon' />
            <h3 className='ourunits-title'>Udyog Nagar, New Delhi</h3>
          </div>
          <div className="vertical-line"></div>
          <div className='ourunits-location'>
            <MdLocationPin color='red' fontSize={24} className='bounce-icon' />
            <h3 className='ourunits-title'>Sonepat, Haryana</h3>
          </div>
          <div className="vertical-line"></div>
          <div className='ourunits-location'>
            <MdLocationPin color='red' fontSize={24} className='bounce-icon' />
            <h3 className='ourunits-title'>Barota, Haryana</h3>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Home;
