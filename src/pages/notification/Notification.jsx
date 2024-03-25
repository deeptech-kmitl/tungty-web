import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Notification = () => {
  const navigate = useNavigate();
  const [noti, setNoti] = useState([]);
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    if (user_id == null) {
      navigate("/");
    }
    fetch(`https://tungty-service-be.onrender.com/notify/getAll/${user_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNoti(data);
      });
  }, []);
  const NotiCard = ({ name, desc }) => (
    <div
      style={{
        backgroundColor: "#ECF2F6",
        borderRadius: "16px",
        padding: "16px",
        marginBottom: "18px",
        color: "#4542C1",
      }}
    >
      <h3 style={{ margin: "0px" }}>{name}</h3>
      <p style={{ margin: "0px" }}>{desc}</p>
    </div>
  );
  return (
    <div
      style={{ width: "100dvw", height: "100dvh", backgroundColor: "#FFFFFF" }}
    >
      <div
        style={{
          backgroundColor: "#4542C1",
          textAlign: "center",
          padding: "1px",
          color: "#ffffff",
        }}
      >
        <h3>Notification</h3>
      </div>
      <div style={{ padding: "8%", paddingBottom: "100px" }}>
        {noti.map((item, index) => (
          <NotiCard
            key={index}
            name={item.partyName}
            desc={item.notifyDescription}
          />
        ))}
      </div>
    </div>
  );
};
