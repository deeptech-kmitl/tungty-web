import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { WhiteTextField } from "../../components/WhiteTextField";
import Grid from "@mui/material/Grid";
import { YellowButton } from "../../components/YellowButton";

export const EditProfile = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ width: "100vw", height: "100vh", backgroundColor: "#FFFFFF" }}
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
        // className="screen-center"
        style={{
          borderRadius: "16px",
          borderColor: "#4542C1",
          // boxShadow: "4px 7px 5px #E6EEF3",
          // shadowOffset: {
          //   width: 30,
          //   height: -50,
          // },
          // backgroundColor: "#FBC31E",
        }}
      >
        <div style={{ padding: "24px", alignContent: "center" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h3 style={{ color: "#4542C1" }}>ข้อมูลโปรไฟล์</h3>
            </Grid>
            <Grid item xs={3}>
              <p style={{ color: "#4542C1" }}>ปี</p>
            </Grid>
            <Grid item xs={9}>
              <input
                style={{
                  padding: "10px 16px",
                  borderRadius: 24,
                  width: "50dvw",
                  borderWidth: "0px",
                  fontFamily: "Kanit",
                  fontSize: "1em",
                  backgroundColor: "#E6EEF3",
                }}
              ></input>
            </Grid>
            <Grid item xs={3}>
              <p style={{ color: "#4542C1" }}>เกี่ยวกับฉัน</p>
            </Grid>
            <Grid item xs={9}>
              <textarea
                style={{
                  padding: "10px 16px",
                  borderRadius: 24,
                  width: "50dvw",
                  borderWidth: "0px",
                  fontFamily: "Kanit",
                  fontSize: "1em",
                  backgroundColor: "#E6EEF3",
                }}
                rows={5}
              ></textarea>
            </Grid>
          </Grid>
          <div style={{ textAlign: "center" }}>
            <YellowButton title="แก้ไขข้อมูล" handleOnClick={() => {}} />
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <h3 style={{ color: "#4542C1" }}>เปลี่ยนรหัสผ่าน</h3>
            </Grid>
            <Grid item xs={3}>
              <p style={{ color: "#4542C1" }}>รหัสผ่านใหม่</p>
            </Grid>
            <Grid item xs={9}>
              <input
                type="password"
                style={{
                  padding: "10px 16px",
                  borderRadius: 24,
                  width: "50dvw",
                  borderWidth: "0px",
                  fontFamily: "Kanit",
                  fontSize: "1em",
                  backgroundColor: "#E6EEF3",
                }}
              ></input>
            </Grid>
            <Grid item xs={3}>
              <p style={{ color: "#4542C1" }}>ยืนยันรหัสผ่าน</p>
            </Grid>
            <Grid item xs={9}>
              <input
                type="password"
                style={{
                  padding: "10px 16px",
                  borderRadius: 24,
                  width: "50dvw",
                  borderWidth: "0px",
                  fontFamily: "Kanit",
                  fontSize: "1em",
                  backgroundColor: "#E6EEF3",
                }}
              ></input>
            </Grid>
          </Grid>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <YellowButton title="เปลี่ยนรหัสผ่าน" handleOnClick={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
};
