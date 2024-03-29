import React from "react";
import PersonIcon from "@mui/icons-material/Person";

export const PartyInfoCard = ({ name, image, bgColor, member, date, desc }) => {
  const partyCard = {
    display: "flex",
    backgroundColor: bgColor,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 4,
    shadowColor: "#000",
    height: 100,
    padding: 10,
  };

  const partyImage = {
    resizeMode: "contain",
    aspectRatio: 1 / 1,
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  };
  const partyName = {
    fontWeight: "bold",
    color: "#4542C1",
  };
  return (
    <div style={partyCard} onClick={() => {}}>
      <img src={image} alt={name} style={partyImage} />
      <div style={{ textAlign: "left", marginLeft: "1dvw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            // flexWrap: "wrap",
          }}
        >
          <h3 style={{ ...partyName, margin: "0px" }}>{name}</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PersonIcon style={{ width: "18px" }} />
            <h4 style={{ margin: "0px" }}>{member}</h4>
          </div>
        </div>
        <h5
          style={{
            margin: "0px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {desc}
        </h5>
      </div>
    </div>
  );
};