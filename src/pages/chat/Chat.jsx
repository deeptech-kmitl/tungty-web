import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { WhiteTextField } from "../../components/WhiteTextField";
import ChatCard from "../../components/ChatCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const Chat = () => {
  const [originalData, setOriginalData] = useState([]);
  const [userdata, setUserdata] = useState([]);
  const [chatlist, setChatlist] = useState([]);
  const [sendChat, setSendChat] = useState([]);
  const location = useLocation();
  const { partyData } = location.state;

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");
  const username = localStorage.getItem("username");

  useEffect(() => {
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    fetchChatData();
    return () => {
      document.body.style.overflow = bodyOverflow;
      setInterval(async () => {
        await fetchChatData();
      }, 5000);
    };
  }, []);

  const fetchChatData = async () => {
    try {
      const response = await fetch(
        `https://tungty-service-be.onrender.com/chat/getAllMessage/${partyData.partyId}`
      );

      const members = await fetch(
        `https://tungty-service-be.onrender.com/party/${partyData.partyId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const memberdata = await members.json();
      console.log(memberdata.memberList);

      const user = await fetch(`http://localhost:8083/chat/getProfileImage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(memberdata.memberList),
      });

      const userdata = await user.json();
      const data = await response.json();

      // console.log(data);
      setUserdata(userdata);
      setOriginalData(data);
      setChatlist(data);
    } catch (error) {
      console.log("error" + error);
    }
  };

  const handleSendChat = async () => {
    try {
      const currentDate = new Date().toISOString();
      const response = await fetch(
        `https://tungty-service-be.onrender.com/chat/createMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: sendChat,
            partyId: partyData.partyId,
            userId: userId,
            appointmentDate: currentDate,
            username: username,
            profileImg: "",
          }),
        }
      );
      if (response.ok) {
        setChatlist((prevChatList) => [
          ...prevChatList,
          { message: sendChat, userId: userId },
        ]);
        setSendChat("");
        await fetchChatData();
      } else {
        console.log("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const datagyagay = [
    {
      username: "GolemGalapagos",
      profileImg: "v0z1wzlxsoxph9jnbbrm",
    },
    {
      username: "WatsaduExtream",
      profileImg: "h1osevcenv89mvvsd8n8",
    },
    {
      username: "GolemGalapagos2",
      profileImg: "4v0z1wzlxsoxph9jnbbrm",
    },
    {
      username: "4",
      profileImg: "456",
    },
  ];

  return (
    <>
      <div style={styles.pageContainer}>
        <Header>
          <FontAwesomeIcon
            icon={["fas", "angle-left"]}
            color="white"
            size="2x"
            onClick={() => window.history.back()}
            style={{ marginLeft: "3%", cursor: "pointer" }}
          />
          <div
            style={{
              color: "#FDC319",
              fontSize: "24px",
              maxWidth: "calc(50%)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {partyData.partyName}
          </div>
        </Header>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            justifyItems: "center",
            alignContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
            alt="Chat Image"
            style={styles.chatImage}
          />
        </div>

        <ChatCard data={chatlist} images={userdata} />
      </div>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: "center",
        }}
      >
        <WhiteTextField
          style={{ backgroundColor: "#FDC319", display: "inline-block" }}
          value={sendChat}
          onValueChange={(e) => {
            setSendChat(e.target.value);
          }}
        />
        <div style={styles.buttonChat} onClick={handleSendChat}>
          send
        </div>
      </div>
    </>
  );
};

const styles = {
  pageContainer: { height: "96vh", overflowY: "scroll" },
  chatImage: {
    width: "20%",
    height: "20%",
    objectFit: "cover",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  buttonChat: {
    padding: "8px",
    margin: "0px",
    display: "inline-block",
    fontSize: "24px",
    fontWeight: "normal",
    color: "#4542C1",
    cursor: "pointer",
  },
};
