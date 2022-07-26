import { type } from "./type";

const initialState = {
  rate: [],
  loading: false,
  error: null,
};

const addRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.POST_RATE_REQUEST:
      return {
        loading: true,
      };

    case type.POST_RATE_SUCCESS:
      return {
        loading: false,
        rate: action.type,
        error: null,
      };

    case type.POST_RATE_ERROR:
      return {
        loading: false,
        rate: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default addRateReducer;
