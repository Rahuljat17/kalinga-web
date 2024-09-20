import React, { useState } from 'react';
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "../../../router/styles/drawer.css";
import { MdContacts } from "react-icons/md";
import { IoArrowRedo } from "react-icons/io5";
import { LuPenSquare } from "react-icons/lu";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import { Button, IconButton, Paper } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import CircularProgress from '@mui/material/CircularProgress';

import PARTICIPATLOGO2 from "../../../Accets/paticipat logo2.png";

import Input from '@mui/joy/Input';
import Search from '@mui/icons-material/Search';
import { Card, Divider, Grid } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { Dialog, DialogContent, DialogActions } from '@mui/material';


// MUI icons


import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VoiceChatIcon from '@mui/icons-material/VoiceChat';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined';
import InterpreterModeOutlinedIcon from '@mui/icons-material/InterpreterModeOutlined';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

  // Function to handle file selection

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

export default function PermanentDrawerLeft(props) {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [audioSrc, setAudioSrc] = useState(null);
  const [credit, setCredit] = useState(props.login.credit_details.voicecall); // Initial credit
  const [inputValue, setInputValue] = useState(''); // To store input
  const [error, setError] = useState(''); // To store error messages
  const [loading, setLoading] = useState(false); // To show loading state
  const [successMessage, setSuccessMessage] = useState('');

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
        setSuccessMessage('Voice SMS Sent successfully!');
      }, 10000); // 10000 milliseconds = 10 seconds
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
    if (successMessage) {
      setSuccessMessage(''); // Reset the success message
    }
  };

  const handleAudioUpload = (event) => {
    const file = event.target.files[0];

    URL.revokeObjectURL(audioSrc);

    if (file) {
      const audioURL = URL.createObjectURL(file);
      setAudioSrc(audioURL);
    }
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
            color: "#b000ff",
          }}
        >
          <VoiceChatIcon sx={{ margin: "20px 10px -8px", fontSize: "30px" }} />Voice Call
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
                  <Filter1OutlinedIcon
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
                label="Single Voice SMS"
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
                  <DynamicFeedOutlinedIcon
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
                label="Bulk Voice SMS"
                {...a11yProps(1)}
              />

              {/* <Tab
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
                style={{ color: "#242424" }}
                icon={
                  <InterpreterModeOutlinedIcon
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
                label="GSM"
                {...a11yProps(1)}
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
                style={{ color: "#242424" }}
                icon={
                  <DriveFolderUploadOutlinedIcon
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
                label="Report"
                {...a11yProps(2)}
              />

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
                  Send Voice SMS
                </Typography>
              </Grid>

              <h4 style={{ margin: " 0 20px -10px 230px", backgroundImage: "linear-gradient(90deg, #9bd0ffc4 , #ffffffb6 )", padding: "10px 20px", width: "fit-content", borderRadius: "10px" }}>Available Credit: {credit}</h4>
              {/* {loading && <h4 style={{ margin: " 20px 20px -10px 230px", backgroundImage: "linear-gradient(90deg, #9bd0ffc4 , #ffffffb6 )", padding: "10px 20px", width: "fit-content", borderRadius: "10px" }}><CircularProgress style={{ width: "25px", height: "25px", margin: "0 10px -6px 0" }} /> Processing... Please wait</h4>}
              {successMessage && (
                <h4 style={{
                  margin: "20px 20px -10px 230px",
                  backgroundImage: "linear-gradient(90deg, #9bd0ffc4 , #ffffffb6 )",
                  padding: "10px 20px",
                  width: "fit-content",
                  borderRadius: "10px",
                  color: "green"
                }}>
                  {successMessage}
                </h4>
              )} */}

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
                    <input style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "10px", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }} onChange={handleInputChange} placeholder="Number"></input>
                    {error && <p style={{ color: 'red', margin: "0" }}>{error}</p>}
                    <div className="cntr5">
                      <div style={{ width: "48%"}}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          No of Retries
                        </Typography>
                        <select className="inputstyle2">
                          <option>Select ...</option>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                        </select>
                      </div>
                      <div style={{ width: "48%"}}>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "17px",
                            marginTop: "10px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Interval of Retries
                        </Typography>
                        <select className="inputstyle2">
                          <option>Select ...</option>
                          <option>15 sec</option>
                          <option>30 sec</option>

                        </select>
                      </div>
                    </div>

                    <textarea style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "10px", height: "100px", fontSize: "18px", margin: "10px 0px", padding: "10px 10px", color: "white", outline: "none" }} placeholder="Message Text"></textarea>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Voice File
                    </Typography>
                    <input type="file" onChange={handleAudioUpload} accept="audio/*" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                    {audioSrc && (
                      <div>
                        <audio controls style={{ width: "100%" }}>
                          <source src={audioSrc} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button style={{ maxWidth: "200px", marginTop: "20px" }} onClick={handleCredit}>Send Instant Voice SMS</button>
                    </div>
                    {/* Popup modal */}
                    <Dialog open={open} onClose={handleClose} style={{ zIndex: "10000" }}>
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
                          <Button onClick={handleClose} color="primary">
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
                  padding: "35px 20px 0px 20px ",
                }}
              >
                <Typography
                  style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                >
                  Send Bulk Voice SMS
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
                      Upload CSV File
                    </Typography>
                    <input type="file" onChange={handleAudioUpload} accept="audio/*" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />

                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "17px",
                        marginTop: "10px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      No of Retries
                    </Typography>
                    <select className="inputstyle2">
                      <option>Select ...</option>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
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
                      Interval for Retries
                    </Typography>
                    <select className="inputstyle2">
                      <option>Select ...</option>
                      <option>15 sec</option>
                      <option>30 sec</option>

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
                      Voice File
                    </Typography>
                    <input type="file" onChange={handleAudioUpload} accept="audio/*" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                    {audioSrc && (
                      <div>
                        <audio controls style={{ width: "100%" }}>
                          <source src={audioSrc} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button style={{ maxWidth: "200px", marginTop: "20px" }}>Send Instant Voice SMS</button>
                    </div>
                  </Grid>
                </Card>
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

                        <StyledTableCell align="center">GSM</StyledTableCell>
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
      </Box>
    </Box>
  );
}
