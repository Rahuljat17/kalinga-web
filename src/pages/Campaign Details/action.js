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
import { GET_CAMPAIGNS_DETAILS } from "./constant";
export function ViewCampaignAll(token) {
  return (dispatch) => {
    dispatch(setLoader());
    return fetch(UNIVERSAL.ADMINBASEURL + "/campaign_details", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("asiillllllllllllla", responseJson.result.data);
        if (responseJson.status) {
          dispatch({
            type: GET_CAMPAIGNS_DETAILS,
            payload: {
              data: responseJson.result.data,
              count: responseJson.result.data.length,
            },
          });
          dispatch(set_snack_bar(true, "Data View Sucessfully"));
          dispatch(unsetLoader());
        } else {
          dispatch({
            type: GET_CAMPAIGNS_DETAILS,
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
