import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../components/SearchBar";
import Header from "../../components/Header";
import {
  ModalComponent,
  IconToOpenModal, // Make sure to import IconToOpenModal
} from "../../components/ModalComponent";
import HashLoader from "react-spinners/HashLoader";
import { green } from "@mui/material/colors";
import PartyCardItem from "./../../components/PartyCardItem";

export const MyParty = () => {
  const userId = localStorage.getItem("user_id");
  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");
  const [search, setSearch] = useState("");
  const [originalData, setOriginalData] = useState([]);
  const [partylist, setPartylist] = useState([]);
  const [loading, setLoading] = useState(true);

  const override = {
    display: "block",
    margin: "0 auto",
    alignSelf: "center",
  };

  library.add(fas);

  const handleSortFilter = (selectedOption) => {
    const sortedData = [...originalData];
    if (selectedOption === "popular") {
      sortedData.sort((b, a) => a.memberList.length - b.memberList.length);
    } else if (selectedOption === "newest") {
      sortedData.sort(
        (b, a) => Date.parse(a.createDateTime) - Date.parse(b.createDateTime)
      );
    } else {
      sortedData.sort(
        (a, b) => Date.parse(a.createDateTime) - Date.parse(b.createDateTime)
      );
    }
    setPartylist(sortedData);
    console.log("Selected option:", selectedOption);
  };

  const handleSearch = (search) => {
    const filteredList = originalData.filter((element) =>
      element.partyName.toLowerCase().includes(search.toLowerCase())
    );
    const updatedRenderList =
      filteredList.length > 0 ? filteredList : originalData;
    setPartylist(updatedRenderList);
  };

  useEffect(() => {
    // Set initial partylist state when component mounts
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = bodyOverflow;
      fetchPartyData();
      setInterval(() => {
        fetchPartyData();
      }, 6000);
    };
  }, []);

  const fetchPartyData = async () => {
    try {
      const response = await fetch(
        `https://tungty-service-be.onrender.com/party/myParty/${username}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();

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
      <div style={styles.spinnerContainer}>
        <HashLoader
          color={"#4542C1"}
          loading={loading}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  } else {
    return (
      <div style={styles.pageContainer}>
        <Header />
        <div style={styles.searchbar}>
          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />
        </div>
        <div style={styles.titleNSorting}>
          <div style={styles.titlePage}>ปาร์ตี้ของฉัน</div>
          <ModalComponent handleSortFilter={handleSortFilter} />
        </div>
        <PartyCardItem data={partylist} />
      </div>
    );
  }
};

const styles = {
  pageContainer: {
    height: "97vh",
    overflowY: "scroll",
  },
  spinnerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 350,
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
  titlePage: {
    padding: 30,
    marginLeft: "5%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "10vh",
    color: "#FFC107",
    fontWeight: "bold",
  },
};
