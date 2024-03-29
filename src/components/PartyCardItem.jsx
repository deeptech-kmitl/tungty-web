// PartyCardItem.js
import React from "react";
import { useNavigate } from "react-router-dom";
import RenderPartyCard from "./RenderPartyCard";

const PartyCardItem = ({ data, cardStyle, cardContainerStyle, partyListStyle, ImageStyle, TextStyle}) => {
  const navigate = useNavigate();
  return (
    <div className="flatList" style={{...styles.partyList, ...partyListStyle}}>
      {data.map((item, index) => (
        <div key={index} style={{ ...styles.partyCardContainer, ...cardContainerStyle }}>
          <RenderPartyCard
            partyId={item.partyId}
            partyName={item.partyName}
            imagepath={"https://cdn-icons-png.flaticon.com/512/1719/1719420.png"}
            memberList={item.memberList}
            partyDescription={item.partyDescription}
            createDateTime={item.createDateTime}
            appointmentTime={item.appointmentTime}
            appointmentDate={item.appointmentDate}
            partyCategory={item.partyCategory}
            navigate={navigate}
            cardStyle={cardStyle}
            imageStyle={ImageStyle}
            textStyle={TextStyle}
            partyCode={item.partyCode}
          />
        </div>
      ))}
    </div>
  );
};

const styles = {
  partyList: {
    padding: "20px",
  },
  partyCardContainer: {
    marginBottom: "20px",
  },
};

export default PartyCardItem;
