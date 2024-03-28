import React from "react";
import { useNavigate } from "react-router-dom";

const renderChatCard = ({ item, image }) => {
  // const navigate = useNavigate();

  const userId = localStorage.getItem("user_id");

  var filteredimg = [];
  var profileImg = "";

  if (userId !== item.userId) {
    filteredimg = image.filter((element) =>
      element.username.toLowerCase().includes(item.username.toLowerCase())
    );
    // console.log(filteredimg[0].profileImg);
    if (filteredimg.length == 0) {
      profileImg =
        `https://res.cloudinary.com/dppojpoug/image/upload/` +
        "j2kobmpy5ykp1xaj6xbt";
    } else {
      profileImg =
        `https://res.cloudinary.com/dppojpoug/image/upload/` +
        filteredimg[0].profileImg;
    }
  }

  // const profileImg =
  //   `https://res.cloudinary.com/dppojpoug/image/upload/` + item.profileImg;

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
                {item.message}
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
            <img src={profileImg} alt="Chat Image" style={styles.chatImage} />
            <p
              style={{
                ...styles.chatName,
                marginLeft: "1rem",
                marginBottom: "0",
                color: "#4542C1",
                fontWeight: "",
                alignSelf: "flex-start",
              }}
              title={item.username}
            >
              {item.username}
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
                {item.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ChatCard = ({ data, images }) => {
  return (
    <div style={{ padding: "1rem" }}>
      {data.map((item, index) => (
        <div key={index}>{renderChatCard({ item, image: images })}</div>
      ))}
    </div>
  );
};

const styles = {
  chatList: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "1rem",
  },
  chatCardContainer: {
    width: "auto",
    maxWidth: "calc(70%)",
    marginLeft: "9px",
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
    width: "4rem",
    height: "4rem",
    objectFit: "cover",
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
