import React from "react";

export const YellowButton = ({ title, handleOnClick }) => {
  return (
    <div
      onClick={handleOnClick}
      style={{
        backgroundColor: "#FDC319",
        margin: "36px",
        borderRadius: 32,
        color: "#4542C1",
      }}
    >
      <h3 style={{ padding: "8px", margin: "0px" }}>{title}</h3>
    </div>
  );
};
