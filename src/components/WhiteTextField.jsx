import React from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const WhiteTextField = ({ value, onValueChange, type }) => {
  return (
    <input
      type={type}
      style={{
        padding: "10px 16px",
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
