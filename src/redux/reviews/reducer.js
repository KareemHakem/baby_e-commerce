import { type } from "./type";

const initialState = {
  loading: false,
  reviews: [],
  error: null,
};

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_REVIEWS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case type.GET_REVIEWS_SUCCESS:
      return {
        loading: false,
        reviews: action.payload,
        error: null,
      };

    case type.GET_REVIEWS_ERROR:
      return {
        loading: false,
        reviews: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reviewsReducer;
