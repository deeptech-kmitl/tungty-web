import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";

export const Party = () => {
  const navigate = useNavigate();
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
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    console.log(partyData)
    return () => {
      document.body.style.overflow = bodyOverflow;
      fetchData();
    };
  }, []);

  const fetchData = async () => {
    let username;
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    let partyOwner;
    try {
      const response = await fetch(
        `https://tungty-service-be.onrender.com/user/${userId}`,
      );
      const data = await response.json();
      console.log(data.username);
      username = data.username;
      console.log(username)
    } catch (error) {
    }
    console.log(partyData.partyName)
    try {
      const response = await fetch(
        `https://tungty-service-be.onrender.com/party/${partyData.partyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      partyOwner = data.partyOwner;
      console.log(partyOwner)
    } catch (error) {
    }
    console.log(username)
    console.log(partyOwner)
    if (username == partyOwner) {
      setIsOwner(true)
    }
    console.log(isOwner)
    console.log(partyData)
  }

  return (
    <>
      <Header>
        <FontAwesomeIcon
          icon={["fas", "angle-left"]}
          color="white"
          size="2x"
          onClick={() => window.history.back()}
          style={{ marginLeft: "3%", cursor: "pointer" }}
        />
      </Header>
      <div style={styles.pageContainer}>
        <div style={styles.container}>
          <h2 style={styles.datecreated}>
            {/* {month + " " + day + ", " + year + " " + partyData.appointmentTime} */}
            {month + " " + day + ", " + year + " AT " + hour + ":" + minute}
          </h2>
          <div
            style={{ ...styles.imageContainer, backgroundColor: partyData.backgroundColor }}
          >
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
              alignSelf: "center",
            }}
          >
            {partyData.partyName}
          </div>
          {(isOwner) &&
            <div onClick={() => navigate(`/edit-party/${partyData.partyName}`, 
                {state: {partyData}}
              )}
            >
              <EditIcon></EditIcon>
            </div>
          }
        <div style={styles.icons}>
          <div
            style={styles.iconContainer}
            onPress={() => Navigation.navigate("Member")}
          >
            <FontAwesomeIcon icon={["fas", "user"]} size="2x" color="#8B88FF" />
            <div style={{ marginLeft: "10px", fontSize: 32 }}>
              {partyData.memberList.length}{" "}
            </div>
          </div>
        </div>
        <div style={{ marginTop: "2%", fontSize: 24 }}>
          {partyData.partyDescription}
        </div>
      </div>
      <div style={{ ...styles.button, backgroundColor: partyData.backgroundColor, color: "white", cursor: "pointer" }}>
        CHAT
      </div>
    </div >
    </>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "87vh",

  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
    flexGrow: 1,
  },
  datecreated: {
    padding: "10px",
    alignItems: "center",
    fontSize: "3vh",
    textAlign: "center",
    color: "#4542C1",
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
    width: "200px",
    height: "200px",
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
    padding: "7%",
    textAlign: "center",
  },
};
