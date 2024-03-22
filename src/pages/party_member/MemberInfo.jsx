import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { YellowButton } from "../../components/YellowButton";

export const MemberInfo = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ width: "100dvw", height: "100dvh", backgroundColor: "#4542C1" }}
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
          <h3>Member Information</h3>
        </div>
        <div
          onClick={() => {
            navigate("/member");
          }}
        >
          <ArrowBackIcon
            style={{
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
          // border: "3px solid #4542C1",
          boxShadow: "4px 7px 5px #3431A0",
          shadowOffset: {
            width: 30,
            height: -50,
          },
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            textAlign: "center",
            alignContent: "center",
            display: "flex",
            flexDirection: "column",
            padding: "75px",
          }}
        >
          <Avatar
            sx={{ width: 200, height: 200, alignSelf: "center" }}
            src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
          />
          <h2 style={{ color: "#FDC319" }}>blujay bj</h2>
          <Divider variant="middle" />
          <p>
            เรียนที่คณะเทคโนโลยีสารสนเทศ สจล. ปี3 รุ่น 18 ชอบเล่นเกมมาก
            ชอบเล่นบาสมากชวนเล่นได้ค่ะ{" "}
          </p>
          <div>
            <YellowButton title="CHAT" handleOnClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};
