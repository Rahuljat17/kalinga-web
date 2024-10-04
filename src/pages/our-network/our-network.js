import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './our-network.css'

import Networkimage3 from '../../Accets/networkimage3.png'
import Networkimage2 from '../../Accets/networkimage2.png'
import Networkimage1 from '../../Accets/networkimage1.png'
import Networkimage4 from '../../Accets/networkimage4.png'
import Networkimage5 from '../../Accets/networkimage5.png'
import Networkimage6 from '../../Accets/networkimage6.png'
import Networkimage7 from '../../Accets/networkimage7.png'
import Networkimage8 from '../../Accets/networkimage8.png'
import Networkimage9 from '../../Accets/networkimage9.png'
import Networkimage10 from '../../Accets/networkimage10.png'
import Networkimage11 from '../../Accets/networkimage11.png'
import Networkimage12 from '../../Accets/networkimage12.png'


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='container'>
      <Box className="network-heading" sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 0, borderColor: '#C50568', overflowX: 'auto' }}>
          <Tabs
            className='tabPanel'
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            indicatorColor="secondary"
            textColor="black" // Optional: ensures text color stays black
          >
            <Tab label="Kalinga Cables & Conduit Company" sx={{ color: 'black' }} {...a11yProps(0)} />
            <Tab label="Kalinga Cable Company" sx={{ color: 'black' }} {...a11yProps(1)} />
            <Tab label="Kalinga Hotels & Resorts" sx={{ color: 'black' }} {...a11yProps(2)} />
            <Tab label="Sahni Strips Pvt. Ltd." sx={{ color: 'black' }} {...a11yProps(3)} />
          </Tabs>
        </Box>

        <CustomTabPanel value={value} index={0}>
          <div className='our-network'>
            <img src={Networkimage3} className='img-lg' />
            <div className='img-sm'>
              <img src={Networkimage2} />
              <img src={Networkimage1} />
            </div>
            <h3>Kalinga Cables & Conduit Company</h3>
            <p>Kalinga Cables & Conduit Company manufactures PVC/XLPE insulated wires and cables up to 33 kV voltage grade for domestic, commercial, industrial, and transmission/distribution applications, as well as rigid PVC conduits for electrical installations. Their production capacity ranges from 0.5 sq.mm to 1000 sq.mm for wires and cables, and from 20 mm to 50 mm for electrical conduits.</p>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className='our-network'>
            <img src={Networkimage4} className='img-lg' />
            <div className='img-sm'>
              <img src={Networkimage5} />
              <img src={Networkimage6} />
            </div>
            <h3>Kalinga Cable Company</h3>
            <p>Kalinga Cable Company specializes in manufacturing high-quality PVC/XLPE insulated house wiring solutions designed for domestic, commercial, and industrial applications. Our range includes wires and cables with voltage grades up to 1.1 kV, tailored for safe and reliable electrical installations. We offer wire sizes from 0.5 sq.mm to 10 sq.mm, and provide comprehensive solutions with accessories such as electrical meters and premium PVC tapes to ensure secure, long-lasting installations.</p>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className='our-network'>
            <img src={Networkimage7} className='img-lg' />
            <div className='img-sm'>
              <img src={Networkimage8} />
              <img src={Networkimage9} />
            </div>
            <h3>Kalinga Hotels & Resorts</h3>
            <p>Kalinga Hotels & Resorts offers a luxurious getaway in the serene landscapes of Manali, with a range of premium villas and cottages that blend modern comfort with natural beauty. Whether you're seeking a peaceful retreat or an adventurous mountain escape, our properties provide the perfect ambiance with elegant interiors, stunning views, and personalized services for a memorable stay.</p>
            <p style={{ textAlign: "left" }}>
              Our properties consist of:
              <ul>
                <li>Hotel Kalinga Intercontinental (NH 21, Manali)</li>
                <li>Hotel Kalinga Grand (Kanyal Road, Manali)</li>
                <li>Royal Kalinga Cottages (Manali)</li>
                <li>Kalinga Premium Villas (Manali)</li>
                <li>Hotel Palm Grand (Naraina Vihar, New Delhi)</li>
              </ul>
            </p>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <div className='our-network'>
            <img src={Networkimage10} className='img-lg' />
            <div className='img-sm'>
              <img src={Networkimage11} />
              <img src={Networkimage12} />
            </div>
            <h3>Sahni Strips Pvt. Ltd.</h3>
            <p>Sahni Strips Pvt. Ltd., under the brand Onwell®, is a leading manufacturer of high-quality cables, wires, and aluminum strips. Our product range is designed for various industrial, commercial, and residential applications, ensuring durability and efficiency. With a commitment to excellence, Onwell® delivers superior electrical and aluminum solutions that meet the highest industry standards for performance and safety.</p>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
