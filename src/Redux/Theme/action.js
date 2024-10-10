import { ActionTypes } from "./types";
export const SetThemeColor = (decision) => async (dispatch) => {
    dispatch({
        type: ActionTypes.SET_THEME,
        payload: decision,
    });
};
