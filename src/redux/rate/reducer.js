import { type } from "./type";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const userRateReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_RATE_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case type.GET_RATE_SUCCESS:
      return {
        data: action.payload,
        loading: false,
        error: null,
      };

    case type.GET_RATE_ERROR:
      return {
        data: [],
        loading: false,
        error: action.payloads,
      };

    default:
      return state;
  }
};

export default userRateReducer;
