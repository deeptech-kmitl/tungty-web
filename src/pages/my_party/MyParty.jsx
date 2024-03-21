  import React from "react";
  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import { library } from "@fortawesome/fontawesome-svg-core";
  import { fas } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import SearchBar from "../../components/SearchBar";
  import PartyCard from "../../components/PartyCard";
  import Header from "../../components/Header";
  import {
    ModalComponent,
    IconToOpenModal, // Make sure to import IconToOpenModal
  } from "../../components/ModalComponent";
  import HashLoader from "react-spinners/HashLoader";
  import { green } from "@mui/material/colors";

  export const MyParty = () => {
    const userId = "Rawipas";
    const [search, setSearch] = useState("");
    const [originalData, setOriginalData] = useState([]);
    const [partylist, setPartylist] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const override = {
      display: "block",
      margin: "0 auto",
      alignSelf: "center",
    };

    library.add(fas);

    const handleSortFilter = (selectedOption) => {
      const sortedData = [...data];
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

    const handleSearch = (value) => {
      const filteredList = originalData.filter((element) =>
        element.partyName.toLowerCase().includes(value.toLowerCase())
      );
      const updatedRenderList =
        filteredList.length > 0 ? filteredList : originalData;
      setPartylist(updatedRenderList);
    };

    useEffect(() => {
      // Set initial partylist state when component mounts
      fetchPartyData();
      const bodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = bodyOverflow;
        setInterval(() => {
          fetchPartyData();
        }, 60000);
      };
    }, []);

    const fetchPartyData = async () => {
      try {
        //   const response = await fetch(
        //     `http://localhost:8083/party/myParty/${userId}`
        //   );
        //   console.log(response.status);
        //   const data = await response.json();
        setOriginalData(data);
        setPartylist(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log("error" + error);
        setLoading(false);
      }
    };

    const data = [
      {
        partyId: "1",
        partyCode: "123",
        partyOwner: "John",
        partyName: "Test Party",
        partyDescription: "Test Party",
        partyType: "Private",
        partyCategory: "Group",
        appointmentDate: "2022-09-20",
        appointmentTime: "12:00 PM",
        memberAmount: 5,
        memberList: ["Alice", "Bob", "Charlie", "David", "Eve"],
        createDateTime: "2022-09-19",
        updateDateTime: "2022-09-19",
        color: "red",
        imagepath: "http://placehold.it/300x150",
      },
      {
        partyId: "2",
        partyCode: "456",
        partyOwner: "Alice",
        partyName: "Another Test Party",
        partyDescription: "Another Test Partyasdw",
        partyType: "Public",
        partyCategory: "Group",
        appointmentDate: "2022-09-21",
        appointmentTime: "1:00 PM",
        memberAmount: 3,
        memberList: ["John", "Jane", "Bob", "Bob", "Bob", "Bob", "Bob"],
        createDateTime: "2022-09-18",
        updateDateTime: "2022-09-18",
        color: "green",
        imagepath: "http://placehold.it/300x150",
      },
      {
        partyId: "3",
        partyCode: "456",
        partyOwner: "Alice",
        partyName: "MypAge",
        partyDescription: "Another Test Party1111",
        partyType: "Public",
        partyCategory: "Group",
        appointmentDate: "2022-09-21",
        appointmentTime: "1:00 PM",
        memberAmount: 3,
        memberList: ["John", "Jane", "Bob", "Akuc"],
        createDateTime: "2022-09-18",
        updateDateTime: "2022-09-18",
        color: "blue",
        imagepath: "http://placehold.it/300x150",
      },
      {
        partyId: "4",
        partyCode: "456",
        partyOwner: "Alice",
        partyName: "Whyyyyyyy",
        partyDescription: "Another Test Party1111",
        partyType: "Public",
        partyCategory: "Group",
        appointmentDate: "2022-09-21",
        appointmentTime: "1:00 PM",
        memberAmount: 3,
        memberList: ["John", "Jane"],
        createDateTime: "2022-09-18",
        updateDateTime: "2022-09-18",
        color: "blue",
        imagepath: "http://placehold.it/300x150",
      }
    ];

    if (loading) {
      return (
        <div style={styles.spinnerContainer}>
          <HashLoader
            color={green[600]}
            loading={loading}
            cssOverride={override}
            size={150}
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
            <PartyCard data={partylist} />
        </div>
      );
    }
  };

  const styles = {
    pageContainer: {
      height: "100vh",
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
      justifyContent: "center",
      alignItems: "center",
      fontSize: "10vh",
      color: "#FFC107",
      fontWeight: "bold",
    },
  };
