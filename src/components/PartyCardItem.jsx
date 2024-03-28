// PartyCardItem.js
import React from "react";
import { useNavigate } from "react-router-dom";
import RenderPartyCard from "./RenderPartyCard";

const PartyCardItem = ({ data, cardStyle, cardContainerStyle, partyListStyle, ImageStyle, TextStyle }) => { // Step 1: Accept cardContainerStyle prop
  const navigate = useNavigate();

  return (
    <div className="flatList" style={{...styles.partyList, ...partyListStyle}}>
      {data.map((item, index) => (
        <div key={index} style={{ ...styles.partyCardContainer, ...cardContainerStyle }}> {/* Step 2: Apply cardContainerStyle */}
          <RenderPartyCard
            partyId={item.partyId}
            partyName={item.partyName}
            imagepath={
              "https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
            }
            memberList={item.memberList}
            partyDescription={item.partyDescription}
            createDateTime={item.createDateTime}
            appointmentTime={item.appointmentTime}
            navigate={navigate}
            cardStyle={cardStyle}
            imageStyle={ImageStyle}
            textStyle={TextStyle}
          />
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
