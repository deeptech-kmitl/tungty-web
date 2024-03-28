import React from "react";
import PersonIcon from "@mui/icons-material/Person";

export const PartyCard = ({
  name,
  image,
  bgColor,
  member,
  date,
  desc,
  cardStyle,
  imageStyle,
  nameStyle,
  memberStyle,
  descStyle,
}) => {
  const defaultPartyCardStyle = {
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

  const defaultPartyImageStyle = {
    resizeMode: "contain",
    aspectRatio: 1 / 1,
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  };

  const defaultPartyNameStyle = {
    fontWeight: "bold",
    color: "#4542C1",
  };

  const mergedCardStyle = { ...defaultPartyCardStyle, ...cardStyle };
  const mergedImageStyle = { ...defaultPartyImageStyle, ...imageStyle };
  const mergedNameStyle = { ...defaultPartyNameStyle, ...nameStyle };

  return (
    <div style={mergedCardStyle} onClick={() => {}}>
      <img src={image} alt={name} style={mergedImageStyle} />
      <div style={{ textAlign: "left", marginLeft: "1dvw" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h3 style={{ ...mergedNameStyle, margin: "0px" }}>{name}</h3>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <PersonIcon style={{ width: "18px" }} />
            <h4 style={{ margin: "0px", ...memberStyle }}>{member}</h4>
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
            ...descStyle,
          }}
        >
          {desc}
        </h5>
      </div>
    </div>
  );
};
