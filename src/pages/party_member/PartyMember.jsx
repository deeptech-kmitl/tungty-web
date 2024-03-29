import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PartyMember = () => {
  const navigate = useNavigate();
  let { partyId } = useParams();

  const [memberList, setMemberList] = useState([]);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token == null) {
      navigate("/");
    }
    fetch(`https://tungty-service-be.onrender.com/party/${username}`,  {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMemberList(data.memberList);
        console.log(data.memberList)
      });
  }, []);

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
                navigate(`/member-info/${item}`);
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
                {item}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
