import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { createStore, compose, applyMiddleware } from "redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import thunk from 'redux-thunk';
import usersReducer from './reducers/usersReducer'
import config from './firebase/config'

const store = createStore(usersReducer, compose
    (applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reactReduxFirebase(config), 
    reduxFirestore(config)))
export default store