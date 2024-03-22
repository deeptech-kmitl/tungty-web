import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

export const PartyMember = () => {
  const navigate = useNavigate();
  const memberList = [
    {
      name: "nate natacha",
      img: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
    },
    {
      name: "nate natacha",
      img: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
    },
    {
      name: "nate natacha",
      img: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
    },
    {
      name: "nate natacha",
      img: "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp",
    },
  ];
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
          <h3>Members</h3>
        </div>
        <ArrowBackIcon
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "24px",
        }}
      >
        {memberList.map((item) => (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div
              style={{ display: "flex" }}
              onClick={() => {
                navigate("/member-info");
              }}
            >
              <Avatar
                sx={{ width: 50, height: 50, alignSelf: "center" }}
                src={item.img}
              />
              <p style={{ alignSelf: "center", marginLeft: "5dvw" }}>
                {item.name}
              </p>
            </div>
            <Divider variant="middle" />
          </div>
        ))}
      </div>
    </div>
  );
};
