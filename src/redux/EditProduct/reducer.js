import { type } from "./type";

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const EditProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.EDIT_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case type.EDIT_PRODUCT_SUCCESS:
      return {
        loading: false,
        success: action.payload,
        error: null,
      };

    case type.EDIT_PRODUCT_ERROR:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };

    default:
      return state;
  }
};


export default EditProductReducer

