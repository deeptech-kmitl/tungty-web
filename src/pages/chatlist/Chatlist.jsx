// import React from "react";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SearchBar from "../../components/SearchBar";
// import ChatCard from "../../components/ChatCard";
// import {NotificationAppBar} from "../../components/NotificationAppBar";

// export const ChatList = () => {
//   const [search, setSearch] = useState("");
//   const [originalData, setOriginalData] = useState([]);
//   const [chatlist, setChatlist] = useState([]);
//   const navigate = useNavigate();

//   const handleSearch = (value) => {
//     const filteredList = originalData.filter((element) =>
//       element.partyName.toLowerCase().includes(value.toLowerCase())
//     );
//     const updatedRenderList =
//       filteredList.length > 0 ? filteredList : originalData;
//     setChatlist(updatedRenderList);
//   };

//   useEffect(() => {
//     // Set initial chatlist state when component mounts
//     fetchPartyData();
//     const bodyOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = bodyOverflow;
//     };
//   }, []);

//   const fetchPartyData = async () => {
//     try {
//       //   const response = await fetch(
//       //     `http://localhost:8083/`
//       //   );
//       //   console.log(response.status);
//       //   const data = await response.json();
//       setOriginalData(data);
//       setChatlist(data);
//       console.log(data);
//     } catch (error) {
//       console.log("error" + error);
//     }
//   };

//   const data = [
//     {
//       partyId: "1",
//       partyCode: "123",
//       partyOwner: "John",
//       partyName: "Test Party",
//       partyDescription: "Test Party",
//       partyType: "Private",
//       partyCategory: "Group",
//       appointmentDate: "2022-09-20",
//       appointmentTime: "12:00 PM",
//       memberAmount: 5,
//       memberList: ["Alice", "Bob", "Charlie", "David", "Eve"],
//       createDateTime: "2022-09-19",
//       updateDateTime: "2022-09-19",
//       color: "red",
//       imagepath: "http://placehold.it/300x150",
//     },
//     {
//       partyId: "2",
//       partyCode: "456",
//       partyOwner: "Alice",
//       partyName: "Another Test Party",
//       partyDescription: "Another Test Partyasdw",
//       partyType: "Public",
//       partyCategory: "Group",
//       appointmentDate: "2022-09-21",
//       appointmentTime: "1:00 PM",
//       memberAmount: 3,
//       memberList: ["John", "Jane", "Bob", "Bob", "Bob", "Bob", "Bob"],
//       createDateTime: "2022-09-18",
//       updateDateTime: "2022-09-18",
//       color: "green",
//       imagepath: "http://placehold.it/300x150",
//     },
//     {
//       partyId: "3",
//       partyCode: "456",
//       partyOwner: "Alice",
//       partyName: "MypAge",
//       partyDescription: "Another Test Party1111",
//       partyType: "Public",
//       partyCategory: "Group",
//       appointmentDate: "2022-09-21",
//       appointmentTime: "1:00 PM",
//       memberAmount: 3,
//       memberList: ["John", "Jane", "Bob", "Akuc"],
//       createDateTime: "2022-09-18",
//       updateDateTime: "2022-09-18",
//       color: "blue",
//       imagepath: "http://placehold.it/300x150",
//     },
//     {
//       partyId: "4",
//       partyCode: "456",
//       partyOwner: "Alice",
//       partyName: "Whyyyyyyy",
//       partyDescription: "Another Test Party1111",
//       partyType: "Public",
//       partyCategory: "Group",
//       appointmentDate: "2022-09-21",
//       appointmentTime: "1:00 PM",
//       memberAmount: 3,
//       memberList: ["John", "Jane"],
//       createDateTime: "2022-09-18",
//       updateDateTime: "2022-09-18",
//       color: "blue",
//       imagepath: "http://placehold.it/300x150",
//     },
//   ];

//   return (
//     <div style={styles.pageContainer}>
//       <NotificationAppBar />
//       <div style={{ marginTop: "3%" }}>
//         <SearchBar
//           search={search}
//           setSearch={setSearch}
//           handleSearch={handleSearch}
//         />
//       </div>
//       <ChatCard data={chatlist} />
//     </div>
//   );
// };

// const styles = {
//   pageContainer: { height: "100vh", overflowY: "scroll" },
// };
