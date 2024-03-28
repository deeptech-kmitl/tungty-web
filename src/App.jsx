import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { FindParty } from "./pages/find_party/FindParty";
import { MyParty } from "./pages/my_party/MyParty";
import { BottomNav } from "./components/BottomNav";
import { Register } from "./pages/register/Register";
import { PartyMember } from "./pages/party_member/PartyMember";
import { MemberInfo } from "./pages/party_member/MemberInfo";
import { EditProfile } from "./pages/profile/EditProfile";
import { Profile } from "./pages/profile/Profile";
import { Notification } from "./pages/notification/Notification";
import { Party } from "./pages/my_party/Party";
import { Chat } from "./pages/chat/Chat";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/member/:partyId" element={<PartyMember />}></Route>
          <Route path="/member-info/:username"  element={<MemberInfo/>}></Route>
          <Route
            path="/myparty"
            element={
              <>
                <MyParty />
                <BottomNav value={value} setValue={setValue} />
              </>
            }
          />
          <Route
            path="/party/*"
            element={
              <>
                <PartyPage />
                <BottomNav value={value} setValue={setValue} />
              </>
            }
          />
          <Route
            path="/member"
            element={
              <>
                <PartyMember />
                <BottomNav value={value} setValue={setValue} />
              </>
            }
          ></Route>
          <Route path="/member-info" element={<MemberInfo />}></Route>
          <Route path="/edit-profile" element={<EditProfile />}></Route>
          <Route
            path="/profile"
            element={
              <>
                <Profile />
                <BottomNav value={value} setValue={setValue} />
              </>
            }
          ></Route>
          <Route
            path="/notification"
            element={
              <>
                <BottomNav value={value} setValue={setValue} />
                <Notification />
              </>
            }
          ></Route>
          <Route
            path="/find-party"
            element={
              <>
                <BottomNav value={value} setValue={setValue} />
                <FindParty />
              </>
            }
          />
          <Route path="/chat/:partyName" element={<Chat />} />
        </Routes>
      </BrowserRouter>
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
