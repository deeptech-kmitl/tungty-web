import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Avatar from "@mui/material/Avatar";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Radio } from "@mui/material";
import { Select, MenuItem, Checkbox, FormControlLabel } from "@mui/material";
import { WhiteTextField } from "../../components/WhiteTextField";
import { YellowButton } from "../../components/YellowButton";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';

export const CreateParty = () => {
    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [partyType, setPartyType] = useState("public")
    const [value, setValue] = React.useState(null);
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    const [selectedDate, setSelectedDate] = useState(null);

    const handleTest = (date) => {
        if (date instanceof Date) {
            setSelectedDate(date);
            const dateConvert = dayjs(date).format('YYYY-MM-DDTHH:mm:ssZ')
            console.log(dateConvert)
            setValue(dateConvert); // Use `date` directly for formatting
        } else {
            // Handle invalid date case
        }
    };

    useEffect(() => {
        console.log("this is ")
        console.log(dayjs(value).format('YYYY-MM-DDTHH:mm:ssZ'))
        setFormData((prevFormData) => ({
            ...prevFormData,
            appointmentDate: dayjs(value).format('YYYY-MM-DDTHH:mm:ssZ'),
        }));

    }, [value]
    )

    const [formData, setFormData] = useState({
        partyName: "",
        partyDescription: "",
        partyType: "",
        partyCategory: "",
        appointmentDate: "2024-03-29T11:13:00+07:00", // Initial empty string
        appointmentTime: "",
        memberAmount: "",
        memberList: [],
    });

    const [formDataNoti, setFormDataNoti] = useState({
        partyName: formData.partyName,
        typeAction: "notify",
        notifyDescription: `${formData.partyName} meeting will start now`,
        userId: userId,
        appointmentDate: formData.appointmentTime, // Initial empty string
        appointmentTime: formData.appointmentTime,
        status: "Pending",
        partyId: "",
    });

    const [formDataNoti15Min, setFormDataNoti15Min] = useState({
        partyName: formData.partyName,
        typeAction: "notify",
        notifyDescription: `${formData.partyName} meeting will start in 15 minutes`,
        userId: userId,
        appointmentDate: formData.appointmentTime, // Initial empty string
        appointmentTime: formData.appointmentTime,
        status: "Pending",
        partyId: "",
    });


    const handleChange = (name, value) => {
        if (name === "memberAmount") {
            value = parseInt(value); // Convert to integer
            if (isNaN(value)) {
                // Handle invalid input
                value = 0; // or any default value you prefer
            }
        }
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            partyCategory: event.target.value,
        }));
    };

    const handleDateChange = (newValue) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            appointmentDate: newValue
        }));
    };

    const handleCreateParty = async () => {
        console.log(formData)
        if (partyType === "private") {
            formData.partyType = "Private"
        }
        else {
            formData.partyType = "Public"
        }
        const apptime = formData.appointmentDate
        const replacetime = "T" + formData.appointmentTime + ":00"
        const realAppointmentTime = apptime.replace("T00:00:00", replacetime)
        console.log(realAppointmentTime)
        let username;
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/user/${userId}`,
            );
            const data = await response.json();
            console.log(data.username);
            username = data.username;
        } catch (error) {
        }
        formData.memberList = [username]
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/party`,
                {
                    method: "POST",
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
                    body: JSON.stringify(formData),
                }
            );
            console.log(token)
            console.log(formData);
            navigate(`/myparty`);
        } catch (error) {
            console.log("error" + error);
        }
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/notify/createNotify`,
                {
                    method: "POST",
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
                    body: JSON.stringify(formDataNoti),
                }
            );
            navigate(`/myparty`);
        } catch (error) {
            console.log("error" + error);
        }
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/notify/createNotify`,
                {
                    method: "POST",
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
                    body: JSON.stringify(formDataNoti15Min),
                }
            );
            navigate(`/myparty`);
        } catch (error) {
            console.log("error" + error);
        }
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

                    <Select value={selectedType} onChange={handleTypeChange} style={{ width: "100%", backgroundColor: '#D9D9D9' }} >
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
                    <WhiteTextField style={{ backgroundColor: "#D9D9D9", width: "100%" }} value={formData.partyName} onValueChange={(e) => handleChange("partyName", e.target.value)} />
                    <label style={{ color: "#4542C1" }}>Member amont :</label><br />
                    <WhiteTextField style={{ backgroundColor: "#D9D9D9", width: "100%" }} value={formData.memberAmount} onValueChange={(e) => handleChange("memberAmount", e.target.value)} keyboardType="numeric" />
                    <label style={{ color: "#4542C1" }}>Date :</label><br />
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <label style={{ color: "#4542C1" }}>Time :</label><br />
                    <WhiteTextField style={{ backgroundColor: "#D9D9D9", width: "100%" }} value={formData.appointmentTime} onValueChange={(e) => handleChange("appointmentTime", e.target.value)} />
                    <label style={{ color: "#4542C1" }}>About :</label><br />
                    <WhiteTextField style={{ backgroundColor: "#D9D9D9", width: "100%", height: "auto", maxHeight: "200px" }} value={formData.partyDescription} multiline rows={6} onValueChange={(e) => handleChange("partyDescription", e.target.value)} />
                    <FormControlLabel
                        control={
                            <Radio
                                checked={partyType === "public"}
                                onChange={() => setPartyType("public")}
                                value="public"
                                name="partyType"
                            />
                        }
                        label="Public Party"
                        style={{ color: "#4542C1" }}
                    />
                    <FormControlLabel
                        control={
                            <Radio
                                checked={partyType === "private"}
                                onChange={() => setPartyType("private")}
                                value="private"
                                name="partyType"
                            />
                        }
                        label="Private Party"
                        style={{ color: "#4542C1" }}
                    />
                    <div style={{ textAlign: "center", alignContent: "center" }}>
                        <YellowButton title="Create Party" handleOnClick={handleCreateParty} />
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    );
};