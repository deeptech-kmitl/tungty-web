import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const renderPartyCard = ({
  partyName,
  imagepath,
  memberList,
  partyDescription,
  color,
  createDateTime,
  appointmentTime,
}) => {
  const navigate = useNavigate();
  const navigateToParty = () => {
    // Navigate to party page
    navigate(`/party/${partyName}`, {
      state: {
        partyData: {
          partyName,
          imagepath,
          memberList,
          partyDescription,
          color,
          createDateTime,
          appointmentTime,
        },
      },
    });
  };

  return (
    <div
      className="partyCard"
      style={{ ...styles.partyCard, backgroundColor: color }}
      onClick={navigateToParty}
    >
      <img src={imagepath} alt="Party Image" style={styles.partyImage} />
      <div style={{...styles.partyDetails, flex:1}}>
        <p style={styles.partyName} title={partyName}>
          {partyName}
        </p>
        <p style={styles.partyDescription} title={partyDescription}>
          {partyDescription}
        </p>
      </div>
      <div style={{alignSelf: 'flex-end'}}>
          <div style={{...styles.icons, justifyContent: 'flex-end', alignContent: 'flex-end'}}>
            <FontAwesomeIcon icon={["fas", "user"]} size="lg" color="#FFC107" />
            <span style={{ marginLeft: "10px" }}>
              {memberList ? memberList.length : 0}
            </span>
          </div>
        </div>
    </div>
  );
};

const styles = {
  partyCard: {
    flexDirection: "row",
    display: "flex",
    height: "8rem",
    padding: "8%",
    marginLeft: "10%",
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
    fontSize: "30px",
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
  partyList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "20px",
  },
  partyCardContainer: {
    width: "calc(50% - 20px)",
    marginBottom: "20px",
  },
};

export default renderPartyCard;
