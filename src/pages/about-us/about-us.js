import React, { useState } from 'react';
import './about-us.css';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import MainVideo from "../../Accets/WhatsApp Video 2024-09-23 at 11.55.16 AM.mp4";
import HeadingIcon from "../../Accets/Group 1.png";
import Pic1 from "../../Accets/sudhir sethi[1].png";
import Pic2 from "../../Accets/kunal sethi[1].png";
import Pic3 from "../../Accets/Frame 62.png";
import Pic4 from "../../Accets/Frame 63.png";
import Historypic1 from "../../Accets/historypic1.png";
import Historypic2 from "../../Accets/historypic2.png";
import Historypic3 from "../../Accets/1960.png";
import Historypic4 from "../../Accets/1972.png";
import Historypic5 from "../../Accets/1992.png";
import Historypic6 from "../../Accets/1999.png";
import Historypic7 from "../../Accets/2019.png";

// Array for team members
const teamMembers = [
  { id: 1, name: 'Mr. Sudhir Sethi', image: Pic1, details: 'Since joining the company in 1974, Sudhir Sethi has played a pivotal role in advancing Kalinga Premium’s house wiring division and spearheading its marketing efforts. With a keen eye for new technologies and market trends, Sudhir ensures the company remains at the forefront of industry innovation. His expertise in product development and strategic marketing has been instrumental in positioning Kalinga Premium as a leader in quality and safety.' },
  { id: 2, name: 'Mr. Rajiv Sethi', image: Pic3, details: 'Rajiv Sethi has been a driving force at Kalinga Premium since 1976, overseeing key areas like manufacturing, labor management, and marketing. His extensive knowledge in modern manufacturing techniques and cutting-edge equipment has been crucial in optimizing production efficiency. Rajiv’s leadership ensures the seamless integration of new technologies and innovations, maintaining the company’s commitment to delivering high-performance products to the market.' },
  { id: 3, name: 'Mr. Atul Sethi', image: Pic4, details: 'Atul Sethi, a proud alumnus of Michigan State University with a degree in Electrical Engineering, brings over 25 years of dynamic leadership and expertise to Kalinga Premium. His extensive experience spans across manufacturing and key strategic areas including finance, supply chain management, taxation, legal compliance, and quality assurance. Atul’s multifaceted knowledge and unwavering commitment to excellence have been instrumental in shaping Kalinga Premium’s success, ensuring the company remains at the forefront of innovation and industry standards.' },
  { id: 4, name: 'Mr. Kunal Sethi', image: Pic2, details: 'With a rich legacy of over 60 years in electrical solutions, Kunal Sethi now leads Kalinga Cables with a blend of energy and innovation. Having joined the family business at the age of 23, he has since driven the company’s vision forward. Armed with a degree in Operations Management from The Ohio State University, Kunal is dedicated to optimizing manufacturing processes and expanding Kalinga’s global footprint. His mission is to deliver high-quality power transmission and distribution solutions worldwide, contributing to a sustainable energy future for all.' }
];

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [open, setOpen] = useState(false);

  const handleShowMore = (member) => {
    setSelectedMember(member);
    setOpen(true); // Open the dialog
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedMember(null); // Reset the selected member
  };

  return (
    <div className='container'>
      <div className='aboutUs'>
        <video src={MainVideo} autoPlay loop muted></video>
        <div className='contents'>
          <h2><img src={HeadingIcon} alt="Heading Icon" /><span>About</span><span>us</span></h2>
          <p>For over six decades, our network of companies has been dedicated to delivering high-quality products and services across various industries. Kalinga Cables & Conduit Company specializes in manufacturing reliable PVC/XLPE insulated wires, cables, and conduits, serving domestic, commercial, and industrial markets. Our commitment to innovation ensures that we meet the evolving needs of electrical installations.</p>

          <p>Kalinga Premium focuses on providing safe and durable house wiring solutions, offering a complete range of products, including electrical meters and PVC tape, for comprehensive electrical setups.</p>

          <p>Expanding beyond the electrical industry, Kalinga Hotels & Resorts offers luxury accommodations in the heart of Manali, with beautiful villas and cottages for a perfect getaway. Additionally, Sahni Strips, under the brand Onwell®, leads in the production of high-performance cables, wires, and aluminum strips for diverse applications. Together, our companies uphold a tradition of quality and trust that has spanned generations.</p>
        </div>
      </div>
      <div className='ourTeams'>
        <h2><img src={HeadingIcon} alt="Heading Icon" /><span>Our</span><span>Timeline</span></h2>
      </div>
      <div className='history'>
        <div class="timeline">
          <div class="timeline-event">
            <div class="event-date">1947</div>
            <div class="event-icon">
              <img src={Historypic1} alt="Shri Bal Raj Sethi" />
            </div>
            <div class="event-description">Shri Bal Raj Sethi immigrates from Pindigheb.</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">1949</div>
            <div class="event-icon">
              <img src={Historypic2} alt="Royal Indian Navy Logo" />
            </div>
            <div class="event-description">Shri Bal Raj Sethi joins the Royal Indian Navy.</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">1959</div>
            <div class="event-icon"></div>
            <div class="event-description">After serving the Royal Indian Navy, settles in New Delhi with his budding family.</div>
          </div>
        </div>
      </div>
      <div className='history'>
        <div class="timeline">
          <div class="timeline-event">
            <div class="event-date">1960</div>
            <div class="event-icon">
              <img src={Historypic3} alt="Shri Bal Raj Sethi" />
            </div>
            <div class="event-description">Recognizes an opportunity in electrical trade and opens a retail outlet trading in all electrical goods.</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">1965</div>
            <div class="event-icon">
            </div>
            <div class="event-description">The trading outlet gains popularity due to immense hard work and fair pricing.<br /><br />The landmark shop is now recognized as Kalinga Chowk.</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">1975</div>
            <div class="event-icon">
              <img src={Historypic4} alt="Royal Indian Navy Logo" />
            </div>
            <div class="event-description">The second generation (Shri Sudhir Sethi & Shri Rajiv Sethi) initiate Kalinga’s first manufacturing facility for residential wires. </div>
          </div>
        </div>
      </div>
      <div className='history'>
        <div class="timeline">
          <div class="timeline-event">
            <div class="event-date">1985</div>
            <div class="event-icon">
            </div>
            <div class="event-description">Now a total of 3 manufacturing facilities.</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">1992</div>
            <div class="event-icon">
              <img src={Historypic5} alt="Shri Bal Raj Sethi" />
            </div>
            <div class="event-description">Diversified into the hospitality business industry.</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">1998</div>
            <div class="event-icon">
            </div>
            <div class="event-description">Acquisition of Sahni Strips Pvt. Ltd.</div>
          </div>
        </div>
      </div>
      <div className='history'>
        <div class="timeline">
          <div class="timeline-event">
            <div class="event-date">1999</div>
            <div class="event-icon">
              <img src={Historypic6} alt="Shri Bal Raj Sethi" />
            </div>
            <div class="event-description">Receives a prestigious order from World Bank clocking in a ₹50 crore turnover after the third generation (Shri Atul Sethi joins hands in the family business) </div>
          </div>
          <div class="timeline-event">
            <div class="event-date">2004</div>
            <div class="event-icon">
            </div>
            <div class="event-description">Establishment of Kalinga Cables & Conduit company while adding several new products & their offerings. </div>
          </div>
          <div class="timeline-event">
            <div class="event-date">2008</div>
            <div class="event-icon">
            </div>
            <div class="event-description">Establishment a new manufacturing facility in Baddi, Himachal Pradesh along with Shri Kunal Sethi joining the family business.</div>
          </div>
        </div>
      </div>
      <div className='history'>
        <div class="timeline">
          <div class="timeline-event">
            <div class="event-date">2014</div>
            <div class="event-icon">
            </div>
            <div class="event-description">Acquires a sizable land parcel in Shahpur, Rajasthan for further expansion.</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">2019</div>
            <div class="event-icon">
              <img src={Historypic7} alt="Shri Bal Raj Sethi" />
            </div>
            <div class="event-description">The company becomes synonymous with safety, security & saving in India.<br /><br />The company diversify their hospitality, electrical harness endeavours.</div>
          </div>
          <div class="timeline-event">
            <div class="event-date">2024</div>
            <div class="event-icon">
            </div>
            <div class="event-description">Lay foundation for manufacturing of HT cables with targets of supplying power cables upto 33kV.</div>
          </div>
        </div>
      </div>
      <div className='ourTeams'>
        <h2><img src={HeadingIcon} alt="Heading Icon" /><span>Meet our</span><span>team</span></h2>
        <div className='members'>
          {teamMembers.map((member) => (
            <div key={member.id} className='member'>
              <img src={member.image} alt={member.name} />
              <p>{member.name}</p>
              <Button variant="contained" color="primary" onClick={() => handleShowMore(member)}>
                Show More
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* MUI Dialog for showing member details */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle style={{ display: "flex", alignItems: "center" }}>
          <img src={selectedMember?.image} alt={selectedMember?.name} style={{ width: '100px', borderRadius: '10px' }} />
          {selectedMember?.name}
        </DialogTitle>
        <DialogContent>
          <p style={{ marginTop: '20px', fontSize: "14px" }}>{selectedMember?.details}</p>
        </DialogContent>
        <DialogActions>
          <IconButton aria-label="cross" style={{ position: "absolute", top: "8px" }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AboutUs;
