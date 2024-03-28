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
import moment from 'moment';
// import DatePicker from 'react-datepicker';
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
        appointmentDate: "", // Initial empty string
        appointmentTime: "",
        memberAmount: 5,
        memberList: ["cgdfgdfgd"],
    });

    const handleChange = (name, value) => {
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
            appointmentDate: newValue // กำหนดค่าวันที่จาก date picker ให้กับ appointmentDate
        }));
    };

    // function generateRandomCode(length) {
    //     let result = "";
    //     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //     for (let i = 0; i < length; i++) {
    //         result += characters.charAt(Math.floor(Math.random() * characters.length));
    //     }
    //     return result;
    // }

    const handleCreateParty = async () => {
        console.log(formData)
        if (partyType === "private") {
            formData.partyType = "private"
        }
        else {
            formData.partyType = "public"
        }
        const apptime = formData.appointmentDate
        const replacetime = "T" + formData.appointmentTime + ":00"
        const realAppointmentTime = apptime.replace("T00:00:00", replacetime)
        console.log(realAppointmentTime)

        const userId = localStorage.getItem("user_id");
        const token = localStorage.getItem("token");
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/party`,
                {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJHb2xlbUdhbGFwYWdvcyIsImV4cCI6MTcxNDIyMTc4MSwiaWF0IjoxNzExNjI5NzgxLCJ1c2VySWQiOiJhZDZhODAxZi1iNzIxLTRhMjUtOTJiYy1kZjRlYjU3YjIwZDUifQ.Ae0C_yGjarDpUeVfDXNXimu0mb9EXLN90LGozeG6VuQ`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const responseData = await response;
            console.log(response)
        } catch (error) {
            console.error(error);
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
                    <WhiteTextField style={{ backgroundColor: "#D9D9D9", width: "100%" }} value={formData.memberAmount} onValueChange={(e) => handleChange("memberAmount", e.target.value)} type={"number"}/>
                    <label style={{ color: "#4542C1" }}>Date :</label><br />
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
                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker value={value} onChange={(newValue) => setValue(newValue)} />
                            </DemoContainer>
                        </LocalizationProvider></div>
                    <div style={{ textAlign: "center", alignContent: "center" }}>
                        <YellowButton title="Create Party" handleOnClick={handleCreateParty} />
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    );
};