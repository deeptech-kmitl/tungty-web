import React from "react";
import { useNavigate } from "react-router-dom";

const renderChatCard = ({ item }) => {
  const navigate = useNavigate();
  const navigateToChat = (item) => {
    navigate(`/chat/${item.partyId}`, { state: { partyData: item } });
  };

  return (
    <div
      className="chatCard"
      style={{ ...styles.chatCard, backgroundColor: "#4542C1" }}
      onClick={() => navigateToChat(item)}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
        alt="Chat Image"
        style={styles.chatImage}
      />
      <p style={styles.chatName} title={item.partyName}>
        {item.partyName}
      </p>
    </div>
  );
};

const ChatCard = ({ data }) => {
  return (
    <div className="flatList" style={styles.chatList}>
      {data.map((item, index) => (
        <div key={index} style={styles.chatCardContainer}>
          {renderChatCard({ item })}
        </div>
      ))}
    </div>
  );
};

const styles = {
  chatCard: {
    flexDirection: "row",
    textOverflow: "ellipsis",
    display: "flex",
    height: "3rem",
    padding: "8%",
    borderRadius: "10px",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  },
  chatImage: {
    width: "20%",
    resizeMode: "contain",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  },
  chatName: {
    fontSize: "30px",
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    marginLeft: "9%",
  },
  chatList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  chatCardContainer: {
    width: "calc(70%)",
    marginBottom: "20px",
  },
};

export default ChatCard;
