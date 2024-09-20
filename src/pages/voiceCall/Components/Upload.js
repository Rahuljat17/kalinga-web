import React, { Component } from 'react';
import {
  Container,
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
  IconButton
} from "@material-ui/core";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import Loader from '../../../common/loader/components/loader';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import * as XLSX from 'xlsx';
import "./style.css";
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Avatar, Box, Button, List, ListItem, ListItemAvatar, ListItemText, TextField ,Card} from '@mui/material';
import Dropzone from 'react-dropzone';
import ReactPlayer from 'react-player';
import { saveAs } from 'file-saver';
import Snackbar from "../../../common/snackbar/components/snackbar";
import LoaderCon from "../../../common/loader/containers/loader_cont";
import WP from "../../../Accets/wp.png"

class SendMail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      // display: false,
      number: 0,
      message: "",
      file: [],
      mailData: [],
      openModal: false,
      selectedMail: '',
      selectedAccount: '',
      selectedTemplate: '',
      selectedCategory: '',
      reciver_mail: "",
      sending_account: "",
      template: "",
      template_body: "",
      category: "",
      subject: "",
      indi: [

      ],
      data: [
        ['Name', 'Number'],
        ['John Doe', '919938992999'],
        ['Jane Doe', '919988261878'],
      ],
      file: null,
      videoUrl: null,
      imageUrl: null,
      pdfUrl: null,
      selectedFile: null,
    };
  }
  handleSubmit = async () => {
    try {
      await this.props.add_upload_campgin(
        this.state.number,
        this.state.mailData,
        this.state.message,
        this.state.file,
        this.props.login.admin_id
      );
      this.setState({
        openModal: true,
        number: "",
        message: "",
        file: null,
        mailData: [],
      });

    } catch (error) {
      console.error("Error:", error);
    }
  };
  // componentDidMount(){
  //   // console.log(this.state.number,
  //   //   this.state.mailData,
  //   //   this.state.message,
  //   //   this.state.file,
  //   //   this.props.login.admin_id)
  // }
  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const { type } = file;

    if (type.startsWith('video/')) {
      this.setState({ videoUrl: URL.createObjectURL(file) });
    } else if (type.startsWith('image/')) {
      this.setState({ imageUrl: URL.createObjectURL(file) });
    } else if (type === 'application/pdf') {
      this.setState({ pdfUrl: URL.createObjectURL(file) });
    }

    this.setState({ file: file });
  };



  handleChange = (field, value) => {
    this.setState({ [field]: value });
  };

  handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      this.parseExcelData(file);
      this.setState({
        selectedFile: file,
      });
    }
  };
  parseExcelData = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0]; // Assuming you're interested in the first sheet
      const sheet = workbook.Sheets[sheetName];
      const excelData = XLSX.utils.sheet_to_json(sheet);
      console.log(excelData)
      const mailArray = excelData.map((item) => (item.Number));
      this.setState({ mailData: mailArray });
      console.log(mailArray)
    };

    reader.readAsBinaryString(file);
  };
  downloadExcel = () => {
    const { data } = this.state;

    // Create a new workbook and worksheet
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Convert workbook to binary
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    // Save the workbook
    saveAs(
      new Blob([s2ab(wbout)], { type: 'application/octet-stream' }),
      'data.xlsx'
    );
  };

  render() {

    const { file, videoUrl, imageUrl, pdfUrl, selectedFile } = this.state;
    const { openModal } = this.state;
    const styles = {
      container: {
        backgroundColor: "aliceblue",
        padding: "2em",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      },
      grid: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      sectionTitle: {
        fontSize: "1.5rem",
        marginBottom: "1em"
      },
      selectLabel: {
        textAlign: "left"
      },
      select: {
        width: "100%"
      }
    };


    return (

      <div style={{
        // backgroundColor: "aliceblue",
        // boxShadow: "1px -1px 10px",
        // padding: "2em",
        // height: "100vh",
        marginTop: "100px",
        // width:"50%",
        // marginLeft: "7em"
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: 'center',
        flexDirection: "row"
        // alignItems: "flex-start",
      }} maxWidth="lg">






        <Box style={{
          // display: display ? `block` : `none`
          width: "100%",
          paddingLeft: "1.5em"
        }} >

          <Typography style={{
            // paddingLeft: "0.5em"
          }} variant="h6" gutterBottom>
            SendMessage
          </Typography>

          <Tabs style={{
            width: "100%",
            height: "35em"
          }}>




            <TabPanel>
              <Grid item style={{ width: "100%" }}>
                <Typography sx={styles.selectLabel} variant="body1">
                  Import File(xls, xlsx format)

                </Typography>
                <Grid style={{ display: "flex", flexDirection: "row" }}>

                  <IconButton onClick={this.downloadExcel} style={{}}>
                    <DownloadForOfflineIcon style={{ color: "blue" }} />
                  </IconButton>
                  <Typography style={{ marginTop: "14px" }}> Click hear to download the Format</Typography>
                </Grid>
                <div>

                  <input type="file" id="upload" hidden accept=".xls, .xlsx" onChange={this.handleFileUpload} />
                  <label style={{
                    display: "inline-block",
                    backgroundColor: "#000",
                    color: "white",
                    padding: " 0.5rem",
                    //  width: "59px",
                    fontSize: "8px",
                    fontFamily: "sans-serif",
                    borderRadius: " 0.3rem",
                    cursor: "pointer",
                    //  marginTop: "1rem",
                  }} for="upload"><CloudUploadIcon /></label>
                  {selectedFile && (
                    <p>Selected file: {selectedFile.name}</p>
                  )}
                </div>

              </Grid>
              <Grid item style={{ width: "100%" }}>

                <TextField
                  id="name"
                  label="Enter Number Manually"
                  variant="standard"
                  fullWidth
                  type='number'
                  value={this.state.number}
                  onChange={(e) => {
                    this.setState({
                      number: e.target.value
                    })
                  }}
                  // onChange={(e) => {

                  //   // const value = e.target.value;
                    
                  //   // Check if the entered value is a number and its length is not more than 10
                  //   // if (/^\d+$/.test(value) && value.length <= 10000000000) {
                  //     // this.setState({
                  //       // number: value
                  //     // });
                  //   // }
                  // }}
                />
              </Grid>
              <Grid item style={{ width: "100%" }}>

                <TextField
                  id="name"
                  label="Enter Your Message"
                  variant="standard"
                  multiline
                  rows={4}
                  style={{ width: '100%', marginBottom: '1rem' }} // Adjusted styles
                  value={this.state.message}
                  fullWidth
                  onChange={(e) => {
                    this.setState({
                      message: e.target.value
                    })
                  }}
                />

              </Grid>
              <Grid item style={{ width: "100%" }}>
                <Typography variant="h6">
                  Upload IMAGE/PDF/VEDIO
                </Typography>

                <div>


                  {file && (
                    <div>
                      <h3>Uploaded File</h3>
                      {videoUrl && (
                        <div>
                          {/* <h4>Uploaded Video</h4> */}
                          <ReactPlayer url={videoUrl} controls={true} />
                        </div>
                      )}

                      {imageUrl && (
                        <div>
                          {/* <h4>Uploaded Image</h4> */}
                          <img src={imageUrl} alt="Uploaded" style={{ height: "150px" }} />
                        </div>
                      )}

                      {pdfUrl && (
                        <div>
                          {/* <h4>Uploaded PDF</h4> */}
                          <embed src={pdfUrl} type="application/pdf" width="50%" height="400px" />
                        </div>
                      )}
                    </div>
                  )}

                  {!file && (
                    <p>No file selected</p>
                  )}

                  <Dropzone className="dropzone-container" onDrop={this.handleDrop} disabled={file !== null}>
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps({ className: 'dropzone' })} style={{ border: '2px dashed #ccc', padding: '15px', textAlign: 'center', marginBottom: "10px" }} >
                        <input  {...getInputProps()} />
                        <Button className='cssbuttons-io-button'> <svg viewBox="0 0 640 512" fill="white" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"></path></svg>Upload</Button>
                        <p>Drag and drop an Image, PDF, or MP4 file here, or click to select a file</p>
                      </div>
                    )}
                  </Dropzone>

                </div>

              </Grid>




              <Button sx={{
                margin: "2px"
              }}

                onClick={()=>{
                 if(this.state.file===null){ 
                 this.props.createCampgin(
                  this.state.number,
                  this.state.mailData,
                  this.state.message,
                  "no",
                  this.props.login.admin_id
                )
                }
                else{
                    this.props.add_upload_campgin(
                      this.state.number,
                      this.state.mailData,
                      this.state.message,
                      this.state.file,
                      this.props.login.admin_id
                    );
                  }

                  
                }}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: 5,
                  borderRadius: "3px"

                }} variant="contained" color="primary" type="submit">
                Submit
              </Button>


            </TabPanel>


          </Tabs>



        </Box>

        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <img style={{ height: "70vh", maxWidth: "380px",marginTop:"-200px" }} src={WP} alt="Description" />

  <Card style={{marginTop:"-380px",width:"200px",border:"1px solid green",height: "30vh"}}>

  {file && (
    <div style={{ width: "100%" }}>
      <center>
      {videoUrl && (
        <div style={{ marginBottom: "1rem" }}>
          {/* <h4>Uploaded Video</h4> */}
          <ReactPlayer url={videoUrl} controls={true} width="200px" height="150px" />
        </div>
      )}

      {imageUrl && (
        <div style={{ marginBottom: "1rem" }}>
          {/* <h4>Uploaded Image</h4> */}
          <img src={imageUrl} alt="Uploaded" style={{ maxWidth: "220px", height: "100px" }} />
        </div>
      )}

      {pdfUrl && (
        <div style={{ marginBottom: "1rem" }}>
          {/* <h4>Uploaded PDF</h4> */}
          <embed src={pdfUrl} type="application/pdf" width="180px" height="100px" />
        </div>
      )}
      </center>
    
     
    
    </div>
  )}
  <center className='cennnnn'>
  {this.state.message}
  </center>

 



  </Card>
</Box>




        <LoaderCon />
        <Snackbar
          open={this.props.snackbar.response_received}
          close_snack_bar={this.props.close_snack_bar}
          message={this.props.snackbar.message}
        />

        <Dialog
          open={openModal}
          onClose={this.handleCloseModal}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Success</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your data is submitted. Your message will be sent within some minutes.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleCloseModal} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>

    );
  }
}
const s2ab = (s) => {
  const buf = new ArrayBuffer(s.length);
  const view = new Uint8Array(buf);
  for (let i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
  return buf;
};

export default SendMail;
