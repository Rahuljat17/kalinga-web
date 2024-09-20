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
// import TextField from '@mui/material/TextField';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import logo from '../../../src/Accets/alpatechlogo.png';
import Snackbar from "../../common/snackbar/components/snackbar";
import LoaderCon from "../../common/loader/containers/loader_cont";
import {
  // Link,
  Navigate,
} from "react-router-dom";
import "./login.css";
import styled from 'styled-components';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
      emailError: "",
      passwordError: "",
      change_num: false,
      enter_num: false,
      bt_type: true,
      checked: true,
      signup: false,
      showPassword: false,
      signinmob: false,
      signemil: false,
      country: "",
      isOTP: false,
      org: false,
      orgData: [],
      data: {},
      addorg: false,
      createorg: false,
      terms: false,
      showMessage: false,
      redirect: false,
    };
  }
  handleClick = () => {
    this.setState({ showMessage: true });

    // Simulating some work with setTimeout
    setTimeout(() => {
      this.setState({ showMessage: false });
    }, 2000); // Hides the message after 2 seconds
  };
  componentDidMount() {
    this.props.clear_login();
    // if (localStorage.getItem('socus_token') !== null) {
    //   return <Redirect to="/" />
    // }
  }
  handleClickShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  validatePassword = (password) => {
    return password.length >= 2;
  };

  validateFields = () => {
    const { email, password } = this.state;
    let isValid = true;

    if (!this.validateEmail(email)) {
      this.setState({ emailError: "Invalid email format" });
      isValid = false;
    } else {
      this.setState({ emailError: "" });
    }

    if (!this.validatePassword(password)) {
      this.setState({
        passwordError: "Password should be at least 6 characters long",
      });
      isValid = false;
    } else {
      this.setState({ passwordError: "" });
    }

    return isValid;
  };

  handleSubmit = () => {
    const isValid = this.validateFields();

    if (isValid) {
      this.props.super_login(this.state.email, this.state.password);
      // this.setState({ redirect: true })
      // return <Navigate to="/" />;
    } else {
      console.log("Form is invalid");
    }
  };

  render() {
    const { showMessage } = this.state;
    const { email, password, showPassword, emailError, passwordError } =
      this.state;
    // if (this.state.redirect === true) {
    //   return <Navigate to="/" />;
    // }
    return (
      <Grid>
        <div className='main-container'>
          <div className="cntr">
            <div className="login-card">
              <div className="logo">
                <img src={logo} alt="Logo" />
              </div>
              {/* <form> */}
              <div className="input-group">
                <h1 className='head'>User Login</h1>
                <label htmlFor="email">Email:</label>
                <TextField
                  size="small"
                  placeholder="Enter your email"
                  fullWidth
                  value={email}
                  error={!!emailError}
                  helperText={emailError}
                  onChange={(e) => this.setState({ email: e.target.value })}
                />

              </div>
              <div className="input-group">
                <label htmlFor="password">Password:</label>
                <TextField
                  fullWidth
                  size="small"
                  style={{ marginTop: "10px" }}
                  placeholder="Enter Password"
                  value={password}
                  error={!!passwordError}
                  helperText={passwordError}
                  onChange={(e) => this.setState({ password: e.target.value })}
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          style={{ backgroundColor: "white" }}
                          aria-label="toggle password visibility"
                          onClick={this.handleClickShowPassword}
                          onMouseDown={this.handleMouseDownPassword}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                {/* <a href="#" className="forgot-password">Forgot Password?</a> */}
              </div>
              <div className='cntr2'><button className='submit-ca rd' style={{ margin: "20px", padding: "10px 80px", borderRadius: "20px" }} type="submit" onClick={this.handleSubmit}>Submit</button></div>
              {/* <center>
                New user? <a href="/signup" style={{ textDecoration: "none", marginTop: "20px" }}>Create an account? </a>
              </center> */}
              {/* </form> */}
            </div>
          </div>
          <div className="loginbg">
            <img src={Loginbg} />
          </div>
        </div >
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
