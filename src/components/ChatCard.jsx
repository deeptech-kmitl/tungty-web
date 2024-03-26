import React from "react";
import { useNavigate } from "react-router-dom";

const renderChatCard = ({ item }) => {
  // const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");

  return (
    <>
      {userId == item.userId ? (
        <div style={{ ...styles.chatList, alignItems: "flex-end" }}>
          <div style={styles.chatCardContainer}>
            <div
              className="chatCard"
              style={{ ...styles.chatCard, backgroundColor: "#4542C1" }}
            >
              <p
                style={{ ...styles.chatName, color: "white" }}
                title={item.content}
              >
                {item.content}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ ...styles.chatList, alignItems: "flex-start" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
              alt="Chat Image"
              style={styles.chatImage}
            />
            <p
              style={{
                ...styles.chatName,
                marginLeft: "1rem",
                marginBottom: "0",
                color: "#4542C1",
                fontWeight: "",
              }}
              title={item.partyName}
            >
              {item.partyName}
            </p>
          </div>
          <div style={styles.chatCardContainer}>
            <div
              className="chatCard"
              style={{
                ...styles.chatCard,
                backgroundColor: "white",
                marginLeft: "3rem",
              }}
            >
              <p style={styles.chatName} title={item.content}>
                {item.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ChatCard = ({ data }) => {
  return (
    <div style={{ padding: "1rem" }}>
      {data.map((item, index) => (
        <div key={index}>{renderChatCard({ item })}</div>
      ))}
    </div>
  );
};

const styles = {
  chatList: {
    display: "flex",
    flexDirection: "column",
  },
  chatCardContainer: {
    width: "auto",
    maxWidth: "calc(70%)",
    margin: "9px",
  },
  chatCard: {
    flexDirection: "row",
    display: "flex",
    height: "3rem",
    padding: "1rem",
    borderRadius: "10px",
    alignItems: "center",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  },
  chatImage: {
    width: "9%",
    height: "9%",
    resizeMode: "contain",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  chatName: {
    fontSize: "18px",
    fontWeight: "normal",
    overflow: "hidden",
  },
};

export default ChatCard;
