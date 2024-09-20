import React from "react";
import "../styles/dashboard.css";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Card, Divider, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FaWhatsapp from '../../../Rectangle.png';
import BWhatsapp from '../../../wb.png';
import Sms from '../../../mess.png';
import Voice from '../../../voicecall.png';

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Link } from "react-router-dom";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "transparent" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundImage:
      theme.palette.mode === "light"
        ? "linear-gradient(89.97deg, white 0%, #ADD8E6 100%)"
        : "linear-gradient(89.97deg, #9747FF 1.43%, rgba(56, 182, 255, 0.33) 134.69%)",
  },
}));

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
  // { name: 'Frozen yoghurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  // { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3 },
  // { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  // { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  // { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];
const Dashboard = (props) => {
  const [account, setAccount] = React.useState('');

  const handleChange = (event) => {
    setAccount(event.target.value);
  };
  

  
  return (
    <Grid style={{ backgroundColor: "white", padding: "0px 1vw" }}>
      <Grid style={{ marginTop: "4%" }}>
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
            padding: "50px 20px 7px 20px ",
          }}
        >
          <Typography
            style={{ color: "black", fontSize: "28px", fontWeight: 700 }}
          >
            Dashboard
          </Typography>

        </Grid>
        <Grid style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "30px" }}>
          <div className="credit-card">
            <div className="icon">
              <img src={FaWhatsapp} />
            </div>
            <div className="details">
              <h2>Whatsapp</h2>
              <p className="total-credit">Total: {props.login.credit_details.whatsapp} Credit</p>
              <p className="total-used">Total Used: 0</p>
            </div>
            <Link to="/contactUs" style={{width: "100%"}}>
              <button className="buy-credit-btn">Buy Credit</button>
            </Link>
          </div>
          <div className="credit-card">
            <div className="icon">
              <img src={BWhatsapp} />
            </div>
            <div className="details">
              <h2>Business Whatsapp</h2>
              <p className="total-credit">Total: {props.login.credit_details.businesswhatsapp} Credit</p>
              <p className="total-used">Total Used: 0</p>
            </div>
            <Link to="/contactUs">
              <button className="buy-credit-btn">Buy Credit</button>
            </Link>
          </div>
          <div className="credit-card">
            <div className="icon">
              <img src={Sms} style={{ height: "150px", width: "150px", marginTop: "30px" }} />
            </div>
            <div className="details">
              <h2>SMS</h2>
              <p className="total-credit">Total: {props.login.credit_details.sms} Credit</p>
              <p className="total-used">Total Used: 0</p>
            </div>
            <Link to="/contactUs">
              <button className="buy-credit-btn">Buy Credit</button>
            </Link>
          </div>
          <div className="credit-card">
            <div className="icon">
              <img src={Voice} />
            </div>
            <div className="details">
              <h2>Voice Call</h2>
              <p className="total-credit">Total: {props.login.credit_details.voicecall} Credit</p>
              <p className="total-used">Total Used: 0</p>
            </div>
            <Link to="/contactUs">
              <button className="buy-credit-btn">Buy Credit</button>
            </Link>
          </div>
        </Grid>





        <Grid className="second-card">
          <Typography
            style={{
              fontWeight: 700,
              fontFamily: "Poppins",
              fontSize: "25px",
              margin: "10px",
            }}
          >
            Message History
          </Typography>
          <Divider style={{ background: "#888", margin: "10px" }}></Divider>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>S. No</StyledTableCell>
                  <StyledTableCell align="center">Numbers</StyledTableCell>
                  <StyledTableCell align="center">Messages</StyledTableCell>
                  <StyledTableCell align="center">Date / Time</StyledTableCell>
                  <StyledTableCell align="center">status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.length > 0 ? (
                  rows.map((row, index) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {index + 1}
                      </StyledTableCell>
                      <StyledTableCell align="center">{row.calories}</StyledTableCell>
                      <StyledTableCell align="center">{row.fat}</StyledTableCell>
                      <StyledTableCell align="center">{row.carbs}</StyledTableCell>
                      <StyledTableCell align="center" style={{ display: "flex", justifyContent: "center" }}>
                        <p className="message-status">Completed</p>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))
                ) : (
                  <StyledTableRow>
                    <StyledTableCell colSpan={5} align="center">
                      No results found
                    </StyledTableCell>
                  </StyledTableRow>
                )}

              </TableBody>
            </Table>
          </TableContainer>

        </Grid>


      </Grid>
    </Grid>
  );
};

export default Dashboard;
