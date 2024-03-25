// BottomNav.jsx
import React from "react";
import "../App.css";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export const BottomNav = ({ value, setValue }) => {
  const navigate = useNavigate();

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
        sx={{ width: "100%", backgroundColor: "#FDC319" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label={<span className="kanit-400 bottomNavLabel">หากลุ่ม</span>}
          icon={<SearchIcon />}
          onClick={() => navigate("/find-party")}
        />
        <BottomNavigationAction
          label={<span className="kanit-400 bottomNavLabel">สังคมของฉัน</span>}
          icon={<GroupsIcon />}
          onClick={() => navigate("/myparty")}
        />
        <BottomNavigationAction
          label={<span className="kanit-400 bottomNavLabel">แชท</span>}
          icon={<ChatIcon />}
          onClick={() => navigate("/member")}
        />
        <BottomNavigationAction
          label={<span className="kanit-400 bottomNavLabel">โปรไฟล์</span>}
          icon={<PersonIcon />}
          onClick={() => navigate("/profile")}
        />
      </BottomNavigation>
    </Paper>
  );
};
