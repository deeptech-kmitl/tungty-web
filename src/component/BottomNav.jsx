import React from "react";
import "../App.css";
import { useState } from "react";
// import { Login } from "./pages/Login";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";

export const BottomNav = () => {
  const [value, setValue] = useState(0);
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
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          label={<span className="kanit-400 bottomNavLabel">สังคมของฉัน</span>}
          icon={<FavoriteIcon />}
        />
        <BottomNavigationAction
          label={<span className="kanit-400 bottomNavLabel">แชท</span>}
          icon={<LocationOnIcon />}
        />
        <BottomNavigationAction
          label={<span className="kanit-400 bottomNavLabel">โปรไฟล์</span>}
          icon={<LocationOnIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};
