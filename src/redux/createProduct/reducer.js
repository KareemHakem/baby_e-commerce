import { type } from "./type";

const initialState = {
  success: false,
  data: {},
  error: null,
  loading: false,
};

const CreateProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE_PRODUCT_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case type.CREATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        success: action.payload,
        error: null,
      };

    case type.CREATE_PRODUCT_ERROR:
      return {
        loading: false,
        success: false,
        data: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CreateProductReducer;
