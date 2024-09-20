import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "../Components/dashboard";
import {
    close_snack_bar
} from "../../../common/snackbar/action";
import {
    addNotice,
    updateNotice,
    viewAllNotice,
    deleteNotice,
    viewNoticeById,
    viewRecordVideoByStudent,
    viewAssignmentStudentLength,
    viewAssignmentCompletedLength,
    searchNotice,
    viewCourseInProcess,
    viewAllScheduleClasses,
    deleteSchedule,
    filterSchedulte,
    // userCreditDetails,

} from "../action"




import { viewUserDetails } from '../../../auth/actions'

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
        addNotice: (admin_id, course_id, batch_id, desc, schedule) => {
            dispatch(addNotice(admin_id, course_id, batch_id, desc, schedule));
        },
        updateNotice: (notice_id, course_id, batch_id, desc, schedule) => {
            dispatch(updateNotice(notice_id, course_id, batch_id, desc, schedule));
        },
        viewAllNotice: () => {
            dispatch(viewAllNotice());
        },
        deleteNotice: (notice_id) => {
            dispatch(deleteNotice(notice_id));
        },
        viewNoticeById: (notice_id) => {
            dispatch(viewNoticeById(notice_id));
        },
        viewRecordVideoByStudent: (student_id) => {
            dispatch(viewRecordVideoByStudent(student_id));
        },
        viewAssignmentStudentLength: (student_id) => {
            dispatch(viewAssignmentStudentLength(student_id));
        },
        viewAssignmentCompletedLength: (student_id) => {
            dispatch(viewAssignmentCompletedLength(student_id));
        },
        // filter_course: (course, e) => {
        //     dispatch(filter_course(course, e))
        // },
        searchNotice: (notices, e) => {
            dispatch(searchNotice(notices, e));
        },
        filterSchedulte: (schedule_classes, e) => {
            dispatch(filterSchedulte(schedule_classes, e));
        },
        
      


    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Controller);