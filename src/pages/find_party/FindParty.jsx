import React from "react";
import { useState, useEffect } from "react";
import { NotificationAppBar } from "../../components/NotificationAppBar";
import { WhiteTextField } from "../../components/WhiteTextField";
import SearchIcon from "@mui/icons-material/Search";
import PartyInfoCardItem from "../../components/PartyInfoCardItem";
import { FilterbyModal } from "../../components/FilterbyModal";
import HashLoader from "react-spinners/HashLoader";
import FloatingButton from "../../components/createPartyButton";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/SearchBar";

export const FindParty = () => {
  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJIdXkyIiwiZXhwIjoxNzEzODA0NTQzLCJpYXQiOjE3MTEyMTI1NDMsInVzZXJJZCI6IjkxYjY5OGE2LTY1N2EtNDY4Ni05Yzk3LTYxYThlNTA1NjQxOCJ9.UvZs8Mw60D1DhNhN9SA1m1-iTrzaClYFOBrKMJKb6uI";
  const [partylist, setPartylist] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    fetchPartyData();
    return () => {
      document.body.style.overflow = bodyOverflow;
    };
  }, []);

  const handleSearch = (search) => {
    const filteredList = originalData.filter((element) =>
      element.partyName.toLowerCase().includes(search.toLowerCase())
    );
    const updatedRenderList =
      filteredList.length > 0 ? filteredList : originalData;
    setPartylist(updatedRenderList);
  };

  const fetchPartyData = async () => {
    try {
      const response = await fetch(
        `https://tungty-service-be.onrender.com/party`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(token);
      console.log(response.status);
      const data = await response.json();
      console.log(data);
      setOriginalData(data);
      setPartylist(data);
      setLoading(false);
    } catch (error) {
      console.log("error" + error);
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 350,
        }}
      >
        <HashLoader
          color={"#4542C1"}
          loading={loading}
          cssOverride={{
            display: "block",
            margin: "0 auto",
            alignSelf: "center",
          }}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {

    return (
      <div style={styles.pageContainer}>
        <NotificationAppBar />
        <div style={styles.bottomBar}>
          <div style={styles.greenContainer} >
            <span style={styles.text}>Public Party</span>
          </div>
          <div style={styles.redContainer} onClick={() => navigate("/join-private-party")}>
            <span style={styles.textRight}>Private Party</span>
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <div style={styles.searchbar}>
            <SearchBar
              search={search}
              setSearch={setSearch}
              handleSearch={handleSearch}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 style={{ color: "#FDC319", margin: "20px" }}>หาปาร์ตี้</h1>
            <FilterbyModal></FilterbyModal>
          </div>
          <div style={styles.titleNSorting}>
            <PartyInfoCardItem data={partylist} />
          </div>
          <div onClick={() => navigate("/create-party")}><FloatingButton ></FloatingButton></div>
        </div>
      </div>
    );
  }
};
const styles = {
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
  pageContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
  },
  bottomBar: {
    display: "flex",
    height: "100px", // ปรับความสูงตามที่ต้องการ
  },
  greenContainer: {
    flex: 1,
    backgroundColor: "#4542C1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  redContainer: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: "20px",
  },
  textRight: {
    color: "black",
    fontSize: "20px",
  },
};
