import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";

export const MemberInfo = () => {
  const navigate = useNavigate();
  let { username } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`https://tungty-service-be.onrender.com/user/username/${username}`)
      .then(response => response.json())
      .then(data => setUserInfo(data))
  }, []);

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
          <h2 style={{ color: "#FDC319" }}>{userInfo.name} {userInfo.surname}</h2>
          
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <p>{userInfo.field}</p>
            </Grid>
            <Grid item xs={6}>
              <p>ปี {userInfo.year}</p>
            </Grid>
          </Grid>
          <Divider variant="middle" />
          <p>
            {userInfo.aboutMe}
          </p>
        </div>
      </div>
    </div>
  );
};
