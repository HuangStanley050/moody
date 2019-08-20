import * as actionType from "../actions/actionTypes";
const initialState = {
  loading: false,
  data: {
    moods: [],
    original: []
  }
};
const filterMood = (description, moods) => {
  let result = moods.filter(item => item.mood === description);
  return result;
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.FILTER:
      let filterMoods;
      if (action.mood === "") {
        return {
          ...state
        };
      } else if (action.mood === "default") {
        console.log("select default", state.data.original);
        return {
          ...state,
          data: {
            ...state.data,
            moods: [...state.data.original]
          }
        };
      } else {
        filterMoods = filterMood(action.mood, state.data.moods);
        console.log("after filter", filterMoods);
        return {
          ...state,
          data: {
            ...state.data,
            moods: [...filterMoods]
          }
        };
      }

    case actionType.GET_MOODS_OK:
      //console.log(action.data);
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          moods: [...action.data],
          original: [...action.data]
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
