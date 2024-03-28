import React from "react";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { YellowButton } from "../../components/YellowButton";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export const Profile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);
  const user_id = localStorage.getItem("user_id");

  const logout = (handleLogout) => {
    localStorage.clear();
    navigate("/");
    handleLogout();
  };
  
  useEffect(() => {
    fetch(`https://tungty-service-be.onrender.com/user/${user_id}`)
      .then(response => response.json())
      .then(data => setProfile(data))
      
  }, []);

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
          justifyContent: "space-between",
          alignItems: "center",
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
          boxShadow: "5px 5px 5px #E6EEF3",
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
              sx={{ width: "150px", height: "150px", alignSelf: "center" }}
              src={`https://res.cloudinary.com/dppojpoug/image/upload/${profile.profileImg}`}
            />
          </div>
          <h2 style={{ color: "#FDC319" }}>{profile.name} {profile.surname}</h2>
          <Divider variant="middle" />
          <div style={{ textAlign: "left" }}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <p>คณะ : {profile.faculty} </p>
              </Grid>
              <Grid item xs={6}>
                <p>สาขา : {profile.field}</p>
              </Grid>
              <Grid item xs={6}>
                <p>ปี : {profile.year}</p>
              </Grid>
            </Grid>
            <p>
            {profile.aboutMe}
            </p>
          </div>
          <div>
            <YellowButton title="Logout" handleOnClick={() => logout(logout)} />
          </div>
        </div>
      </div>
    </div>
  );
};
