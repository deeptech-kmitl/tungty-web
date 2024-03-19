import React from "react";
import "../App.css";
import { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export const BottomNav = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

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
          onClick={() => navigate("/find-party")}
        />
        <BottomNavigationAction
          label={<span className="kanit-400 bottomNavLabel">สังคมของฉัน</span>}
          icon={<FavoriteIcon />}
          onClick={() => navigate("/")}
        />
        <BottomNavigationAction
          label={<span className="kanit-400 bottomNavLabel">แชท</span>}
          icon={<LocationOnIcon />}
          onClick={() => navigate("/find-party")}
        />
        <BottomNavigationAction
          label={<span className="kanit-400 bottomNavLabel">โปรไฟล์</span>}
          icon={<LocationOnIcon />}
          onClick={() => navigate("/find-party")}
        />
      </BottomNavigation>
    </Paper>
  );
};
