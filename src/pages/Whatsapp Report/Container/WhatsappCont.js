import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Components/Whatsapp";
import {
    close_snack_bar
} from "../../../common/snackbar/action";
import {


} from "../action"




// import { phone_login } from '../../../auth/actions'

export class Controller extends Component {
    render() {
        return (
            <Dashboard {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {

        dashboard: store.dashboard,
        courses: store.courses,
        student: store.student,
        user: store.user,
        one_user: store.one_user,
        snackbar: store.snackbar,
        login: store.login,
        loader: store.loader,


    };
};
export const mapDispatchToProps = dispatch => {
    return {
      
        // filterSchedulte: (schedule_classes, e) => {
        //     dispatch(filterSchedulte(schedule_classes, e));
        // },
       


    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);