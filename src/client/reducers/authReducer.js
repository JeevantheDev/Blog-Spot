import { AUTH_ERROR, SIGNOUT_SUCCESS, SIGNUP_LOGIN_SUCCESS } from '../actions/actionTypes';

const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SIGNUP_LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case AUTH_ERROR:
      return {
        ...state,
        authError: 'Login Failed',
      };
    case SIGNOUT_SUCCESS:
      return state;
    case SIGNUP_LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
      };
    case AUTH_ERROR:
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};
export default authReducer;
