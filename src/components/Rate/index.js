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
  console.log(valueRate, "valueRate");

  const sum = valueRate.reduce((accumulator, object) => {
    return accumulator + object.rate / valueRate.length;
  }, 0);

  console.log(value);

  console.log(sum, "sum");
  return (
    <Box style={{ marginTop: 5 }} className="rate-container">
      <Rating
        name="simple-controlled"
        value={value}
        onChange={handleChangeRate}
        onClick={(e) => {
          handleClickRate(e.target.value);
        }}
      />
      <h3 style={{ marginLeft: 10 }}>{sum.toFixed()}</h3>
    </Box>
  );
}
