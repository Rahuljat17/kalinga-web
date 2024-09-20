import UNIVERSAL from "../../config/config";
import { GET_USER_ALL_CAMPAIGN } from "./Constant";
import { setLoader, unsetLoader } from "../../common/loader/action";
import { set_snack_bar } from "../../common/snackbar/action";
import "firebase/storage";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadString,
} from "firebase/storage";

export function GetallviewCampaign(token) {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.USERBASEURL + "get-campaign", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("asiillllllllllllla", responseJson);
        if (responseJson.status) {
          dispatch({
            type: GET_USER_ALL_CAMPAIGN,
            payload: {
              data: responseJson.result.data,
              count: responseJson.result.data.length,
            },
          });
          dispatch(set_snack_bar(true, "Data View Sucessfully"));
          dispatch(unsetLoader());
        } else {
          dispatch({
            type: GET_USER_ALL_CAMPAIGN,
            payload: { data: [], count: 0 },
          });
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
