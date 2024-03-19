import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const WhiteTextField = ({ value, onValueChange, valueKey }) => {
  return (
    <input
      style={{
        padding: "13px",
        borderRadius: 24,
        width: "70dvw",
        borderWidth: "0px",
        fontFamily: "Kanit",
        fontSize: "1em",
      }}
      value={value}
      onChange={onValueChange}
    ></input>
  );
};
