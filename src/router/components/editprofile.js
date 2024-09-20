import React, { Component } from "react";
import { Button, Grid, Card, Avatar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Textarea } from "theme-ui";
import { Dialog } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import AddIcon from "@mui/icons-material/Add";
//import DeleteIcon from "@mui/icons-material/Delete";

export default class editprofile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editstudentprofile: false,
    };
  }
  render() {
    return (
      <div>
        <Card style={{ marginTop: "8%", marginRight: "25px", marginLeft: "" }}>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            spacing={2}
          >
            <Grid item xs={4}>
              <Avatar
                style={{
                  fontSize: "30px",
                  backgroundColor: "#0000B3",
                  marginLeft: 30,
                  width: 100,
                  height: 100,
                  marginTop: 40,
                }}
              ></Avatar>
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "4%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Name :{""}
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    Subhasmita
                  </strong>
                  {""}
                </Typography>
                <Typography style={{ marginLeft: "1%" }}></Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Phone No :
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    9178888606
                  </strong>{" "}
                </Typography>
                <Typography style={{ marginLeft: "1%" }}></Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Email ID :
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    subh@technoboot.co
                  </strong>{" "}
                </Typography>
                <Typography style={{ marginLeft: "1%" }}></Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Address :{" "}
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    BBSR
                  </strong>{" "}
                </Typography>
                <Typography style={{ marginLeft: "1%" }}></Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Gender:
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    Female
                  </strong>{" "}
                </Typography>
                <Typography style={{ marginLeft: "1%" }}></Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <Button
                onClick={() => {
                  this.setState({ editstudentprofile: true });
                }}
                variant="contained"
                style={{
                  marginTop: "18%",
                  marginLeft: 10,
                  width: "100px",
                  padding: "2px 7px",
                  backgroundColor: "#0000B3",
                  color: "white",
                }}
              >
                Edit Profile
              </Button>
            </Grid>
          </Grid>

          <div style={{ paddingTop: "3%" }}></div>
        </Card>

        <Card style={{ marginTop: "3%", marginRight: "25px", marginLeft: "" }}>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            spacing={2}
          >
            <Grid item xs={4} style={{}}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "4%",
                  marginLeft: "5%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Matric :{" "}
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    ydtuyfhvfevg
                  </strong>{" "}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                  marginLeft: "5%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  10 + 2 :
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    SRA
                  </strong>{" "}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                  marginLeft: "5%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Graduation :
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    Sambalpur University
                  </strong>{" "}
                </Typography>
              </div>
              {/* <div style={{ display: "flex", flexDirection: "row", marginTop: "2%", marginLeft: "5%" }}>
                                <Typography style={{ color: "#7A7E86" }}>Address : <strong style={{ fontWeight: 500, color: "black" }}>BBSR</strong> </Typography>

                            </div> */}

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10%",
                  marginLeft: "5%",
                }}
              >
                <Typography style={{ fontWeight: 500, color: "black" }}>
                  Full stack Developement with PHP or Python{""}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                  marginLeft: "5%",
                }}
              >
                <Typography style={{ fontWeight: 500, color: "black" }}>
                  Web Development{" "}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "4%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Year Of Passing :
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    2013
                  </strong>
                  {""}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Year Of Passing :
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    2015
                  </strong>
                  {""}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Year Of Passing :
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    2018
                  </strong>{" "}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "4%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Percentage:
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    80 %
                  </strong>{" "}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Percentage:
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    70 %
                  </strong>{" "}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <Typography style={{ color: "#7A7E86" }}>
                  Percentage:
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    70 %
                  </strong>{" "}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "10%",
                }}
              >
                <Typography style={{ fontWeight: 500, color: "black" }}>
                  Duration :{" "}
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    10 Months
                  </strong>{" "}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "2%",
                }}
              >
                <Typography style={{ fontWeight: 500, color: "black" }}>
                  Duration:
                  <strong style={{ fontWeight: 500, color: "black" }}>
                    9 Months
                  </strong>{" "}
                </Typography>
              </div>
            </Grid>
          </Grid>

          <div style={{ paddingTop: "3%" }}></div>
        </Card>

        <Dialog maxWidth="xl" open={this.state.editstudentprofile} style={{}}>
          <Grid
            style={{ width: "900px", overflowY: "hidden", overflow: "scroll" }}
          >
            <h3 style={{ marginLeft: "8.5%" }}>Edit the Form</h3>
            <div style={{ marginLeft: "8.5%" }}>
              <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
                Upload Image<strong style={{ color: "red" }}>*</strong>
              </Typography>

              <Box
                style={{
                  width: "120px",
                  height: "70px",
                  border: "2px solid grey",
                  backgroundColor: "#FCFCFC",
                  marginTop: "1%",
                }}
              >
                <center>
                  <label
                    htmlFor="file"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <AddIcon style={{ marginLeft: "40%", marginTop: "16%" }} />
                  </label>
                </center>
                <input style={{ display: "none" }} type="file" id="file" />
              </Box>
            </div>

            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginTop: "2%",
                }}
              >
                <div>
                  <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
                    First Name<strong style={{ color: "red" }}>*</strong>
                  </Typography>

                  <OutlinedInput
                    type="text"
                    style={{
                      background: "#F5F5F5",
                      borderRadius: " 0.125rem",
                      height: "5vh",
                      width: "300px",
                      marginBottom: "11px",
                    }}
                    placeholder="Enter First Name "
                  />
                </div>

                <div>
                  <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
                    Last Name<strong style={{ color: "red" }}>*</strong>
                  </Typography>

                  <OutlinedInput
                    type="text"
                    style={{
                      background: "#F5F5F5",
                      borderRadius: " 0.125rem",
                      height: "5vh",
                      width: "300px",
                      marginBottom: "11px",
                    }}
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  fontWeight: 500,
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <Typography style={{ fontSize: "17px" }}>
                    Phone<strong style={{ color: "red" }}>*</strong>
                  </Typography>

                  <OutlinedInput
                    type="number"
                    style={{
                      background: "#F5F5F5",
                      borderRadius: " 0.125rem",
                      height: "5vh",
                      width: "300px",
                      marginBottom: "11px",
                    }}
                    placeholder="Enter Phone Number "
                  />
                </div>

                <div>
                  <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
                    Email<strong style={{ color: "red" }}>*</strong>
                  </Typography>

                  <OutlinedInput
                    type="email"
                    style={{
                      background: "#F5F5F5",
                      borderRadius: " 0.125rem",
                      height: "5vh",
                      width: "300px",
                      marginBottom: "11px",
                    }}
                    placeholder="Enter Email Id"
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div>
                  <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
                    Date of Birth<strong style={{ color: "red" }}>*</strong>
                  </Typography>

                  <input
                    type="date"
                    name="begin"
                    min="1997-01-01"
                    max="2030-12-31"
                    style={{
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                      backgroundColor: "#EFEFEF99",
                      height: "6vh",
                      width: "300px",
                    }}
                  />
                </div>

                <div>
                  <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
                    Address<strong style={{ color: "red" }}>*</strong>
                  </Typography>

                  <Textarea
                    style={{
                      width: "300px",
                      height: "80px",
                      backgroundColor: "#fff",
                      border: "1px solid #000",
                      borderRadius: "none",
                    }}
                    placeholder="Enter Address"
                  />
                </div>
              </div>

              <Typography
                style={{
                  fontSize: "17px",
                  marginLeft: "8.5%",
                  fontWeight: 500,
                }}
              >
                Gender <strong style={{ color: "red" }}>*</strong>
              </Typography>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "8.5%",
                }}
              >
                <RadioGroup
                  style={{ marginTop: "2%" }}
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio style={{ marginTop: "-10%" }} />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio style={{ marginTop: "-10%" }} />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio style={{ marginTop: "-10%" }} />}
                    label="Other"
                  />
                </RadioGroup>
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "row", marginTop: "2%" }}
            >
              <div style={{ marginLeft: "8.5%" }}>
                <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
                  Matric <strong style={{ color: "red" }}>*</strong>
                </Typography>

                <OutlinedInput
                  type="number"
                  style={{
                    background: "#F5F5F5",
                    borderRadius: " 0.125rem",
                    height: "5vh",
                    width: "200px",
                    marginBottom: "11px",
                  }}
                  placeholder="Enter School Name"
                />
              </div>

              <div style={{ marginLeft: "6%" }}>
                <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
                  Year Of Passing<strong style={{ color: "red" }}>*</strong>
                </Typography>

                <OutlinedInput
                  type="number"
                  style={{
                    background: "#F5F5F5",
                    borderRadius: " 0.125rem",
                    height: "5vh",
                    width: "200px",
                    marginBottom: "11px",
                  }}
                  placeholder="Enter Last Name"
                />
              </div>
              <div style={{ marginLeft: "6%" }}>
                <Typography style={{ fontSize: "17px", fontWeight: 500 }}>
                  Percentage<strong style={{ color: "red" }}>*</strong>
                </Typography>

                <OutlinedInput
                  type="number"
                  style={{
                    background: "#F5F5F5",
                    borderRadius: " 0.125rem",
                    height: "5vh",
                    width: "200px",
                    marginBottom: "11px",
                  }}
                  placeholder="Enter Percentage"
                />
                {/* <DeleteIcon style={{ color: "red" }} /> */}
              </div>
            </div>
            <Button
              variant="contained"
              startIcon={<AddCircleOutlineIcon />}
              style={{
                marginLeft: "64%",
                width: "22%",
                backgroundColor: "#000066",
              }}
            >
              Add More Education
            </Button>

            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2%",
                paddingBottom: "3%",
              }}
            >
              <Button
                variant="outlined"
                onClick={() => {
                  this.setState({ editstudentprofile: false });
                }}
                style={{
                  width: "15%",
                  color: "#0000B3",
                  borderColor: "#0000B3",
                }}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  this.setState({ editstudentprofile: false });
                }}
                style={{
                  marginLeft: 10,
                  width: "15%",
                  backgroundColor: "#0000B3",
                }}
              >
                Update
              </Button>
            </Box>
          </Grid>
        </Dialog>
      </div>
    );
  }
}
