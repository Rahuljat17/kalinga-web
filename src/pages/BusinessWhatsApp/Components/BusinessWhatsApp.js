import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "../../../router/styles/drawer.css";
import "./style.css";
import { MdContacts } from "react-icons/md";
import { IoArrowRedo } from "react-icons/io5";
import { LuPenSquare } from "react-icons/lu";
import { Link } from 'react-router-dom';
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Button, IconButton, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Input from '@mui/joy/Input';
import Search from '@mui/icons-material/Search';
import Report from "../../../Accets/reportwp.png";
import Profile from "../../../Accets/cont.png";
import Mess from "../../../Accets/mes.png";
import Chat from "../../../Accets/chat.png";
import Expo from "../../../Accets/expo.png";
import Api from "../../../Accets/api.png";
import Contact from "../../../Accets/contasss.png";
import PROFILELOGO2 from "../../../Accets/profile logo2.png";
import PARTICIPATLOGO2 from "../../../Accets/paticipat logo2.png";
import Chat2 from "../../../Accets/chat2.png";
import Chat3 from "../../../Accets/chat3.png";
import robotLogo from "../../../Accets/robot image1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import cardlogo from "../../../Accets/card logo1.png";
import NSWHATLOGO3 from "../../../Accets/sns logo1.png";
import CARDLOGO5 from "../../../Accets/card logo5.png";
import CARDLOGO6 from "../../../Accets/Card logo 6.png";
import { LuPlusSquare } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import BULKMESSAGELOGO from "../../../Accets/bulk message logo1.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import BULKLOGO2 from "../../../Accets/bulk logo2.png";
import BULKLOGO3 from "../../../Accets/sns logo1.png";
import LOGO3 from "../../../Accets/card logo5 2.png";
import LOGO7 from "../../../Accets/logo7.png";
import CONTACTIMAGE1 from "../../../Accets/Contact image1.png";
import { FaRegPenToSquare } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiBarChartLine } from "react-icons/ri";
import { Card, Divider, Grid } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';


// table mui

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// MUI icons
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import SubjectRoundedIcon from '@mui/icons-material/SubjectRounded';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import DataObjectOutlinedIcon from '@mui/icons-material/DataObjectOutlined';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; 
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';


import { FaWhatsapp } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const rows = [
  { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "transparent" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor:
      theme.palette.mode === "light"
        ? "#9747FF"
        : "linear-gradient(89.97deg, #9747FF 1.43%, rgba(56, 182, 255, 0.33) 134.69%)",
  },
}));
const drawerWidth = 280;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: "60px 150px 0px 10px" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function a11yPropsInner(index) {
  return {
    id: `nested-tab-${index}`,
    "aria-controls": `nested-tabpanel-${index}`,
  };
}

export default function PermanentDrawerLeft(props) {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [modalopen, modalsetOpen] = React.useState(false);
  const [selectedMainFeature, setSelectedMainFeature] =React.useState(null);
  const [selectedSubFeature, setSelectedSubFeature] = React.useState(null);

  const handleChange = (event, newValue) => {
    setSelectedMainFeature(newValue);
    setSelectedSubFeature(newValue);
  };

  const handleClickOpen = () => {
    modalsetOpen(true);
  };

  const handleClose = () => {
    modalsetOpen(false);
  };

  const profiles = [
    {
      id: 1,
      name: "Saswat Kumar",
      imgSrc: "https://media.licdn.com/dms/image/D4D03AQFXcs4yKfXr3g/profile-displayphoto-shrink_200_200/0/1682431817314?e=2147483647&v=beta&t=RSyjn-bJy9WkNR-cImc5M0WaGIl5yLvp6RzWXS8JU6c",
    },
    {
      id: 2,
      name: "Suman Kumar Pradhan",
      imgSrc: "https://media.licdn.com/dms/image/v2/D5603AQHkGrxPlJ6iTg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1712164662749?e=1730937600&v=beta&t=WEUoDHtDuDEXyO06o9gJaiBa8nRV86LxkFPKzZX8Ss0",
    },
    {
      id: 2,
      name: "Manas Ranjan Jena",
      imgSrc: "https://media.licdn.com/dms/image/v2/D5635AQEYLOSs-JUTWA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1723920932906?e=1726059600&v=beta&t=sxV6fSLzbPAxNhC6tPRnDlg_A9Aq-yeaYpjbXck8tL8",
    },
    {
      id: 2,
      name: "Rasmiranjan Mohanty",
      imgSrc: "https://media.licdn.com/dms/image/v2/D4D03AQE7afe8OWAyLg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1720514181701?e=1730937600&v=beta&t=HQCHN3mI5N5wAptrmGgqWWEHxuYPNmT_CJ48VmxaZ00",
    },
    {
      id: 2,
      name: "Fakir Nayak",
      imgSrc: "https://media.licdn.com/dms/image/v2/D5603AQECdvMkOiET4Q/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1690916716124?e=1730937600&v=beta&t=jnYZsUXmQzwvaXygtWqZ0tjdYlob22vR9o-EJhXeLl0",
    },
    {
      id: 2,
      name: "Simanchala Sethi",
      imgSrc: "https://media.licdn.com/dms/image/v2/D5603AQFhdxRBrhBfmg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720249193804?e=1730937600&v=beta&t=OMF5WR19b6OV2RIADlcHk3FU9ixS1O_Vh-ZnmYPjnBs",
    },


  ];

  const mainFeatures = [
    {
      label: 'Compose WA',
      icon: <DataObjectOutlinedIcon sx={{
        height: '35px',
        width: '35px',
        backgroundColor: '#42AAFF',
        color: 'white',
        borderRadius: '10px',
        padding: '5px',
        marginBottom:"0px !important",
      }} />,
      subFeatures: [
        { icon: <DataObjectOutlinedIcon />, label: 'Dashboard' },
        { icon: <DataObjectOutlinedIcon />, label: 'Compose Single WA' },
        { icon: <DataObjectOutlinedIcon />, label: 'Compose Group WA' },
        { icon: <DataObjectOutlinedIcon />, label: 'Compose Dynamic WA' },
        { icon: <DataObjectOutlinedIcon />, label: 'Compose Retargeting WA' },
        { icon: <DataObjectOutlinedIcon />, label: 'Compose Dynamic PDF WA' },
        { icon: <DataObjectOutlinedIcon />, label: 'Compose Single Catalog WA' },
      ]
    },
    {
      label: 'Group WA',
      icon: <AssessmentOutlinedIcon sx={{
        height: '35px',
        width: '35px',
        backgroundColor: '#42AAFF',
        color: 'white',
        borderRadius: '10px',
        padding: '5px',
        marginBottom:"0px !important",
      }} />,
      subFeatures: [
        { icon: <AssessmentOutlinedIcon />, label: 'Create Group' },
        { icon: <AssessmentOutlinedIcon />, label: 'Add Contacts To Group' },
        { icon: <AssessmentOutlinedIcon />, label: 'Manage Groups' },
        { icon: <AssessmentOutlinedIcon />, label: 'Number existence in Group'}
      ]
    },  
    {
      label: 'Template WA',
      icon: <DescriptionOutlinedIcon sx={{
        height: '35px',
        width: '35px',
        backgroundColor: '#42AAFF',
        color: 'white',
        borderRadius: '10px',
        padding: '5px',
        marginBottom:"0px !important",
      }} />,
      subFeatures: [
        { icon: <DescriptionOutlinedIcon />, label: 'Add WA Templates' },
        { icon: <DescriptionOutlinedIcon />, label: 'Manage WA Templates' }
      ]
    },  
    {
      label: 'Catalog',
      icon: <SaveAsOutlinedIcon sx={{
        height: '35px',
        width: '35px',
        backgroundColor: '#42AAFF',
        color: 'white',
        borderRadius: '10px',
        padding: '5px',
        marginBottom:"0px !important",
      }} />,
      subFeatures: [
        { icon: <SaveAsOutlinedIcon />, label: 'Add Product' },
        { icon: <SaveAsOutlinedIcon />, label: 'Manage Products' },
        { icon: <SaveAsOutlinedIcon />, label: 'View Orders' },
      ]
    },
    {
      label: 'Bot Auto Responders',
      icon: <DataObjectOutlinedIcon sx={{
        height: '35px',
        width: '35px',
        backgroundColor: '#42AAFF',
        color: 'white',
        borderRadius: '10px',
        padding: '5px',
        marginBottom:"0px !important",
      }} />,
      subFeatures: [
        { icon: <DataObjectOutlinedIcon />, label: 'Add Bot Responders' },
        { icon: <DataObjectOutlinedIcon />, label: 'Manage Bot Responders' },
        { icon: <DataObjectOutlinedIcon />, label: 'Add Catalog Responders' },
        { icon: <DataObjectOutlinedIcon />, label: 'Manage Catalog Responders' }
      ]
    },
    {
      label: 'Live Chat',
      icon: <GroupsRoundedIcon style={{
                height: "35px",
                width: "35px",
                marginBottom: "0px",
                backgroundColor: "#42AAFF",
                color: "white",
                padding: "5px",
                borderRadius: "10px",
              }} />,
      subFeatures: [
        { icon: <DataObjectOutlinedIcon />, label: 'Chat Dashboard' },
        { icon: <DataObjectOutlinedIcon />, label: 'Add Agent' },
        { icon: <DataObjectOutlinedIcon />, label: 'Manage Agent' }
      ]
    },
    // {
    //   label: 'Add Agent',
    //   icon: <ChevronRightIcon sx={{
    //     height: '35px',
    //     width: '35px',
    //     color: '#42AAFF',
    //     marginTop:"0px",
    //     marginBottom:"0px !important",
    //   }} />,
    //   subFeatures: [
       
    //   ]
    // },
    // {
    //   label: 'Manage Agents',
    //   icon: <ChevronRightIcon sx={{
    //     height: '35px',
    //     width: '35px',
    //     color: '#42AAFF',
    //     marginBottom:"0px !important",
    //   }} />,
    //   subFeatures: [
    //   ]
    // },
    {
      label: 'WA Report',
      icon: <SmartToyOutlinedIcon sx={{
        height: '35px',
        width: '35px',
        backgroundColor: '#42AAFF',
        color: 'white',
        borderRadius: '10px',
        padding: '5px',
        marginBottom:"0px !important",
      }} />,
      subFeatures: [
        { icon: <SmartToyOutlinedIcon />, label: 'WA Incoming Replying Report' },
        { icon: <SmartToyOutlinedIcon />, label: 'WA Replies Excel Download' },
        { icon: <SmartToyOutlinedIcon />, label: 'WA Sent Reports' },
        { icon: <SmartToyOutlinedIcon />, label: 'WA Sent Reports Excel Download' },
      ]
    },
    {
      label: 'WA API',
      icon: <DataObjectOutlinedIcon sx={{
        height: '35px',
        width: '35px',
        backgroundColor: '#42AAFF',
        color: 'white',
        borderRadius: '10px',
        padding: '5px',
        marginBottom:"0px !important",
      }} />,
      subFeatures: [
        { icon: <DataObjectOutlinedIcon />, label: 'HTTP WA API' }
      ]
    }
  ];

  const handleMainFeatureClick = (index) => {
    // Check if the selected main feature has sub-features
    if (mainFeatures[index].subFeatures.length > 0) {
      setSelectedMainFeature(index);
      setSelectedSubFeature(null); // Reset sub-feature selection when selecting a new main feature
    } else {
      // No sub-features: Keep the sidebar static
      setSelectedMainFeature(null);
    }
  };

  const handleSubFeatureClick = (subFeature) => {
    setSelectedSubFeature(subFeature);
    // Handle the selected sub-feature logic here
  };

  const handleBackClick = () => {
    setSelectedMainFeature(null);
    setSelectedSubFeature(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
    <Drawer
      sx={{
        width: drawerWidth,
        zIndex: "10000",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        "&.MuiDrawer-root .MuiDrawer-paper": {
          marginLeft: "109px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        {selectedMainFeature === null ? (
          <>
            <Typography
              style={{
                margin: "20px 0px 0px",
                textAlign: "center",
                fontWeight: 500,
                fontSize: "22px",
                color: "#07ba39",
              }}
            >
              <img
                src="https://cdn.iconscout.com/icon/free/png-256/free-whatsapp-business-logo-icon-download-in-svg-png-gif-file-formats--technology-brand-social-media-company-logos-pack-icons-6297350.png?f=webp&h=112"
                style={{ width: "28px", margin: "20px 10px -5px 0" }}
                alt="Logo"
              />
              Business WhatsApp
            </Typography>
            <Typography
              style={{
                margin: "40px 0px 0px 15px",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Features
            </Typography>
            <List className="drawer2-animation">
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  height: "100%",
                  flexDirection: "column",
                }}
              >
                <Tabs
                  orientation="vertical"
                  onChange={handleChange}
                  sx={{ width: "263px" }}
                  value={selectedMainFeature !== null ? selectedMainFeature : 0} 
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {mainFeatures.map((feature, index) => (
                    <Tab
                      key={index}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        gap: "20px",
                        backgroundColor: selectedMainFeature === index ? "#dcdcdc" : "transparent", // Use the index comparison here
                        color: "#121212",
                        borderRadius: "28px",
                        margin: "0px 8px 15px 15px",
                        textTransform: "capitalize",
                        // opacity: 0.7,
                        fontSize: "15px",
                        textAlign: "center",
                        minHeight: value === 0 ? "20px" : "10px", // Adjust minHeight instead of height
                        alignItems: "center", // Align content vertically
                      }}
                      icon={feature.icon}
                      label={feature.label}
                      onClick={() => handleMainFeatureClick(index)}
                      {...a11yProps(index)} // Accessibility props for Tabs
                    />


                  //   <Tab
                  //   sx={{
                  //     display: "flex",
                  //     flexDirection: "row",
                  //     justifyContent: "flex-start",
                  //     gap: "20px",
                  //     backgroundColor: value === 0 ? "#eeeeee" : "transparent",
                  //     color: "#121212",
                  //     borderRadius: "28px",
                  //     margin: "0px 8px 15px 15px",
                  //     textTransform: "capitalize",
                  //     // opacity: 0.7,
                  //     fontSize: "15px",
                  //     textAlign: "center",
                  //     minHeight: value === 0 ? "20px" : "10px", // Adjust minHeight instead of height
                  //     alignItems: "center", // Align content vertically
                  //   }}
                  //   icon={
                  //     <ChevronRightIcon
                  //       style={{
                  //         height: "35px",
                  //         width: "35px",
                  //         marginBottom: "0px",
                  //         backgroundColor: "#42AAFF",
                  //         color: "white",
                  //         padding: "5px",
                  //         borderRadius: "10px",
                  //       }}
                  //     />
                  //   }
                  //   label="Send SMS"
                  //   style={{ color: "#242424" }}
                  //   {...a11yProps(0)}
                  // ></Tab>
                  ))}
                </Tabs>
              </Box>
            </List>
          </>
        ) : (
          <Box sx={{ padding: 2 }}>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
           <div style={{
                marginBottom: '10px',
                width:"16px",
                height:"28px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}>
           <Button
              onClick={handleBackClick}
            >
              < ChevronLeftIcon/>
            </Button>
           </div>
            <Typography
              variant="h6"
              sx={{
                marginBottom: '10px',
                fontWeight: 'bold',
              }}
            >
              {mainFeatures[selectedMainFeature].label}
            </Typography>
            </div>
            <Typography
              style={{
                margin: "20px 0px 20px 15px",
                fontWeight: 500,
                fontSize: "18px",
              }}
            >
              Features
            </Typography>
            {mainFeatures[selectedMainFeature].subFeatures.map((subFeature, index) => (
              <Box key={index} sx={{ display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                gap: '20px',
                backgroundColor: selectedSubFeature === index ? "#dcdcdc" : "transparent", // Use the index comparison here
                color: '#121212',
                borderRadius: '28px',
                margin: '0px 0px 15px 0px',
                padding:"9px 16px",
                textTransform: 'capitalize',
                fontSize: '15px',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                }, }}>
                <Box sx={{
                  height: '35px',
                  width: '35px',
                  backgroundColor: '#42AAFF',
                  color: 'white',
                  borderRadius: '10px',
                  padding:"9px 16px",
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {subFeature.icon}
                </Box>
                <Typography
                  sx={{
                    cursor: 'pointer',
                    fontWeight: selectedSubFeature === subFeature.label ? 'bold' : 'normal',
                  }}
                  onClick={() => handleSubFeatureClick(subFeature.label)}
                  {...a11yProps(index)} 
                >
                  {subFeature.label}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>
    </Drawer>

      <Box style={{ backgroundColor: "white" }}>
      {selectedMainFeature === null && (
    // Default TabPanel content for index 0 when nothing is selected
    


    <></>
       )}
          {selectedMainFeature === 'Add Agent' && (
              <TabPanel value={selectedMainFeature} index={1}>
              <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                      Add Agent
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    <div className='seacrch-input'>
                      <Button variant="contained" style={{ backgroundColor: "#42aaff" }} onClick={handleClickOpen}>
                        Add New Agent
                      </Button>
                      <Dialog
                        open={modalopen}
                        TransitionComponent={Transition}
                        style={{ zIndex: "10000" }}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        z
                      >
                        <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "3%",
                            // margin: "15px",
                          }}
                        >
                          <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, rgba(114, 177, 233, 0.5), rgba(189, 135, 213, 0.5))", borderRadius: "30px", margin: "0" }}>
                            <Grid
                              style={{
                                padding: "30px",
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography
                                  style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: "22px",
                                    marginBottom: "20px",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Add New Agent
                                </Typography>
                                <Button onClick={handleClose} style={{ height: "38px", color: "white" }}><CloseIcon /></Button>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Agent Id
                              </Typography>
                              <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Type
                              </Typography>
                              <select className="inputstyle2">
                                <option>Select ...</option>
                                <option>image</option>
                                <option>video</option>
                                <option>document</option>
                              </select>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Purpose
                              </Typography>
                              <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                DLT-Entry ID
                              </Typography>
                              <input type="number" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                              <div style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{ maxWidth: "200px", marginTop: "20px", padding: "7px 30px", backgroundColor: "#42aaff" }}>Submit</button>
                              </div>
                            </Grid>
                          </Card>
                        </Grid>
                      </Dialog>
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Agent Id</StyledTableCell>
                            <StyledTableCell align="center">Purpose</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>
                            <StyledTableCell align="center">status</StyledTableCell>
                            <StyledTableCell align="center">Remark</StyledTableCell>
                            <StyledTableCell align="center">DLT-Entity ID</StyledTableCell>
                            <StyledTableCell align="center">Created Date</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p className="message-status">Approved</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
              </TabPanel>
            )}

          {selectedMainFeature=== 'Manage Agents' && (
            <TabPanel value={selectedMainFeature} index={2}>
            <Grid
              style={{ height: "100vh", width: "70vw" }}
            >
              <Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    padding: "30px 20px 20px 20px ",
                  }}
                >
                  <Typography
                    style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                  >
                    Manage Agent
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 10,
                    padding: "20px 20px 10px 20px ",
                  }}>
                  <div className='seacrch-input'>
                    <Input
                      variant="soft"
                      placeholder="Search"
                      type="email"
                      name="email"
                      className='seacrch-input'
                      endDecorator={
                        <IconButton variant="soft" color="primary" aria-label="subscribe">
                          <Search />
                        </IconButton>
                      }
                      sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                    />
                  </div>
                  <div className='seacrch-input'>
                    <Dialog
                      open={modalopen}
                      TransitionComponent={Transition}
                      style={{ zIndex: "10000" }}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description"
                      z
                    >
                      <Grid
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          // margin: "15px",
                        }}
                      >
                        <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, rgba(114, 177, 233, 0.5), rgba(189, 135, 213, 0.5))", borderRadius: "30px", margin: "0" }}>
                          <Grid
                            style={{
                              padding: "30px",
                            }}
                          >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 700,
                                  fontSize: "22px",
                                  marginBottom: "20px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Add New Agent
                              </Typography>
                              <Button onClick={handleClose} style={{ height: "38px", color: "white" }}><CloseIcon /></Button>
                            </div>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Agent Id
                            </Typography>
                            <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Type
                            </Typography>
                            <select className="inputstyle2">
                              <option>Select ...</option>
                              <option>image</option>
                              <option>video</option>
                              <option>document</option>
                            </select>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Purpose
                            </Typography>
                            <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              DLT-Entry ID
                            </Typography>
                            <input type="number" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "200px", marginTop: "20px", padding: "7px 30px", backgroundColor: "#42aaff" }}>Submit</button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                    </Dialog>
                  </div>
                </Grid>
                <Grid
                  style={{
                    padding: "20px",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>S. No</StyledTableCell>
                          <StyledTableCell align="center">Agent Id</StyledTableCell>
                          <StyledTableCell align="center">Purpose</StyledTableCell>
                          <StyledTableCell align="center">Type</StyledTableCell>
                          <StyledTableCell align="center">status</StyledTableCell>
                          <StyledTableCell align="center">Remark</StyledTableCell>
                          <StyledTableCell align="center">DLT-Entity ID</StyledTableCell>
                          <StyledTableCell align="center">Created Date</StyledTableCell>
                          <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, index) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.calories}</StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                              <p className="message-status">Approved</p>
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center">
                              <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Grid>
            </TabPanel>
          )}
     
      {selectedMainFeature !== null && (
      <TabPanel value={selectedMainFeature} index={selectedMainFeature}>
      {/* Render content based on selected subfeature */}
      {mainFeatures[selectedMainFeature].subFeatures.map((subFeature, index) => {
        console.log('SubFeature Index:', subFeature); 
        console.log('SubFeature Index:', subFeature); 
        return (selectedSubFeature === subFeature.label && (
        
          <Box key={index} sx={{ padding: 2 }}>
            {
               subFeature.label === 'Live Chat' && (
                <TabPanel value={selectedSubFeature} index="Live Chat">
           <Grid style={{ height: "100vh", width: "70vw" }}>
          <Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 15,
                padding: "30px 20px 20px 20px ",
                alignItems: "center", // Center align items vertically
              }}
            >
              <img src={Chat3} // Add your icon here
                style={{
                  height: "32px",
                  width: "32px",
                  marginBottom: "0px",
                }} alt='chat' // Adjust size and color
              />
              <Typography
                style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
              >
                Live Chat
              </Typography>
            </Grid>
            <Grid
              style={{
                padding: "5px 20px",
              }}
            >
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center", // Align items vertically
                  gap: 10,
                }}
              >
                <div className='seacrch-input' style={{ width: "100%" }}>
                  <Input
                    variant="soft"
                    placeholder="Search"
                    type="email"
                    name="email"
                    className='seacrch-input'
                    endDecorator={
                      <IconButton variant="soft" color="primary" aria-label="subscribe">
                        <Search />
                      </IconButton>
                    }
                    sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                    style={{ width: "100%" }} // Ensure input box covers the width
                  />
                </div>
               
              </Grid>
              <Grid style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
              <Typography
                style={{ fontSize: "16px", fontWeight: 700, textAlign: "left", width: "100%", marginTop: "30px" }}
              >
                DIRECT MESSAGE
              </Typography>
              <IconButton
                   sx={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: '#FFF', 
                    color: '#42AAFF',
                    borderRadius:"0PX",
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
                  }}
                >
                  <AddIcon style={{ color: '#42AAFF' }} />
                </IconButton>
              </Grid>
              <hr />
              <Grid
                className="chat-animation"
                style={{
                  display: "flex",
                }}
              >
                <Grid
                  style={{
                    width: "300px",
                  }}
                >
                  {profiles.map((profile) => (
                    <div key={profile.id} className="chat-profile">
                      <img src={profile.imgSrc} alt={profile.name} />
                      <p>{profile.name}</p>
                    </div>
                  ))}
                </Grid>
                <Grid
                  style={{
                    width: "100%",
                    backgroundColor: "rgb(239, 239, 239)",
                    marginTop: "-8px",
                    display: "flex",
                    flexDirection:"column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={Chat3} // Add your icon here
                    style={{
                      height: "60px",
                      width: "60px",
                      marginBottom: "15px",
                    }}
                  />
                  <Button variant="contained" style={{ backgroundColor: "#42aaff" }}>
                  Tap on a Contact To Chat
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
                </TabPanel>
              )
            }
         
           
           {selectedSubFeature === 'Create Group' && (
              <TabPanel value={selectedSubFeature} index='Create Group'>
              <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                      Create Group
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    <div className='seacrch-input'>
                      <Button variant="contained" style={{ backgroundColor: "#42aaff" }} onClick={handleClickOpen}>
                         Create New Group
                      </Button>
                      <Dialog
                        open={modalopen}
                        TransitionComponent={Transition}
                        style={{ zIndex: "10000" }}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        z
                      >
                        <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "3%",
                            // margin: "15px",
                          }}
                        >
                          <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, rgba(114, 177, 233, 0.5), rgba(189, 135, 213, 0.5))", borderRadius: "30px", margin: "0" }}>
                            <Grid
                              style={{
                                padding: "30px",
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography
                                  style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: "22px",
                                    marginBottom: "20px",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Create Group
                                </Typography>
                                <Button onClick={handleClose} style={{ height: "38px", color: "white" }}><CloseIcon /></Button>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Group Name
                              </Typography>
                              <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />

                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Group Description
                              </Typography>
                              <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                              <div style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{ maxWidth: "200px", marginTop: "20px", padding: "7px 30px", backgroundColor: "#42aaff" }}>Create Group</button>
                              </div>
                            </Grid>
                          </Card>
                        </Grid>
                      </Dialog>
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Group Id</StyledTableCell>
                            <StyledTableCell align="center">Purpose</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>
                            <StyledTableCell align="center">status</StyledTableCell>
                            <StyledTableCell align="center">Remark</StyledTableCell>
                            <StyledTableCell align="center">DLT-Entity ID</StyledTableCell>
                            <StyledTableCell align="center">Created Date</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p className="message-status">Approved</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
              </TabPanel>
            )}
             {selectedSubFeature === 'Add Contacts To Group' && (
              <TabPanel value={selectedSubFeature} index='Add Contacts To Group'>
              <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                      Add Contacts to Group
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    <div className='seacrch-input'>
                      <Button variant="contained" style={{ backgroundColor: "#42aaff" }} onClick={handleClickOpen}>
                         <AddIcon style={{marginRight:"5px"}}/>Excel Upload
                      </Button>
                      <Dialog
                        open={modalopen}
                        TransitionComponent={Transition}
                        style={{ zIndex: "10000", width:"400px", marginLeft:"40%" }}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        z
                      >
                        <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "3%",
                            // margin: "15px",
                          }}
                        >
                          <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, rgba(114, 177, 233, 0.5), rgba(189, 135, 213, 0.5))", borderRadius: "30px", margin: "0" }}>
                            <Grid
                              style={{
                                padding: "30px",
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                             
                                <Button onClick={handleClose} style={{ height: "38px", color: "white",marginLeft:"200px" }}><CloseIcon /></Button>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                  display:"flex",
                                  justifyContent:"center"
                                }}
                              >
                                Group Added Successfully
                              </Typography>
                             
                              <div style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{ maxWidth: "200px", marginTop: "20px", padding: "7px 30px", backgroundColor: "#42aaff" }}>ok</button>
                              </div>
                            </Grid>
                          </Card>
                        </Grid>
                      </Dialog>
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Group Id</StyledTableCell>
                            <StyledTableCell align="center">Group Name</StyledTableCell>
                            <StyledTableCell align="center">Org-Name</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">Hindon Group</StyledTableCell>
                              <StyledTableCell align="center">HyperNxt Technology</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p className="message-status">Add</p>
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
              </TabPanel>
               )}
             {selectedSubFeature === 'Manage Groups' && (
              <TabPanel value={selectedSubFeature} index='Manage Groups'>
              <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                      Manage Groups
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    <div className='seacrch-input'>
                      
                      <Dialog
                        open={modalopen}
                        TransitionComponent={Transition}
                        style={{ zIndex: "10000", width:"400px", marginLeft:"40%" }}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        z
                      >
                        <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "3%",
                            // margin: "15px",
                          }}
                        >
                          <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, rgba(114, 177, 233, 0.5), rgba(189, 135, 213, 0.5))", borderRadius: "30px", margin: "0" }}>
                            <Grid
                              style={{
                                padding: "30px",
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                             
                                <Button onClick={handleClose} style={{ height: "38px", color: "white",marginLeft:"200px" }}><CloseIcon /></Button>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                  display:"flex",
                                  justifyContent:"center"
                                }}
                              >
                                Group Deleted Successfully
                              </Typography>
                             
                              <div style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{ maxWidth: "200px", marginTop: "20px", padding: "7px 30px", backgroundColor: "#42aaff" }}>ok</button>
                              </div>
                            </Grid>
                          </Card>
                        </Grid>
                      </Dialog>
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Group Id</StyledTableCell>
                            <StyledTableCell align="center">Group Name</StyledTableCell>
                            <StyledTableCell align="center">Org-Name</StyledTableCell>
                            <StyledTableCell align="center">Numbers in Group</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">Hindon Group</StyledTableCell>
                              <StyledTableCell align="center">HyperNxt Technology</StyledTableCell>
                              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p className="message-status" style={{backgroundColor:"#D53E3E"}}>Delete</p>
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
              </TabPanel>
               )}
             {selectedSubFeature === 'Number existence in Group' && (
              <TabPanel value={selectedSubFeature} index='Number existence in Group'>
              <Grid
            style={{ height: "100vh", width: "70vw" }}
          >
            <Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: "5px 20px 0px 20px ",
                }}
              >
                <Typography
                  style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                >
                 Check If Number Exists In Group
                </Typography>
              </Grid>
              <Grid
                className="box-animation"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "3%",
                  margin: "15px",
                }}
              >
                <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)", borderRadius: "30px" }}>
                  <Grid
                    style={{
                      padding: "30px",
                    }}
                  >

                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                     Select Group Name
                    </Typography>
                    <select className="inputstyle2">
                      <option>Select ...</option>
                      <option>Hindon Group</option>
                      <option>Idsol Group</option>
                    </select>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Enter the Number to be Checked:
                    </Typography>
                    <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
                    <span style={{ color: "white", fontSize: "18px", marginLeft: "10px",position:"absolute" }}>
                      +91
                    </span>
                    <span style={{ borderLeft: "1px solid white", height: "40px", marginLeft: "45px", position:"absolute" }}></span>
                    <input
                      type="number"
                      style={{
                        flexGrow: 1,
                        backgroundColor: "transparent",
                        border: "1px solid white",
                        borderRadius: "30px",
                        height: "40px",
                        fontSize: "18px",
                        margin: "10px 0px",
                        padding: "0px 60px",
                        color: "white",
                        outline: "none",
                      }}
                    />
                  </div>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button style={{ maxWidth: "200px", marginTop: "20px",backgroundColor:"#42AAFF",borderRadius:"12px" }}>Check</button>
                  </div>
      </Grid>
    </Card>
  </Grid>
</Grid>
  </Grid>
              </TabPanel>
             )}
             {selectedSubFeature === 'Add WA Templates' && (
              <TabPanel value={selectedSubFeature} index='Add WA Templates'>
              <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                     Add WA Template
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    <div className='seacrch-input'>
                      <Button variant="contained" style={{ backgroundColor: "#42aaff" }} onClick={handleClickOpen}>
                      Create  New Template
                      </Button>
                      <Dialog
                        open={modalopen}
                        TransitionComponent={Transition}
                        style={{ zIndex: "10000" }}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        z
                      >
                        <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "3%",
                            // margin: "15px",
                          }}
                        >
                          <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, rgba(114, 177, 233, 0.5), rgba(189, 135, 213, 0.5))", borderRadius: "30px", margin: "0" }}>
                            <Grid
                              style={{
                                padding: "30px",
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography
                                  style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: "22px",
                                    marginBottom: "20px",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Add WA Template
                                </Typography>
                                <Button onClick={handleClose} style={{ height: "38px", color: "white" }}><CloseIcon /></Button>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Template Name
                              </Typography>
                              <input type="text"  style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Ex: hello_world" />
                              <p className="templatepara">Note: Template Name should be unique and contain only lowercase and underscore</p>
                              <div style={{display:"flex",gap:"20px"}}>
                                <div>
                                <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Language
                              </Typography>
                              <select className="inputstyle2" style={{width:"250px"}}>
                                <option>Select ...</option>
                                <option>English(US)</option>
                                <option>English(UK)</option>
                              </select>
                                </div>
                                <div>
                                <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Category
                              </Typography>
                              <select className="inputstyle2" style={{width:"250px"}}>
                                <option>Select ...</option>
                                <option>Utility</option>
                                <option>Utility</option>
                              </select>
                                </div>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Template Type
                              </Typography>
                              <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Template Message
                              </Typography>
                              <textarea placeholder="Example Template : Thank You for registration. Welcome to {{1}}. Your login details username:'.{{2}}, Password: {{3}}" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                              <div style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{ maxWidth: "200px", marginTop: "20px", padding: "7px 30px", backgroundColor: "#42aaff" }}>Create Group</button>
                              </div>
                            </Grid>
                          </Card>
                        </Grid>
                      </Dialog>
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Template Id</StyledTableCell>
                            <StyledTableCell align="center">Purpose</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>
                            <StyledTableCell align="center">status</StyledTableCell>
                            <StyledTableCell align="center">Remark</StyledTableCell>
                            <StyledTableCell align="center">DLT-Entity ID</StyledTableCell>
                            <StyledTableCell align="center">Created Date</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p className="message-status">Approved</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
              </TabPanel>
            )}
             {selectedSubFeature === 'Manage WA Templates' && (
              <TabPanel value={selectedSubFeature} index='Manage WA Templates'>
              <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                     Manage WA Templates
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Template Id/Error</StyledTableCell>
                            <StyledTableCell align="center">Purpose</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>
                            <StyledTableCell align="center">status</StyledTableCell>
                            <StyledTableCell align="center">Remark</StyledTableCell>
                            <StyledTableCell align="center">DLT-Entity ID</StyledTableCell>
                            <StyledTableCell align="center">Created Date</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p className="message-status">Approved</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
              </TabPanel>
            )}
           {selectedSubFeature === 'WA Incoming Replying Report' && (
            <TabPanel value={selectedSubFeature} index='WA Incoming Replying Report'>
             <Grid style={{ height: "100vh", width: "70vw" }}>
      <Grid>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: "35px 20px 0px 20px ",
          }}
        >
          <Typography
            style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
          >
            WA Incoming Replying Reports
          </Typography>
        </Grid>

        {/* Conditional rendering based on the `open` prop */}
        {open ? (
          <Grid
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "3%",
              margin: "15px",
              padding: "20px",
              borderRadius: "15px",
            }}
          >
               <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Template Id/Error</StyledTableCell>
                            <StyledTableCell align="center">Purpose</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>
                            <StyledTableCell align="center">status</StyledTableCell>
                            <StyledTableCell align="center">Remark</StyledTableCell>
                            <StyledTableCell align="center">DLT-Entity ID</StyledTableCell>
                            <StyledTableCell align="center">Created Date</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p className="message-status">Approved</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
          </Grid>
        ) : (
          <Grid
            className="box-animation"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "3%",
              margin: "15px",
            }}
          >
            <Card
              className="card-two"
              style={{
                height: "auto",
                backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                borderRadius: "30px",
              }}
            >
              <Grid style={{ padding: "30px" }}>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: "20px",
                    marginTop: "10px",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  WA Incoming Replying Report
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: 400,
                    fontSize: "17px",
                    marginTop: "5px",
                    whiteSpace: "nowrap",
                    textAlign: "center",
                  }}
                >
                  This shows Incoming WA Reports
                </Typography>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: "17px",
                    marginTop: "10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  From Date
                </Typography>
                <input
                  type="date"
                  style={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "30px",
                    height: "40px",
                    fontSize: "18px",
                    margin: "10px 0px",
                    padding: "0px 10px",
                    color: "white",
                    outline: "none",
                  }}
                />
                <Typography
                  style={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: "17px",
                    marginTop: "10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  To Date
                </Typography>
                <input
                  type="date"
                  style={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "30px",
                    height: "40px",
                    fontSize: "18px",
                    margin: "10px 0px",
                    padding: "0px 10px",
                    color: "white",
                    outline: "none",
                  }}
                />
                <Typography
                  style={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: "17px",
                    marginTop: "10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  WA Business Number
                </Typography>
                <input
                  type="number"
                  style={{
                    width: "100%",
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    borderRadius: "30px",
                    height: "40px",
                    fontSize: "18px",
                    margin: "10px 0px",
                    padding: "0px 10px",
                    color: "white",
                    outline: "none",
                  }}
                />
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button style={{ maxWidth: "400px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                    Get WA Incoming Reports
                  </button>
                </div>
              </Grid>
            </Card>
          </Grid>
        )}
      </Grid>
             </Grid>
            </TabPanel>
           )}
           {selectedSubFeature === 'WA Replies Excel Download' && (
            <TabPanel value={selectedSubFeature} index='WA Replies Excel Download'>
                <Grid style={{ height: "100vh", width: "70vw" }}>
                  <Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "35px 20px 0px 20px ",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                      >
                        WA Replies Excel Download
                      </Typography>
                    </Grid>

                    {/* Conditional rendering based on the `open` prop */}
                    
                      <Grid
                        className="box-animation"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          margin: "15px",
                        }}
                      >
                        <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                              WA Replies Excel Download
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 400,
                                fontSize: "17px",
                                marginTop: "5px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                              This downloads WA Replies excel Reports
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              From Date
                            </Typography>
                            <input
                              type="date"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              To Date
                            </Typography>
                            <input
                              type="date"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              WA Business Number
                            </Typography>
                            <input
                              type="number"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                              <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Select Group Classification 
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "400px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                                Get WA Incoming Reports
                              </button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                  </Grid>
                </Grid>
            </TabPanel>
           )}
            {selectedSubFeature === 'WA Sent Reports' && (
            <TabPanel value={selectedSubFeature} index='WA Sent Reports'>
             <Grid style={{ height: "100vh", width: "70vw" }}>
              <Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    padding: "35px 20px 0px 20px ",
                  }}
                >
                  <Typography
                    style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                  >
                    WA Incoming Replying Reports
                  </Typography>
                </Grid>

                {/* Conditional rendering based on the `open` prop */}
                {open ? (
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: "3%",
                      margin: "15px",
                      padding: "20px",
                      borderRadius: "15px",
                    }}
                  >
                      <Grid
                            style={{
                              padding: "20px",
                            }}
                          >
                            <TableContainer component={Paper}>
                              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                  <TableRow>
                                    <StyledTableCell>S. No</StyledTableCell>
                                    <StyledTableCell align="center">Template Id/Error</StyledTableCell>
                                    <StyledTableCell align="center">Purpose</StyledTableCell>
                                    <StyledTableCell align="center">Type</StyledTableCell>
                                    <StyledTableCell align="center">status</StyledTableCell>
                                    <StyledTableCell align="center">Remark</StyledTableCell>
                                    <StyledTableCell align="center">DLT-Entity ID</StyledTableCell>
                                    <StyledTableCell align="center">Created Date</StyledTableCell>
                                    <StyledTableCell align="center">Action</StyledTableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rows.map((row, index) => (
                                    <StyledTableRow key={row.name}>
                                      <StyledTableCell component="th" scope="row">
                                        {index + 1}
                                      </StyledTableCell>
                                      <StyledTableCell align="center">{row.calories}</StyledTableCell>
                                      <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                      <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                                      <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                        <p className="message-status">Approved</p>
                                      </StyledTableCell>
                                      <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                      <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                      <StyledTableCell align="center">{row.fat}</StyledTableCell>
                                      <StyledTableCell align="center">
                                        <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                                      </StyledTableCell>
                                    </StyledTableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Grid>
                  </Grid>
                ) : (
                  <Grid
                    className="box-animation"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      gap: "3%",
                      margin: "15px",
                    }}
                  >
                    <Card
                      className="card-two"
                      style={{
                        height: "auto",
                        backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                        borderRadius: "30px",
                      }}
                    >
                      <Grid style={{ padding: "30px" }}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "20px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                            textAlign: "center",
                          }}
                        >
                          WA Incoming Replying Report
                        </Typography>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 400,
                            fontSize: "17px",
                            marginTop: "5px",
                            whiteSpace: "nowrap",
                            textAlign: "center",
                          }}
                        >
                          This shows Incoming WA Reports
                        </Typography>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          From Date
                        </Typography>
                        <input
                          type="date"
                          style={{
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "1px solid white",
                            borderRadius: "30px",
                            height: "40px",
                            fontSize: "18px",
                            margin: "10px 0px",
                            padding: "0px 10px",
                            color: "white",
                            outline: "none",
                          }}
                        />
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          To Date
                        </Typography>
                        <input
                          type="date"
                          style={{
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "1px solid white",
                            borderRadius: "30px",
                            height: "40px",
                            fontSize: "18px",
                            margin: "10px 0px",
                            padding: "0px 10px",
                            color: "white",
                            outline: "none",
                          }}
                        />
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          WA Business Number
                        </Typography>
                        <input
                          type="number"
                          style={{
                            width: "100%",
                            backgroundColor: "transparent",
                            border: "1px solid white",
                            borderRadius: "30px",
                            height: "40px",
                            fontSize: "18px",
                            margin: "10px 0px",
                            padding: "0px 10px",
                            color: "white",
                            outline: "none",
                          }}
                        />
                        <div style={{ display: "flex", justifyContent: "center" }}>
                          <button style={{ maxWidth: "400px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                            Get WA Incoming Reports
                          </button>
                        </div>
                      </Grid>
                    </Card>
                  </Grid>
                )}
              </Grid>
             </Grid>
            </TabPanel>
           )}
             {selectedSubFeature === 'WA Sent Reports Excel Download' && (
            <TabPanel value={selectedSubFeature} index='WA Sent Reports Excel Download'>
                <Grid style={{ height: "100vh", width: "70vw" }}>
                  <Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "35px 20px 0px 20px ",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                      >
                        WA Sent Reports Excel Download
                      </Typography>
                    </Grid>

                    {/* Conditional rendering based on the `open` prop */}
                    
                      <Grid
                        className="box-animation"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          margin: "15px",
                        }}
                      >
                        <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                              WA Sent Reports Excel Download
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 400,
                                fontSize: "17px",
                                marginTop: "5px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                              This downloads WA sent excel Reports
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              From Date
                            </Typography>
                            <input
                              type="date"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              To Date
                            </Typography>
                            <input
                              type="date"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Select WA Business Number
                            </Typography>
                            <input
                              type="number"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                              <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Select Group Classification 
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "200px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                                Download
                              </button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                  </Grid>
                </Grid>
            </TabPanel>
             )}
               {selectedSubFeature === 'Add Product' && (
              <TabPanel value={selectedSubFeature} index='Add Product'>
              <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                      Add Product
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    <div className='seacrch-input'>
                      <Button variant="contained" style={{ backgroundColor: "#42aaff" }} onClick={handleClickOpen}>
                      Add New Product
                      </Button>
                      <Dialog
                        open={modalopen}
                        TransitionComponent={Transition}
                        style={{ zIndex: "10000" }}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        z
                      >
                        <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "3%",
                            // margin: "15px",
                          }}
                        >
                          <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, rgba(114, 177, 233, 0.5), rgba(189, 135, 213, 0.5))", borderRadius: "30px", margin: "0" }}>
                            <Grid
                              style={{
                                padding: "30px",
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography
                                  style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: "22px",
                                    marginBottom: "20px",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Add New Product
                                </Typography>
                                <Button onClick={handleClose} style={{ height: "38px", color: "white" }}><CloseIcon /></Button>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Product Id
                              </Typography>
                              <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }}  />
                              <div style={{display:"flex",justifyContent:"space-between"}}>
                                 <div>
                                 <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                               Price
                              </Typography>
                              <input type="text" style={{ width: "230px", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                                 </div>
                                 <div>
                                 <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Category
                              </Typography>
                              <input type="text" style={{ width: "230px", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                                 </div>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Description
                              </Typography>
                              <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                              <div style={{display:"flex",justifyContent:"space-between"}}>
                                 <div>
                                 <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                              Product URL
                              </Typography>
                              <input type="text" style={{ width: "230px", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                                 </div>
                                 <div>
                                 <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                               Brand
                              </Typography>
                              <input type="text" style={{ width: "230px", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                                 </div>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                              Upload Product Image
                              </Typography>
                              <input type="file" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                              <div style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{ maxWidth: "200px", marginTop: "10px", padding: "7px 30px", backgroundColor: "#42aaff" }}>Submit</button>
                              </div>
                            </Grid>
                          </Card>
                        </Grid>
                      </Dialog>
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Product Id</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Product Name</StyledTableCell>
                            <StyledTableCell align="center">Category</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                            <StyledTableCell align="center">Product URL</StyledTableCell>
                            <StyledTableCell align="center">Brand</StyledTableCell>
                            <StyledTableCell align="center">Product Image</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">Camphor</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p>Pooja Articles</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">NA</StyledTableCell>
                              <StyledTableCell align="center">www.xyz.in</StyledTableCell>
                              <StyledTableCell align="center">abc</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
              </TabPanel>
            )}
             {selectedSubFeature === 'Manage Products' && (
            <TabPanel value={selectedSubFeature} index='Manage Products'>
            <Grid
              style={{ height: "100vh", width: "70vw" }}
            >
              <Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    padding: "30px 20px 20px 20px ",
                  }}
                >
                  <Typography
                    style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                  >
                    Manage Products
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 10,
                    padding: "20px 20px 10px 20px ",
                  }}>
                  <div className='seacrch-input'>
                    <Input
                      variant="soft"
                      placeholder="Search"
                      type="email"
                      name="email"
                      className='seacrch-input'
                      endDecorator={
                        <IconButton variant="soft" color="primary" aria-label="subscribe">
                          <Search />
                        </IconButton>
                      }
                      sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                    />
                  </div>
                  <div className='seacrch-input'>
                  </div>
                </Grid>
                <Grid
                  style={{
                    padding: "20px",
                  }}
                >
                   <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Product Id</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Product Name</StyledTableCell>
                            <StyledTableCell align="center">Category</StyledTableCell>
                            <StyledTableCell align="center">Description</StyledTableCell>
                            <StyledTableCell align="center">Product URL</StyledTableCell>
                            <StyledTableCell align="center">Brand</StyledTableCell>
                            <StyledTableCell align="center">Product Image</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">Camphor</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p>Pooja Articles</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">NA</StyledTableCell>
                              <StyledTableCell align="center">www.xyz.in</StyledTableCell>
                              <StyledTableCell align="center">abc</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                </Grid>
              </Grid>
            </Grid>
            </TabPanel>
             )}
              {selectedSubFeature === 'View Orders' && (
            <TabPanel value={selectedSubFeature} index='View Orders'>
            <Grid
              style={{ height: "100vh", width: "70vw" }}
            >
              <Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    padding: "30px 20px 20px 20px ",
                  }}
                >
                  <Typography
                    style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                  >
                    View Orders
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 10,
                    padding: "20px 20px 10px 20px ",
                  }}>
                  <div className='seacrch-input'>
                    <Input
                      variant="soft"
                      placeholder="Search"
                      type="email"
                      name="email"
                      className='seacrch-input'
                      endDecorator={
                        <IconButton variant="soft" color="primary" aria-label="subscribe">
                          <Search />
                        </IconButton>
                      }
                      sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                    />
                  </div>
                  <div className='seacrch-input'>
                  </div>
                </Grid>
                <Grid
                  style={{
                    padding: "20px",
                  }}
                >
                   <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Order ID</StyledTableCell>
                            <StyledTableCell align="center">From Name</StyledTableCell>
                            <StyledTableCell align="center">From Phone</StyledTableCell>
                            <StyledTableCell align="center">No. of Items</StyledTableCell>
                            <StyledTableCell align="center">Bill Amount</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">Disha Agarwal</StyledTableCell>
                              <StyledTableCell align="center">91xxxxxxxxxxx</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p>1</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">Rs. 223</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                </Grid>
              </Grid>
            </Grid>
            </TabPanel>
             )}
              {selectedSubFeature === 'Add Bot Responders' && (
              <TabPanel value={selectedSubFeature} index='Add Bot Responders'>
               <Grid
            style={{ height: "100vh", width: "70vw" }}
          >
            <Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: "5px 20px 0px 20px ",
                }}
              >
                <Typography
                  style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                >
                  Add Bot Responders
                </Typography>
              </Grid>
              <Grid
                className="box-animation"
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "3%",
                  margin: "15px",
                }}
              >
                <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)", borderRadius: "30px" }}>
                  <Grid
                    style={{
                      padding: "30px",
                    }}
                  >
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "20px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                     Add Bot Auto Responder for
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      keyword
                    </Typography>
                    <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter keyword" />
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                     Auto Responder Message
                    </Typography>
                    <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      More than 3 Buttons Filled will shown as List
                    </Typography>
                    <div style={{display: "flex", flexWrap: "wrap",justifyContent:"space-around"}}>
                      <div style={{flexBasis: "25%", margin: "10px"}}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Button 1:
                        </Typography>
                        <input
                          type="text"
                          style={{
                            backgroundColor: "transparent",
                            border: "1px solid white",
                            borderRadius: "30px",
                            height: "40px",
                            width: "100%",
                            fontSize: "18px",
                            margin: "10px 0px",
                            padding: "0px 10px",
                            color: "white",
                            outline: "none",
                          }}
                        />
                      </div>
                      <div style={{flexBasis: "25%", margin: "10px"}}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Button 2:
                        </Typography>
                        <input
                          type="text"
                          style={{
                            backgroundColor: "transparent",
                            border: "1px solid white",
                            borderRadius: "30px",
                            height: "40px",
                            width: "100%",
                            fontSize: "18px",
                            margin: "10px 0px",
                            padding: "0px 10px",
                            color: "white",
                            outline: "none",
                          }}
                        />
                      </div>
                      <div style={{flexBasis: "25%", margin: "10px"}}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Button 3:
                        </Typography>
                        <input
                          type="text"
                          style={{
                            backgroundColor: "transparent",
                            border: "1px solid white",
                            borderRadius: "30px",
                            height: "40px",
                            width: "100%",
                            fontSize: "18px",
                            margin: "10px 0px",
                            padding: "0px 10px",
                            color: "white",
                            outline: "none",
                          }}
                        />
                      </div>
                      <div style={{flexBasis: "25%", margin: "10px"}}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Button 4:
                        </Typography>
                        <input
                          type="text"
                          style={{
                            backgroundColor: "transparent",
                            border: "1px solid white",
                            borderRadius: "30px",
                            height: "40px",
                            width: "100%",
                            fontSize: "18px",
                            margin: "10px 0px",
                            padding: "0px 10px",
                            color: "white",
                            outline: "none",
                          }}
                        />
                      </div>
                      <div style={{flexBasis: "25%", margin: "10px"}}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Button 5:
                        </Typography>
                        <input
                          type="text"
                          style={{
                            backgroundColor: "transparent",
                            border: "1px solid white",
                            borderRadius: "30px",
                            height: "40px",
                            width: "100%",
                            fontSize: "18px",
                            margin: "10px 0px",
                            padding: "0px 10px",
                            color: "white",
                            outline: "none",
                          }}
                        />
                      </div>
                      <div style={{flexBasis: "25%", margin: "10px"}}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Button 6:
                        </Typography>
                        <input
                          type="text"
                          style={{
                            backgroundColor: "transparent",
                            border: "1px solid white",
                            borderRadius: "30px",
                            height: "40px",
                            width: "100%",
                            fontSize: "18px",
                            margin: "10px 0px",
                            padding: "0px 10px",
                            color: "white",
                            outline: "none",
                          }}
                        />
                      </div>
                    </div>

                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                     Header Type
                    </Typography>
                    <select className="inputstyle2">
                      <option>Select ...</option>
                      <option>image</option>
                      <option>video</option>
                      <option>document</option>
                    </select>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      URL
                    </Typography>
                   
                    <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Upload File
                    </Typography>
                    <input type="file" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "calc((100% - 10px)/2)", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                    
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button style={{ maxWidth: "200px", marginTop: "20px" }}>Add AutoBot Responder</button>
                    </div>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
              </TabPanel>
            )}
             {selectedSubFeature === 'Manage Bot Responders' && (
            <TabPanel value={selectedSubFeature} index='Manage Bot Responders'>
               <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                      Manage Bot Responders
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    <div className='seacrch-input'>
                      <Button variant="contained" style={{ backgroundColor: "#42aaff" }} onClick={handleClickOpen}>
                      Add  Bot Responder
                      </Button>
                      {/* <Dialog
                        open={modalopen}
                        TransitionComponent={Transition}
                        style={{ zIndex: "10000" }}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        z
                      >
                        <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "3%",
                            // margin: "15px",
                          }}
                        >
                          <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, rgba(114, 177, 233, 0.5), rgba(189, 135, 213, 0.5))", borderRadius: "30px", margin: "0" }}>
                            <Grid
                              style={{
                                padding: "30px",
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography
                                  style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: "22px",
                                    marginBottom: "20px",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Add New Product
                                </Typography>
                                <Button onClick={handleClose} style={{ height: "38px", color: "white" }}><CloseIcon /></Button>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Product Id
                              </Typography>
                              <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }}  />
                              <div style={{display:"flex",justifyContent:"space-between"}}>
                                 <div>
                                 <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                               Price
                              </Typography>
                              <input type="text" style={{ width: "230px", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                                 </div>
                                 <div>
                                 <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Category
                              </Typography>
                              <input type="text" style={{ width: "230px", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                                 </div>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Description
                              </Typography>
                              <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                              <div style={{display:"flex",justifyContent:"space-between"}}>
                                 <div>
                                 <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                              Product URL
                              </Typography>
                              <input type="text" style={{ width: "230px", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                                 </div>
                                 <div>
                                 <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                               Brand
                              </Typography>
                              <input type="text" style={{ width: "230px", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                                 </div>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                              Upload Product Image
                              </Typography>
                              <input type="file" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                              <div style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{ maxWidth: "200px", marginTop: "10px", padding: "7px 30px", backgroundColor: "#42aaff" }}>Submit</button>
                              </div>
                            </Grid>
                          </Card>
                        </Grid>
                      </Dialog> */}
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">keyword</StyledTableCell>
                            <StyledTableCell align="center">Auto Responder 
                            Messagee</StyledTableCell>
                            <StyledTableCell align="center">Button 1</StyledTableCell>
                            <StyledTableCell align="center">Button 2</StyledTableCell>
                            <StyledTableCell align="center">Button 3</StyledTableCell>
                            <StyledTableCell align="center">Header Type</StyledTableCell>
                            <StyledTableCell align="center">URL</StyledTableCell>
                            <StyledTableCell align="center">File</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">Camphor</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p>Pooja Articles</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">NA</StyledTableCell>
                              <StyledTableCell align="center">www.xyz.in</StyledTableCell>
                              <StyledTableCell align="center">abc</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
             )}
               {selectedSubFeature === 'Add Catalog Responders' && (
            <TabPanel value={selectedSubFeature} index='Add Catalog Responders'>
                <Grid style={{ height: "100vh", width: "70vw" }}>
                  <Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "35px 20px 0px 20px ",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                      >
                        Add Catalog Responders
                      </Typography>
                    </Grid>

                    {/* Conditional rendering based on the `open` prop */}
                    
                      <Grid
                        className="box-animation"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          margin: "15px",
                        }}
                      >
                        <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                             Add Catalogue Autoresponder for
                            </Typography>
                            
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Keyword
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Auto Responder Header
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Auto Responder Body
                            </Typography>
                            <input
                              type="number"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                              <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Products: 
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "300px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                              Add Catalog Auto Responder
                              </button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                  </Grid>
                </Grid>
            </TabPanel>
             )}
             {selectedSubFeature === 'Manage Catalog Responders' && (
            <TabPanel value={selectedSubFeature} index='Manage Catalog Responders'>
               <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                      Manage Catalog Responders
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    <div className='seacrch-input'>
                      <Button variant="contained" style={{ backgroundColor: "#42aaff" }} onClick={handleClickOpen}>
                      Add  Catalog Responder
                      </Button>
                      <Dialog
                        open={modalopen}
                        TransitionComponent={Transition}
                        style={{ zIndex: "10000" }}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        z
                      >
                        <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "3%",
                            // margin: "15px",
                          }}
                        >
                          <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                             Add Catalogue Autoresponder for
                            </Typography>
                            
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Keyword
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Auto Responder Header
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Auto Responder Body
                            </Typography>
                            <input
                              type="number"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                              <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Products: 
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "300px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                              Add Catalog Auto Responder
                              </button>
                            </div>
                          </Grid>
                        </Card>
                        </Grid>
                      </Dialog>
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">keyword</StyledTableCell>
                            <StyledTableCell align="center">Auto Responder 
                            Messagee</StyledTableCell>
                            <StyledTableCell align="center">Button 1</StyledTableCell>
                            <StyledTableCell align="center">Button 2</StyledTableCell>
                            <StyledTableCell align="center">Button 3</StyledTableCell>
                            <StyledTableCell align="center">Header Type</StyledTableCell>
                            <StyledTableCell align="center">URL</StyledTableCell>
                            <StyledTableCell align="center">File</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">Camphor</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p>Pooja Articles</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">NA</StyledTableCell>
                              <StyledTableCell align="center">www.xyz.in</StyledTableCell>
                              <StyledTableCell align="center">abc</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
             )}
             {selectedSubFeature === 'Chat Dashboard' && (
            <TabPanel value={0} index={0}>
            <Grid style={{ height: "100vh", width: "70vw" }}>
              <Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 15,
                    padding: "30px 20px 20px 20px ",
                    alignItems: "center", // Center align items vertically
                  }}
                >
                  <img
                    src={Chat3} // Add your icon here
                    style={{
                      height: "32px",
                      width: "32px",
                      marginBottom: "0px",
                    }}
                    alt="chat"
                  />
                  <Typography
                    style={{
                      fontSize: "25px",
                      fontWeight: 700,
                      textAlign: "left",
                      width: "100%",
                    }}
                  >
                    Live Chat
                  </Typography>
                </Grid>
      
                {/* Input and Search section */}
                <Grid
                  style={{
                    padding: "5px 20px",
                  }}
                >
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center", // Align items vertically
                      gap: 10,
                    }}
                  >
                    <div className="seacrch-input" style={{ width: "100%" }}>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        endDecorator={
                          <IconButton variant="soft" color="primary">
                            <Search />
                          </IconButton>
                        }
                        style={{ width: "100%" }} // Ensure input box covers the width
                      />
                    </div>
                  </Grid>
      
                  {/* Direct Message and Add button */}
                  <Grid
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "30px",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: 700,
                        textAlign: "left",
                        width: "100%",
                      }}
                    >
                      DIRECT MESSAGE
                    </Typography>
                    <IconButton
                      sx={{
                        width: "30px",
                        height: "30px",
                        backgroundColor: "#FFF",
                        color: "#42AAFF",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      <AddIcon style={{ color: "#42AAFF" }} />
                    </IconButton>
                  </Grid>
      
                  <hr />
      
                  {/* Profiles and Chat Prompt Section */}
                  <Grid className="chat-animation" style={{ display: "flex" }}>
                    <Grid style={{ width: "300px" }}>
                      {profiles.map((profile) => (
                        <div key={profile.id} className="chat-profile">
                          <img src={profile.imgSrc} alt={profile.name} />
                          <p>{profile.name}</p>
                        </div>
                      ))}
                    </Grid>
      
                    <Grid
                      style={{
                        width: "100%",
                        backgroundColor: "rgb(239, 239, 239)",
                        marginTop: "-8px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={Chat3} // Add your icon here
                        style={{
                          height: "60px",
                          width: "60px",
                          marginBottom: "15px",
                        }}
                        alt="chat"
                      />
                      <Button variant="contained" style={{ backgroundColor: "#42aaff" }}>
                        Tap on a Contact To Chat
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TabPanel>
             )}
             {selectedSubFeature === 'Add Agent' && (
              <TabPanel value={selectedSubFeature} index='Add Agent'>
              <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                      Add Agent
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    <div className='seacrch-input'>
                      <Button variant="contained" style={{ backgroundColor: "#42aaff" }} onClick={handleClickOpen}>
                        Add New Agent
                      </Button>
                      <Dialog
                        open={modalopen}
                        TransitionComponent={Transition}
                        style={{ zIndex: "10000" }}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        z
                      >
                        <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "3%",
                            // margin: "15px",
                          }}
                        >
                          <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, rgba(114, 177, 233, 0.5), rgba(189, 135, 213, 0.5))", borderRadius: "30px", margin: "0" }}>
                            <Grid
                              style={{
                                padding: "30px",
                              }}
                            >
                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <Typography
                                  style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: "22px",
                                    marginBottom: "20px",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  Add New Agent
                                </Typography>
                                <Button onClick={handleClose} style={{ height: "38px", color: "white" }}><CloseIcon /></Button>
                              </div>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Agent Id
                              </Typography>
                              <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Type
                              </Typography>
                              <select className="inputstyle2">
                                <option>Select ...</option>
                                <option>image</option>
                                <option>video</option>
                                <option>document</option>
                              </select>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Purpose
                              </Typography>
                              <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 500,
                                  fontSize: "17px",
                                  marginTop: "10px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                DLT-Entry ID
                              </Typography>
                              <input type="number" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                              <div style={{ display: "flex", justifyContent: "center" }}>
                                <button style={{ maxWidth: "200px", marginTop: "20px", padding: "7px 30px", backgroundColor: "#42aaff" }}>Submit</button>
                              </div>
                            </Grid>
                          </Card>
                        </Grid>
                      </Dialog>
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">Agent Id</StyledTableCell>
                            <StyledTableCell align="center">Purpose</StyledTableCell>
                            <StyledTableCell align="center">Type</StyledTableCell>
                            <StyledTableCell align="center">status</StyledTableCell>
                            <StyledTableCell align="center">Remark</StyledTableCell>
                            <StyledTableCell align="center">DLT-Entity ID</StyledTableCell>
                            <StyledTableCell align="center">Created Date</StyledTableCell>
                            <StyledTableCell align="center">Action</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p className="message-status">Approved</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
              </TabPanel>
            )}
            {selectedSubFeature === 'Manage Agent' && (
              <TabPanel value={selectedSubFeature} index='Manage Agent'>
            <Grid
              style={{ height: "100vh", width: "70vw" }}
            >
              <Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 10,
                    padding: "30px 20px 20px 20px ",
                  }}
                >
                  <Typography
                    style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                  >
                    Manage Agent
                  </Typography>
                </Grid>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 10,
                    padding: "20px 20px 10px 20px ",
                  }}>
                  <div className='seacrch-input'>
                    <Input
                      variant="soft"
                      placeholder="Search"
                      type="email"
                      name="email"
                      className='seacrch-input'
                      endDecorator={
                        <IconButton variant="soft" color="primary" aria-label="subscribe">
                          <Search />
                        </IconButton>
                      }
                      sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                    />
                  </div>
                  <div className='seacrch-input'>
                    <Dialog
                      open={modalopen}
                      TransitionComponent={Transition}
                      style={{ zIndex: "10000" }}
                      keepMounted
                      onClose={handleClose}
                      aria-describedby="alert-dialog-slide-description"
                      z
                    >
                      <Grid
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          // margin: "15px",
                        }}
                      >
                        <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, rgba(114, 177, 233, 0.5), rgba(189, 135, 213, 0.5))", borderRadius: "30px", margin: "0" }}>
                          <Grid
                            style={{
                              padding: "30px",
                            }}
                          >
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: 700,
                                  fontSize: "22px",
                                  marginBottom: "20px",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                Add New Agent
                              </Typography>
                              <Button onClick={handleClose} style={{ height: "38px", color: "white" }}><CloseIcon /></Button>
                            </div>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Agent Id
                            </Typography>
                            <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Type
                            </Typography>
                            <select className="inputstyle2">
                              <option>Select ...</option>
                              <option>image</option>
                              <option>video</option>
                              <option>document</option>
                            </select>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Purpose
                            </Typography>
                            <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              DLT-Entry ID
                            </Typography>
                            <input type="number" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "200px", marginTop: "20px", padding: "7px 30px", backgroundColor: "#42aaff" }}>Submit</button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                    </Dialog>
                  </div>
                </Grid>
                <Grid
                  style={{
                    padding: "20px",
                  }}
                >
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                      <TableHead>
                        <TableRow>
                          <StyledTableCell>S. No</StyledTableCell>
                          <StyledTableCell align="center">Agent Id</StyledTableCell>
                          <StyledTableCell align="center">Purpose</StyledTableCell>
                          <StyledTableCell align="center">Type</StyledTableCell>
                          <StyledTableCell align="center">status</StyledTableCell>
                          <StyledTableCell align="center">Remark</StyledTableCell>
                          <StyledTableCell align="center">DLT-Entity ID</StyledTableCell>
                          <StyledTableCell align="center">Created Date</StyledTableCell>
                          <StyledTableCell align="center">Action</StyledTableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, index) => (
                          <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                              {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.calories}</StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                              <p className="message-status">Approved</p>
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center">{row.fat}</StyledTableCell>
                            <StyledTableCell align="center">
                              <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                            </StyledTableCell>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </Grid>
            </TabPanel>
            )}
             {selectedSubFeature === 'Dashboard' && (
            <TabPanel value={selectedSubFeature} index='Dashboard'>
               <Grid
                style={{ height: "100vh", width: "70vw" }}
              >
                <Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 10,
                      padding: "30px 20px 20px 20px ",
                    }}
                  >
                    <Typography
                      style={{ fontSize: "25px", fontWeight: 700, textAlign: "left", width: "100%" }}
                    >
                      Manage Catalog Responders
                    </Typography>
                  </Grid>
                  <Grid
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      gap: 10,
                      padding: "20px 20px 10px 20px ",
                    }}>
                    <div className='seacrch-input'>
                      <Input
                        variant="soft"
                        placeholder="Search"
                        type="email"
                        name="email"
                        className='seacrch-input'
                        endDecorator={
                          <IconButton variant="soft" color="primary" aria-label="subscribe">
                            <Search />
                          </IconButton>
                        }
                        sx={{ ml: 'auto', display: { xs: 'none', md: 'flex' } }}
                      />
                    </div>
                    <div className='seacrch-input'>
                      <Button variant="contained" style={{ backgroundColor: "#42aaff" }} onClick={handleClickOpen}>
                      Add  Catalog Responder
                      </Button>
                      <Dialog
                        open={modalopen}
                        TransitionComponent={Transition}
                        style={{ zIndex: "10000" }}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                        z
                      >
                        <Grid
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            gap: "3%",
                            // margin: "15px",
                          }}
                        >
                          <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                             Add Catalogue Autoresponder for
                            </Typography>
                            
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Keyword
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Auto Responder Header
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Auto Responder Body
                            </Typography>
                            <input
                              type="number"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                              <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Products: 
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "300px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                              Add Catalog Auto Responder
                              </button>
                            </div>
                          </Grid>
                        </Card>
                        </Grid>
                      </Dialog>
                    </div>
                  </Grid>
                  <Grid
                    style={{
                      padding: "20px",
                    }}
                  >
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell>S. No</StyledTableCell>
                            <StyledTableCell align="center">keyword</StyledTableCell>
                            <StyledTableCell align="center">Auto Responder 
                            Messagee</StyledTableCell>
                            <StyledTableCell align="center">Button 1</StyledTableCell>
                            <StyledTableCell align="center">Button 2</StyledTableCell>
                            <StyledTableCell align="center">Button 3</StyledTableCell>
                            <StyledTableCell align="center">Header Type</StyledTableCell>
                            <StyledTableCell align="center">URL</StyledTableCell>
                            <StyledTableCell align="center">File</StyledTableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <StyledTableRow key={row.name}>
                              <StyledTableCell component="th" scope="row">
                                {index + 1}
                              </StyledTableCell>
                              <StyledTableCell align="center">{row.calories}</StyledTableCell>
                              <StyledTableCell align="center">{row.fat}</StyledTableCell>
                              <StyledTableCell align="center">Camphor</StyledTableCell>
                              <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                                <p>Pooja Articles</p>
                              </StyledTableCell>
                              <StyledTableCell align="center">NA</StyledTableCell>
                              <StyledTableCell align="center">www.xyz.in</StyledTableCell>
                              <StyledTableCell align="center">abc</StyledTableCell>
                              <StyledTableCell align="center">
                                <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                              </StyledTableCell>
                            </StyledTableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </Grid>
            </TabPanel>
             )}
                {selectedSubFeature === 'Compose Single WA' && (
            <TabPanel value={selectedSubFeature} index='Compose Single WA'>
                <Grid style={{ height: "100vh", width: "70vw" }}>
                  <Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "35px 20px 0px 20px ",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                      >
                        Compose Single WA
                      </Typography>
                    </Grid>

                    {/* Conditional rendering based on the `open` prop */}
                    
                      <Grid
                        className="box-animation"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          margin: "15px",
                        }}
                      >
                        <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                             Compose Single SMS for WA
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Template
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Template Name
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Template Type 
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Template Message
                            </Typography>
                            <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Enter numbers one by one (Without 91):
                            </Typography>
                            <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "250px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                              Send Single WA
                              </button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                  </Grid>
                </Grid>
            </TabPanel>
             )}
               {selectedSubFeature === 'Compose Group WA' && (
            <TabPanel value={selectedSubFeature} index='Compose Group WA'>
                <Grid style={{ height: "100vh", width: "70vw" }}>
                  <Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "35px 20px 0px 20px ",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                      >
                        Compose Group WA
                      </Typography>
                    </Grid>

                    {/* Conditional rendering based on the `open` prop */}
                    
                      <Grid
                        className="box-animation"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          margin: "15px",
                        }}
                      >
                        <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                             Compose Group SMS for WA
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Template
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Template Name
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Template Type 
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Template Message
                            </Typography>
                            <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Group(s): 
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "250px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                              Send Single WA
                              </button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                  </Grid>
                </Grid>
            </TabPanel>
             )}
              {selectedSubFeature === 'Compose Dynamic WA' && (
            <TabPanel value={selectedSubFeature} index='Compose Dynamic WA'>
                <Grid style={{ height: "100vh", width: "70vw" }}>
                  <Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "35px 20px 0px 20px ",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                      >
                        Compose Dynamic WA
                      </Typography>
                    </Grid>

                    {/* Conditional rendering based on the `open` prop */}
                    
                      <Grid
                        className="box-animation"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          margin: "15px",
                        }}
                      >
                        <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                             Compose Dynamic WA
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Template
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Template Name
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Template Type 
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Template Message
                            </Typography>
                            <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }} placeholder="Welcome to Alpha Tech Gateway SMS, please find the demo video & login credentials below. thanks"></textarea>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Upload File:
                            </Typography>
                            <input type="file" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 200,
                                fontSize: "14px",
                                marginTop: "-15px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             .xlsx file only!
                            </Typography>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "250px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                              Send Single WA
                              </button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                  </Grid>
                </Grid>
            </TabPanel>
             )}
             {selectedSubFeature === 'Compose Retargeting WA' && (
            <TabPanel value={selectedSubFeature} index='Compose Retargeting WA'>
                <Grid style={{ height: "100vh", width: "70vw" }}>
                  <Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "35px 20px 0px 20px ",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                      >
                       Compose Retargeting WA
                      </Typography>
                    </Grid>

                    {/* Conditional rendering based on the `open` prop */}
                    
                      <Grid
                        className="box-animation"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          margin: "15px",
                        }}
                      >
                        <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                             Compose Retargeting WA
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Retargeting Keyword to proceed
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Bulk Whatsapp</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                            Or type below
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "250px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                              Proceed
                              </button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                  </Grid>
                </Grid>
            </TabPanel>
             )}
                {selectedSubFeature === 'Compose Dynamic PDF WA' && (
            <TabPanel value={selectedSubFeature} index='Compose Dynamic PDF WA'>
                <Grid style={{ height: "100vh", width: "70vw" }}>
                  <Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "35px 20px 0px 20px ",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                      >
                        Compose Dynamic WA
                      </Typography>
                    </Grid>

                    {/* Conditional rendering based on the `open` prop */}
                    
                      <Grid
                        className="box-animation"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          margin: "15px",
                        }}
                      >
                        <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                             Compose Dynamic WA
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Template
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Template Name
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Template Type 
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                              <Typography
                              style={{
                                color: "white",
                                fontWeight: 200,
                                fontSize: "14px",
                                marginTop: "-5px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Quick Replies: sales, invoice, support
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Template Message
                            </Typography>
                            <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }} placeholder="Welcome to Alpha Tech Gateway SMS, please find the demo video & login credentials below. thanks"></textarea>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Upload File:
                            </Typography>
                            <input type="file" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 200,
                                fontSize: "14px",
                                marginTop: "-15px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             .xlsx file only!
                            </Typography>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "250px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                              Send Dynamic WA
                              </button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                  </Grid>
                </Grid>
            </TabPanel>
             )}
                   {selectedSubFeature === 'Compose Single Catalog WA' && (
            <TabPanel value={selectedSubFeature} index='Compose Single Catalog WA'>
                <Grid style={{ height: "100vh", width: "70vw" }}>
                  <Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        padding: "35px 20px 0px 20px ",
                      }}
                    >
                      <Typography
                        style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                      >
                        Compose Single Catalog WA
                      </Typography>
                    </Grid>

                    {/* Conditional rendering based on the `open` prop */}
                    
                      <Grid
                        className="box-animation"
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: "3%",
                          margin: "15px",
                        }}
                      >
                        <Card
                          className="card-two"
                          style={{
                            height: "auto",
                            backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)",
                            borderRadius: "30px",
                          }}
                        >
                          <Grid style={{ padding: "30px" }}>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "20px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                                textAlign: "center",
                              }}
                            >
                             Compose Single Catalog for Replied Users under 24 hours
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Template
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Template Name
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Template Type 
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                              <Typography
                              style={{
                                color: "white",
                                fontWeight: 200,
                                fontSize: "14px",
                                marginTop: "-5px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Quick Replies: sales, invoice, support
                            </Typography>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Upload File:
                            </Typography>
                            <input type="file" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Template Message
                            </Typography>
                            <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }} placeholder="Welcome to Alpha Tech Gateway SMS, please find the demo video & login credentials below. thanks"></textarea>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Select Products
                            </Typography>
                            <select className="inputstyle2" style={{width:"100%"}}>
                                            <option>Select ...</option>
                                            <option>English(US)</option>
                                            <option>English(UK)</option>
                                          </select>
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Catalog Header Text
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                             Catalog Body Text 
                            </Typography>
                            <input
                              type="text"
                              style={{
                                width: "100%",
                                backgroundColor: "transparent",
                                border: "1px solid white",
                                borderRadius: "30px",
                                height: "40px",
                                fontSize: "18px",
                                margin: "10px 0px",
                                padding: "0px 10px",
                                color: "white",
                                outline: "none",
                              }}
                            />
                             
                            <Typography
                              style={{
                                color: "white",
                                fontWeight: 500,
                                fontSize: "17px",
                                marginTop: "10px",
                                whiteSpace: "nowrap",
                              }}
                            >
                              Enter numbers one by one (Without 91):
                            </Typography>
                            <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }} ></textarea>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button style={{ maxWidth: "250px", marginTop: "20px" }} onClick={()=>setOpen(!open)}>
                              Send Single WA
                              </button>
                            </div>
                          </Grid>
                        </Card>
                      </Grid>
                  </Grid>
                </Grid>
            </TabPanel>
             )}
              {selectedSubFeature === 'HTTP WA API' && (
                   <TabPanel value={selectedSubFeature} index='HTTP WA API'>
                     <Grid style={{ height: "100vh", width: "70vw" }}>
                            <div style={{width: "70vw",
                                height: "76px",
                                backgroundColor:"#D9D9D9",
                                display:"flex",
                                justifyContent:"center",
                                alignItems:"center",
                                fontSize:"36px",
                                fontWeight:"600",
                                color:"#0B0B0B"
                                }}>
                            HTTP WA API
                            </div>
                            <p style={{width:"60vw", margin:"auto",padding:"10px", fontSize:"20px",fontWeight:"500",lineHeight:"normal"}}>
                            API FOR NORMAL TEXT WAhttp://bhashsms.com/api/sendmsg.php?user=&pass=********&sender=BUZWAP&phone=Mobile No&text=TEMPLATENAME&priority=wa&stype=normal Note : Mobile Number without 91 separated by comma API FOR NORMAL TEXT WA WITH VARIABLES/PARAMETERShttp://bhashsms.com/api/sendmsg.php?user=&pass=********&sender=BUZWAP&phone=Mobile No&text=TEMPLATENAME&priority=wa&stype=normal&Params=param1,param2 Note : Mobile Number without 91 separated by comma , parameters separated by comma API FOR TEXT WA WITH VARIABLES/PARAMETERS + IMAGE/VIDEOhttp://bhashsms.com/api/sendmsg.php?user=&pass=********&sender=BUZWAP&phone=Mobile No&text=TEMPLATENAME&priority=wa&stype=normal&Params=param1,param2&htype=image&url=https://i.ibb.co/9w4vXVY/Whats-App-Image-2022-07-26-at-2-57-21-PM.jpg  Note : Mobile Number without 91 separated by comma , parameters separated by comma, htype-image/video/document and url should be public url API FOR NORMAL TEXT AFTER CUSTOMER REPLIEShttp://bhashsms.com/api/sendmsg.php?user=&pass=********&sender=BUZWAP&phone=Mobile No&text=TEXT&priority=wa&stype=normal&&htype=normal API FOR AUTHENTICATION OTP MESSAGEShttp://bhashsms.com/api/sendmsg.php?user=&pass=********&sender=Sender ID&phone=Mobile No&text=TEMPLATENAME&priority=wa&stype=auth&Params=OTP Note : Mobile Number without 91 separated by comma , parameters separated by comma  For other customized API's Contact Us. It will be provided as soon as possible. Call Backs to your end point can also be done.Pls contact Account Manager.
                            </p>
                    </Grid>
                   </TabPanel>
                )}
            </Box>
        ))
      })}
    </TabPanel>
          )}



        {/* <TabPanel value={value} index={1}>
          <Grid
            style={{ height: "100vh", width: "70vw" }}
          >
            <Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: "50px 20px 20px 20px ",
                }}
              >
                <Typography
                  style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                >
                  Welcome to Own WhatsApp Speed Message Sender
                </Typography>
              </Grid>



              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "3%",
                  margin: "15px",
                }}
              >
                <Card className="card-two" style={{ height: "auto", backgroundImage: "linear-gradient(135deg, #72b1e9, #bd87d5)", borderRadius: "30px" }}>
                  <Grid
                    style={{
                      padding: "30px",
                    }}
                  >
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "19px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Phone Number or Upload .xlsx file
                    </Typography>
                    <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                    <input type="file" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "19px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Message
                    </Typography>
                    <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "19px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Attach
                    </Typography>
                    <select style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "calc((100% - 10px)/2)", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }}>
                      <option>Select ...</option>
                      <option>image</option>
                      <option>video</option>
                      <option>document</option>
                    </select>
                    <input type="file" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "calc((100% - 10px)/2)", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button style={{ maxWidth: "200px", marginTop: "20px" }}>Send Message</button>
                    </div>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel> */}
        {/* <TabPanel style={{ backgroundColor: "black" }} value={value} index={2}>
          <Grid
            style={{ backgroundColor: "#000", height: "100vh", width: "70vw" }}
          >
            <Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  padding: "50px 20px 20px 20px ",
                }}
              >
                <Typography
                  style={{ color: "#fff", fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                >
                  Welcome to Own WhatsApp Speed Message Sender
                </Typography>
              </Grid>



              <Grid
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "3%",
                  margin: "15px",
                }}
              >
                <iframe src="http://35.200.161.163:7001/rest/api/singleWP" style={{ height: "80vh", width: "100vw" }}></iframe>
                <Card className="card-two" style={{height: "auto", backgroundImage: "linear-gradient(135deg, #0C487B, #6606AD)", borderRadius: "30px" }}>
                  <Grid
                    style={{
                      padding: "30px",
                    }}
                  >
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "19px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Phone Number or Upload .xlsx file
                    </Typography>
                    <input type="text" style={{width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none"}} placeholder="Enter Number (comma separated)"/>
                    <input type="file" style={{width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none"}} placeholder="Enter Number (comma separated)"/>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "19px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Message
                    </Typography>
                    <textarea style={{width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none"}}></textarea>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "19px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Attach
                    </Typography>
                    <select style={{width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "calc((100% - 10px)/2)", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none"}}>
                      <option>Select ...</option>
                      <option>image</option>
                      <option>video</option>
                      <option>document</option>
                    </select>
                    <input type="file" style={{width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "calc((100% - 10px)/2)", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none"}} placeholder="Enter Number (comma separated)"/>
                    <div style={{display: "flex", justifyContent: "center"}}>
                    <button style={{maxWidth: "200px", marginTop: "20px"}}>Send Message</button>
                    </div>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
     */}
      </Box>
    </Box>
  );
}
