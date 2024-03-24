import React from "react";
import { useState } from "react";
import { WhiteTextField } from "../../components/WhiteTextField";
import { YellowButton } from "../../components/YellowButton";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPasword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const Login = () => {
    if (username == "" || password == "") {
      setErrorMsg("กรุณากรอกข้อมูลให้ครบถ้วน!");
    }
    try {
      const response = await fetch("tungty-service-be.onrender.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
      }

      navigate("/find-party");
    } catch (error) {
      setErrorMsg(error.message);
    }
  };
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
          type="password"
          value={password}
          onValueChange={(e) => setPasword(e.target.value)}
        />
        <h4 style={{ color: "#FF5C5C" }}>{errorMsg}</h4>
        <YellowButton title="Login" handleOnClick={Login}></YellowButton>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <h4 style={{ color: "#ffffff" }}>ยังไม่มีบัญชี? &nbsp;</h4>
          <div
            onClick={() => {
              navigate("/register");
            }}
          >
            <h4 style={{ color: "#FDC319" }}>สมัครสมาชิก</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
