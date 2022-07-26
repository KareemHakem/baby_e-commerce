import { type } from "./type";

const initialState = {
  loading: false,
  success: false,
  error: null,
};

const createReviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.POST_REVIEW_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case type.POST_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        error: null,
      };

    case type.POST_REVIEW_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default createReviewReducer;
