import * as actionType from "../actions/actionTypes";
const initialState = {
  isAuth: true,
  userInfo: {
    email: "",
    uid: ""
  },
  loading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.LOGIN_START:
      return {
        ...state,
        loading: true
      };
    case actionType.LOGIN_OKAY:
      console.log(action.userInfo);
      return {
        ...state,
        isAuth: true,
        userInfo: {
          ...state.userInfo,
          email: action.userInfo.email,
          uid: action.userInfo.uid
        },
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
