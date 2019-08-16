import * as actionType from "../actions/actionTypes";
const initialState = {
  loading: false,
  data: {
    day: "",
    moods: []
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_MOODS_OK:
      //console.log(action.data);
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          moods: [...action.data]
        }
      };
    case actionType.ADD_MOOD_START:
    case actionType.GET_MOODS_START:
      return {
        ...state,
        loading: true
      };
    case actionType.ADD_MOOD_OK:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
