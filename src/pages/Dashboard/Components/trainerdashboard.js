import React, { Component } from "react";
import "../styles/Studashboard.scss";
import { Box, Button, Dialog, Divider, Grid, Typography, Card, DialogTitle, DialogContent, TextField } from "@mui/material";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import TimelineIcon from "@mui/icons-material/Timeline";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import VideocamIcon from "@mui/icons-material/Videocam";
import PersonIcon from "@mui/icons-material/Person";
import { AiOutlineCalendar } from "react-icons/ai";
// import img1 from "../../../admin/Recordedclass/Component/Images/online-event.jpg"
import img1 from "../../Images/online-event.jpg";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Textarea from "@mui/joy/Textarea/Textarea";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Third from "../../Images/third.png"
import IconButton from "@mui/material/IconButton";
import moment from "moment";
import Snackbar from "../../../common/snackbar/components/snackbar";
import LoaderCon from "../../../common/loader/containers/loader_cont";


import GroupIcon from '@mui/icons-material/Group';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, Legend } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  width: "80%",
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#4C6FFF" : "#4C6FFF",
  },
}));
const BorderLinearProgress2 = styled(LinearProgress)(({ theme }) => ({
  width: "80%",
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 100 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#ffe925" : "#ffe925",
  },
}));

export default class Studashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      assigementModalOpen: false,
      openStudntDetailsForm: false,
      tnoticeviewmodal: false,
      tjoinclass: false,
      noticeviewmodaladmin: false,
      data: [
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
        {
          coursename: "PG Program On Full Stack Development With PHP Or Python",
          batch: "(Batch IV)",
          subject: "Html",
          session: "Session 1",
          date: "Monday, 28 June 2021",
          trainer: "Ankit Das",
          time: "02.00 -03.30 PM"
        },
      ]
    };
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#F9FDFE";
    this.props.viewAllNotice();
    this.props.viewCompletedCourse();
    this.props.view_course_inprogress_by_trainer(this.props.login.user_id);
    this.props.view_course_completed_by_trainer(this.props.login.user_id);
    this.props.view_trainer_course(this.props.login.user_id);
    this.props.viewScheduleClassByTrainer(this.props.login.user_id);
    this.props.viewMonthlyFeedback()
    // this.props.viewBatchLengthByCourse();
    this.props.viewMonthlyFeedback();
    console.log("mappppppppppppp", this.props.dashboard.schedule_by_trainer);
  };
  render() {
    const datas = [
      { name: 'completed ', value: this.props.dashboard.completed_course.length },
      { name: 'inprogress ', value: this.props.dashboard.in_progress_length },

    ];

    const data = [];

    {
      Array.isArray(this.props.dashboard.view_monthly_feedback) && this.props.dashboard.view_monthly_feedback.map((item) => {

        if (item._id.month === 1) {
          data.push({ name: 'Jan', value: item.feedbacks.length });
        }
        if (item._id.month === 2) {
          data.push({ name: 'Feb', value: item.feedbacks.length });
        }
        if (item._id.month === 3) {
          data.push({ name: 'Mar', value: item.feedbacks.length });
        }
        if (item._id.month === 4) {
          data.push({ name: 'Apr', value: item.feedbacks.length });
        }
        if (item._id.month === 5) {
          data.push({ name: 'May', value: item.feedbacks.length });
        }
        if (item._id.month === 6) {
          data.push({ name: 'Jun', value: item.feedbacks.length });
        }
        if (item._id.month === 7) {
          data.push({ name: 'Jul', value: item.feedbacks.length });
        }
        if (item._id.month === 8) {
          data.push({ name: 'Aug', value: item.feedbacks.length });
        }
        if (item._id.month === 9) {
          data.push({ name: 'Sep', value: item.feedbacks.length });
        }
        if (item._id.month === 10) {
          data.push({ name: 'Oct', value: item.feedbacks.length });
        }
        if (item._id.month === 11) {
          data.push({ name: 'Nov', value: item.feedbacks.length });
        }
        if (item._id.month === 12) {
          data.push({ name: 'Dec', value: item.feedbacks.length });
        }
      });
    }


    const { dashboard, courses, snackbar, close_snack_bar } =
      this.props;
    return (
      <Grid>
        <Grid style={{ marginTop: "8%" }}>
          <div className="task-nav">
            <Box className="completed">
              <div className="tasknavtopaccessSection">
                <div id="access-icon" className="icon">
                  <TimelineIcon />
                </div>
                <div className="task-nav-line-space">
                  <h2>{(courses.course_length) - (dashboard.course_in_progress)}/{courses.course_length}</h2>
                  <h6 style={{ color: "var(--Paragraph, #767278)" }}>Courses in progress</h6>
                </div>
              </div>
              <div className="bottomTaskNav">
                <Box
                  sx={{ flexGrow: 1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "18px",
                    justifyContent: "space-between",
                    paddingInlineStart: "0px",
                    marginBlock: "12px",
                    marginInline: "7px",
                  }}
                >
                  <BorderLinearProgress2 className="brdr2"
                    variant="determinate"
                    value={((courses.course_length) - (dashboard.course_in_progress)) / (courses.course_length) * 100}
                    style={{
                      width: "150px",
                      marginLeft: "13%",
                      color: "FBBC28",
                      marginTop: "2%",
                    }}
                  />
                  {parseInt(((courses.course_length) - (dashboard.course_in_progress)) / (courses.course_length) * 100)}%
                </Box>
              </div>
            </Box>
            <Box className="completed">
              <div className="tasknavTop">
                <div id="tick-icon" className="icon">
                  <LibraryBooksIcon />
                </div>
                <div className="task-nav-line-space">
                  <h2>{(dashboard.completed_course.length)}/{courses.course_length}</h2>
                  <h6 style={{ color: "var(--Paragraph, #767278)" }}>Courses Completed</h6>
                </div>
              </div>
              <div className="bottomTaskNav">
                <Box
                  sx={{ flexGrow: 1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "18px",
                    justifyContent: "space-between",
                    paddingInlineStart: "0px",
                    marginBlock: "8px",
                    marginInline: "7px",
                  }}
                >
                  <BorderLinearProgress className="brdr1"
                    variant="determinate"
                    value={(dashboard.completed_course) / (courses.course_length) * 100}
                    style={{
                      width: "150px",
                      marginLeft: "13%",
                      color: "#4C6FFF",
                      marginTop: "5%",
                    }}
                  />
                  {parseInt(((dashboard.completed_course)) / (courses.course_length) * 100)}%
                </Box>
              </div>
            </Box>
            <Box className="completed">
              <div className="tasknavtopaccessSection">
                <div id="hours-icon" className="icon">
                  <img src={Third} width={50} />{" "}
                </div>
                <div className="task-nav-line-space">
                  <h2>100hr</h2>
                  <h6>Total Sessions</h6>
                </div>{" "}
              </div>
              <div className="bottomTaskNav">
                <Box
                  sx={{ flexGrow: 1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "18px",
                    justifyContent: "space-between",
                    paddingInlineStart: "0px",
                    marginBlock: "12px",
                    marginInline: "7px",
                  }}
                >
                  <BorderLinearProgress2 variant="determinate" value={70} />
                  20%
                </Box>
              </div>
            </Box>
          </div>

          <Card style={{ width: "65%", marginTop: "2%" }}>
            <div style={{ padding: "20px" }}>
              <Typography style={{ fontWeight: "400", fontSize: "16px" }}>Upcoming Classes</Typography>

              <div>
                <Typography variant="h6" fontWeight={"400"}>{dashboard.schedule_by_trainer !== undefined && (dashboard.schedule_by_trainer?.course_name)}..</Typography>
                <div style={{ padding: "10px", color: "#828282" }}>
                  <Grid container>
                    <Grid item xs={4} display={"flex"}>
                      <CalendarMonthIcon style={{ fontSize: "1.5rem" }} />
                      {moment(dashboard.schedule_by_trainer !== undefined && dashboard.schedule_by_trainer?.date).format('dddd, D MMM , YYYY')}
                    </Grid>
                    <Grid item xs={4} display={"flex"}>
                      <AccessTimeIcon style={{ fontSize: "1.5rem" }} />
                      {dashboard.schedule_by_trainer !== undefined && dashboard.schedule_by_trainer?.time} - {dashboard.schedule_by_trainer !== undefined && dashboard.schedule_by_trainer?.end_time}
                    </Grid>
                  </Grid>
                </div>
                <div style={{ float: "right", marginBottom: "20px" }}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      console.log((moment(dashboard.schedule_by_trainer?.date + " " + dashboard.schedule_by_trainer?.end_time)).isBefore(moment()))
                      this.props.add_attendance(this.props.login.user_id)
                      window.location.href = dashboard.schedule_by_trainer.class_link
                    }}
                    style={{
                      width: "150px",
                      backgroundColor: "#0000B3",
                    }}
                  >
                    Join class
                  </Button>
                </div>
              </div>
            </div>
            <div>


            </div>
          </Card>

          <div>
            <Card style={{ width: "65%", marginTop: "2%" }}>
              <div style={{ padding: "20px 0px 0px 20px" }}>
                <div className="Graph">
                  <Typography style={{ fontWeight: "500", fontSize: "18px" }}>Feedback</Typography>
                  <div style={{ paddingTop: "20px" }}>
                    <BarChart width={600} height={400} data={data}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />

                      <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                    {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
                  </div>
                </div>
              </div>
            </Card>

          </div>



          <Grid style={{ display: "flex", flexDirection: "column" }}>

            {/* Notice Board Part */}
            <Card className="adminDashboardnotifications" style={{ height: "400px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className="side-notification-text">Notice Board</div>

                <div className="flex-line">

                  <Paper
                    component="form"
                    style={{
                      borderRadius: "8px",
                      border: "0.5px solid #D2D2D2",
                      display: "flex",
                      marginLeft: "5px",
                      width: "90%",
                      height: "30px",
                    }}
                  >
                    <IconButton
                      type="button"
                      style={{ p: "100px" }}
                      aria-label="search"
                    >
                      <SearchIcon style={{ fontSize: "15px" }} />
                    </IconButton>
                    <InputBase
                      style={{ ml: 5, flex: 1, fontSize: "15px" }}
                      // placeholder="Search here"
                      inputProps={{ "aria-label": "Search here" }}
                      onChange={(e) => this.props.searchNotice(dashboard.notices, e.target.value)}
                    />
                  </Paper>
                </div>
              </div>

              <div style={{ overflowY: "scroll", height: "305px" }}>
                {dashboard.search_notice.length == "0" &&
                  <Grid style={{ textAlign: "center", marginTop: "20px" }}>
                    <Typography>No Result Found</Typography>
                  </Grid>
                }
                {Array.isArray(dashboard.search_notice) && dashboard.search_notice.map((item) => {
                  return (
                    <div className="noticeBoardContent">
                      <Typography className="noticeBoardContentHeader">{item.course_details !== undefined && item.course_details.course_name}<br /> <Typography style={{ fontWeight: 400 }} >{item.batch_details.batch_number}</Typography></Typography>
                      <div className="noticeBoardContentBottom">
                        <Typography style={{ marginLeft: "10px", fontSize: 14, fontWeight: 400, color: "var(--secondary, #0000B3)" }}>
                          {item.date}
                        </Typography>
                        <Button
                          onClick={() => {
                            this.setState({
                              noticeviewmodaladmin: true,
                              notice_id: item._id,
                              course_name: item.course_details.course_name,
                              batch_number: item.batch_details.batch_number,
                              desc: item.desc,
                              schedule: item.schedule

                            });
                          }}
                          style={{
                            color: "#0000B3",
                            fontSize: 14,
                            marginTop: "-10px"
                          }}
                        >
                          View
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* course progress page */}
            <Card className="rightSection">
              <div className="assignment">
                <h3>Total Courses</h3>
                <div>
                  <PieChart width={300} height={400}>
                    <Pie
                      dataKey="value"
                      isAnimationActive={false}
                      data={datas}
                      outerRadius={80}
                      fill="#8884d8"
                      label
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend verticalAlign="bottom" height={36} />
                  </PieChart>
                </div>
              </div>
            </Card>



          </Grid>



        </Grid>

        <Dialog open={this.state.tnoticeviewmodal} style={{}}>
          <Grid style={{ height: "402px", width: "500px" }}>
            <Box>
              <CloseOutlinedIcon
                onClick={() => {
                  this.setState({ tnoticeviewmodal: false });
                }}
                style={{
                  marginTop: "15px",
                  cursor: "pointer",
                  marginLeft: "92%",
                }}
              />

              <Typography
                style={{
                  fontSize: "25px",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 400,
                  color: " ",
                }}
              >
                Notice
              </Typography>

              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "13px",

                  color: "#gray",
                  marginInline: "21px",
                }}
              >
                By Admin
              </Typography>
              <Textarea
                style={{
                  width: "400px",
                  height: "250px",
                  backgroundColor: "#DBDBE0",
                  marginTop: "4%",
                  marginLeft: "8%",
                  border: "none",
                }}
                disabled

              // placeholder="Enter Address"
              />
            </Box>
          </Grid>
        </Dialog>

        <Dialog open={this.state.tjoinclass} style={{}}>
          <Grid style={{ height: "362px", width: "520px" }}>

            <div style={{ marginBottom: "6%" }}></div>

            <Box>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                style={{
                  fontFamily: "Inter",
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 600,
                  color: " #0000B3",
                  marginBottom: "3%",
                }}
              >
                Batch-1
              </Typography>
              <Typography
                id="modal-modal-description"
                style={{
                  marginTop: "4%",
                  fontSize: "1rem",
                  fontFamily: "Inter",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  color: "#777676",
                  width: "22.375rem",
                  textAlign: "center",
                  marginInline: "87px",
                }}
              >
                (Post Graduation Program On Full Stack Development With PHP Or
                Python)
              </Typography>
              <Typography
                id="modal-modal-description"
                style={{
                  marginTop: "2%",
                  fontSize: "1.25rem",
                  fontFamily: "Inter",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  color: "#000",
                  width: "22.375rem",
                  textAlign: "center",
                  marginInline: "87px",
                }}
              >
                <strong>HTML</strong> (session-1)
              </Typography>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  id="modal-modal-description"
                  style={{
                    marginTop: "2%",
                    fontSize: "1.25rem",
                    fontFamily: "Inter",
                    display: "flex",
                    justifyContent: "center",
                    color: "#000",
                    width: "22.375rem",
                    textAlign: "center",
                    marginLeft: "115px",
                  }}
                >
                  <AccessTimeIcon style={{ color: "#666666" }} /> 1hr 30min
                </Typography>
                <Typography
                  id="modal-modal-description"
                  style={{
                    marginTop: "2%",
                    fontSize: "1.25rem",
                    fontFamily: "Inter",
                    display: "flex",
                    justifyContent: "center",
                    color: "#000",
                    width: "22.375rem",
                    textAlign: "center",
                    marginRight: "119px",
                  }}
                >
                  <GroupIcon style={{ color: "#666666" }} /> 130 Students
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  id="modal-modal-description"
                  style={{
                    marginTop: "2%",
                    fontFamily: "Inter",
                    display: "flex",
                    justifyContent: "center",
                    color: "#0000B3",
                    width: "22.375rem",
                    textAlign: "center",
                    marginLeft: "115px",
                  }}
                >
                  Date-22-04-23
                </Typography>
                <Typography
                  id="modal-modal-description"
                  style={{
                    marginTop: "2%",
                    fontFamily: "Inter",
                    display: "flex",
                    justifyContent: "center",
                    color: "#0000B3",
                    width: "22.375rem",
                    textAlign: "center",
                    marginRight: "119px",
                  }}
                >
                  Time-10AM-11AM
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "6%",
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    this.setState({ tjoinclass: false });
                  }}
                  style={{ width: "23%", color: "#0000B3" }}
                >
                  cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    this.setState({ tjoinclass: false });
                  }}
                  style={{
                    marginLeft: 10,
                    width: "23%",
                    backgroundColor: "#0000B3",
                  }}
                >
                  Start now
                </Button>
              </Box>
            </Box>
          </Grid>

        </Dialog>

        <Dialog open={this.state.noticeviewmodaladmin} maxWidth="sm" fullWidth>
          <Grid style={{ padding: "10px" }}>
            <DialogTitle>
              <Grid container>
                <Grid item xs={11} >
                </Grid>
                <Grid item xs={1}>
                  <IconButton onClick={() => {
                    this.setState({ noticeviewmodaladmin: false });
                  }}>
                    <CloseOutlinedIcon style={{ color: "black", display: "flex", justifyContent: "right" }} />
                  </IconButton>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12} style={{ marginTop: "-25px" }}>
                  <Typography
                    style={{
                      fontSize: "32px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: 500,
                    }}
                  >
                    Notice
                  </Typography>
                </Grid>
              </Grid>
            </DialogTitle>
            <DialogContent style={{ flexDirection: "column", padding: "10px 50px 75px 50px" }}>
              <Grid container direction={"column"}>
                <Typography style={{ fontSize: "18px" }}>
                  <strong>{this.state.course_name}-({this.state.batch_number})</strong>
                </Typography>
                <Typography style={{ fontSize: "16px", color: "var(--paragraph, #767278)" }}>
                  {this.state.desc}
                </Typography>
              </Grid>
            </DialogContent>
          </Grid>
        </Dialog>
        <LoaderCon />
        {/* <Snackbar
          open={snackbar.response_received}
          close_snack_bar={close_snack_bar}
          message={snackbar.message}
        /> */}
      </Grid>
    );
  }
}
