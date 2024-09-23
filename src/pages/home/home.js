import React from 'react';
import './home.css'
import HeroImage from "../../Accets/HeroImage.png";
import logoservice from '../../Accets/logoservice.png';
import { Link } from 'react-router-dom';


const Home = () => {
  const cards = [
    { id: 1, image: 'https://via.placeholder.com/150', text: 'Card 1' },
    { id: 2, image: 'https://via.placeholder.com/150', text: 'Card 2' },
    { id: 3, image: 'https://via.placeholder.com/150', text: 'Card 3' },
    { id: 4, image: 'https://via.placeholder.com/150', text: 'Card 4' },
    { id: 5, image: 'https://via.placeholder.com/150', text: 'Card 5' },
  ];
  return (
    <div>
      {/* <img src={HeroImage} style={{ width: "100%", objectFit: "cover" }} /> */}
      <div className='Our-Products-mainbody'>
        <div className='Our-Products-title'>
          <div className='product-image-section'>
            <img src={logoservice} className='Our-Products-image' />
            <h3 className='product-main-title'>Our <span className='product-title-span'>Products</span></h3>
          </div>
          <div>
            <Link to='/others' className='product-viewll'>View All</Link>
          </div>
        </div>
        <div className="card-grid">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.image} alt={card.text} className="card-image" />
              <p className="card-text">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};



export default Home;
