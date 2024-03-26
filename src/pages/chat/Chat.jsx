import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../components/SearchBar";
import ChatCard from "../../components/ChatCard";
import { NotificationAppBar } from "../../components/NotificationAppBar";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import { WhiteTextField } from "../../components/WhiteTextField";

export const Chat = () => {
  const [originalData, setOriginalData] = useState([]);
  const [chatlist, setChatlist] = useState([]);
  const [sendChat, setSendChat] = useState([]);
  const location = useLocation();
  const { partyData } = location.state;
  //   console.log(partyData.partyId);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    fetchPartyData();
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = bodyOverflow;
    };
  }, []);

  const fetchPartyData = async () => {
    try {
      const response = await fetch(
        `https://tungty-service-be.onrender.com/chat/getAllMessage/${partyData.partyId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log(token)
      // console.log(response.status);
      const data = await response.json();
      // console.log(data);

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
          }),
        }
      );
      if (response.ok) {
        // Update chat list with the new message
        setChatlist((prevChatList) => [...prevChatList, { message: sendChat }]);
        // Clear the input field
        setSendChat("");
      } else {
        console.log("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

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
        <ChatCard data={chatlist} />
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
    resizeMode: "contain",
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
