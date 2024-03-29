import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { FindParty } from "./pages/find_party/FindParty";
import { MyParty } from "./pages/my_party/MyParty";
import { BottomNav } from "./components/BottomNav";
import { Register } from "./pages/register/Register";
import { Notification } from "./pages/notification/Notification";
import { PartyMember } from "./pages/party_member/PartyMember";
import { MemberInfo } from "./pages/party_member/MemberInfo";
import { Profile } from "./pages/profile/Profile";
import { EditProfile } from "./pages/profile/EditProfile";
import { CreateParty } from "./pages/create&edit_party/CreateParty";
import { EditParty } from "./pages/create&edit_party/EditParty";
import { Party } from "./pages/my_party/Party";
import { PartyInfo } from "./pages/find_party/PartyInfo";
import { JoinPrivateParty } from "./pages/find_party/JoinPrivateParty";
import { Chat } from "./pages/chat/Chat";
import { ChatList } from "./pages/chatlist/Chatlist";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/member/:partyId" element={<PartyMember />}></Route>
          <Route path="/member-info/:partyId/:username"  element={<MemberInfo/>}></Route>
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
            path="/party-info/*"
            element={
              <>
                <PartyInfoPage />
              </>
            }
          />
          <Route
            path="/edit-party/*"
            element={
              <>
                <EditParty />
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
          <Route path="/create-party" element={<CreateParty />}></Route>
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
          <Route
            path="/join-private-party"
            element={
              <>
                <BottomNav value={value} setValue={setValue} />
                <JoinPrivateParty />{" "}
              </>
            }
          />
          <Route path="/chat/:partyName" element={<Chat />} />
          <Route
            path="/chatlist"
            element={
              <>
                <ChatList />
                <BottomNav value={value} setValue={setValue} />
              </>
            }
          />
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
function PartyInfoPage() {
  return (
    <Routes>
      <Route path=":partyId" element={<PartyInfo />} />
    </Routes>
  );
}
function EditPartyPage() {
  return (
    <Routes>
      <Route path=":partyId" element={<EditParty />} />
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
