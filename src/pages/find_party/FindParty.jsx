import React from "react";
import { NotificationAppBar } from "../../components/NotificationAppBar";
import { WhiteTextField } from "../../components/WhiteTextField";
import SearchIcon from "@mui/icons-material/Search";

export const FindParty = () => {
  return (
    <div
      style={{ width: "100dvw", height: "100dvh", backgroundColor: "#FFFFFF" }}
    >
      <NotificationAppBar />
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <div style={{ display: "flex", backgroundColor:"#D9D9D9" }}>
          <WhiteTextField />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
