import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { WhiteTextField } from "../../components/WhiteTextField";
import Grid from "@mui/material/Grid";
import { YellowButton } from "../../components/YellowButton";
import { useState, useEffect } from "react";
import { createIconSetFromFontello } from "react-native-vector-icons";
const token = localStorage.getItem("token");



export const EditProfile = () => {
  const navigate = useNavigate();
  const [requestEdit, setRequestEdit] = useState({});
  const [profile, setProfile] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const [formData, setFormData] = useState({
    userId: profile.userId || "",
    name: profile.name || "",
    surname: profile.surname || "",
    username: profile.username || "",
    password: profile.password || "",
    studentId: profile.studentId || "",
    faculty: profile.faculty || "",
    field: profile.field || "",
    year: profile.year || "",
    profileImg: "Test",
    aboutMe: profile.aboutMe || ""
  });


  useEffect(() => {
    if (Object.keys(requestEdit).length > 0) {
      EditProfile();
    }
  }, [requestEdit]);

  useEffect(() => {
    fetch(`https://tungty-service-be.onrender.com/user/${user_id}`)
      .then(response => response.json())
      .then(data => setFormData(data))

  }, []);

  const sendChange = () => {

    const putData = {
      ...formData,
      userId: user_id
    }


    fetch(`https://tungty-service-be.onrender.com/user/edit_profile`, {
      method: "PUT",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
      body: JSON.stringify(putData)
    })
      .then(response => response.json())
      .then(() => navigate("/profile"))
  };

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
        style={{
          borderRadius: "16px",
          borderColor: "#4542C1",
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
                type="number"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
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
                value={formData.aboutMe}
                onChange={(e) => setFormData({ ...formData, aboutMe: e.target.value })}
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
            <YellowButton title="แก้ไขข้อมูล" handleOnClick={sendChange} />
          </div>
          <div
            style={{
              textAlign: "center",
            }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};
