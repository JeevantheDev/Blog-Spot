import authReducer from './authReducer';
import blogReducer from './blogReducer';
import alertReducer from './alertReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  blog: blogReducer,
  alert: alertReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
