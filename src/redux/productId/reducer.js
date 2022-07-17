import { type } from "./type";

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const productIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_PRODUCT_ID_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case type.GET_PRODUCT_ID_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    case type.GET_PRODUCT_ID_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: {},
      };

    default:
      return state;
  }
};

export default productIdReducer;
