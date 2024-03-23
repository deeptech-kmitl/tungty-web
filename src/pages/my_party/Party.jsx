import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";

export const Party = () => {
    const location = useLocation();
    const { partyData } = location.state;
    const date = new Date(Date.parse(partyData.createDateTime));
    console.log(date);
    const [month, day, year, hour, minute] = [
      date.toLocaleString("default", { month: "long" }).toUpperCase(),
      date.getDate(),
      date.getFullYear(),
      date.getHours(),
      date.getMinutes(),
    ];

    return (
      <>
        <Header>
          <FontAwesomeIcon
            icon={["fas", "angle-left"]}
            color="white"
            size="2x"
            onClick={() => window.history.back()}
            style={{ marginLeft: "3%" }}
          />
        </Header>
        <div style={styles.pageContainer}>
          <div style={styles.container}>
            <h2 style={styles.datecreated}>
              {month + " " + day + ", " + year + " " + partyData.appointmentTime}
            </h2>
            <div
              style={{ ...styles.imageContainer, backgroundColor: partyData.color }}
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
          <div style={{ ...styles.button, backgroundColor: partyData.color, color: "white" }}>
            CHAT
          </div>
        </div>
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
      width: "300px",
      height: "300px",
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
      padding: "1%",
      textAlign: "center",
    },
  };
