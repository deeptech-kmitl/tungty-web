import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {children ? (
        <nav style={styles.anothernavbar} className="navbar">
          {children}
          <div
            style={styles.bell}
            onClick={() => {
              navigate("/notification");
            }}
          >
            <FontAwesomeIcon
              icon={["fas", "bell"]}
              size={screen.width < 768 ? "xl" : "2xl"}
              color="#FFC107"
            />
          </div>
        </nav>
      ) : (
        <nav style={styles.navbar}>
          <div
            style={styles.bell}
            onClick={() => {
              navigate("/notification");
            }}
          >
            <FontAwesomeIcon icon={["fas", "bell"]} size={screen.width < 768 ? "xl" : "2xl"} color="#FFC107" />
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
    overflow: "hidden",
  },
  navbar: {
    height: "7vh",
    display: "flex",
    position: "sticky",
    top: 0,
    zIndex: 1,
    backgroundColor: "#4542C1",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  bell: {
    marginRight: "2%",
    cursor: "pointer",
  },
};

export default Header;
