import { createReducer } from '../utils';
// Constants
const LOGINING_USER = "LOGINING_USER";
const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
const LOGIN_USER_FAILED = "LOGIN_USER_FAILED";
const ADD_USER = "ADD_USER";
const LOGOUT_USER = "LOGOUT_USER";

// Reducers
const initialState = {};

export default createReducer(initialState, {
  [LOGINING_USER]: () => ({
    isLoading: true
  }),
  [LOGIN_USER_SUCCESS]: (state, { data: { user } }) => ({
    username: user.username,
    firstname: user.firstname,
    isLoading: false
  }),
  [LOGIN_USER_FAILED]: (state, { data: { error } }) => ({
    isLoading: false,
    error
  }),
  [LOGOUT_USER]: () => ({
    username: '',
    firstname: '',
  }),
  [ADD_USER]: (state, { data: { user } }) => ({
    username: state.username,
    name: state.name,
    email: state.email,
    isLoading: false
  })
});

// Actions
// LOGIN USER
export function logining() {
  return { type: LOGINING_USER }
}

export function loginUserSuccess(user) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { data: { user } }
  }
}

export function loginUserFailed(error) {
  return {
    type: LOGIN_USER_FAILED,
    payload: { data: { error } }
  }
}
// LOG OUT
export function logOut(){
  return { type: LOGOUT_USER  }
}

// ADD USER
export function addUser(user) {
  return {
    type: ADD_USER,
    payload: { data: user }
  }
}

// AJAX requests
// LOGIN NEW USER
export function checkUser(user) {
  return dispatch => {
    dispatch(logining());
    console.log(user.username, user.password);
    $.ajax({
      type: 'POST',
      data: {
        "username": user.username,
        "password": user.password
      },
      url: 'http://localhost:3000/api/user/login',
      success: function(json) {
        dispatch(loginUserSuccess(json.user));
      },
      error: function(e) {
        dispatch(loginUserFailed(e));
      }
    });
  }
}
// ADD USER
export function createNewUser(user) {
  return dispatch => {
    dispatch(logining());
    $.ajax({
      type: 'POST',
      data: {
        "username": user.username,
        "password": user.password,
        "firstname": user.firstname
      },
      url: 'http://localhost:3000/api/user/register',
      success: function(json) {
        dispatch(loginUserSuccess(json.user));
      },
      error: function(e) {
        dispatch(loginUserFailed(e));
      }
    });
  }
}
