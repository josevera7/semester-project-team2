import { regUserRef, loginUserRef, userRef } from "../../utils/references";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";

import { userActionTypes } from "./types";

const {
  REGISTER_USER,
  REGISTER_USER_FAILED,
  REGISTER_USER_SUCCESS,
  SET_USER_LOCATION,
  TOGGLE_LOCATION,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILED,
  LOGOUT_USER,
  LOGOUT_USER_FAILED,
  LOGOUT_USER_SUCCESS,
  ADD_FAVORITE,
  ADD_FAVORITE_FAILED,
  ADD_FAVORITE_SUCCESS,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO,
  FETCH_USER_INFO_FAILED,
  REMOVE_FAVORITE,
  REMOVE_FAVORITE_FAILED,
  REMOVE_FAVORITE_SUCCESS
} = userActionTypes;

// Register Action
export const registerUser = user => async dispatch => {
  dispatch({ type: REGISTER_USER });
  await axios
    .post(regUserRef, user)
    .then(res => {
      dispatch({ type: REGISTER_USER_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: REGISTER_USER_FAILED, payload: err }));
};
// Fetch Location Action
export const setLocation = location => async dispatch => {
  dispatch({ type: SET_USER_LOCATION, payload: location });
};
// Toggle location Action
export const toggleLocation = toggle => dispatch => {
  dispatch({ type: TOGGLE_LOCATION, payload: toggle });
};
// Login Action
export const loginUser = user => async dispatch => {
  dispatch({ type: LOGIN_USER });

  await axios
    .post(loginUserRef, user)
    .then(res => {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res });
    })
    .catch(err => dispatch({ type: LOGIN_USER_FAILED, payload: err }));
};

export const logoutUser = () => async dispatch => {
  dispatch({ type: LOGOUT_USER });
  try {
    await AsyncStorage.removeItem("jwtToken");
    dispatch({ type: LOGOUT_USER_SUCCESS });
  } catch (err) {
    dispatch({ type: LOGOUT_USER_FAILED, payload: err });
  }
};

export const addFavorite = beach_id => async (dispatch, getState) => {
  // console.log(getState().user.account, beach_id);
  await dispatch({ type: ADD_FAVORITE });
  const { _id } = getState().user.account;

  await axios
    .put(`${userRef}/${_id}/${beach_id}/add`)
    .then(async () => {
      await dispatch({ type: ADD_FAVORITE_SUCCESS });
    })
    .catch(err => dispatch({ type: ADD_FAVORITE_FAILED }));
};
export const removeFavorite = beach_id => async (dispatch, getState) => {
  // console.log(getState().user.account, beach_id);
  await dispatch({ type: REMOVE_FAVORITE });
  const { _id } = getState().user.account;

  await axios
    .put(`${userRef}/${_id}/${beach_id}/remove`)
    .then(async () => {
      await dispatch({ type: REMOVE_FAVORITE_SUCCESS });
    })
    .catch(err => dispatch({ type: REMOVE_FAVORITE_FAILED }));
};

export const fetchUserAccount = () => async (dispatch, getState) => {
  const { _id } = getState().user.account;

  dispatch({ type: FETCH_USER_INFO });

  await axios
    .get(`${userRef}/${_id}`)
    .then(res => {
      dispatch({ type: FETCH_USER_INFO_SUCCESS, payload: res.data });
    })
    .catch(err => dispatch({ type: FETCH_USER_INFO_FAILED, payload: err }));
};
