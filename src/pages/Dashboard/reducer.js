import {
    NOTICE,
    NOTICE_DETAILS,
    RECORD_DETAILS,
    SEARCH_NOTICE,
    COURSE_IN_PROGRESS,
    ALL_SCHEDULE_CLASSES,
    SEARCH_SCHEDULE,
    ONGOING_COURSE_LENGTH,
    BATCH_COURSE_LENGTH,
    COMPLETED_COURSE,
    VIEW_MONTHLY_FEEDBACK,
    COMPLETED_ASSIGNMENT_LENGTH,
    ASSIGNMENT_LENGTH_DETAILS,
    STUDENT_ASSIGNMENT_LENGTH,
    SCHEDULE_CLASS_OF_STUDENT,
    INPROGRESS_BY_TRAINER,
    SCHEDULE_BY_TRAINER,
    CREDIT_DETAILS,
} from "./constant";

const initial_state = {
    notices: [],
    search_notice: [],
    course_in_progress: "",
    schedule_classes: [],
    notice_details: "",
    record_details: [],
    ongoing_course_length: "",
    batch_course_length: "",
    view_monthly_feedback: [],
    assignment_length_details: [],
    completed_course: [],
    student_assignment_length: [],
    length: 0,
    schedule_class_of_student: [],
    search_schedule: [],
    in_progress_length: 0,
    assignment_length: 0,
    schedule_by_trainer: [],
    completed_assignment_length: [],
    credit_details: []
};
export default function reducer(state = initial_state, action) {
    switch (action.type) {
        case NOTICE:
            console.log("all_notice", action.payload)
            return {
                ...state,

                notices: action.payload, search_notice: action.payload

            };

        case NOTICE_DETAILS:
            // console.log("notice details", action.payload.data, action.payload.count)
            return {
                ...state,
                notice_details: action.payload
            };
        case CREDIT_DETAILS:
            // console.log("notice details", action.payload.data, action.payload.count)
            return {
                ...state,
                credit_details: action.payload
            };
            
            
        case SEARCH_NOTICE:
            return {
                ...state,
                search_notice: action.payload
            };

        //------------------------------------------------------------------------//

        case RECORD_DETAILS:
            console.log("record details", action.payload)
            return {
                ...state,
                record_details: action.payload
            };

        //------------------------------------------------------------------------//

        case COURSE_IN_PROGRESS:
            console.log("progressdashboard", action.payload)
            return {
                ...state,
                course_in_progress: action.payload
            };
        case INPROGRESS_BY_TRAINER:
            console.log("fff", action.payload)
            return {
                ...state,
                course_in_progress: action.payload
            };

        case ONGOING_COURSE_LENGTH:
            console.log("progress", action.payload)
            return {
                ...state,
                ongoing_course_length: action.payload
            };

        case COMPLETED_COURSE:
            console.log("completed", action.payload)
            return {
                ...state,
                completed_course: action.payload
            };
        //------------------------------------------------------------------------//

        case ALL_SCHEDULE_CLASSES:
            console.log("allscheduledclasses", action.payload)
            return {
                ...state,
                schedule_classes: action.payload, search_schedule: action.payload
            };
        case SCHEDULE_BY_TRAINER:
            console.log("uuu", action.payload)
            return {
                ...state,
                schedule_by_trainer: action.payload
            };
        case SEARCH_SCHEDULE:
            return {
                ...state,
                search_schedule: action.payload
            };

        //------------------------------------------------------------------------//

        case BATCH_COURSE_LENGTH:
            console.log("progress", action.payload)
            return {
                ...state,
                batch_course_length: action.payload
            };

        //------------------------------------------------------------------------//

        case VIEW_MONTHLY_FEEDBACK:
            console.log("progress", action.payload)
            return {
                ...state,
                view_monthly_feedback: action.payload
            };

        //------------------------------------------------------------------------//

        case COMPLETED_ASSIGNMENT_LENGTH:
            console.log("progresssda", action.payload)
            return {
                ...state,
                completed_assignment_length: action.payload
            };
        case ASSIGNMENT_LENGTH_DETAILS:
            console.log("dashboardassignment", action.payload)
            return {
                ...state,
                assignment_length_details: action.payload
            };
        case STUDENT_ASSIGNMENT_LENGTH:
            console.log("list assignment", action.payload.count)
            return {
                ...state,
                student_assignment_length: action.payload.data, assignment_length: action.payload.count
            };

        //------------------------------------------------------------------------//

        case SCHEDULE_CLASS_OF_STUDENT:
            console.log("join the class", action.payload)
            return {
                ...state,
                schedule_class_of_student: action.payload
            };
        default:
            return state;
    }
}
