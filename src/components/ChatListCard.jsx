import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blue, green, pink, purple, red } from "@mui/material/colors";
const colors = [pink[600], red[600], blue[600], green[600], purple[600]];

export const RenderChatCard = React.memo(({ item }) => {
  const navigate = useNavigate();

  const [backgroundColor] = useState(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  });

  var imagepath = "";

  switch (item.partyCategory) {
    case "food":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/hz0rcbpmzeg0rvcb6wxc"; //
      break;
    case "entertain":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/cj6hiokpvjso3o3k6jlz"; //
      break;
    case "health":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/qfs09yg0fwky69zkbpdy"; //
      break;
    case "learning":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/u3psguvtnls1qu1aoxgk"; //
      break;
    case "fashion":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/xo1vsnkwfgagrxa2xcqu"; //
      break;
    case "travel":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/t4tkdexf9yqo3oypdcii"; //
      break;
    case "relation":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/qzrrukoofkprnvblmyvq"; //
      break;
    case "family":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/vpeghcptqiul6dvcnmkz"; //
      break;
    case "language":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/eutgjnmotl84tgxpe98n"; //
      break;
    case "book":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/qcbdypayuz6xmhqwori3"; //
      break;
    case "technology":
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1711644538/e2zynq6yjcwsyl5wnelq"; //
      break;
    default:
      imagepath =
        "https://res.cloudinary.com/dppojpoug/image/upload/v1709255878/iqtn6srv5zn1lf853rau";
  }

  const partyData = { ...item, imagepath };
  const navigateToChat = (item) => {
    navigate(`/chat/${item.partyName}`, { state: { partyData: partyData } });
  };

  return (
    <div
      className="chatCard"
      style={{ ...styles.chatCard, backgroundColor: "#ECF2F6" }}
      onClick={() => navigateToChat(item)}
    >
      <img src={imagepath} alt="Chat Image" style={styles.chatImage} />
      <p style={styles.chatName} title={item.partyName}>
        {item.partyName}
      </p>
    </div>
  );
});

const ChatListCard = ({ data }) => {
  return (
    <div className="flatList" style={styles.chatList}>
      {data.map((item, index) => (
        <div key={index} style={styles.chatCardContainer}>
          <RenderChatCard item={item} />
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
    height: "1rem",
    padding: "8%",
    borderRadius: "10px",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  },
  chatImage: {
    width: "18%",
    resizeMode: "contain",
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  chatName: {
    fontSize: "16px",
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
    width: "calc(80%)",
    marginBottom: "20px",
  },
};

export default ChatListCard;
