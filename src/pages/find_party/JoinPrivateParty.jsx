import React from "react";
import { useState, useEffect } from "react";
import { NotificationAppBar } from "../../components/NotificationAppBar";
import { WhiteTextField } from "../../components/WhiteTextField";
import { YellowButton } from "../../components/YellowButton";
import { IconToOpenModal } from "../../components/ModalComponent";
import { FilterbyModal } from "../../components/FilterbyModal";

export const JoinPrivateParty = () => {
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
                    <WhiteTextField style={{ backgroundColor: "#D9D9D9" }} />
                </div>
                <YellowButton title="JOIN" style={{ backgroundColor: '#4542C1', color: '#FDC319' }} />
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