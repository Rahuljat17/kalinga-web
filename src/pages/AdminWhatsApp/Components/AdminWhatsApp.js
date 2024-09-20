import React, { useState } from "react";
import "../../../pages/ContactUs/Styles/style.css";
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
import Report from "../../../Accets/reportwp.png";
import Profile from "../../../Accets/cont.png";
import Contactpic from "../../../Accets/contactus.png";
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
import MessageIcon from '@mui/icons-material/Message';

import { FaWhatsapp } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

// icons mui

import CloseIcon from '@mui/icons-material/Close';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

// components mui

import Input from '@mui/joy/Input';
import Search from '@mui/icons-material/Search';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { DialogTitle, DialogContent, DialogActions } from "@mui/material";


// table mui

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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

const rows = [
  {
    id: "ID001",
    name: "John Doe",
    username: "johndoe",
    orgName: "Tech Corp",
    email: "johndoe@techcorp.com",
    mobile: "9876543210",
  },
  {
    id: "ID002",
    name: "Jane Smith",
    username: "janesmith",
    orgName: "Innovate Solutions",
    email: "janesmith@innovate.com",
    mobile: "8765432109",
  },
  {
    id: "ID003",
    name: "Robert Brown",
    username: "robertbrown",
    orgName: "NextGen Tech",
    email: "robert@nextgen.com",
    mobile: "7654321098",
  },
  {
    id: "ID004",
    name: "Emily Johnson",
    username: "emilyj",
    orgName: "Alpha Systems",
    email: "emily@alpha.com",
    mobile: "6543210987",
  },
  {
    id: "ID005",
    name: "Michael Lee",
    username: "michaellee",
    orgName: "Future Vision",
    email: "michael@futurevision.com",
    mobile: "5432109876",
  },
  {
    id: "ID006",
    name: "Sophia White",
    username: "sophiaw",
    orgName: "Bright Tech",
    email: "sophia@brighttech.com",
    mobile: "4321098765",
  },
  {
    id: "ID007",
    name: "James Clark",
    username: "jamesc",
    orgName: "Digital Innovators",
    email: "james@digitalinn.com",
    mobile: "3210987654",
  },
  {
    id: "ID008",
    name: "Olivia Martinez",
    username: "oliviam",
    orgName: "Tech Solutions",
    email: "olivia@techsolutions.com",
    mobile: "2109876543",
  },
  {
    id: "ID009",
    name: "David Walker",
    username: "davidw",
    orgName: "Smart Systems",
    email: "david@smartsystems.com",
    mobile: "1098765432",
  },
  {
    id: "ID010",
    name: "Isabella Garcia",
    username: "isabellag",
    orgName: "Quantum Tech",
    email: "isabella@quantumtech.com",
    mobile: "9988776655",
  },
];


export default function PermanentDrawerLeft(props) {
  const [value, setValue] = React.useState(0);
  // const [open, setOpen] = React.useState(false);
  const [modalopen, modalsetOpen] = React.useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    modalsetOpen(true);
  };

  const handleClose = () => {
    modalsetOpen(false);
  };
  const [open, setOpen] = useState(false); // State to control modal visibility
  const [selectedRow, setSelectedRow] = useState(null); // State to store the selected row data

  // Function to handle opening the modal
  const handleViewClick = (row) => {
    setSelectedRow(row);
    setOpen(true);
  };

  // Function to handle closing the modal
  const handleClose2 = () => {
    setOpen(false);
    setSelectedRow(null); // Reset selected row when modal is closed
  };


  return (
    <div >
      <Grid
        style={{
          height: "100vh",
          width: "calc(100vw - 180px)",
          margin: "30px 0 0 140px",
        }}
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
              Manage Users
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
                Add New User
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
                          Add New User
                        </Typography>
                        <Button onClick={handleClose} style={{ height: "38px", color: "white" }}><CloseIcon /></Button>
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
                          Name
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
                          Username
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
                          Org-Name
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
                          Email
                        </Typography>
                        <input type="email" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
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
                          Mobile
                        </Typography>
                        <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                      </div>
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
                    <StyledTableCell align="center">ID</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Username</StyledTableCell>
                    <StyledTableCell align="center">Org-Name</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Mobile</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, index) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.id}</StyledTableCell>
                      <StyledTableCell align="center">{row.name}</StyledTableCell>
                      <StyledTableCell align="center">{row.username}</StyledTableCell>
                      <StyledTableCell align="center">{row.orgName}</StyledTableCell>
                      <StyledTableCell align="center">{row.email}</StyledTableCell>
                      <StyledTableCell align="center">{row.mobile}</StyledTableCell>
                      <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                        <Button style={{ backgroundColor: "#2490ca", color: "white", fontSize: "10px", padding: "3px 10px", margin: "10px 0" }} onClick={() => handleViewClick(row)}>View</Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Dialog open={open} onClose={handleClose}>
              <div style={{ backgroundImage: "linear-gradient(135deg, #3a81bfc4 , #646869b6 )", padding: "20px", color: "white" }}>
                <DialogTitle style={{ textAlign: "center" }}>{selectedRow ? `${selectedRow.name}` : "Details"}</DialogTitle>
                <DialogContent>
                  {selectedRow && (
                    <Grid>
                      <Table>
                        <tr>
                          <td>ID</td>
                          <td>: {selectedRow.id}</td>
                        </tr>
                        <tr>
                          <td>Name</td>
                          <td>: {selectedRow.name}</td>
                        </tr>
                        <tr>
                          <td>Username</td>
                          <td>: {selectedRow.username}</td>
                        </tr>
                        <tr>
                          <td>Org-Name</td>
                          <td>: {selectedRow.orgName}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>: {selectedRow.email}</td>
                        </tr>
                        <tr>
                          <td>Mobile</td>
                          <td>: {selectedRow.mobile}</td>
                        </tr>
                      </Table>
                      <button onClick={handleClose2} style={{ backgroundColor: "rgba(0, 0, 0, 0.267)", color: "white", borderRadius: "50%", width: "40px !important", height: "30px", padding: "3px", margin: "10px 10px 0 0" }}>
                      <EditNoteIcon />
                      </button>
                      <button onClick={handleClose2} style={{ backgroundColor: "rgba(0, 0, 0, 0.267)", color: "white", borderRadius: "50%", width: "40px !important", height: "30px", padding: "3px" }}>
                      <DeleteOutlineIcon />
                      </button>
                      <div>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "14px",
                            margin: "5px 0 -7px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Service
                        </Typography>
                        <select className="inputstyle2">
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
                            fontSize: "14px",
                            margin: "5px 0 -7px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Credit ID
                        </Typography>
                        <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                      </div>
                      <div>
                        <Typography
                          style={{
                            color: "white",
                            fontWeight: 500,
                            fontSize: "14px",
                            margin: "5px 0 -7px",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Credit
                        </Typography>
                        <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />
                      </div>
                    </Grid>
                  )}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose2} style={{ backgroundColor: "white", color: "black" }}>
                    Close
                  </Button>
                  <Button onClick={handleClose2} style={{ backgroundColor: "royalblue", color: "white" }}>
                    Submit
                  </Button>
                </DialogActions>
              </div>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
