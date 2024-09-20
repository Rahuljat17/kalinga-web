
import { NOTICE, NOTICE_DETAILS, RECORD_DETAILS, ASSIGNMENT_LENGTH_DETAILS, COMPLETED_ASSIGNMENT_LENGTH, COURSE_IN_PROGRESS, ONGOING_COURSE_LENGTH, SEARCH_NOTICE, ALL_SCHEDULE_CLASSES, COMPLETED_COURSE, VIEW_MONTHLY_FEEDBACK, SCHEDULE_CLASS_OF_STUDENT, STUDENT_ASSIGNMENT_LENGTH, SEARCH_SCHEDULE, INPROGRESS_BY_TRAINER, SCHEDULE_BY_TRAINER ,CREDIT_DETAILS} from './constant'

import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";

import 'firebase/storage';
import { set_snack_bar } from "../../common/snackbar/action";

//------------------------------------add notice ---------------------------------------//
export function addNotice(admin_id, course_id, batch_id, desc, schedule) {
    return (dispatch) => {
        // console.log("notice", admin_id, course_id, batch_id, desc, schedule)
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "add_notice", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                admin_id: admin_id
            },
            body: JSON.stringify({
                course_id: course_id,
                batch_id: batch_id,
                desc: desc,
                schedule: schedule
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("noticeres", responseJson)
                if (responseJson.status) {
                    dispatch(viewAllNotice());
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(true, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));
            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}

//------------------------------------update notice ------------------------------------//
export function updateNotice(notice_id, course_id, batch_id, desc, schedule) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "update_notice", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                notice_id: notice_id,
                course_id: course_id,
                batch_id: batch_id,
                desc: desc,
                schedule: schedule
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch(viewAllNotice());
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch(unsetLoader());
                    dispatch(set_snack_bar(true, responseJson.message));
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));
            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}

//------------------------------------view all notice----------------------------------//
export function viewAllNotice() {
    return (dispatch) => {
        // console.log("allnoticedash")
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_notice", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("resNOTICE", responseJson)
                if (responseJson.status) {
                    dispatch({ type: NOTICE, payload: responseJson.result });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: NOTICE, payload: [] })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

//-------------------------------------- User Credit Details ---------------------------------//




//--------------------------------------delete notice ---------------------------------//
export function deleteNotice(notice_id) {
    return (dispatch) => {
        // console.log("deletenotice", notice_id)
        dispatch(setLoader());

        return fetch(UNIVERSAL.BASEURL + "delete_notice", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                notice_id: notice_id
            },
            body: JSON.stringify({
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    dispatch(viewAllNotice());
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));
            })
            .catch((error) => {
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, "Check Your Internet Connection"));
                console.error(error);
            });
    };
}

//-----------------------------------view notice by id----------------------------------//

export function viewNoticeById(notice_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_notice_by_id", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                notice_id: notice_id
            },
            body: JSON.stringify({
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: NOTICE_DETAILS, payload: responseJson.result });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: NOTICE_DETAILS, payload: [] })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

//-----------------------------view record video by student ----------------------------//

export function viewRecordVideoByStudent(student_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_recordVideo_by_student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                student_id: student_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: RECORD_DETAILS, payload: responseJson.result });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: RECORD_DETAILS, payload: [] })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

//--------------------------- view assignment student length  ----------------------------//

export function viewAssignmentStudentLength(student_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_assignment_student_length", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                student_id: student_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: ASSIGNMENT_LENGTH_DETAILS, payload: responseJson.result });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: ASSIGNMENT_LENGTH_DETAILS, payload: [] })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

///---------------------------view assignment completed length --------------------------//
export function viewAssignmentCompletedLength(student_id) {
    return (dispatch) => {
        console.log("ww", student_id)
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_assignment_completed_length", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                student_id: student_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("rescomass", responseJson)
                if (responseJson.status) {
                    dispatch({ type: COMPLETED_ASSIGNMENT_LENGTH, payload: responseJson.result });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: COMPLETED_ASSIGNMENT_LENGTH, payload: [] })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

// search notice
export function searchNotice(notices, e) {
    return (dispatch) => {
        // console.log(notices)

        if (e === "") {
            dispatch({ type: SEARCH_NOTICE, payload: notices });

        }
        else {
            const newArray = notices.filter((el) => {
                // console.log(el.batch_details.batch_number)
                return (el.course_details !== undefined && el.course_details.course_name.toLowerCase().includes(e.toLowerCase()));
            })

            dispatch({ type: SEARCH_NOTICE, payload: newArray })

        }
    };
}

//---------------------------view ongoing course by student length-----------------//
export function viewOngoingCourseByStudent(student_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_ongoing_course_by_student_length", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                student_id: student_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: ONGOING_COURSE_LENGTH, payload: responseJson.result });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: ONGOING_COURSE_LENGTH, payload: [] })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

//--------------------------- Course in progress ----------------//
export function viewCourseInProcess(org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_course_in_process", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                org_id: org_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("process courseee", responseJson.result)
                if (responseJson.status) {
                    dispatch({ type: COURSE_IN_PROGRESS, payload: { data: responseJson.result, count: responseJson.length } });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: COURSE_IN_PROGRESS, payload: { data: [], count: 0 } })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

// view all schedule
export function viewAllScheduleClasses() {
    return (dispatch) => {
        console.log("allnoticedash")
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_all_shedule_classes", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("scheduleclass", responseJson)
                if (responseJson.status) {
                    dispatch({ type: ALL_SCHEDULE_CLASSES, payload: responseJson.result });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: ALL_SCHEDULE_CLASSES, payload: [] })
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

// filter schedule
export function filterSchedulte(schedule_classes, e) {
    return (dispatch) => {
        console.log("ss", e)
        if (e === "") {
            dispatch({ type: SEARCH_SCHEDULE, payload: schedule_classes });
        }
        else {
            const newArray = schedule_classes.filter((el) => {
                if (el.schedule_classes !== null) {
                    console.log("tick", el.schedule_classes)
                    return ((el.date !== null && el.date).toString().includes((e).toString()));
                    // return ((el.date).toString().includes((e).toString()));

                }
            })

            dispatch({ type: SEARCH_SCHEDULE, payload: newArray })

        }
    };
}

//------------------------------view completed course -----------------------//
export function viewCompletedCourse(org_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_completed_course", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                org_id: org_id

            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log("completed", responseJson)
                if (responseJson.status) {
                    dispatch({ type: COMPLETED_COURSE, payload: responseJson.length });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: COMPLETED_COURSE, payload: [] })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

//--------------------------------view monthly feedback ---------------------------//
export function viewMonthlyFeedback() {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_monthly_feedback", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("adc", responseJson.feedback)
                if (responseJson.status) {
                    dispatch({ type: VIEW_MONTHLY_FEEDBACK, payload: responseJson.feedback });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: VIEW_MONTHLY_FEEDBACK, payload: [] })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

// delete schedule
export function deleteSchedule(class_id) {
    return (dispatch) => {
        console.log("deleteSchedule", class_id)
        dispatch(setLoader());

        return fetch(UNIVERSAL.BASEURL + "delete_shedule", {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",

            },
            body: JSON.stringify({
                class_id: class_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                if (responseJson.status) {
                    dispatch(viewAllScheduleClasses());
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
                dispatch(set_snack_bar(true, responseJson.message));
            })
            .catch((error) => {
                dispatch(unsetLoader());

                console.error(error);
            });
    };
}

//---------------------------------------view schedule class by student-----------------------------------------//
export function viewScheduleClassByStudent(student_id) {
    return (dispatch) => {
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_shedule_classes_by_student", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                student_id: student_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.status) {
                    dispatch({ type: SCHEDULE_CLASS_OF_STUDENT, payload: responseJson.result });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: SCHEDULE_CLASS_OF_STUDENT, payload: [] })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

//--------------------------------------VIEW ASSIGNMENT STUDENT LENGTH----------------------------//
export function viewAssignmentList(student_id) {
    return (dispatch) => {
        console.log("assignment", student_id)
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_assigement_student_length", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                student_id: student_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("heeee", responseJson)
                if (responseJson.status) {
                    dispatch({ type: STUDENT_ASSIGNMENT_LENGTH, payload: { data: responseJson.result, count: responseJson.length } });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: STUDENT_ASSIGNMENT_LENGTH, payload: { data: [], count: 0 } })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

// filter course
// export function filter_course(course, e) {
//     return (dispatch) => {
//         console.log(course)
//         if (e === "") {
//             dispatch({ type: SEARCH_COURSES, payload: course });

//         } else {
//             const newArray = course.filter((course) => {
//                 console.log(course.status)
//                 return (course.status.toLowerCase().includes(e.toLowerCase()));
//             })

//             dispatch({ type: SEARCH_COURSES, payload: newArray })

//         }
//     };
// }

//-------------------------------------------------------------------------------------------------//
export function view_course_inprogress_by_trainer(trainer_id) {
    return (dispatch) => {
        // console.log("allnoticedash")
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_course_inprogress_by_trainer", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                trainer_id: trainer_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("resprogress", responseJson.length)
                if (responseJson.status) {
                    dispatch({ type: INPROGRESS_BY_TRAINER, payload: responseJson.length });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: INPROGRESS_BY_TRAINER, payload: 0 })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

export function view_course_completed_by_trainer(trainer_id) {
    return (dispatch) => {
        // console.log("allnoticedash")
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_course_completed_by_trainer", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                trainer_id: trainer_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("rescomplete", responseJson)
                if (responseJson.status) {
                    dispatch({ type: COMPLETED_COURSE, payload: responseJson.result });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: COMPLETED_COURSE, payload: [] })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}

//-------------------------------------------------------------------------------------------------//
export function viewScheduleClassByTrainer(trainer_id) {
    return (dispatch) => {
        console.log("allnoticedash", trainer_id)
        dispatch(setLoader());
        return fetch(UNIVERSAL.BASEURL + "view_schedule_class_by_trainer", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                trainer_id: trainer_id
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                console.log("hello", responseJson)
                if (responseJson.status) {
                    dispatch({ type: SCHEDULE_BY_TRAINER, payload: responseJson.result });
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                } else {
                    dispatch({ type: SCHEDULE_BY_TRAINER, payload: "" })
                    dispatch(set_snack_bar(true, responseJson.message));
                    dispatch(unsetLoader());
                }
                dispatch(unsetLoader());
            })
            .catch((error) => {
                console.error(error);
            });
    };
}
//----------------------------------------view_shedule_classes_by_student--------------------------------------//
// export function viewDashboardScheduleClass(student_id) {
//     return (dispatch) => {
//         console.log("assignment", student_id)
//         dispatch(setLoader());
//         return fetch(UNIVERSAL.BASEURL + "view_shedule_class_by_student", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 student_id: student_id
//             })
//         })
//             .then((response) => response.json())
//             .then((responseJson) => {
//                 console.log("heeee", responseJson)
//                 if (responseJson.status) {
//                     dispatch({ type: SCHEDULE_CLASS_VIEW, payload: { data: responseJson.result, count: responseJson.length } });
//                     dispatch(unsetLoader());
//                 } else {
//                     dispatch({ type: SCHEDULE_CLASS_VIEW, payload: { data: [], count: 0 } })
//                     dispatch(unsetLoader());
//                 }
//                 dispatch(unsetLoader());
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     };
// }
