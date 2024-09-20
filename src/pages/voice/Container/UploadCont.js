import React, { Component } from "react";
import { connect } from "react-redux";
import Upload from "../Components/Upload";
import {
    close_snack_bar
} from "../../../common/snackbar/action";
import {
    // addNotice,
    add_upload_campgin,
    createCampgin

} from "../action"




// import { phone_login } from '../../../auth/actions'

export class Controller extends Component {
    render() {
        return (
            <Upload {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {

      
        snackbar: store.snackbar,
        login: store.login,
        loader: store.loader,


    };
};
export const mapDispatchToProps = dispatch => {
    return {
        createCampgin:(phonenumber, excelnumber, message,data, token) => {
            dispatch(createCampgin(phonenumber, excelnumber, message,data, token));
        },
        add_upload_campgin: ( phonenumber,excelnumber,message,urlsss,token ) => {
            dispatch(add_upload_campgin(
                phonenumber,
                excelnumber,
                message,
                urlsss,
                token)
              )
          },
          close_snack_bar: () => {
            dispatch(close_snack_bar());
          },
     
       


    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);