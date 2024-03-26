import React from "react";
import { useState, useEffect } from "react";
import { NotificationAppBar } from "../../components/NotificationAppBar";
import { WhiteTextField } from "../../components/WhiteTextField";
import SearchIcon from "@mui/icons-material/Search";
import PartyInfoCardItem from "../../components/PartyInfoCardItem";
import { FilterbyModal } from "../../components/FilterbyModal";

export const FindParty = () => {
  const userId = localStorage.getItem("user_id");
  // const token = localStorage.getItem("token");
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJIdXkyIiwiZXhwIjoxNzEzODA0NTQzLCJpYXQiOjE3MTEyMTI1NDMsInVzZXJJZCI6IjkxYjY5OGE2LTY1N2EtNDY4Ni05Yzk3LTYxYThlNTA1NjQxOCJ9.UvZs8Mw60D1DhNhN9SA1m1-iTrzaClYFOBrKMJKb6uI";
  const [partylist, setPartylist] = useState([]);
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = bodyOverflow;
      fetchPartyData();
      setInterval(() => {
        fetchPartyData();
      }, 60000);
    };
  }, []);

  const fetchPartyData = async () => {
    try {
      const response = await fetch(
        `https://tungty-service-be.onrender.com/party`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(token)
      console.log(response.status);
      const data = await response.json();
      console.log(data);

      setOriginalData(data);
      setPartylist(data);
    } catch (error) {
      console.log("error" + error);
    }
  };

  return (
    <div style={styles.pageContainer}>
      <NotificationAppBar />
      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <div
          style={{
            backgroundColor: "#D9D9D9",
            width: "auto",
            borderRadius: 24,
            display: "inline-block",
            verticalAlign: "middle",
          }}
        >
          <WhiteTextField style={{ backgroundColor: "#D9D9D9" }} />
          <SearchIcon
            style={{ verticalAlign: "middle", marginRight: "10px" }}
          />
        </div>
        <FilterbyModal></FilterbyModal>
        <h1 style={{ color: '#FDC319' }}>หาปาร์ตี้</h1>
        <div style={styles.titleNSorting}>
          <PartyInfoCardItem data={partylist} />
        </div>
      </div>
    </div>
  );
};
const styles = {
  pageContainer: {
    height: "97vh",
    overflowY: "scroll",
  },
  searchbar: {
    flexDirection: "row",
    marginTop: "3%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    marginHorizontal: 8,
  },
  titleNSorting: {
    display: "flex",
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};