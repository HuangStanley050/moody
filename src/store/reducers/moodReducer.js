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
    case actionType.ADD_MOOD_START:
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
