import { GET_ITEMS_SUCCESS, GET_ITEMS_ERROR, SET_LOADING } from "../types";

const initialState = {
  loading: false,
  error: null,
  items: [],
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
