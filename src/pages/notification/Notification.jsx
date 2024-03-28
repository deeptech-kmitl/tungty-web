import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HashLoader from "react-spinners/HashLoader";

export const Notification = () => {
  const navigate = useNavigate();
  const [noti, setNoti] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
    if (user_id == null) {
      navigate("/");
    }
    fetch(`https://tungty-service-be.onrender.com/notify/getAll/${user_id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setNoti(data);
        setLoading(false);
        console.log(noti);
        console.log(noti == []);
      });
  }, []);
  const NotiCard = ({ name, desc }) => (
    <div
      style={{
        backgroundColor: "#ECF2F6",
        borderRadius: "16px",
        padding: "16px",
        marginBottom: "18px",
        color: "#4542C1",
      }}
    >
      <h3 style={{ margin: "0px" }}>{name}</h3>
      <p style={{ margin: "0px" }}>{desc}</p>
    </div>
  );
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
    if (noti.length == 0) {
      console.log(noti == []);
      return (
        <div>
          <div
            style={{
              width: "100dvw",
              height: "100dvh",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div
              style={{
                backgroundColor: "#4542C1",
                textAlign: "center",
                padding: "1px",
                color: "#ffffff",
              }}
            >
              <h3>Notification</h3>
            </div>
          </div>
          <div className="screen-center">
            <h3
              style={{
                display: "block",
                margin: "0 auto",
                alignSelf: "center",
              }}
            >
              ไม่มีการแจ้งเตือน
            </h3>
          </div>
        </div>
      );
    } else {
      return (
        <div
          style={{
            width: "100dvw",
            height: "100dvh",
            backgroundColor: "#FFFFFF",
          }}
        >
          <div
            style={{
              backgroundColor: "#4542C1",
              textAlign: "center",
              padding: "1px",
              color: "#ffffff",
            }}
          >
            <h3>Notification</h3>
          </div>
          <div style={{ padding: "8%", paddingBottom: "100px" }}>
            {noti.map((item, index) => (
              <NotiCard
                key={index}
                name={item.partyName}
                desc={item.notifyDescription}
              />
            ))}
          </div>
        </div>
      );
    }
  }
};
