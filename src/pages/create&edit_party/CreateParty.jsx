import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import { WhiteTextField } from "../../components/WhiteTextField";
import { YellowButton } from "../../components/YellowButton";
import CustomDatePicker from "../../components/DatePicker";

export const CreateParty = () => {
    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setIsPublic(event.target.checked);
    };

    const handleCreateParty = () => {
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}> {/* กำหนด LocalizationProvider และ AdapterDayjs */}
            <div style={{ width: "100vw", height: "100vh", backgroundColor: "#EFEFEF" }}>
                <div style={{ backgroundColor: "#4542C1", padding: "1px", color: "#ffffff", position: "relative" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <h3>Create Party</h3>
                    </div>
                    <div onClick={() => { navigate("/find-party"); }}>
                        <ArrowBackIcon style={{ marginLeft: "16px", position: "absolute", top: "50%", transform: "translateY(-50%)" }} />
                    </div>
                </div>
                <div style={{ paddingRight: "75px", paddingLeft: "75px", display: "flex", justifyContent: "center" }}>
                    <Avatar
                        sx={{ width: "30vw", height: "30vw" }}
                        src="https://cdn.discordapp.com/attachments/1192812335878910004/1221514453984608387/image.png?ex=6612dafc&is=660065fc&hm=989b294aed7a472b9486e30cb078d05e45fe77e7f34c82e6efc34d051b62bd2d&"
                    />
                </div>
                <div style={{ margin: "20px auto", maxWidth: "300px" }}>
                    <label style={{ color: "#4542C1" }}>Party Type :</label><br />
                    <Select value={selectedType} onChange={handleTypeChange} style={{ width: "100%", backgroundColor: '#D9D9D9' }}>
                        <MenuItem value="">โปรดเลือก</MenuItem>
                        <MenuItem value="food">อาหาร</MenuItem>
                        <MenuItem value="entertain">บันเทิง</MenuItem>
                        <MenuItem value="health">สุขภาพ</MenuItem>
                        <MenuItem value="learning">การเรียน</MenuItem>
                        <MenuItem value="fashion">แฟชัน</MenuItem>
                        <MenuItem value="travel">ท่องเที่ยว</MenuItem>
                        <MenuItem value="relation">ความสัมพันธ์</MenuItem>
                        <MenuItem value="family">ครอบครัว</MenuItem>
                        <MenuItem value="language">ภาษา/ศาสนา/ความเชื่อ</MenuItem>
                        <MenuItem value="book">หนังสือ</MenuItem>
                        <MenuItem value="technology">เทคโนโลยี</MenuItem>
                        <MenuItem value="other">อื่น</MenuItem>
                    </Select>
                    <label style={{ color: "#4542C1" }}>Party name :</label><br />
                    <WhiteTextField style={{ backgroundColor: "#D9D9D9", width: "100%" }} />
                    <label style={{ color: "#4542C1" }}>Date :</label><br />
                    <CustomDatePicker/><br />
                    <label style={{ color: "#4542C1" }}>Time :</label><br />
                    <WhiteTextField style={{ backgroundColor: "#D9D9D9", width: "100%" }} />
                    <label style={{ color: "#4542C1" }}>About :</label><br />
                    <WhiteTextField style={{ backgroundColor: "#D9D9D9", width: "100%", height: "auto", maxHeight: "200px" }} multiline rows={6} />
                    <FormControlLabel control={<Checkbox checked={isPublic} onChange={handleCheckboxChange} />}
                        label="Public Party" style={{ color: "#4542C1" }}
                    />
                    <FormControlLabel control={<Checkbox checked={!isPublic} onChange={handleCheckboxChange} />}
                        label="Private Party" style={{ color: "#4542C1" }}
                    />
                    <div style={{ textAlign: "center", alignContent: "center" }}>
                        <YellowButton title="Create Party" onClick={handleCreateParty} />
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    );
};