import { type } from "./type";
import { axios } from "../../apis/axios";
import { errorHandlers } from "../../utils/errorHandlers";

export const postReview = (value, callback) => async (dispatch) => {
  dispatch({ type: type.POST_REVIEW_REQUEST });
  try {
    const { data } = await axios.post(`/reviews`, value);
    dispatch({ type: type.POST_REVIEW_SUCCESS, payload: data });
    callback && callback();
  } catch (err) {
    dispatch({ type: type.POST_REVIEW_ERROR, payload: err });
    errorHandlers(err);
  }
};
