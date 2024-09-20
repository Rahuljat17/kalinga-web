import React, { Component } from "react";
import { connect } from "react-redux";
// import Signup from "../components/Signup";
import { create_account} from "../actions";
import CreateAcount from "../components/CreateAcount";
import {
  close_snack_bar
} from "../../common/snackbar/action";

export class Controller extends Component {
    render() {
      return (
        <CreateAcount {...this.props} />
      );
    }
  };
  export const mapStateToProps = store => {
    return {
    signUp: store.signup,
    loader: store.loader,
    snackbar: store.snackbar,
    };
  };
  export const mapDispatchToProps = dispatch => {
    return {
      create_account: (name,orgname,number,email,password) => {
        dispatch(create_account(name,orgname,number,email,password));
      },
      close_snack_bar: () => {
        dispatch(close_snack_bar());
      },
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Controller);