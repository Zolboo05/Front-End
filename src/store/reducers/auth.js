import * as actionTypes from "../actions/actionTypes";
import { Redirect } from "react-router";
export const initialState = {
  accessToken: "",
  isLogin: true,
  id: "",
  firstname: "",
  lastname: "",
  username: "",
  card_count: 0,
};

const login = (state, action) => {
  return {
    ...state,
    accessToken: action.accessToken,
    avatar: action.avatar,
    fbId: action.fbId,
    check: action.check,
    pass: action.pass,
  };
};
const loginOut = (state, action) => {
  return {
    accessToken: "",
    isLogin: true,
    id: "",
    firstname: "",
    lastname: "",
    username: "",
    card_count: 0,
  };
};
const profileSuccess = (state, action) => {
  return {
    ...state,
    firstname: action.first_name,
    lastname: action.last_name,
    username: action.username,
    accessToken: action.token,
    email: action.email,
    phone: action.phone,
    card_count: action.card_count,
    isLogin: false,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.login:
      return login(state, action);
    case actionTypes.loginOut:
      return loginOut(state, action);
    case actionTypes.profileSuccess:
      return profileSuccess(state, action);
    default:
      return state;
  }
};

export default reducer;
