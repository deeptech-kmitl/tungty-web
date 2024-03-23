import React from "react";
import { useNavigate } from "react-router-dom";
import renderPartyCard from "./RenderPartyCard";



const PartyCardItem = ({ data }) => {
const navigate = useNavigate()

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
            appointmentTime: item.appointmentTime,
            navigate: navigate
          })}
        </div>
      ))}
    </div>
  );
};

const styles = {
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
