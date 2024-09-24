import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import NetworkPic1 from '../../Accets/networkPic1.png'
import NetworkPic2 from '../../Accets/networkPic2.png'
import NetworkPic3 from '../../Accets/networkPic3.png'
import NetworkPic4 from '../../Accets/networkPic4.png'

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
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered indicatorColor="secondary" >
            <Tab label="Kalinga Cables & Conduit Company" {...a11yProps(0)} />
            <Tab label="Kalinga Cable Company" {...a11yProps(1)} />
            <Tab label="Kalinga Hotels & Resorts" {...a11yProps(2)} />
            <Tab label="Sahni Strips" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className='aboutUs'>
            <img src={NetworkPic1} />
            <div className='contents' style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "flex-start" }}>
              <h2>Kalinga Cables & Conduit Company</h2>
              <p>Kalinga Cables & Conduit Company manufactures PVC/XLPE insulated wires and cables up to 3.3 kV voltage grade for domestic, commercial, industrial, and
                transmission/distribution applications, as well as rigid PVC conduits for electrical installations. Their production capacity ranges from 0.5 sq.mm to 1000 sq.mm for
                wires and cables, and from 20 mm to 50 mm for electrical conduits.</p>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <div className='aboutUs'>
            <img src={NetworkPic2} />
            <div className='contents' style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "flex-start" }}>
              <h2>Kalinga Cable Company</h2>
              <p>Kalinga Cable Company specializes in manufacturing high-quality PVC/XLPE insulated house wiring solutions designed for domestic, commercial, and industrial applications. Our range includes wires and cables with voltage grades up to 1.1 kV, tailored for safe and reliable electrical installations. We offer wire sizes from 0.5 sq.mm to 10 sq.mm, and provide comprehensive solutions with accessories such as electrical meters and premium PVC tapes to ensure secure, long-lasting installations.</p>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <div className='aboutUs'>
            <img src={NetworkPic3} />
            <div className='contents' style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "flex-start" }}>
              <h2>Kalinga Hotels & Resorts</h2>
              <p> Kalinga Hotels & Resorts offers a luxurious getaway in the serene landscapes of Manali, with a range of premium villas and cottages that blend modern comfort with natural beauty. Whether you're seeking a peaceful retreat or an adventurous mountain escape, our properties provide the perfect ambiance with elegant interiors, stunning views, and personalized services for a memorable stay.</p>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
        <div className='aboutUs'>
            <img src={NetworkPic4} />
            <div className='contents' style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "flex-start" }}>
              <h2>Sahni Strips</h2>
              <p>Sahni Strips, under the brand Onwell®, is a leading manufacturer of high-quality cables, wires, and aluminum strips. Our product range is designed for various industrial, commercial, and residential applications, ensuring durability and efficiency. With a commitment to excellence, Onwell® delivers superior electrical and aluminum solutions that meet the highest industry standards for performance and safety.</p>
            </div>
          </div>
        </CustomTabPanel>
      </Box>
    </div>
  );
}
