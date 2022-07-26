import { type } from "./type";
import { axios } from "../../apis/axios";

export const getReviews = () => async (dispatch) => {
  dispatch({ type: type.GET_REVIEWS_REQUEST });
  try {
    const { data } = await axios.get(`/reviews`);
    dispatch({ type: type.GET_REVIEWS_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: type.GET_REVIEWS_ERROR, payload: err });
  }
};
