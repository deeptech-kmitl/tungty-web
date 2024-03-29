import React from "react";
import { useNavigate } from "react-router-dom";
import RenderPartyInfoCard from "./RenderPartyInfoCard";

const PartyInfoCardItem = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className="flatList" style={styles.partyList}>
            {data.map((item, index) => (
                (item.partyType == "Public")&&
                <div key={index} style={styles.partyCardContainer}>
                    <RenderPartyInfoCard
                        partyName={item.partyName}
                        partyId={item.partyId}
                        imagepath={"https://cdn-icons-png.flaticon.com/512/1719/1719420.png"}
                        memberList={item.memberList}
                        partyDescription={item.partyDescription}
                        createDateTime={item.createDateTime}
                        appointmentTime={item.appointmentTime}
                        navigate={navigate}
                        partyCode={item.partyCode}
                    />
                </div>)
                
            )}
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

export default PartyInfoCardItem;