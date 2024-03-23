  import React from "react";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useNavigate } from "react-router-dom";
  import renderPartyCard from "./RenderPartyCard";

  const PartyCardItem = ({ data }) => {
    return (
      <div className="flatList" style={styles.partyList}>
        {data.map((item, index) => (
          <div key={index} style={styles.partyCardContainer}>
            {renderPartyCard({
              partyName: item.partyName,
              imagepath: item.imagepath,
              memberList: item.memberList,
              partyDescription: item.partyDescription,
              color: item.color,
              createDateTime: item.createDateTime,
              appointmentTime: item.appointmentTime
            })}
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

  export default PartyCardItem;
