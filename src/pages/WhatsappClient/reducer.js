import { GET_USER_ALL_CAMPAIGN } from "./Constant";

const initial_state = {
  all_view_all_campaign: [],
};
export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case GET_USER_ALL_CAMPAIGN:
      return (state = { ...state, all_view_all_campaign: action.payload.data });
    default:
      return state;
  }
}
