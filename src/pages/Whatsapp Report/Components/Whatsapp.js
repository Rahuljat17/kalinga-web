import React, { useState } from 'react';
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
import CircularProgress from '@mui/material/CircularProgress';
import Report from "../../../Accets/reportwp.png";
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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Input from '@mui/joy/Input';
import Search from '@mui/icons-material/Search';
import { FaWhatsapp } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Dialog, DialogContent, DialogActions } from '@mui/material';
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
  const [credit, setCredit] =  useState(props.login.credit_details.whatsapp);; // Initial credit
  // const [credit, setCredit] =  useState(5);; // Initial credit
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
        setSuccessMessage('Message Sent successfully!');
      }, 10000); // 10000 milliseconds = 10 seconds
    }
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
    if (successMessage) {
      setSuccessMessage(''); // Reset the success message
    }
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
        <Typography
          style={{
            margin: "20px 0px 0px",
            textAlign: "center",
            fontWeight: 500,
            fontSize: "22px",
            color: "green",
          }}
        >
          <WhatsAppIcon sx={{ margin: "20px 10px -5px", fontSize: "30px" }} />WhatsApp
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
                  backgroundColor: value === 0 ? "#dcdcdc" : "transparent",
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
                  <img
                    src={Profile}
                    style={{
                      height: "35px",
                      width: "35px",
                      marginBottom: "0px",
                    }}
                  />
                }
                label="Vitrual Whatsapp"
                style={{ color: "#242424" }}
                {...a11yProps(0)}
              ></Tab>

              <Tab
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  gap: "20px",
                  backgroundColor: value === 1 ? "#dcdcdc" : "transparent",
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
                  <img
                    src={Report}
                    style={{
                      height: "35px",
                      width: "35px",
                      marginBottom: "0px",
                    }}
                  />
                }
                label="Report"
                style={{ color: "#242424" }}
                {...a11yProps(0)}
              ></Tab>
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
                  padding: "50px 20px 20px 20px ",
                }}
              >
                <Typography
                  style={{ fontSize: "25px", fontWeight: 700, textAlign: "center", width: "100%" }}
                >
                  Welcome to Virtual Whatsapp
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
                        fontSize: "19px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Phone Number or Upload .xlsx file
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
                      value={inputValue} // Use inputValue state
                      placeholder="Enter Number (comma separated)"
                      onChange={handleInputChange} // Call handleInputChange on input
                    />
                    {error && <p style={{ color: 'red', margin: "0" }}>{error}</p>}
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
                      <button style={{ maxWidth: "200px", marginTop: "20px" }} onClick={handleCredit}>Send Message</button>
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

                        <StyledTableCell align="center">Sender</StyledTableCell>
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
