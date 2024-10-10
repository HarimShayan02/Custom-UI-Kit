import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};

const middlewares = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
    // composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;