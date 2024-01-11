import { AUTHENTICATED, NOT_AUTHENTICATED, SET_USER_NAME } from "../actions/authATest";

const initialState = {
  authChecked: false,
  loggedIn: false,
  firstName: null,
  lastName: null,
  userName: null,
};

export default function authorization(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authChecked: true,
        loggedIn: true,
      };
    case NOT_AUTHENTICATED:
      return {
        ...state,
        authChecked: true,
        loggedIn: false,
      };
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
}
