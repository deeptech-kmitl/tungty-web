import React from "react";
import { useState } from "react";
import { WhiteTextField } from "../../components/WhiteTextField";
import { YellowButton } from "../../components/YellowButton";
import TextField from "@mui/material/TextField";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  return (
    <div
      style={{ width: "100dvw", height: "100dvh", backgroundColor: "#4542C1" }}
    >
      <div className="screen-center">
        <h1 style={{ color: "#FDC319" }}>TungTy</h1>
        <div style={{ marginBottom: "30px" }}>
          <h3
            style={{ marginLeft: "16px", textAlign: "left", color: "#ffffff" }}
          >
            Username
          </h3>
          <WhiteTextField
            valueKey="abc"
            type="password"
            label="Custom CSS"
            id="custom-css-outlined-input"
            value={username}
            onValueChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <h3 style={{ marginLeft: "16px", textAlign: "left", color: "#ffffff" }}>
          Password
        </h3>
        <WhiteTextField
          valueKey="abc"
          label="Custom CSS"
          id="custom-css-outlined-input"
          value={password}
          onValueChange={(e) => setPasword(e.target.value)}
        />
        {/* <TextField
          hiddenLabel
          id="filled-hidden-label-normal"
          value={username}
          variant="filled"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        /> */}
        <YellowButton
          title="Login"
          handleOnClick={() => {
            console.log("Login");
          }}
        ></YellowButton>
      </div>
    </div>
  );
};
