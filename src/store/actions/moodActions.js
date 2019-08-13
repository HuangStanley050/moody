import * as actionType from "./actionTypes.js";

export const add_mood = mood => ({ type: actionType.ADD_MOOD_START, mood });
export const add_mood_fail = err => ({ type: actionType.ADD_MOOD_FAIL, err });
export const add_mood_okay = moods => ({ type: actionType.ADD_MOOD_OK, moods });
