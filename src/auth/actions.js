import {
  LOGIN,
  LOGOUT,
  // NEWIMAGE_UPLOAD,
  HANDLEDRAWER,
  // SET_HOME,
  // SET_EMAIL,
  // SET_PASSWORD,
  CLEAR_LOGIN,
  SET_ADMIN_ID,
  CREDIT_DETAILS,
  CREDIT_DETAILSTWO
  // SUCESSFUL,
  // VERIFY_OTP,
  // SUPERLOGIN,
  // ADMINLOGIN,
  // SETALL,
  // ALL_HOTELS,
  // TOURISMLOGIN,
  // SETACTIVE
} from "./constant";
import UNIVERSAL from "../config/config";
import { setLoader, unsetLoader } from "../common/loader/action";
import { set_snack_bar } from "../common/snackbar/action";
// import { redirect} from "react-router-dom"
// import { RedirectFunction } from "react-router-dom";
// import firebase from "firebase"

// export function user_request_password(email) {
//   return async (dispatch) => {
//     dispatch(setLoader());
//     try {
//       const response = await fetch(UNIVERSAL.BASEURL + "request-otp", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           email: email,
//         }),
//       });
//       const responseJson = await response.json();
//       console.log("asilllllll", responseJson.displayMessage);
//       if (responseJson.status) {
//         dispatch(set_snack_bar(responseJson.status, responseJson.displayMessage));
//       } else {
//         dispatch(set_snack_bar(responseJson.status,responseJson.displayMessage));
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       dispatch(unsetLoader());
//     }
//   };
// }



export function super_login(email,password) {
  return async (dispatch) => {
    dispatch(setLoader());
    try {
      const response = await fetch(UNIVERSAL.BASEURL + "user-login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const responseJson = await response.json();
      console.log("asilllllll", responseJson);
      if (responseJson.status) {
        dispatch(setAdminLogin(responseJson.result.data.result));
        dispatch(setAdminId(responseJson.result.data.result.token));
        dispatch(viewUserDetails(responseJson.result.data.result.token));
        dispatch(set_snack_bar(responseJson.status, responseJson.displayMessage));
      } else {
        dispatch(set_snack_bar(responseJson.status,responseJson.displayMessage));
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(unsetLoader());
    }
  };
}

export function clear_login() {
  return {
    type: CLEAR_LOGIN,
  };
}
export function setAdminId(payload) {
  return {
    type: SET_ADMIN_ID,
    payload: payload,
  };
}

export function setAdminLogin(payload) {
  // console.log("sss", payload);
  localStorage.setItem("Awcfhjs", payload.token);
  localStorage.setItem(
    "AXDRTCHTY",
    "dWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ" +
    payload.role +
    "swewdfkrkegfmf"
  );
  // localStorage.setItem("name", payload.name);
  // localStorage.setItem("email", payload.email);
  return {
    type: LOGIN,
    payload: payload,
  };
}
export function handleDrawerToggle(mobileOpen) {
  mobileOpen = !mobileOpen;
  return {
    type: HANDLEDRAWER,
    payload: mobileOpen,
  };
}
export function onLogout() {
  localStorage.removeItem("Awcfhjs");
  localStorage.removeItem("name");
  localStorage.removeItem("email");
  localStorage.removeItem("AXDRTCHTY");

  return (dispatch) => {
    dispatch({ type: LOGOUT });
    dispatch(set_snack_bar("Logout successfully"));
    

  };
  
}
// export function successfull(payload) {
//     return {
//         type: SUCESSFUL,
//         payload: payload,
//     };
// }

// export function update_image(newphoto,user_id) {
//     return (dispatch) => {
//         // dispatch(setLoader());
//         return fetch(UNIVERSAL.BASEURL + "image_upload", {
//             method: "POST",
//             headers: {
//                 Accept: "application/json",
//                 // "Content-Type": "application/json",
//             },
//             body: newphoto,
//             user_id:user_id,
//             file: {
//                 photo: newphoto
//             }
//         }).then((response) => response.json())
//             .then((responseJson) => {
//                 console.log(responseJson)
//                 if (responseJson.status) {
//                     dispatch(send_otp(false))
//                     dispatch(successfull(true))
//                     // dispatch(set_snack_bar(responseJson.status, "Password Changed Successfully"));
//                 } else {
//                     dispatch(set_snack_bar(responseJson.status, responseJson.message));
//                 }
//                 dispatch(unsetLoader());
//             })
//             .catch((error) => {
//                 console.error(error);
//             });
//     }
// }

// export function create_account(name, orgname, number, email, password) {
//   return async (dispatch) => {
//     dispatch(setLoader());
//     try {
//       const response = await fetch(UNIVERSAL.USERBASEURL + "addUserDetails", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: name,
//           orgname: orgname,
//           number: number,
//           email: email,
//           password: password,
//         }),
//       });
//       const responseJson = await response.json();
//       console.log("asilllllll", responseJson.result);
//       if (responseJson.status) {
//         dispatch(setAdminLogin(responseJson.result.data.result));
//         dispatch(setAdminId(responseJson.result.data.result.token));
//         dispatch(set_snack_bar(responseJson.status, "Login Successfully"));
//       } else {
//         dispatch(set_snack_bar(responseJson.status, "Invalid User"));
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       dispatch(unsetLoader());
//     }
//   };
// }
export function create_account(name, orgname, number, email, password) {
  // console.log(name, orgname, number, email, password);
  return async (dispatch) => {
    dispatch(setLoader());
    try {
      const response = await fetch(UNIVERSAL.USERBASEURL + "addUserDetails", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          orgname: orgname,
          number: number,
          email: email,
          password: password,
        }),
      });

      // Check if the response is not JSON
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        const text = await response;
        console.error("Expected JSON response but got:", text);
        dispatch(set_snack_bar(true, "Unexpected server response. Please check the server logs."));
        return;
      }

      const responseJson = await response.json();
      console.log("Response JSON:", responseJson);

      if (responseJson.status) {
        dispatch(set_snack_bar(true, responseJson.displayMessage));
      } else {
        dispatch(set_snack_bar(true, responseJson.displayMessage));
      }
    } catch (error) {
      console.error("Network or server error:", error);
      dispatch(set_snack_bar(true, "Network or server error occurred. Please try again later."));
    } finally {
      dispatch(unsetLoader());
    }
  };
}

// export function create_account(name,orgname,number,email,password) {
//   console.log(name,orgname,number,email,password)
//   return async (dispatch) => {
//     dispatch(setLoader());
//     try {
//       const response = await fetch(UNIVERSAL.USERBASEURL + "addUserDetails", {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name:name,
//           orgname:orgname,
//           number:number,
//           email: email,
//           password: password,
//         }),
//       });
//       const responseJson = await response.json();
//       console.log("asilllllll", responseJson);
//       if (responseJson.status) {
//         // dispatch(setAdminLogin(responseJson.result.data.result));
//         // dispatch(setAdminId(responseJson.result.data.result.token));
//         // dispatch(set_snack_bar(responseJson.displayMessage.error));
//         dispatch(set_snack_bar(true, responseJson.displayMessage.error));
//       } else {
//         dispatch(set_snack_bar(true, responseJson.displayMessage.error));
//       }
//     } catch (error) {
//       console.error(error);
//     } finally {
//       dispatch(unsetLoader());
//     }
//   };
// }


//-------------------------------------- View User Details ---------------------------------//


export function viewUserDetails(token) {
  return (dispatch) => {
      dispatch(setLoader());
      return fetch(UNIVERSAL.USERBASEURL2 + "view-byuser" ,{
          method: "GET",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: token,
          },
      })
          .then((response) => response.json())
          .then((responseJson) => {
              console.log("resNOTICE", responseJson.result.data.result._id)
              if (responseJson.status) {
                  dispatch({ type: CREDIT_DETAILS, payload: responseJson.result.data.result });
                  dispatch(userCreditDetails(responseJson.result.data.result._id));
                  dispatch(set_snack_bar(true, responseJson.message));
                  dispatch(unsetLoader());
              } else {
                  dispatch({ type: CREDIT_DETAILS, payload: [] })
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

export function userCreditDetails(id) {
  return (dispatch) => {
      dispatch(setLoader());
      return fetch(UNIVERSAL.USERBASEURL2 + "get-by-userid/" + id , {
          method: "GET",
          headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
          },
      })
          .then((response) => response.json())
          .then((responseJson) => {
              console.log("resNOTICE", responseJson)
              if (responseJson.status) {
                  dispatch({ type: CREDIT_DETAILSTWO, payload: responseJson.result.data.result });
                  dispatch(set_snack_bar(true, responseJson.message));
                  dispatch(unsetLoader());
              } else {
                  dispatch({ type: CREDIT_DETAILSTWO, payload: [] })
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