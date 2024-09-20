import React, { Component } from "react";
import { connect } from "react-redux";
import { close_snack_bar } from "../../../common/snackbar/action";
import CampaignDetails from "../Components/CampaignDetails.js";
import { ViewCampaignAll } from "../action.js";
export class Controller extends Component {
  render() {
    return <CampaignDetails {...this.props} />;
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
    ViewCampaignAll: (token) => {
      dispatch(ViewCampaignAll(token));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);
