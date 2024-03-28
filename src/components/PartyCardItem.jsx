import React from "react";
import { useNavigate } from "react-router-dom";
import RenderPartyCard from "./RenderPartyCard";

const PartyCardItem = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="flatList" style={styles.partyList}>
      {data.map((item, index) => (
        <div key={index} style={styles.partyCardContainer}>
          {/* {RenderPartyCard({
            partyName: item.partyName,
            imagepath: item.imagepath,
            memberList: item.memberList,
            partyDescription: item.partyDescription,
            createDateTime: item.createDateTime,
            appointmentTime: item.appointmentTime,
            navigate: navigate
          })} */}
          <RenderPartyCard
            partyName={item.partyName}
            partyId={item.partyId}
            imagepath={"https://cdn-icons-png.flaticon.com/512/1719/1719420.png"}
            memberList={item.memberList}
            partyDescription={item.partyDescription}
            createDateTime={item.createDateTime}
            appointmentTime={item.appointmentTime}
            appointmentDate={item.appointmentDate}
            navigate={navigate}
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
