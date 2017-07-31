import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password, nonce }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    const requestUrl = 'https://prochete.li/api/user/generate_auth_cookie/?insecure=cool&nonce=' + nonce
			+ '&username=' + email + '&password=' + password;

    return fetch(requestUrl)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'ok') {
          const STORAGE_KEY = 'userID';
          STORAGE_KEY_ADD = responseJson.user.id;
          console.log(responseJson.user.id);
          AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(STORAGE_KEY_ADD), () => {
          });
          loginUserSuccess(dispatch);
          Actions.licensed({ type: 'reset' });
        } else {
          loginUserFail(dispatch);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch) => {
  dispatch({
    type: LOGIN_USER_SUCCESS
  });

  Actions.main({ type: 'reset' });
};
