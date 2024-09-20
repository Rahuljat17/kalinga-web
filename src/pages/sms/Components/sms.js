import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "../../../router/styles/drawer.css";
import "./style.css"
import { MdContacts } from "react-icons/md";
import { IoArrowRedo } from "react-icons/io5";
import { LuPenSquare } from "react-icons/lu";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Button, IconButton, Paper } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import InputBase from "@mui/material/InputBase";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Report from "../../../Accets/reportwp.png";
import SmsIcon from "../../../Accets/sms tracking.png";
import Profile from "../../../Accets/cont.png";
import Mess from "../../../Accets/mes.png";
import Chat from "../../../Accets/chat.png";
import Expo from "../../../Accets/expo.png";
import Api from "../../../Accets/api.png";
import Contact from "../../../Accets/contasss.png";
import PROFILELOGO2 from "../../../Accets/profile logo2.png";
import PARTICIPATLOGO2 from "../../../Accets/paticipat logo2.png";
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
import Input from '@mui/joy/Input';
import Search from '@mui/icons-material/Search';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import { FaWhatsapp } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

// table mui

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

//  icons mui

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageIcon from '@mui/icons-material/Message';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import RouteIcon from '@mui/icons-material/Route';
import SubjectIcon from '@mui/icons-material/Subject';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CloseIcon from '@mui/icons-material/Close';

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
        <Box sx={{ p: "60px 20px 0px 10px" }}>
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

export default function PermanentDrawerLeft(props) {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [modalopen, modalsetOpen] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [credit, setCredit] = useState(props.login.credit_details.sms); // Initial credit
  const [inputValue, setInputValue] = useState(''); // To store input
  const [error, setError] = useState(''); // To store error messages
  const [loading, setLoading] = useState(false); // To show loading state
  const [successMessage, setSuccessMessage] = useState('');
  // const [open, setOpen] = React.useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update the input value as the user types
  };

  const handleCredit = (e) => {
    e.preventDefault();
    const numbers = inputValue.split(',').filter((num) => num.trim() !== '');

    if (numbers.length > credit) {
      setError('Credit is not sufficient');
      setSuccessMessage('');
    } else {
      setLoading(true);
      setError('');
      setSuccessMessage('');
      setOpen(true); // Open the modal when processing starts

      // Wait for 10 seconds, then execute the credit deduction
      setTimeout(() => {
        setCredit(credit - numbers.length);
        setLoading(false);
        setOpen(true); // Open the modal again for success message
        setSuccessMessage('Message Sent successfully!');
      }, 10000); // 10000 milliseconds = 10 seconds
    }
  };

  const handleClose2 = () => {
    setOpen(false); // Close the modal
    if (successMessage) {
      setSuccessMessage(''); // Reset the success message
    }
  };

  const handleClickOpen = () => {
    modalsetOpen(true);
  };

  const handleClose = () => {
    modalsetOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: "10000",
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
        <Typography
          style={{
            margin: "20px 0px 0px",
            textAlign: "center",
            fontWeight: 500,
            fontSize: "22px",
            color: "royalblue",
          }}
        >
          <MessageIcon sx={{ margin: "20px 10px -8px", fontSize: "30px" }} />SMS
        </Typography>
        {/* <div>
          <Paper
            component="form"
            style={{
              width: "260px",
              height: "2.5rem",
              borderRadius: "0.625rem", 
              border: "1px solid  black",
              background: "#FFF",
              boxShadow: "0px 0px 10px 0px rgba(163, 163, 163, 0.25)",
              margin: "13px",
            }}
          >
            <IconButton
              type="button"
              style={{ p: "150px" }}
              aria-label="search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21.7555 20.6065L18.3182 17.2458L18.2376 17.1233C18.0878 16.9742 17.883 16.8902 17.6692 16.8902C17.4554 16.8902 17.2505 16.9742 17.1007 17.1233C14.1795 19.8033 9.67815 19.949 6.58201 17.4637C3.48586 14.9784 2.75567 10.6334 4.87568 7.31017C6.9957 3.98697 11.3081 2.71685 14.9528 4.34214C18.5976 5.96743 20.4438 9.98379 19.267 13.7276C19.1823 13.9981 19.2515 14.2922 19.4487 14.4992C19.6459 14.7062 19.9411 14.7946 20.223 14.7311C20.505 14.6676 20.7309 14.4619 20.8156 14.1914C22.2224 9.74864 20.0977 4.96755 15.8161 2.94106C11.5345 0.914562 6.38084 2.25082 3.68905 6.08542C0.99727 9.92001 1.57518 15.1021 5.04893 18.2795C8.52268 21.4569 13.8498 21.6759 17.5841 18.7949L20.6277 21.7705C20.942 22.0765 21.4502 22.0765 21.7645 21.7705C22.0785 21.4602 22.0785 20.9606 21.7645 20.6503L21.7555 20.6065Z"
                  fill="#121212"
                  fill-opacity="0.7"
                />
              </svg>
            </IconButton>
            <InputBase
              style={{ ml: 5, flex: 1, fontSize: "15px" }}
              placeholder="Search "
              inputProps={{ "aria-label": "Search " }}
              onChange={(e) => {
                // this.props.search_course(courses.course, e.target.value, "search")
                // console.log("df", this.props.courses.search_course.length)
              }}
            />
          </Paper>
        </div>

        <Typography
          style={{ margin: "5px 15px", fontWeight: 500, fontSize: "18px" }}
        >
          Report
        </Typography>
        <Button
          style={{
            color: "#05E800",
            background: "rgba(5, 232, 0, 0.20)",
            borderRadius: "10px",
            margin: "0px 10px 0px 15px",
          }}
        >
          + Add account
        </Button> */}
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
          {/* {sideBar( open)} */}
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              height: "100%",
            }}
          >
            <Tabs
              orientation="vertical"
              // variant="scrollable"
              value={value}
              onChange={handleChange}
              // aria-label="Vertical tabs example"
              sx={{ width: "300px" }}
              TabIndicatorProps={{
                style: {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Tab
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "20px",
                  backgroundColor: value === 0 ? "#eeeeee" : "transparent",
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
                icon={
                  <SendIcon
                    style={{
                      height: "35px",
                      width: "35px",
                      marginBottom: "0px",
                      backgroundColor: "#42AAFF",
                      color: "white",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  />
                }
                label="Send SMS"
                style={{ color: "#242424" }}
                {...a11yProps(0)}
              ></Tab>

              <Tab
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "20px",
                  backgroundColor: value === 1 ? "#eeeeee" : "transparent",
                  color: "black",
                  borderRadius: "28px",
                  margin: "0px 8px 15px 15px",
                  textTransform: "capitalize",
                  // opacity: 0.7,
                  fontSize: "15px",
                  textAlign: "center",
                  minHeight: value === 1 ? "20px" : "10px", // Adjust minHeight instead of height
                  alignItems: "center", // Align content vertically
                }}
                style={{ color: "#242424" }}
                icon={
                  <TransferWithinAStationIcon
                    style={{
                      height: "35px",
                      width: "35px",
                      marginBottom: "0px",
                      backgroundColor: "#42AAFF",
                      color: "white",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  />
                }
                label="Sender ID"
                {...a11yProps(1)}
              />

              {/* <Tab
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "20px",
                  backgroundColor: value === 2 ? "#eeeeee" : "transparent",
                  // color: 'black',
                  borderRadius: "28px",
                  margin: "0px 8px 15px 15px",
                  textTransform: "capitalize",
                  // opacity: 0.7,
                  fontSize: "15px",
                  textAlign: "center",
                  minHeight: value === 2 ? "20px" : "10px", // Adjust minHeight instead of height
                  alignItems: "center", // Align content vertically
                }}
                icon={
                  <RouteIcon
                    style={{
                      height: "35px",
                      width: "35px",
                      marginBottom: "0px",
                      backgroundColor: "#42AAFF",
                      color: "white",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  />
                }
                style={{ color: "#242424" }}
                label="Routes"
                {...a11yProps(2)}
              /> */}
              <Tab
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "20px",
                  backgroundColor: value === 2 ? "#eeeeee" : "transparent",
                  color: "black",
                  borderRadius: "28px",
                  margin: "0px 8px 15px 15px",
                  textTransform: "capitalize",
                  // opacity: 0.7,
                  fontSize: "15px",
                  textAlign: "center",
                  minHeight: value === 2 ? "20px" : "10px", // Adjust minHeight instead of height
                  alignItems: "center", // Align content vertically
                }}
                icon={
                  <SubjectIcon
                    style={{
                      height: "35px",
                      width: "35px",
                      marginBottom: "0px",
                      backgroundColor: "#42AAFF",
                      color: "white",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  />
                }
                style={{ color: "#242424" }}
                label="Templates"
                {...a11yProps(2)}
              />
              <Tab
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "20px",
                  backgroundColor: value === 3 ? "#eeeeee" : "transparent",
                  color: "#121212",
                  borderRadius: "28px",
                  margin: "0px 8px 15px 15px",
                  textTransform: "capitalize",
                  // opacity: 0.7,
                  fontSize: "15px",
                  textAlign: "center",
                  minHeight: value === 3 ? "20px" : "10px", // Adjust minHeight instead of height
                  alignItems: "center", // Align content vertically
                }}
                icon={
                  <GroupsOutlinedIcon
                    style={{
                      height: "35px",
                      width: "35px",
                      marginBottom: "0px",
                      backgroundColor: "#42AAFF",
                      color: "white",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  />
                }
                style={{ color: "#242424" }}
                label="GSM"
                {...a11yProps(3)}
              />
              <Tab
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "20px",
                  backgroundColor: value === 4 ? "#eeeeee" : "transparent",
                  color: "black",
                  borderRadius: "28px",
                  margin: "0px 8px 15px 15px",
                  textTransform: "capitalize",
                  // opacity: 0.7,
                  fontSize: "15px",
                  textAlign: "center",
                  minHeight: value === 4 ? "20px" : "10px", // Adjust minHeight instead of height
                  alignItems: "center", // Align content vertically
                }}
                icon={
                  <AssessmentOutlinedIcon
                    style={{
                      height: "35px",
                      width: "35px",
                      marginBottom: "0px",
                      backgroundColor: "#42AAFF",
                      color: "white",
                      padding: "5px",
                      borderRadius: "10px",
                    }}
                  />
                }
                style={{ color: "#242424" }}
                label="Report"
                {...a11yProps(4)}
              />
              {/* <Divider/>
        <Typography style={{ margin: "5px 15px", fontWeight: 500, fontSize: "18px" }}>
          Report
        </Typography> */}
            </Tabs>
          </Box>
        </List>
      </Drawer>

      <Box style={{ backgroundColor: "white" }}>
        <TabPanel value={value} index={0}>
          <Grid
            style={{ height: "fit-content", width: "70vw" }}
          >
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
                  Send SMS
                </Typography>
              </Grid>

              <h4 style={{ margin: " 0 20px -10px 230px", backgroundImage: "linear-gradient(90deg, #9bd0ffc4 , #ffffffb6 )", padding: "10px 20px", width: "fit-content", borderRadius: "10px" }}>Available Credit: {credit}</h4>

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
                      Phone Number or Upload .xlsx file
                    </Typography>
                    <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} onChange={handleInputChange} placeholder="Enter Number (comma separated)" />
                    {error && <p style={{ color: 'red', margin: "0" }}>{error}</p>}
                    <input type="file" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                    <div className="cntr5">
                      <div style={{ width: "31%" }}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Message Channel
                        </Typography>
                        <select className="inputstyle2">
                          <option>Select ...</option>
                          <option>English</option>
                          <option>Unicode</option>
                        </select>
                      </div>
                      <div style={{ width: "31%" }}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Sender I'D
                        </Typography>
                        <select className="inputstyle2">
                          <option>Select ...</option>
                          <option>No Result Found </option>

                        </select>
                      </div>
                      <div style={{ width: "31%" }}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Message Type
                        </Typography>
                        <select className="inputstyle2">
                          <option>Select ...</option>
                          <option>Transnational</option>
                          <option>Promotional</option>
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
                      Message
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
                      Attach
                    </Typography>
                    <select style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "calc((100% - 10px)/2)", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }}>
                      <option>Select ...</option>
                      <option>image</option>
                      {/* <option>video</option> */}
                      <option>document</option>
                    </select>
                    <input type="file" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "calc((100% - 10px)/2)", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button style={{ maxWidth: "200px", marginTop: "20px" }} onClick={handleCredit}>Send Message</button>
                    </div>
                    {/* Popup modal */}
                    <Dialog open={open} onClose={handleClose2} style={{ zIndex: "10000" }}>
                      <DialogContent style={{ backgroundColor: "white" }}>
                        {loading ? (
                          <div style={{ display: 'flex', alignItems: 'center' }}>
                            <CircularProgress style={{ marginRight: '10px' }} />
                            <Typography>Processing... Please wait</Typography>
                          </div>
                        ) : (
                          <Typography style={{ color: 'green' }}>{successMessage}</Typography>
                        )}
                      </DialogContent>
                      {!loading && (
                        <DialogActions style={{ backgroundColor: "white" }}>
                          <Button onClick={handleClose2} color="primary">
                            Close
                          </Button>
                        </DialogActions>
                      )}
                    </Dialog>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1}>
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
                  Sender ID
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
                    Add New Sender I'D
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
                              Add New Sender ID
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
                            Sender I'D
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
                        <StyledTableCell align="center">Sender ID</StyledTableCell>
                        <StyledTableCell align="center">Purpose</StyledTableCell>
                        <StyledTableCell align="center">Type</StyledTableCell>
                        <StyledTableCell align="center">status</StyledTableCell>
                        <StyledTableCell align="center">Remark</StyledTableCell>
                        <StyledTableCell align="center">DLT-Entity ID</StyledTableCell>
                        <StyledTableCell align="center">Created Date</StyledTableCell>
                        {/* <StyledTableCell align="center">Action</StyledTableCell> */}
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
                          {/* <StyledTableCell align="center">
                            <DeleteIcon style={{ color: "red" }} titleAccess="Delete" />
                          </StyledTableCell> */}
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={2}>
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
                  Templates
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
                    Add New Template
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
                              Add New Template
                            </Typography>
                            <Button onClick={handleClose} style={{ height: "38px", color: "white" }}><CloseIcon /></Button>
                          </div>
                          <div className="cntr5">
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
                                Sender I'D
                              </Typography>
                              <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
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
                                Template Name
                              </Typography>
                              <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                            </div>
                          </div>
                          <div className="cntr5">
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
                                Type
                              </Typography>
                              <select className="inputstyle2" style={{ width: "255px" }}>
                                <option>Select ...</option>
                                <option>image</option>
                                <option>video</option>
                                <option>document</option>
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
                                DLT-Template ID
                              </Typography>
                              <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
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
                            Language
                          </Typography>
                          <select className="inputstyle2" style={{ width: "255px" }}>
                            <option>English</option>
                            <option>Hindi</option>
                            <option>Odia</option>
                            <option>Kannada</option>
                          </select>
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
                        <StyledTableCell align="center">Template Name</StyledTableCell>
                        <StyledTableCell align="center">Template Type</StyledTableCell>
                        <StyledTableCell align="center">Sender I'D</StyledTableCell>
                        <StyledTableCell align="center">Template Content</StyledTableCell>
                        <StyledTableCell align="center">status</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row, index) => (
                        <StyledTableRow key={row.name}>
                          <StyledTableCell component="th" scope="row">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.calories}</StyledTableCell>
                          <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                            <p className="message-status">Promotional</p>
                          </StyledTableCell>
                          <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                          <StyledTableCell align="center">{row.name}</StyledTableCell>
                          <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                            <p className="message-status">Approved</p>
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
        <TabPanel value={value} index={3}>
          <Grid
            style={{ height: "100vh", width: "70vw" }}
          >
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
                  Send GSM Message
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
                      Number
                    </Typography>
                    <input style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "10px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }} placeholder="Number"></input>

                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Upload Your File
                    </Typography>
                    <input type="file" onChange={() => {

                    }} accept="audio/*" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />



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
                    <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "20px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>



                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button style={{ maxWidth: "200px", marginTop: "20px" }}>Send Now</button>
                    </div>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={value} index={4}>
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
                  Report
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
                <select className="seacrch-input">
                  <option>Select Your Report</option>
                  <option>SMS</option>
                  <option>GSM</option>

                </select>
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
                        <StyledTableCell align="center">Campaign Name</StyledTableCell>
                        <StyledTableCell align="center">Sender ID</StyledTableCell>
                        <StyledTableCell align="center">Numbers</StyledTableCell>
                        <StyledTableCell align="center">Credit Used</StyledTableCell>
                        <StyledTableCell align="center">Message</StyledTableCell>
                        <StyledTableCell align="center">status</StyledTableCell>
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
                          <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                          <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                          <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                            <p className="message-status">Completed</p>
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
        {/* <TabPanel value={value} index={4}>
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
                  Groups
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
                    Add New Group
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
                              Add New Group
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
                            Mobile Numbers
                          </Typography>
                          <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "100px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }}></textarea>
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
                        <StyledTableCell align="center">Group ID</StyledTableCell>
                        <StyledTableCell align="center">Group Name</StyledTableCell>
                        <StyledTableCell align="center">Numbers</StyledTableCell>
                        <StyledTableCell align="center">Created By</StyledTableCell>
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
                          <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                          <StyledTableCell align="center">{row.carbs}</StyledTableCell>
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
        </TabPanel> */}
        {/* <TabPanel value={value} index={6}>
          <div id="NCONTACTPAGE_MAIN_BODY">
            <div id="NCONTACTPAGE_TOP_BODY">
              <MdContacts id="NCONTACTPAGE_ICON-ONE" />
              <h2 id="NCONTACTPAGE_HEADING_ONE">Contacts</h2>
            </div>
            <div id="NCONTACTPAGE_PARAGRAPH_DIV">
              <p id="NCONTACTPAGE_PARAGRAPH_ONE">Create, edit your contacts</p>
              <div id="">
                <div id="NCONTACTPAGE_INPUT_BOX">
                  <div>
                    <Paper
                      component="form"
                      style={{
                        width: "260px",
                        height: "2.5rem",
                        borderRadius: "0.625rem",
                        border: "1px solid  black",
                        background: "#FFF",
                        boxShadow: "0px 0px 10px 0px rgba(163, 163, 163, 0.25)",
                        margin: "13px",
                      }}
                    >
                      <IconButton
                        type="button"
                        style={{ p: "150px" }}
                        aria-label="search"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21.7555 20.6065L18.3182 17.2458L18.2376 17.1233C18.0878 16.9742 17.883 16.8902 17.6692 16.8902C17.4554 16.8902 17.2505 16.9742 17.1007 17.1233C14.1795 19.8033 9.67815 19.949 6.58201 17.4637C3.48586 14.9784 2.75567 10.6334 4.87568 7.31017C6.9957 3.98697 11.3081 2.71685 14.9528 4.34214C18.5976 5.96743 20.4438 9.98379 19.267 13.7276C19.1823 13.9981 19.2515 14.2922 19.4487 14.4992C19.6459 14.7062 19.9411 14.7946 20.223 14.7311C20.505 14.6676 20.7309 14.4619 20.8156 14.1914C22.2224 9.74864 20.0977 4.96755 15.8161 2.94106C11.5345 0.914562 6.38084 2.25082 3.68905 6.08542C0.99727 9.92001 1.57518 15.1021 5.04893 18.2795C8.52268 21.4569 13.8498 21.6759 17.5841 18.7949L20.6277 21.7705C20.942 22.0765 21.4502 22.0765 21.7645 21.7705C22.0785 21.4602 22.0785 20.9606 21.7645 20.6503L21.7555 20.6065Z"
                            fill="#121212"
                            fill-opacity="0.7"
                          />
                        </svg>
                      </IconButton>
                      <InputBase
                        style={{ ml: 5, flex: 1, fontSize: "15px" }}
                        placeholder="Search "
                        inputProps={{ "aria-label": "Search " }}
                        onChange={(e) => {
                          // this.props.search_course(courses.course, e.target.value, "search")
                          // console.log("df", this.props.courses.search_course.length)
                        }}
                      />
                    </Paper>
                  </div>
                </div>
              </div>
              <div id="NCONTACTPAGE_BUTTON-BODY">
                <button id="NCONTACTPAGE_BUTTON_UP">+</button>
              </div>
            </div>
         
            <div id="NCONTACTPAGE_CARD_MAIN_BODY">
              <div id="NCONTACTPAGE_CARD_ALL">
                <div id="NCONTACTPAGE_LEFT_BODY">
                  <p id="NCONTACTPAGE_CARD_PARAGRAPH_ONE">Test</p>
                  <p id="NCONTACTPAGE_CARD_PARAGRAPH_TWO">498 contacts</p>
                  <div id="NCONTACTPAGE_CARD_MENU_LIST_ITEM">
                    <div id="NCONTACTPAGE_CARD_UNDER_ICONS_UP_BODY">
                      <LuPenSquare id="NCONTACTPAGE_CARD_UNDER_ICONS" />
                    </div>
                    <div id="NCONTACTPAGE_CARD_UNDER_ICONS_UP_BODY">
                      <TfiMenuAlt id="NCONTACTPAGE_CARD_UNDER_ICONS" />
                    </div>
                    <div id="NCONTACTPAGE_CARD_UNDER_ICONS_UP_BODY">
                      <RiDeleteBin6Line id="NCONTACTPAGE_CARD_UNDER_ICONS" />
                    </div>
                  </div>
                </div>
          
                <div id="NCONTACTPAGE_RIGHT_BODY">
                  <img
                    src={CONTACTIMAGE1}
                    alt=""
                    id="NCONTACTPAGE_RIGHT_BODY_IMAGE"
                  />
                </div>
              </div>
            </div>
          </div>
        </TabPanel> */}
      </Box>
    </Box>
  );
}
