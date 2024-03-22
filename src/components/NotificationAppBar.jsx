import React from "react";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

export const NotificationAppBar = () => {
  return (
    <div
      style={{
        backgroundColor: "#4542C1",
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <NotificationsActiveIcon
        style={{ fontSize: "32px", color: "#FDC319", padding: "12px" }}
      />
    </div>
  );
};
