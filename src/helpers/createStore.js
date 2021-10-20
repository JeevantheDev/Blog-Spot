import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../client/reducers/rootReducer';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from '../config/fbConfig';

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reactReduxFirebase(firebase, {
        useFirestoreForProfile: true,
        userProfile: 'users',
        attachAuthIsReady: true,
      }),
      reduxFirestore(firebase),
    ),
  );

  return store;
};
