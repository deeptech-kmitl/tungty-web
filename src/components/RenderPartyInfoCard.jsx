import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { blue, green, pink, purple, red } from "@mui/material/colors";
const colors = [pink[600], red[600], blue[600], green[600], purple[600]];

const RenderPartyInfoCard = React.memo(({
  partyName,
  partyId,
  imagepath,
  memberList,
  partyDescription,
  createDateTime,
  appointmentTime,
  navigate,
}) => {
  const [backgroundColor] = useState(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  });

  const navigateToParty = () => {
    // Navigate to party page
    navigate(`/party-info/${partyId}`, {
      state: {
        partyData: {
          partyName,
          partyId,
          imagepath,
          memberList,
          partyDescription,
          createDateTime,
          appointmentTime,
          backgroundColor
        },
      },
    });
  };

  return (
    <div
      className="partyCard"
      style={{ ...styles.partyCard, backgroundColor}}
      onClick={navigateToParty}
    >
      <img src={imagepath} alt="Party Image" style={styles.partyImage} />
      <div style={{ ...styles.partyDetails, flex: 1 }}>
        <p style={styles.partyName} title={partyName}>
          {partyName}
        </p>
        <p style={styles.partyDescription} title={partyDescription}>
          {partyDescription}
        </p>
      </div>
      <div style={{ alignSelf: "flex-end" }}>
        <div style={{ ...styles.icons, justifyContent: "flex-end", alignContent: "flex-end" }}>
          <FontAwesomeIcon icon={["fas", "user"]} size="lg" color="#FFC107" />
          <span style={{ marginLeft: "10px" }}>
            {memberList ? memberList.length : 0}
          </span>
        </div>
      </div>
    </div>
  );
});

const styles = {
  partyCard: {
    flexDirection: "row",
    display: "flex",
    height: "8rem",
    padding: "8%",
    borderRadius: "10px",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  },
  partyImage: {
    width: "30%",
    resizeMode: "contain",
  },
  partyDetails: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "flex",
    color: "white",
    marginLeft: "20px",
    flexDirection: "column",
  },
  partyName: {
    fontSize: "24px",
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  partyDescription: {
    fontSize: "16px",
    padding: "1 %",
    fontWeight: "bold",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  icons: {
    display: "flex",
    fontSize: "3vh",
    alignItems: "center",
    justifyContent: "flex-end",
  },
};

export default RenderPartyInfoCard;
