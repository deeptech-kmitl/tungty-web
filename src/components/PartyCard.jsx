  import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useNavigate } from "react-router-dom";


  const renderPartyCard = ({ item }) => {
    const navigate = useNavigate();
    const navigateToParty = (item) => {
      // Navigate to party page
      navigate(`/party/${item.partyId}`, { state: { partyData: item } });
    };

    return (
      <div
        className="partyCard"
        style={{ ...styles.partyCard, backgroundColor: item.color }}
        onClick={() => navigateToParty(item)}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
          alt="Party Image"
          style={styles.partyImage}
        />
        <div style={styles.partyDetails}>
          <p style={styles.partyName} title={item.partyName}>
            {item.partyName}
          </p>
          <div style={styles.icons}>
            <FontAwesomeIcon icon={["fas", "user"]} size="lg" color="#FFC107" />
            <span style={{marginLeft: "10px"}}>{item.memberList.length}</span>
          </div>
        </div>
      </div>
    );
  };

  const PartyCard = ({ data }) => {
    return (
      <div className="flatList" style={styles.partyList}>
        {data.map((item, index) => (
          <div key={index} style={styles.partyCardContainer}>
            {renderPartyCard({ item })}
          </div>
        ))}
      </div>
    );
  };

  const styles = {
    partyCard: {
      flexDirection: "row",
      textOverflow: "ellipsis",
      display: "flex",
      height: "8rem",
      padding: "8%",
      borderRadius: "10px",
      justifyContent: "space-between",
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
      flexDirection: "column",
    },
    partyName: {
      fontSize: "30px",
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

  export default PartyCard;
