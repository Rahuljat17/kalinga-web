import { SEARCH_COURSES } from "./constant";
import UNIVERSAL from "../../config/config";
import { setLoader, unsetLoader } from "../../common/loader/action";

import "firebase/storage";
import { set_snack_bar } from "../../common/snackbar/action";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadString,
} from "firebase/storage";

export function add_upload_campgin(
  phonenumber,
  excelnumber,
  message,
  urlsss,
  token
) {
  return (dispatch) => {
    dispatch(setLoader(true));
    if(urlsss===null){

      createCampgin(phonenumber, excelnumber, message, "asini kichi", token)

    }
    else{

    
    var otp = Math.floor(Math.random() * (999999 - 100000)) + 100000;
    let storageRef;
    if (urlsss.type.startsWith("video/")) {
      storageRef = ref(getStorage(), `/Data/${otp}.mp4`);
    } else if (urlsss.type.startsWith("image/")) {
      storageRef = ref(getStorage(), `/Data/${otp}.png`);
    } else if (urlsss.type === "application/pdf") {
      storageRef = ref(getStorage(), `/Data/${otp}.pdf`);
    } else {
      console.log("Unsupported file type");
      dispatch(setLoader(false));
      return;
    }
    const uploadTask = uploadBytesResumable(storageRef, urlsss);
    uploadTask.on(
      "state_changed",
      function (snapshot) {},
      function (error) {
        console.log(error);
        dispatch(setLoader(false));
      },
      function () {
        getDownloadURL(uploadTask.snapshot.ref).then(function (urlsss) {
          console.log(urlsss);
          dispatch(
            createCampgin(phonenumber, excelnumber, message, urlsss, token)
          );
        });
      }
    );
  };
}
}

export function createCampgin(phonenumber, excelnumber, message, data, token) {
  console.log(phonenumber, excelnumber, message, data, token);
  return (dispatch) => {
    dispatch(setLoader());
    // var otp= Math.floor(Math.random() * (999999 - 100000)) + 100000;
    return fetch(UNIVERSAL.USERBASEURL + "create-campaign", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        phonenumber: phonenumber,
        excelnumber: excelnumber,
        message: message,
        data: data,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status) {
          // dispatch(ViewVendorStore(token));
          dispatch(unsetLoader());
        } else {
          // alert("No Registration Found! Please Register First");
          // dispatch({ type: SET_USER, payload: [] })
          // dispatch(set_snack_bar(responseJson.status, "Invalid User"));
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
