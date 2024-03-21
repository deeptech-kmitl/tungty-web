import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ children }) => {
  return (
    <>
      {children ? (
        <nav style={styles.anothernavbar} className="navbar">
          {children}
          <div style={styles.bell}>
            <FontAwesomeIcon icon={["fas", "bell"]} size="3x" color="#FFC107" />
          </div>
        </nav>
      ) : (
        <nav style={styles.navbar}>
          <div style={styles.bell}>
            <FontAwesomeIcon icon={["fas", "bell"]} size="3x" color="#FFC107" />
          </div>
        </nav>
      )}
    </>
  );
};

const styles = {
  anothernavbar: {
    height: "7vh",
    display: "flex",
    justifyContent: "space-between",
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#4542C1",
    alignItems: "center",
  },
  navbar: {
    height: "7vh",
    display: "flex",
    justifyContent: "space-around",
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#4542C1",
    alignItems: "center",
    justifyContent: "flex-end", // This should be removed if you want to use space-around
  },
  bell: {
    marginRight: "2%",
  },
};

export default Header;
