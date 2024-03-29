import React from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { YellowButton } from "../../components/YellowButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear()
    navigate("/");
  }
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#FFFFFF", }}
    >
      <div
        style={{
          backgroundColor: "#4542C1",
          padding: "1px",
          color: "#ffffff",
          zIndex: 50,
          position: "relative",
          justifyContent: "space-between",
          alignItems: "center",
          overflow: "hidden"
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h3>My Profile</h3>
        </div>
        <div
          onClick={() => {
            navigate("/edit-profile");
          }}
        >
          <EditIcon
            style={{
              marginLeft: "16px",
              position: "absolute",
              top: "50%",
              left: "93%",
              transform: "translate(-100%, -50%)",
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
          backgroundColor: "#FFFFFF",
        }}
      >
        <div
          style={{
            textAlign: "center",
            alignContent: "center",
            display: "flex",
            flexDirection: "column",
            paddingRight: "24px",
            paddingLeft: "24px",
          }}
        >
          <div
            style={{
              paddingRight: "75px",
              paddingLeft: "75px",
              alignSelf: "center",
            }}
          >
            <Avatar
              sx={{ width: "175px", height: "175px", alignSelf: "center" }}
              src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp"
            />
          </div>
          <h2 style={{ color: "#FDC319" }}>blujay bj</h2>
          <Divider variant="middle" />
          <div style={{ textAlign: "left" }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <p>คณะ : IT </p>
              </Grid>
              <Grid item xs={6}>
                <p>สาขา : IT</p>
              </Grid>
              <Grid item xs={6}>
                <p>ปี : 3</p>
              </Grid>
              <Grid item xs={6}>
                <p>รหัส : 63xxxxx</p>
              </Grid>
            </Grid>
            <p>
              เรียนที่คณะเทคโนโลยีสารสนเทศ สจล. ปี3 รุ่น 18 ชอบเล่นเกมมาก
              ชอบเล่นบาสมากชวนเล่นได้ค่ะ
            </p>
          </div>
          <div>
            <YellowButton title="Logout" handleOnClick={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  );
};
