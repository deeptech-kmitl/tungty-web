import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
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
      style={{ width: "100dvw", height: "100dvh", backgroundColor: "#EFEFEF" }}
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
        <div
          onClick={() => {
            navigate("/find-party");
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
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          padding: "24px",
        }}
      >
        {memberList.map((item, index) => (
          <div
            key={index}
            style={{ display: "flex", flexDirection: "column", gap: "8px" }}
          >
            <div
              style={{
                display: "flex",
                backgroundColor: "#ffffff",
                padding: "18px",
                borderRadius: "16px",
                boxShadow: "4px 7px 5px #d9d9d9",
                shadowOffset: {
                  width: 30,
                  height: -50,
                },
              }}
              onClick={() => {
                navigate("/member-info");
              }}
            >
              <Avatar
                sx={{ width: 60, height: 60, alignSelf: "center" }}
                src={item.img}
              />
              <p
                style={{
                  alignSelf: "center",
                  marginLeft: "5dvw",
                  color: "#4542C1",
                }}
              >
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
