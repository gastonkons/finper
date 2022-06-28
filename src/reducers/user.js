import userTypes from "../actions/userType";

const initialState = {
  user: {},
  loading: false,
  error: null,
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_LOGIN:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      };
    case userTypes.USER_LOGOUT:
      return {
        ...state,
        user: {},
        loading: false,
        error: null
      };
    case userTypes.USER_REGISTER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      };
    case userTypes.USER_UPDATE:
      return {
        ...state,
        user: action.payload,
        loading: false,
        error: null
      };
    case userTypes.USER_LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case userTypes.USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default userReducer;