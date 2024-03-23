import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { WhiteTextField } from "../../components/WhiteTextField";
import Grid from "@mui/material/Grid";

export const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ width: "100dvw", height: "100dvh", backgroundColor: "#FFFFFF" }}
    >
      <div
        style={{
          backgroundColor: "#4542C1",
          padding: "1px",
          color: "#ffffff",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>Edit Profile</h3>
        </div>
        <div
          onClick={() => {
            navigate("/profile");
          }}
        >
          <ArrowBackIcon
            style={{
              marginLeft: "16px",
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        </div>
      </div>
      <div
        className="screen-center"
        style={{
          borderRadius: "16px",
          borderColor: "#4542C1",
          boxShadow: "4px 7px 5px #E6EEF3",
          shadowOffset: {
            width: 30,
            height: -50,
          },
          backgroundColor: "#FBC31E",
        }}
      >
        <div style={{ padding: "24px" }}>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <p>ชื่อ</p>
            </Grid>
            <Grid item xs={10}>
              <input
                style={{
                  padding: "10px 16px",
                  borderRadius: 24,
                  width: "50dvw",
                  borderWidth: "0px",
                  fontFamily: "Kanit",
                  fontSize: "1em",
                }}
                // value={value}
                // onChange={onValueChange}
              ></input>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
