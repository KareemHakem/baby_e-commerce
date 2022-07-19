import { type } from "./type";

const initialState = {
  success: false,
  deleteLoading: false,
  error: null,
};

const deleteProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DELETE_PRODUCT_REQUEST:
      return {
        deleteLoading: true,
        ...state,
      };

    case type.DELETE_PRODUCT_SUCCESS:
      return {
        deleteLoading: false,
        success: action.payload,
        error: null,
      };

    case type.DELETE_PRODUCT_ERROR:
      return {
        deleteLoading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteProductReducer;
