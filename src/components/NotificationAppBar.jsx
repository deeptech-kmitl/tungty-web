import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { useNavigate } from "react-router-dom";

export const NotificationAppBar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: "#4542C1",
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={() => {
        navigate("/notification");
      }}
    >
      <NotificationsActiveIcon
        style={{ fontSize: "32px", color: "#FDC319", padding: "12px" }}
      />
    </div>
  );
};
