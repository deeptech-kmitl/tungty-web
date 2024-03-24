import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { FindParty } from "./pages/find_party/FindParty";
import { BottomNav } from "./components/BottomNav";
import { Register } from "./pages/register/Register";
import { Notification } from "./pages/notification/Notification";
import { PartyMember } from "./pages/party_member/PartyMember";
import { MemberInfo } from "./pages/party_member/MemberInfo";
import { Profile } from "./pages/profile/Profile";
import { EditProfile } from "./pages/profile/EditProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/member" element={<PartyMember />}></Route>
          <Route path="/member-info" element={<MemberInfo />}></Route>
          <Route path="/edit-profile" element={<EditProfile />}></Route>
          <Route
            path="/profile"
            element={
              <>
                <BottomNav />
                <Profile />
              </>
            }
          ></Route>

          <Route
            path="/notification"
            element={
              <>
                <BottomNav />
                <Notification />
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
