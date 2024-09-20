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
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
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

  validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return regex.test(email);
  };

  validatePassword = (password) => {
    return password.length >= 6; // Password should be at least 6 characters long
  };

  validateFields = () => {
    const { email, password } = this.state;
    let isValid = true;

    if (!this.validateEmail(email)) {
      this.setState({ emailError: "Please enter a valid email" });
      isValid = false;
    } else {
      this.setState({ emailError: "" });
    }

    if (!this.validatePassword(password)) {
      this.setState({ passwordError: "Password should be at least 6 characters long" });
      isValid = false;
    } else {
      this.setState({ passwordError: "" });
    }

    return isValid;
  };

  handleSubmit = () => {
    const isValid = this.validateFields();

    if (isValid) {
      // Simulate login verification or handle form submission logic
      console.log("Login is valid, submitting the form...");
      this.props.super_login(this.state.email, this.state.password); 
      // this.setState({ redirect: true });
    } else {
      console.log("Login is invalid");
    }
  };

  render() {
    const { showMessage, email, password, emailError, passwordError } = this.state;

   

    return (
      <Grid>
        <div className="main-container">
          <div className="cntr">
            <div className="login-card auth-animation">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>

              <div className="input-group">
                <h1 className="head">USER LOGIN</h1>
                <label htmlFor="email">Email</label>
                <TextField
                  size="small"
                  placeholder="Enter your Email"
                  fullWidth
                  style={{marginBottom: "20px"}}
                  value={email}
                  error={!!emailError}
                  helperText={emailError}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <label htmlFor="password">Password</label>
                <TextField
                  type="password"
                  size="small"
                  placeholder="Enter your Password"
                  fullWidth
                  value={password}
                  error={!!passwordError}
                  helperText={passwordError}
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

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
            {/* <img src={Loginbg} alt="Background" /> */}
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
