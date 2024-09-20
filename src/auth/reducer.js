import {
  // NEWIMAGE_UPLOAD,
  LOGIN,
  LOGOUT,
  // SET_HOME,
  CREDIT_DETAILSTWO,
  SET_ADMIN_ID,
  CREDIT_DETAILS
} from "./constant";
const initial_state = {
  all_hotels: [],
  email: "",
  isHome: true,
  token: "",
  password: "",
  mobile: "",
  organization_id: "",
  admin_id: "",
  role: "user",
  profile_img: "",
  mobileOpen: false,
  user_id: "",
  company_id: "",
  credit_details: [],
  loginModal: false,
  successfull: false,
  otpmodal: false,
  user_token: "",
  department_id: "",
  department_name: "",
  active: false,
  name: "",
 
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case LOGIN:
      return (state = {
        ...state,
        isHome: false,
        email: action.payload.email,
        user: action.payload._id,
        role: action.payload.role,
        name: action.payload.name,
      });

    case LOGOUT:
      return (state = {
        ...state,
        isHome: true,
        user: "",
        email: "",
        password: "",
        role: "",
      });

    case CREDIT_DETAILS:
      return state = { ...state, user_id: action.payload._id };
      
    case CREDIT_DETAILSTWO:
      return { ...state, credit_details: action.payload };

    case SET_ADMIN_ID:
      return { ...state, admin_id: action.payload };

    default:
      return state;
  }
}
