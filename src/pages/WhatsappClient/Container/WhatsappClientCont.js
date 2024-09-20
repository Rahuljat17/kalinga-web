import React, { Component } from "react";
import { connect } from "react-redux";
// import { close_snack_bar } from "../../common/snackbar/action";
import { GetallviewCampaign } from "../Action.js";
import WhatsappClient from "../Component/WhatsappClient.js";
export class Controller extends Component {
  render() {
    return <WhatsappClient {...this.props} />;
  }
}
export const mapStateToProps = (store) => {
  return {
    login: store.login,
    loader: store.loader,
    snackbar: store.snackbar,
    ncampaign: store.ncampaign,
  };
};
export const mapDispatchToProps = (dispatch) => {
  return {
    //     close_snack_bar: () => {
    //       dispatch(close_snack_bar());
    //     },
    GetallviewCampaign: (token) => {
      dispatch(GetallviewCampaign(token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
