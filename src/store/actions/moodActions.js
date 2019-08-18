import * as actionType from "./actionTypes.js";

export const add_mood = mood => ({ type: actionType.ADD_MOOD_START, mood });
export const add_mood_fail = err => ({ type: actionType.ADD_MOOD_FAIL, err });
export const add_mood_okay = () => ({ type: actionType.ADD_MOOD_OK });

export const get_moods = timeString => ({
  type: actionType.GET_MOODS_START,
  timeString
});

export const get_moods_okay = data => ({
  type: actionType.GET_MOODS_OK,
  data
});
export const get_moods_fail = err => ({ type: actionType.GET_MOODS_FAIL, err });
export const filter_moods = mood => ({ type: actionType.FILTER, mood });
