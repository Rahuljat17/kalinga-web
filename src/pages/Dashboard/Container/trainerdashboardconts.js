import React, { Component } from "react";
import { connect } from "react-redux";
import Trainerdashboard from "../Components/trainerdashboard";
import {
    close_snack_bar
} from "../../../common/snackbar/action";
import {
    // addNotice,
    // updateNotice,
    viewAllNotice,
    view_course_inprogress_by_trainer,
    view_course_completed_by_trainer,
    // viewBatchLengthByCourse,
    viewCompletedCourse,
    viewMonthlyFeedback,
    searchNotice,
    viewScheduleClassByTrainer,

} from "../action"

import {add_attendance} from "../../Course/action"

import { view_trainer_course } from "../../Course/action"

// import { phone_login } from '../../../auth/actions'

export class Controller extends Component {
    render() {
        return (
            <Trainerdashboard {...this.props} />
        );
    }
};
export const mapStateToProps = store => {
    return {

        dashboard: store.dashboard,
        courses: store.courses,
        user: store.user,
        one_user: store.one_user,
        snackbar: store.snackbar,
        login: store.login,
        loader: store.loader,


    };
};
export const mapDispatchToProps = dispatch => {
    return {

        viewAllNotice: () => {
            dispatch(viewAllNotice());
        },
        view_course_inprogress_by_trainer: (trainer_id) => {
            dispatch(view_course_inprogress_by_trainer(trainer_id));
        },
        view_course_completed_by_trainer: (trainer_id) => {
            dispatch(view_course_completed_by_trainer(trainer_id));
        },
        viewCompletedCourse: () => {
            dispatch(viewCompletedCourse());
        },
        searchNotice: (notices, e) => {
            dispatch(searchNotice(notices, e));
        },
        viewMonthlyFeedback: () => {
            dispatch(viewMonthlyFeedback());
        },
        view_trainer_course: (trainer_id) => {
            dispatch(view_trainer_course(trainer_id))
        },
        viewScheduleClassByTrainer: (trainer_id) => {
            dispatch(viewScheduleClassByTrainer(trainer_id))
        },
        add_attendance: (trainer_id) => {
            dispatch(add_attendance(trainer_id))
        },
        close_snack_bar: () => {
            dispatch(close_snack_bar());
        },



    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);