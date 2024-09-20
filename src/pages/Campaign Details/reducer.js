import { GET_CAMPAIGNS_DETAILS } from "./constant";

const initial_state = {
  all_campaigns: [],
};

export default function reducer(state = initial_state, action) {
  switch (action.type) {
    case GET_CAMPAIGNS_DETAILS:
      return (state = {
        ...state,
        all_campaigns: action.payload.data,
        count: action.payload.count,
      });
    default:
      return state;
  }
}
