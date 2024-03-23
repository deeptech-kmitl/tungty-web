import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { FindParty } from "./pages/find_party/FindParty";
import { MyParty } from "./pages/my_party/MyParty";
import { BottomNav } from "./components/BottomNav";
import { Register } from "./pages/register/Register";
import { Party } from "./pages/my_party/Party";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route
            path="/myparty"
            element={
              <>
                <MyParty />
                <BottomNav />
              </>
            }
          ></Route>
          <Route
            path="/party/*"
            element={
              <>
                <PartyPage />
                <BottomNav />
              </>
            }
          ></Route>
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
function PartyPage() {
  return (
    <Routes>
      {/* Define a dynamic route to render party details */}
      <Route path=":partyId" element={<Party />} />
    </Routes>
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
