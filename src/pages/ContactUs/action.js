import { setLoader, unsetLoader } from "../../common/loader/action";
import UNIVERSAL from "../../config/config";
import { set_snack_bar } from "../../common/snackbar/action";
import "firebase/storage";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadString,
} from "firebase/storage";

export function ContactUsMessage(token, name, email, message) {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.USERBASEURL + "/create-contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("done", responseJson);
        if (responseJson.status) {
          dispatch(set_snack_bar(responseJson.status, responseJson.displayMessage));
        } else {
          dispatch(set_snack_bar(responseJson.status,responseJson.displayMessage));
        }
        dispatch(unsetLoader());
      })
      .catch((error) => {
        console.error(error);
        dispatch(unsetLoader());
      });
  };
}
