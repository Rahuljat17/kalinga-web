import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Button } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ContactsIcon from '@mui/icons-material/Contacts';
const WhatsappClient = (props) => {
  const [openModal, setOpenModal] = useState(false); // State variable to manage modal open/close
  const [openModal2, setOpenModal2] = useState(false); // State variable to manage modal open/close
  const [excelnumber, setExcelNumber] = useState([]); // State variable to manage modal open/close
  const [message, setmessage] = useState(''); // State variable to manage modal open/close

  // Function to open the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    props.GetallviewCampaign(props.login.admin_id);
  }, []);
  console.log(props.ncampaign);
  return (
    <>
      <div className="Campaign-main-div">
        <h2>WHATSAPP CAMPAIGN DETAILS</h2>
        <TableContainer
          component={Paper}
          sx={{ marginTop: "20px", marginBottom: "30px" }}
        >
          <Table sx={{ minWidth: "90%" }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Date Campaign</TableCell>
                <TableCell>Bulk Number</TableCell>
                <TableCell> Message</TableCell>
                <TableCell>Single Number</TableCell>
                <TableCell>Sent</TableCell>
                <TableCell>Failed</TableCell>
                <TableCell>Media</TableCell>
                {/* <TableCell>Send</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {Array.isArray(props.ncampaign.all_view_all_campaign) &&
                props.ncampaign.all_view_all_campaign.map((row) => (
                  <TableRow>
                    <TableCell>{row._id}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>
                      <Tooltip title="All Number">



                        <IconButton onClick={() => {
                          setOpenModal(true);
                          setExcelNumber(row.excelnumber)
                        }}>

                          <ContactsIcon />


                        </IconButton>
                      </Tooltip>

                    </TableCell>
                    <TableCell>
                      <Tooltip title="Message">



                        <IconButton onClick={() => {
                          setOpenModal2(true);
                          setmessage(row.message)
                        }}>

                          <ReviewsIcon />


                        </IconButton>
                      </Tooltip>


                     </TableCell>
                    <TableCell>{row.phonenumber}</TableCell>
                    <TableCell>{row.sent}</TableCell>
                    <TableCell>{row.failed}</TableCell>
                    <TableCell><img style={{ width: "100px" }} src={row.data}></img></TableCell>
                    {/* <TableCell>
                      <button className="wp-link-button">WP LINK</button>
                    </TableCell> */}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Dialog
          open={openModal}
          onClose={handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">All Number</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {excelnumber.map((number, index) => (
                <p key={index}>{number}</p>
              ))}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openModal2}
          onClose={()=>{
            setOpenModal2(false);

          }}
        
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Message</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
             {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={()=>{
               setOpenModal2(false);
            }} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};
export default WhatsappClient;
