import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const CLEAR_LOGIN = "CLEAR_LOGIN";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_ADMIN_ID = "SET_ADMIN_ID";
export const HANDLEDRAWER = "HANDLEDRAWER";
export const SETMOBILE = "SETMOBILE";
export const SET_ALL_ORG = "SET_ALL_ORG";
export const SET_USER_DETAILS = "SET_USER_DETAILS";
export const SET_ORG_DETAILS = "SET_ORG_DETAILS";
export const SET_ORG_USER_DEATILS = "SET_ORG_USER_DEATILS";
export const SET_ORG_ID = "SET_ORG_ID";
export const SET_ALL_DATA = "SET_ALL_DATA";
export const SET_USER = "SET_USER";
export const SET_ORG = "SET_ORG";
export const SETLOGINORG = "SETLOGINORG";
export const SET_ORG_USER_DETAILS = "SET_ORG_USER_DETAILS";
export const SET_ORG_DETAILS2 = "SET_ORG_DETAILS2";
export const VIEW_ALL_DEPARTMENT = "VIEW_ALL_DEPARTMENT";
export const VIEW_ALL_PRIORITY = "VIEW_ALL_PRIORITY";
export const VIEW_ALL_STATUS = "VIEW_ALL_STATUS";
export const SET_DOC = "SET_DOC";
export const SET_WALET_BY_ID = "SET_WALET_BY_ID";
export const SET_ORGANIZATIONS = "SET_ORGANIZATIONS";
export const LOGIN_STATUS = "LOGIN_STATUS";
export const CREDIT_DETAILS = "CREDIT_DETAILS";
export const CREDIT_DETAILSTWO = "CREDIT_DETAILSTWO";
const firebaseConfig = {
  apiKey: "AIzaSyD5Y7DuliYUUVBbsDS-U3X1j6ss2QINy9M",
  authDomain: "whatsapp-bot-27a18.firebaseapp.com",
  projectId: "whatsapp-bot-27a18",
  storageBucket: "whatsapp-bot-27a18.appspot.com",
  messagingSenderId: "950551023993",
  appId: "1:950551023993:web:50a2ad19935b1013ef9fa8",
  measurementId: "G-H8S7GP4RKY",
};
export const app = initializeApp(firebaseConfig);
// export const fb = firebase.initializeApp(firebaseConfig);
