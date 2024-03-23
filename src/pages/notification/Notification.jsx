import React from "react";

export const Notification = () => {
  const notilist = [
    {
      name: "Party A",
      desc: "name has been change to by",
    },
    {
      name: "Party A",
      desc: "name has been change to by",
    },
    {
      name: "Party A",
      desc: "name has been change to by",
    },
    {
      name: "Party A",
      desc: "name has been change to by",
    },
  ];
  const NotiCard = ({ name, desc }) => (
    <div
      style={{
        backgroundColor: "#ECF2F6",
        borderRadius: "16px",
        padding: "16px",
        marginBottom: "18px",
      }}
    >
      <h3 style={{ margin: "0px" }}>{name}</h3>
      <p style={{ margin: "0px" }}>{desc}</p>
    </div>
  );
  return (
    <div
      style={{ width: "100dvw", height: "100dvh", backgroundColor: "#FFFFFF" }}
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
        {notilist.map((item, index) => (
          <NotiCard key={index} name={item.name} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};
