import React, { Component } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Loginbg from "../../Accets/loginbg.jpeg";
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
} from "@mui/material";
import Snackbar from "../../common/snackbar/components/snackbar";
import LoaderCon from "../../common/loader/containers/loader_cont";
import { Navigate } from "react-router-dom";
import logo from '../../../src/Accets/alpatechlogo.png';
import "./login.css";
import styled from 'styled-components';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otp: "",
      otpError: "",
      showMessage: false,
      redirect: false,
    };
  }

  handleClick = () => {
    this.setState({ showMessage: true });

    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 2000); // Hides the message after 2 seconds
  };

  componentDidMount() {
    this.props.clear_login();
  }

  validateOTP = (otp) => {
    const regex = /^[a-zA-Z0-9]{6}$/; // Regex for 6-character alphanumeric OTP
    return regex.test(otp);
  };

  validateFields = () => {
    const { otp } = this.state;
    let isValid = true;

    if (!this.validateOTP(otp)) {
      this.setState({ otpError: "OTP should be a 6-digit character" });
      isValid = false;
    } else {
      this.setState({ otpError: "" });
    }

    return isValid;
  };

  handleSubmit = () => {
    const isValid = this.validateFields();

    if (isValid) {
      // Simulate OTP verification or handle form submission logic
      console.log("OTP is valid, submitting the form...");
      this.props.super_login(this.state.otp); 
      this.setState({ redirect: true });
    } else {
      console.log("OTP is invalid");
    }
  };

  render() {
    const { showMessage, otp, otpError } = this.state;

    if (this.state.redirect === true) {
      return <Navigate to="/" />;
    }

    return (
      <Grid>
        <div className="main-container">
          <div className="cntr">
            <div className="login-card auth-animation">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>

              <div className="input-group">
                <h1 className="head">Verify OTP</h1>
                <label htmlFor="otp">OTP:</label>
                <TextField
                  size="small"
                  placeholder="Enter your OTP"
                  fullWidth
                  value={otp}
                  error={!!otpError}
                  helperText={otpError}
                  onChange={(e) => this.setState({ otp: e.target.value })}
                />
              </div>

              <p style={{ textAlign: "center", color: "gray", padding: "10px 50px 0" }}>
                OTP was sent to your Email ID. Check and Enter the OTP for Verification.
              </p>

              <div className="cntr2">
                <button
                  className="submit-card"
                  style={{ margin: "20px", padding: "10px 80px", borderRadius: "20px" }}
                  type="submit"
                  onClick={this.handleSubmit}
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
          <div className="loginbg">
            <img src={Loginbg} alt="Background" />
          </div>
        </div>

        <LoaderCon />
        <Snackbar
          open={this.props.snackbar.response_received}
          close_snack_bar={this.props.close_snack_bar}
          message={this.props.snackbar.message}
        />
      </Grid>
    );
  }
}

export default Login;
