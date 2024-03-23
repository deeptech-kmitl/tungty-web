import React from "react";
import "../App.css";
import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import MuiBottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import SearchIcon from "@mui/icons-material/Search";
import GroupsIcon from "@mui/icons-material/Groups";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

export const BottomNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const BottomNavigationAction = styled(MuiBottomNavigationAction)(`
  background-color:#FDC319;
  color: #FFFFFF;
  &.Mui-selected {
    color: #4542C1;
  }
`);

  return (
    <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
      <BottomNavigation
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
          onClick={() => navigate("/")}
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
