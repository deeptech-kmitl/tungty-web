import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export const PartyInfo = () => {
  const location = useLocation();
  const { partyData } = location.state;
  const date = new Date(Date.parse(partyData.createDateTime));
  const [month, day, year, hour, minute] = [
    date.toLocaleString("default", { month: "long" }).toUpperCase(),
    date.getDate(),
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
  ];

  return (
    <Modal open={true} onClose={() => {}}>
      <div style={styles.modalContainer}>
        <IconButton
          style={{ position: "absolute", top: "5px", right: "5px", color: "white" }}
          onClick={() => onClose()}
        >
          <CloseIcon />
        </IconButton>
        <div style={{ ...styles.imageContainer, backgroundColor: partyData.backgroundColor }}>
          <div style={styles.imageWrapper}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
              alt="Party Image"
              style={styles.partyImage}
            />
          </div>
        </div>
        <div
          style={{
            color: "#FDC319",
            fontWeight: "bold",
            fontSize: 32,
            padding: "2%",
          }}
        >
          {partyData.partyName}
        </div>
        <h2 style={styles.datecreated}>
          {month + " " + day + ", " + year + " AT " + hour + ":" + minute}
        </h2>
        <div style={styles.icons}>
          <div style={styles.iconContainer} onClick={() => Navigation.navigate("Member")}>
            <FontAwesomeIcon icon={["fas", "user"]} size="2x" color="white" />
            <div style={{ marginLeft: "10px", fontSize: 32, color: "white" }}>
              {partyData.memberList.length}{" "}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2%", fontSize: 24, color: "white" }}>
          {partyData.partyDescription}
        </div>
        <div style={styles.button}>JOIN</div>
      </div>
    </Modal>
  );
};

const styles = {
  modalContainer: {
    position: "absolute",
    width: 400,
    backgroundColor: "#4542C1",
    padding: "9px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    outline: "none",
    borderRadius: "8px",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  datecreated: {
    padding: "10px",
    fontSize: "3vh",
    textAlign: "center",
    color: "#FDC319",
    fontWeight: "bold",
  },
  partyImage: {
    display: "block",
    maxWidth: "100%",
    height: "auto",
    borderRadius: "50%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  },
  imageWrapper: {
    overflow: "hidden",
    borderRadius: "50%",
    width: "100%",
    height: "100%",
  },
  icons: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  button: {
    padding: "2%",
    backgroundColor: "#FDC319", // เปลี่ยนสีปุ่มเป็นสีเหลือง
    cursor: "pointer",
    alignSelf: "center",
    fontSize: "1.5em", // เพิ่มขนาดของปุ่มใหญ่ขึ้น
    width: "100%",
    color: "#4542C1",
  },
};
