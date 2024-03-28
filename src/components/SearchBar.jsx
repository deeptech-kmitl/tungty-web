import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

const SearchBar = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="searchBar" style={styles.searchBar}>
      <input
        type="text"
        className="input"
        style={styles.input}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <button
        className="searchIcon"
        style={styles.searchIcon}
        onClick={() => handleSearch(search)}
      >
        <FontAwesomeIcon icon={["fas", "magnifying-glass"]} size="lg" color="black" />
      </button>
    </div>
  );
};

const styles = {
  searchBar: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
    justifyContent: "center",
  },
  input: {
    width: "70%",
    fontSize: "16px",
    padding: "12px",
    border: "2px solid #000",
    borderRadius: "10px 0px 0px 10px",
  },
  searchIcon: {
    backgroundColor: "#A0B0FE",
    padding: "10px",
    borderRadius: "0px 10px 10px 0px",
    cursor: "pointer",
  },
};

export default SearchBar;
