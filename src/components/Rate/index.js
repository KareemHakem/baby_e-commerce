import React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import "./style.css";
export default function StarRating({
  handleChangeRate,
  handleClickRate,
  value,
  id,
  data,
}) {
  const valueRate = data.filter((item) => item.productId === Number(id));
  const sum = valueRate.reduce((accumulator, object) => {
    return accumulator + object.rate / valueRate.length;
  }, 0);

  return (
    <Box className="rate-container">
      <Rating
        name="simple-controlled"
        value={value}
        onChange={handleChangeRate}
        onClick={(e) => {
          handleClickRate(e.target.value);
        }}
      />
      <h3 className="rate-number">{sum.toFixed()}</h3>
    </Box>
  );
}
