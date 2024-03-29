import React from "react";
import { useState, useEffect } from "react";
import { NotificationAppBar } from "../../components/NotificationAppBar";
import { WhiteTextField } from "../../components/WhiteTextField";
import { YellowButton } from "../../components/YellowButton";
import { useNavigate } from "react-router-dom";

export const JoinPrivateParty = () => {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const [privatePartyCode, setprivatePartyCode] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");


    const handleJoin = async () => {
        let username;
        console.log(privatePartyCode)
        if (privatePartyCode == "") {
            return setErrorMsg("กรุณากรอกข้อมูลให้ครบถ้วน!");
        }

        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/user/${userId}`,
            );
            const data = await response.json();
            console.log(data.username);
            username = data.username;
        } catch (error) {
            setErrorMsg(error.message);
        }
        try {
            const response = await fetch(
                "https://tungty-service-be.onrender.com/party/joinPrivate",
                {
                    method: "PUT",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: username,
                        partyCode: privatePartyCode,
                    }),
                }
            );
            setSuccessMsg("เข้าร่วมสำเร็จ !")
            navigate('/myparty')
        } catch (error) {
            setErrorMsg(error.message);
        }
    }

    return (
        <div style={styles.pageContainer}>
            <NotificationAppBar />
            <div style={{ textAlign: "center", marginTop: "16px" }}>
                <div
                    style={{
                        backgroundColor: "#D9D9D9",
                        width: "auto",
                        borderRadius: 24,
                        display: "inline-block",
                        verticalAlign: "middle",
                    }}
                >
                </div>
                <h1 style={{ color: '#FDC319' }}>ปาร์ตี้ส่วนตัว</h1>
                <h2>โค้ดสำหรับเข้าร่วมปาร์ตี้ส่วนตัว :</h2>
                <div style={styles.titleNSorting}>
                    <WhiteTextField
                        style={{ backgroundColor: "#D9D9D9" }}
                        value={privatePartyCode}
                        onValueChange={(e) => {
                            setprivatePartyCode(e.target.value);
                        }}
                    />
                </div>
                <h4 style={{ color: "#FF5C5C" }}>{errorMsg}</h4>
                <h4 style={{ color: "#76CF06" }}>{successMsg}</h4>
                <YellowButton title="JOIN" handleOnClick={handleJoin} style={{ backgroundColor: '#4542C1', color: '#FDC319' }} />
            </div>
        </div>
    );
};
const styles = {
    pageContainer: {
        height: "97vh",
        overflowY: "scroll",
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
        justifyContent: "center"
    },
};