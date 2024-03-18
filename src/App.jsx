import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login";
import { FindParty } from "./pages/find_party/FindParty";
import { BottomNav } from "./component/BottomNav";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route
            path="/find-party"
            element={
              <>
                <BottomNav />
                <FindParty />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {/* <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
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
            label={
              <span className="kanit-400 bottomNavLabel">สังคมของฉัน</span>
            }
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
      </Paper> */}
    </>
  );
}

const styles = {
  root: {
    color: "green",
  },
  selected: {
    color: "red",
  },
};

export default App;
