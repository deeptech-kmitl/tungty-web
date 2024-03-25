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
  },
  bell: {
    marginRight: "2%",
    cursor: "pointer",
  },
};

export default Header;
