import React, { Component } from "react";
import { connect } from "react-redux";
import UserLogin from "../components/userLogin";
import {
  close_snack_bar
} from "../../common/snackbar/action";
import {
  // setLogin,
  // set_home,
  // setEmail,
  // setPwd,
  // login_email,
  clear_login,
  user_request_password,
  super_login
  // googleLogin
} from "../actions";
export class Controller extends Component {
  render() {
    return (
      <UserLogin {...this.props} />
    );
  }
};
export const mapStateToProps = store => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
  };
};
export const mapDispatchToProps = dispatch => {
  return {
    clear_login: () => {
      dispatch(clear_login())
    },
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    super_login: (payload) => {
      dispatch(super_login(payload));
    },
    // setPwd: (payload) => {
    //   dispatch(setPwd(payload));
    // },
    user_request_password: (email,type) => {
      dispatch(user_request_password(email,type));
    },
    // setLogin: (type, email, user_token, profile_img) => {
    //   dispatch(setLogin(type, email, user_token, profile_img));
    // },
    // set_home: () => {
    //   dispatch(set_home())
    // },
    // googleLogin: () => {
    //   dispatch(googleLogin())
    // }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);