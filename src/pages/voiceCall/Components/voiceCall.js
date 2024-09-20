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
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import { FaWhatsapp } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

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
  const [audioSrc, setAudioSrc] = useState(null);

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
            color: "#9e3131",
          }}
        >
          <RecordVoiceOverIcon sx={{ margin: "20px 10px -8px", fontSize: "30px" }} />Voice Call
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
                  color: "black",
                  borderRadius: "28px",
                  margin: "0px 8px 15px 15px",
                  textTransform: "capitalize",
                  // opacity: 0.7,
                  fontSize: "15px",
                  textAlign: "center",
                  minHeight: value === 0 ? "20px" : "10px", // Adjust minHeight instead of height
                  alignItems: "center", // Align content vertically
                }}
                style={{ color: "#242424" }}
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
                label="Voice Call"
                {...a11yProps(1)}
              />

            </Tabs>
          </Box>
        </List>
      </Drawer>

      <Box style={{ backgroundColor: "white" }}>
        <TabPanel value={value} index={0}>
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
                  Voice Call
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
                        width: "100%",
                        fontWeight: 500,
                        fontSize: "15px",
                        marginTop: "10px",
                      }}
                    >
                      Random caller ID will be used. Each voice call will be manually approved (no spam, fraud allowed).
                    </Typography>
                    <Typography
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "15px",
                        margin: "20px auto 20px",
                      }}
                    >
                      Voice call cost: Rs 0.10 per 15 sec (on submission)
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
                      Mobile Number
                    </Typography>
                    <input type="text" style={{ width: "100%", backgroundColor: "transparent", border: "1px solid white", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} />

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
                    <input type="file" onChange={handleAudioUpload} accept="audio/*" style={{ width: "100%", backgroundColor: "transparent", border: "none", borderRadius: "30px", height: "40px", width: "100%", fontSize: "18px", margin: "10px 0px", padding: "0px 10px", color: "white", outline: "none" }} placeholder="Enter Number (comma separated)" />
                    {audioSrc && (
                      <div>
                        <audio controls style={{ width: "100%" }}>
                          <source src={audioSrc} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                    <Typography
                      style={{
                        color: "#e5e5e5",
                        fontWeight: 500,
                        fontSize: "15px",
                        marginTop: "15px",
                        marginBottom: "15px",
                        whiteSpace: "nowrap",
                        textAlign: "center",
                      }}
                    >
                      Transactional voice file needs Approval before sending.
                    </Typography>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <button style={{ maxWidth: "200px", marginTop: "20px" }}>Send Voice Call</button>
                    </div>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel style={{ backgroundColor: "black" }} value={value} index={1}>
          <div id="NWHATPROFILE_PAGE_MAIN_BODY">
            <div id="NWHATPROFILE_TOP-BODY">
              <img src={PROFILELOGO2} alt="" id="NWHATPROFILE_PAGE_image_one" />
              <h3 id="NWHATPROFILE_PAGE_HEADING_ONE">Profile</h3>
            </div>
            <p id="NWHATPROFILE_PAGE_PARAGRAPH_ONE">
              Information WhatsApp account
            </p>
            <div id="NWHATPROFILE_PAGE_DROPDOWN">
              <select name="" id="NWHATPROFILE_PAGE_select" selected>
                <FaWhatsapp id="NWHATPROFILE_PAGE-ICON" />
                <option value="" id="NWHATPROFILE_PAGE_option" selected>
                  <FaWhatsapp id="NWHATPROFILE_PAGE-ICON" />
                  Select Whatsapp Accounts
                </option>
                <option value=""></option>
              </select>
            </div>
            {/* <div id="NWHATPROFILE_PAGE_IMAGE">
          <img src={PROFILELOGO3} alt="" id="NWHATPROFILE_PAGE_IMAGE_UNDER" />
        </div> */}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div id="BULKMESSAGE_PAGE_MAIN_BODY">
            {/* top  */}
            <div id="BULKMESSAGE_PAGE_TOP_BODY">
              <div id="BULKMESSAGE_PAGE_UP_TOP_BODY">
                <div id="">
                  <img
                    src={BULKMESSAGELOGO}
                    alt=""
                    id="BULKMESSAGE_PAGE_LOGO_ONE"
                  />
                </div>
                <h2 id="BULKMESSAGE_PAGE_TOP_HEADING_ONE">Bulk Messaging</h2>
              </div>
              {/*  */}
              <div id="BULKMESSAGE_PAGE_SEARCH_SECTION">
                <div id="BULKMESSAGE_PAGE_SEARCH_PARAGRAPH">
                  <p id="BULKMESSAGE_PAGE_SEARCH_PARAGRAPH_ONE">
                    Send to multiple recipients
                  </p>
                </div>
                <div id="BULKMESSAGE_PAGE_SEARCH_INPUT_BOX">
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
                <div id="BULKMESSAGE_PAGE_SEARCH_BUTTON-BODY">
                  <button id="BULKMESSAGE_PAGE_SEARCH_BUTTON_UP">+</button>
                </div>
                {/*  */}
                <div id="BULKMESSAGE_PAGE_SEARCH_LOGO_TWO">
                  <img
                    src={BULKLOGO2}
                    alt=""
                    id="BULKMESSAGE_PAGE_SEARCH_LOGO_TWO"
                  />
                </div>
              </div>
            </div>
            {/* card body */}
            <div id="BULKMESSAGE_PAGE_CARD_MAIN_BODY">
              {/* image section */}
              <div id="BULKMESSAGE_PAGE_CARD_IMAGE_SECTION">
                <img
                  src={BULKLOGO3}
                  alt=""
                  id="BULKMESSAGE_PAGE_CARD_IMAGE_ONE"
                />
                <div id="BULKMESSAGE_PAGE_CARD_HEADING">
                  <h3 id="BULKMESSAGE_PAGE_CARD_HEADING_ONE">
                    Greeting from Rapify
                  </h3>
                  <p id="BULKMESSAGE_PAGE_CARD_PARAGRAPH_ONE">498 contacts</p>
                </div>
              </div>
              {/* 3crad section */}
              <div id="BULKMESSGE_PAGE_3RD_CARD_SECTION">
                {/* 1st card */}
                <div id="BULKMESSGE_PAGE_3RD_CARD_ONE">
                  <div id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE">
                    <p id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE_PARA_ONE">3</p>
                    <p id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE_PARA_TWO">Send</p>
                  </div>
                  <div id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE">
                    <img
                      src={LOGO3}
                      alt=""
                      id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE_LOGO"
                    />
                  </div>
                </div>
                {/* 2nd card */}
                <div id="BULKMESSGE_PAGE_3RD_CARD_ONE">
                  <div id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE">
                    <p id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE_PARA_ONE">2</p>
                    <p id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE_PARA_TWO">
                      Pending
                    </p>
                  </div>
                  <div id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE">
                    <img
                      src="https://s3-alpha-sig.figma.com/img/af40/9f29/46515fa54bea4c3973542e1048ccf0bf?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nRLH0JwFyPkH5YZ~ex-0MGhDYIxvuMYrChC1dWHrf8Gj~NyZbQArfQPP61jYDnJe9N5tUA3ucTXN-8xx4dr2S8X-I3i2I-RGme~h7afVc8fj6ajvVLSUKGkiaipe1MWoLa4J4nkLnV5abqzx-REXPuDUa9-vI~xkb2w0pg0xz0aq8X1DEsUl8lnd9v~CDN11uHqKqNCWHfo~euRBzwQ7MBn~AkWOaMYGW4uLJ9F-eIebJv0VQfUsJzzQRGgBmOLGaDWQqYmVEsN93QhU62UIPDvE1Ojtnm6BVBh0zyZWa1BQnRvOJDF-12gDEytfRN3-cBdANCQiryAu68V8eJu0hQ__"
                      alt=""
                      id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE_LOGO"
                    />
                  </div>
                </div>
                {/* 3rd card */}
                <div id="BULKMESSGE_PAGE_3RD_CARD_ONE">
                  <div id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE">
                    <p id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE_PARA_ONE_three">
                      495
                    </p>
                    <p id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE_PARA_TWO_three">
                      Failed
                    </p>
                  </div>
                  <div id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE">
                    <img
                      src={LOGO7}
                      alt=""
                      id="BULKMESSGE_PAGE_3RD_CARD_LEFT_SIDE_LOGO"
                    />
                  </div>
                </div>
              </div>
              {/* toogle section */}
              <div id="BULKMESSGE_PAGE_TOGGLE_SECTION">
                <div id="BULKMESSGE_PAGE_TOGGLE_SECTION_PARAGRAPH">
                  <p id="BULKMESSGE_PAGE_TOGGLE_SECTION_PARAGRAPH_ONE">
                    Status
                  </p>
                </div>
                <div id="BULKMESSGE_PAGE_TOGGLE_SECTION_TWO_CONTAINER">
                  <input type="checkbox" name="checkbox" id="toggle" />
                  <label htmlFor="toggle" className="switch"></label>
                  {/* <input type="checkbox" id="CHECK_BULKMESSAGE_PAGE_INPUT_ONE" />
              <label htmlFor="check" id="CHECK_BULKMESSAGE_PAGE_BUTTON"></label> */}
                </div>
              </div>
              <h3 id="CHECK_BULKMESSAGE_PAGE_BUTTON_HEADING">
                Next action: 12/02/2024 2:30 PM
              </h3>
              {/* last 3 card */}
              <div id="BULKMESSGE_PAGE_LAST_CARD_SECTION">
                {/* 1st card */}
                <div id="BULKMESSGE_PAGE_LAST_CARD_SECTION_ONE">
                  <div id="BULKMESSGE_PAGE_LAST_CARD_SECTION_UP">
                    <FaRegPenToSquare />
                    <p id="BULKMESSGE_PAGE_LAST_CARD_SECTION_UP_PARA">Edit</p>
                  </div>
                </div>
                {/* 2nd card */}
                <div id="BULKMESSGE_PAGE_LAST_CARD_SECTION_ONE">
                  <div id="BULKMESSGE_PAGE_LAST_CARD_SECTION_UP">
                    <RiBarChartLine />
                    <p id="BULKMESSGE_PAGE_LAST_CARD_SECTION_UP_PARA">Report</p>
                  </div>
                </div>
                {/* 3rd card */}
                <div id="BULKMESSGE_PAGE_LAST_CARD_SECTION_ONE">
                  <div id="BULKMESSGE_PAGE_LAST_CARD_SECTION_UP">
                    <RiDeleteBin6Line />
                    <p id="BULKMESSGE_PAGE_LAST_CARD_SECTION_UP_PARA">Delete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div id="Snwhatspage_MAIN_BODY">
            <div id="SNSWHATPAGE_TOP-MAIN_BODY">
              <div id="Snwhatspage_TOP_BODY">
                <img src={robotLogo} alt="" />
                <h3 id="Snwhatspage_CONTENT_HEADING_ONE">ChatBot</h3>
              </div>
              <div id="SNSWHATSPAGE_PARAGRAPH_ONE-HEADE">
                <p id="SNSWHATPAGE_PARAGRAPH_ONE">Communicate with users</p>
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
            {/* card section */}
            <div id="SNSWHATSPAGE_CARD_MAIN_BODY_POSITION">
              <div id="SNSWHATPAGE_CARD_MAIN_BODY">
                <div id="SNSWHATPAGE_CARD_BODY">
                  <div id="SNSWHATSPAGE_IMAGE_CARD">
                    <img
                      src={NSWHATLOGO3}
                      alt=""
                      id="SNSWHATSPAGE_CARD_IMAGE_ONE"
                    />
                    <div id="SNSWHATSPAGE_CARD_IMAGE-SECTION-TWO">
                      <img
                        src={{}}
                        alt=""
                        id="SNSWHATSPAGE_CARD_IMAGE_TWO"
                      />
                      <div id="SNSWHATSPAGE_CARD_SECTION_ONE">
                        <h3 id="SNSWHATSPAGE_CARD_HEADING_ONE">Rapify</h3>
                        <p id="SNSWHATSPAGE_CARD_PARAGRAPH_ONE">
                          +91 9108433140
                        </p>
                      </div>
                    </div>
                    {/*  */}
                    <div id="SNSWHATSPAGE_CARD_SECTION_THREE">
                      <div id="SNSWHATPAGE_CARD_SECTION_THREE_FIRST_CARD">
                        <div id="SNSWHATSPAGE_CARD-SECTION_THREE_UNDER_BODY">
                          <div id="SNSWHATSPAGE_THIRD_PARAGRAPH_UNDER_div">
                            <p id="SNSWHATSPAGE_THIRD_PARAGRAPH_UNDER">0</p>
                            <p id="SNSWHATSPAGE_THIRD_PARAGRAPH_UNDER_TWO">
                              Send
                            </p>
                          </div>
                          <div id="">
                            <img
                              src={CARDLOGO5}
                              alt=""
                              id="SNSWHATSPAGE_THIRD_PARAGRAPH_UNDER_TWO_IMAGE"
                            />
                          </div>
                        </div>
                      </div>
                      {/* 2nd card */}
                      <div id="SNSWHATPAGE_CARD_SECTION_THREE_FIRST_CARD_two">
                        <div id="SNSWHATPAGE_CARD_SECTION_THREE_FIRST_CARD">
                          <div id="SNSWHATSPAGE_CARD-SECTION_THREE_UNDER_BODY">
                            <div id="SNSWHATSPAGE_THIRD_PARAGRAPH_UNDER_div">
                              <p id="SNSWHATSPAGE_THIRD_PARAGRAPH_UNDER">0</p>
                              <p id="SNSWHATSPAGE_THIRD_PARAGRAPH_UNDER_TWO">
                                Items
                              </p>
                            </div>
                            <div id="">
                              <img
                                src={CARDLOGO6}
                                alt=""
                                id="SNSWHATSPAGE_THIRD_PARAGRAPH_UNDER_TWO_IMAGE"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 3rd card  */}
                  <div id="SNSWHATSPAGE_FOUR-CARD_SECTION_MAIN_BODY">
                    <p id="SNSWHATSPAGE_FOUR-CARD_SECTION_MAIN_BODY_PARA">
                      Please add at least a chatbot item and enable it to can
                      start
                    </p>
                  </div>
                  {/*  */}
                  <div id="SNSWHATSPAGE_FIVE-CARD_SECTION_MAIN_BODY">
                    {/* firstcard */}
                    <div id="SNSWHATSPAGE_FIVE-CARD_SECTION_FIRST_CARD">
                      <div id="SNSWHATSPAGE_FIVE-CARD_SECTION_UNDERBODY">
                        <LuPlusSquare id="SNSWHATSPAGE_ICON-ONE" />
                        <div id="">
                          <p id="SNSWHATSPAGE_ICON-ONE_PARAGRAPH_ONE">
                            Add Items
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* second card */}
                    <div id="SNSWHATSPAGE_FIVE-CARD_SECTION_SECOND_CARD">
                      <div id="SNSWHATSPAGE_FIVE-CARD_SECTION_UNDERBODY">
                        <TfiMenuAlt id="SNSWHATSPAGE_ICON-ONE" />
                        <div id="">
                          <p id="SNSWHATSPAGE_ICON-ONE_PARAGRAPH_ONE">
                            Add Items
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <div id="PATICIPATE_PAGE_MAIN_SECTION">
            <div id="PATICIPATE_PAGE_TOP_SECTION">
              <IoArrowRedo id="PATICIPATE_PAGE_ICON_ONE" />
              <h2 id="PATICIPATE_PAGE_HEADING_ONE">Export participants</h2>
            </div>
            <div id="PATICIPATE_PAGE_PARAGRAPH_ONE">
              <p id="PATICIPATE_PAGE_PARAGRAPH_ONE_UP">
                Export participant list
              </p>
            </div>
            {/*  */}
            <div id="PATICIPATE_PAGE_DROPDOWN">
              <select name="" id="PATICIPATE_PAGE_select" selected>
                <FaWhatsapp id="PATICIPATE_PAGE-ICON" />
                <option value="" id="PATICIPATE_PAGE_option" selected>
                  <FaWhatsapp id="PATICIPATE_PAGE-ICON" />
                  Select Whatsapp Accounts
                </option>
                <option value=""></option>
              </select>
            </div>
            {/*  */}
            <div id="PATICIPATE_PAGE_CARD_MAIN_BODY">
              <div id="PATICIPATE_PAGE_CARD_TOP">
                <p id="PATICIPATE_PAGE_CARD_TOP_PARAGRAPH_ONE">How To Use?</p>
                <hr id="PATICIPATE_PAGE_HR_ONE" />
                <p id="PATICIPATE_PAGE_CARD_TOP_PARAGRAPH_ONE">
                  1. Send a message to group you want export participants
                </p>
                <hr id="PATICIPATE_PAGE_HR_ONE" />
                <p id="PATICIPATE_PAGE_CARD_TOP_PARAGRAPH_ONE">
                  2. Select account you want export participants
                </p>
                <hr id="PATICIPATE_PAGE_HR_ONE" />
                <p id="PATICIPATE_PAGE_CARD_TOP_PARAGRAPH_ONE">
                  3. Click Download button of group you want export on list
                </p>
              </div>
            </div>
            {/* image section */}
            <div id="PATICIPATE_PAGE_CARD_IMAGE">
              <img
                src={PARTICIPATLOGO2}
                alt=""
                id="PATICIPATE_PAGE_CARD_IMAGE_FLEX"
              />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
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
            {/*  */}
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
                {/*  right body*/}
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
        </TabPanel>
      </Box>
    </Box>
  );
}
