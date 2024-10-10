import { ActionTypes } from "./types";

let INITIAL_STATE = {
    isThemeLight: true,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.SET_THEME:
            return { ...state, isThemeLight: action.payload };
        default:
            return state;
    }
};