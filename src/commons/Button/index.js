import React from "react";
import Loading from "../Loading";

import "./style.css";

export const Button = ({
  title,
  primary = true,
  secondary,
  Icon,
  disabled,
  loading,
  width,
  height,
  margin,
  ...props
}) => {
  return (
    <button
      disabled={disabled || loading}
      className={
        disabled || loading
          ? "disabled-button basic-button"
          : primary
          ? "basic-button custom-button-primary "
          : secondary && "basic-button custom-button-secondary"
      }
      style={{ width, margin, height }}
      {...props}
    >
      {loading ? <Loading style={{ width: 20, height: 20 }} /> : title}

      {Icon && <div className="button-right-icon"> {Icon}</div>}
    </button>
  );
};
