import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import {
  Grid,
  Typography
} from "@mui/material";
import logo from '../../../src/Accets/icon.png';
import Snackbar from "../../common/snackbar/components/snackbar";
import LoaderCon from "../../common/loader/containers/loader_cont";
import { Navigate } from "react-router-dom";
import "./login.css";
import { Link } from "react-router-dom";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: "",
      otp: "",  // New state to store the OTP
      showOtpField: false,  // Controls OTP field visibility
      redirect: false,
      loading: false,  // To show loading state
      otpSent: false,  // To disable email input and send button after OTP is sent
    };
  }

  componentDidMount() {
    if (this.props.clear_login) {
      this.props.clear_login();
    }
  }

  validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  validateFields = () => {
    const { email } = this.state;
    let isValid = true;

    if (!this.validateEmail(email)) {
      this.setState({ emailError: "Invalid email format" });
      isValid = false;
    } else {
      this.setState({ emailError: "" });
    }

    return isValid;
  };

  // Function to send OTP and check if email is registered
  SendOtp = async (email) => {
    this.setState({ loading: true });
    try {
      const response = await fetch(UNIVERSAL.BASEURL + "request-otp", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const responseJson = await response.json();
      console.log(responseJson);

      if (responseJson.status) {
        set_snack_bar(true, responseJson.displayMessage);  // Assuming you have a snackbar function
        this.setState({ showOtpField: true, otpSent: true });
      } else {
        this.setState({ emailError: responseJson.displayMessage });
      }
    } catch (error) {
      console.error("Error:", error);
      this.setState({ emailError: "Network error occurred. Please try again." });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSubmit = async () => {
    const isValid = this.validateFields();

    if (isValid) {
      await this.SendOtp(this.state.email);
    } else {
      console.log("Form is invalid");
    }
  };

  handleOtpChange = (e) => {
    this.setState({ otp: e.target.value });
  };

  handleVerifyOtp = () => {
    const { otp } = this.state;
    if (this.props.verifyOtp) {
      this.props.verifyOtp(otp); // Assuming verifyOtp function is passed as props
    }
    this.setState({ redirect: true });
  };

  render() {
    const { email, emailError, otp, showOtpField, redirect, loading, otpSent } = this.state;

    if (redirect) {
      return <Navigate to="/" />;
    }

    return (
      <Grid>
        <div className='main-container'>
          <div className="login-card">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>

            <div className="input-group">
              <h1 className='head'>Login</h1>
              <label htmlFor="email">Email:</label>
              <TextField
                size="small"
                placeholder="Enter your email"
                fullWidth
                type="email"
                value={email}
                error={!!emailError}
                helperText={emailError}
                onChange={(e) => this.setState({ email: e.target.value })}
                disabled={otpSent}
              />
            </div>

            <button
              className='submit-card'
              type="submit"
              onClick={this.handleSubmit}
              disabled={loading || otpSent}
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>

            {/* <Typography>Don't Have an Account? <Link to={"/sign"}>Register</Link></Typography> */}

            {/* Conditionally render OTP field and verify button */}
            {showOtpField && (
              <>
                <div className="input-group">
                  <label htmlFor="otp">Enter OTP:</label>
                  <TextField
                    size="small"
                    placeholder="Enter the OTP"
                    fullWidth
                    value={otp}
                    onChange={(e) => {
                      this.setState({ otp: e.target.value })
                    }}
                  />
                </div>
                <button className='submit-card' type="submit" onClick={()=>{
                   this.props.super_login(otp)
                }}>Verify OTP</button>
              </>
            )}
          </div>
        </div>
        <LoaderCon />
        <Snackbar
          open={this.props.snackbar?.response_received || false}
          close_snack_bar={this.props.close_snack_bar}
          message={this.props.snackbar?.message || ""}
        />
      </Grid>
    );
  }
}

export default Login;
