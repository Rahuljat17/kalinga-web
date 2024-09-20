import React, { Component } from "react";
import { connect } from "react-redux";
import { close_snack_bar } from "../../../common/snackbar/action";
import ContactUs from "../Components/contactUs.js";
import { ContactUsMessage } from "../action.js";
export class Controller extends Component {
  render() {
    return <ContactUs {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    campaign: store.campaign,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    close_snack_bar: () => {
      dispatch(close_snack_bar());
    },
    ContactUsMessage: (token, name, email, message) => {
      console.log("dksjghskdfjg")
      dispatch(ContactUsMessage(token, name, email, message));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
