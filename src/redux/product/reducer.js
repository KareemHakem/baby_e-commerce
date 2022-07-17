import { type } from "./type";

const initialState = {
  data: [],
  error: null,
  loading: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case type.GET_PRODUCT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };

    case type.GET_PRODUCT_ERROR:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;
