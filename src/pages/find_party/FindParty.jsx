import React from "react";
import { NotificationAppBar } from "../../components/NotificationAppBar";
import { WhiteTextField } from "../../components/WhiteTextField";
import SearchIcon from "@mui/icons-material/Search";
import { PartyCard } from "../../components/PartyCard";
import Grid from "@mui/material/Grid";

export const FindParty = () => {
  return (
    <div
      style={{ width: "100dvw", height: "100dvh", backgroundColor: "#FFFFFF" }}
    >
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
          <WhiteTextField style={{ backgroundColor: "#D9D9D9" }} />
          <SearchIcon
            style={{ verticalAlign: "middle", marginRight: "10px" }}
          />
        </div>
        <div style={{ padding: "8%" }}>
          <PartyCard
            name="Test"
            image="https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
            member={10}
            bgColor="#FDE619"
            desc="เป็นปาร์ตี้ปลุกพาไปทานชาบูสุดอร่อย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถ"
          />
          <Grid container spacing={2}>
            <Grid item xs={6} md={8}>
              <PartyCard
                name="Test"
                image="https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
                member={10}
                bgColor="#FDE619"
                desc="เป็นปาร์ตี้ปลุกพาไปทานชาบูสุดอร่อย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถ"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <PartyCard
                name="Test"
                image="https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
                member={10}
                bgColor="#FDE619"
                desc="เป็นปาร์ตี้ปลุกพาไปทานชาบูสุดอร่อย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถ"
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <PartyCard
                name="Test"
                image="https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
                member={10}
                bgColor="#FDE619"
                desc="เป็นปาร์ตี้ปลุกพาไปทานชาบูสุดอร่อย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถ"
              />
            </Grid>
            <Grid item xs={6} md={8}>
              <PartyCard
                name="Test"
                image="https://cdn-icons-png.flaticon.com/512/1719/1719420.png"
                member={10}
                bgColor="#FDE619"
                desc="เป็นปาร์ตี้ปลุกพาไปทานชาบูสุดอร่อย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถอย สำหรับเพื่อพื่อสามารถ"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
