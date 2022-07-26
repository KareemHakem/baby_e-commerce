import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getRate } from "../../redux/rate/action";
import { postRate } from "../../redux/ratePost/action";

import StarRating from "../../components/Rate";
import Loading from "../../commons/Loading";
import Error from "../../commons/Error";
import { useParams } from "react-router-dom";

export default function AddRate() {
  const { data, loading, error } = useSelector((state) => state.rate);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRate());
  }, [dispatch]);

  const handleChangeRate = (e) => {
    setValue(e.target.value);
  };

  const handleClickRate = (rate) => {
    if (isNaN(rate)) {
      return;
    }
    const body = {
      rate: Number(rate),
      productId: Number(id),
    };
    
    dispatch(
      postRate(body, () => {
        dispatch(getRate());
      })
    );
  };

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <StarRating
      id={id}
      value={value}
      data={data}
      handleChangeRate={handleChangeRate}
      handleClickRate={handleClickRate}
    />
  );
}
