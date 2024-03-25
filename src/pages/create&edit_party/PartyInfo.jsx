import React from "react";
import Avatar from "@mui/material/Avatar";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { BottomNav } from "../../components/BottomNav";

export const PartyInfo = () => {
    const handleChatPress = () => {
    };

    return (
        <div style={root}>
            <div style={headerContainer}>
                <div onClick={() => { navigate("/find-party"); }}>
                    <ArrowBackIcon style={{ marginLeft: "16px", position: "absolute", top: "50%", transform: "translateY(-50%)" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h3>ㅤ</h3>
                </div>
                <div
                    onClick={() => {
                        navigate("/edit-profile");
                    }}
                >
                    <EditIcon
                        style={{
                            marginLeft: "16px",
                            position: "absolute",
                            top: "50%",
                            left: "93%",
                            transform: "translate(-100%, -50%)",
                        }}
                    />
                </div>
            </div>
            <div style={{ flex: 1, overflowY: 'auto' }}>
                <div style={contentContainer}>
                    <h2 style={{ fontSize: 30 }}>4 SEPTEMBER 2024 08:30</h2>
                    <div style={{ paddingRight: "75px", paddingLeft: "75px", display: "flex", justifyContent: "center" }}>
                        <Avatar
                            sx={{ width: "30vw", height: "30vw" }}
                            src="https://cdn.discordapp.com/attachments/1192812335878910004/1221514453984608387/image.png?ex=6612dafc&is=660065fc&hm=989b294aed7a472b9486e30cb078d05e45fe77e7f34c82e6efc34d051b62bd2d&"
                        />
                    </div>
                    <h2 style={{ fontSize: 30 }}>ติวเข้มมิดเทอมไอที</h2>
                    <div style={dividerStyle} />
                    <div style={{ height: '2px', backgroundColor: '#D9D9D9', margin: '10px 0' }}></div>
                    <h2 style={{ fontSize: 30 }}>👤 12</h2>
                    <div style={{ height: '2px', backgroundColor: '#D9D9D9', margin: '10px 0' }}></div>
                    <h2 style={{ fontSize: 30 }}>หากเพื่อนๆสนใจที่จะแลกเปลี่ยนความรู้ พากันติวและ พากันเก็บA หรือพากันรอดชีวิตขอให้อย่ารีรอ ที่จะเข้ามา</h2>
                    <div style={dividerStyle} />
                </div>
            </div>
            <button style={{ ...buttonStyle, width: '100%', position: 'sticky', bottom: '60px', zIndex: '2', }}>
                <h2 style={{ fontSize: 30, color: 'white', }}>แชท</h2>
            </button>
            <BottomNav style={{ zIndex: '1' }} />
        </div>
    );
};

const root = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
};

const headerContainer = {
    backgroundColor: "#4542C1",
    padding: "1px",
    color: "#ffffff",
    position: "relative",
    justifyContent: "space-between",
    alignItems: "center",
};

const contentContainer = {
    paddingRight: "75px",
    paddingLeft: "75px",
};

const dividerStyle = {
    height: '100%',
    margin: '0px 10px',
};

const buttonStyle = {
    marginTop: 'auto',
    backgroundColor: '#4542C1',
    width: '100%',
    height: 80,
};