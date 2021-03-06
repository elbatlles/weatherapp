import { SET_CITY } from "../actions/index";
export const city = (state = {}, action) => {
  switch (action.type) {
    case SET_CITY:
      return { ...state, city: action.value };
    default:
      return state;
  }
  return state;
};
