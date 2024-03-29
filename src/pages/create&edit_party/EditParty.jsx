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
import { useLocation } from "react-router-dom";

export const EditParty = (props) => {
    function getCurrentTimeFormatted() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
        const day = String(now.getDate()).padStart(2, '0'); // Add leading zero for single-digit days
        const hour = String(now.getHours()).padStart(2, '0'); // Add leading zero for single-digit hours
        const minute = String(now.getMinutes()).padStart(2, '0'); // Add leading zero for single-digit minutes
        const second = String(now.getSeconds()).padStart(2, '0'); // Add leading zero for single-digit seconds
      
        // Offset for time zone (+07:00 in this case)
        const offset = now.getTimezoneOffset() / 60; // Convert minutes to hours
        return `${year}-${month}-${day}T${hour}:${minute}:${second}+${offset.toString().padStart(2, '0')}:00`;
      }

    const navigate = useNavigate();
    const [selectedType, setSelectedType] = useState("");
    const [isPublic, setIsPublic] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [partyType, setPartyType] = useState("public")
    const [value, setValue] = React.useState(null);
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    const [selectedDate, setSelectedDate] = useState(null);
    const location = useLocation();
    const { partyData } = location.state || {};

    useEffect(() => {
        // fetchData();
        // console.log(dayjs(value).format('YYYY-MM-DDTHH:mm:ssZ'))
        console.log(partyData.appointmentDate)
        setFormData((prevFormData) => ({
            ...prevFormData,
            appointmentDate: dayjs(value).format('YYYY-MM-DDTHH:mm:ssZ'),
        }));
    }, [value]
    )

    const fetchData = async () => {
        const userId = localStorage.getItem("user_id");
        const token = localStorage.getItem("token");
        let partyOwner;
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/user/${userId}`,
            );
            const data = await response.json();
            console.log(data.username);
            username = data.username;
        } catch (error) {
        }
        console.log(partyData.partyId)
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/party/${partyData.partyId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const data = await response.json();
            partyOwner = data.partyOwner;
        } catch (error) {
        }

        if (username == partyOwner) {
            setIsOwner(true)
        }
        console.log(isOwner)
    }

    const [formData, setFormData] = useState({
        partyName: partyData.partyName,
        partyDescription: partyData.partyDescription,
        partyType: "public",
        partyCategory: partyData.partyCategory,
        appointmentDate: partyData.appointmentDate,
        appointmentTime: partyData.appointmentTime,
        partyId: partyData.partyId,
    });
    const [formDataNoti, setFormDataNoti] = useState({
        partyName: formData.partyName,
        typeAction: "notify",
        notifyDescription: `${formData.partyName} meeting will start now`,
        userId: userId,
        appointmentDate: getCurrentTimeFormatted(), // Initial empty string
        appointmentTime: formData.appointmentTime,
        status: "Pending",
        partyId: "",
    });
    const [formDataNoti15Min, setFormDataNoti15Min] = useState({
        partyName: formData.partyName,
        typeAction: "notify",
        notifyDescription: `${formData.partyName} meeting will start in 15 minutes`,
        userId: userId,
        appointmentDate: getCurrentTimeFormatted(), // Initial empty string
        appointmentTime: formData.appointmentTime,
        status: "Pending",
        partyId: "",
    });
    const [formEditDataNoti, setEditFormDataNoti] = useState({
        partyName: formData.partyName,
        typeAction: "edit",
        notifyDescription: `${formData.partyName} was edited`,
        userId: userId,
        appointmentDate: getCurrentTimeFormatted(), // Initial empty string
        appointmentTime: formData.appointmentTime,
        status: "Unread",
        partyId: "",
    });
    const [formDeleteDataNoti, setDeleteFormDataNoti] = useState({
        partyName: formData.partyName,
        typeAction: "delete",
        notifyDescription: `${formData.partyName} was deleted`,
        userId: userId,
        appointmentDate: getCurrentTimeFormatted(), // Initial empty string
        appointmentTime: formData.appointmentTime,
        status: "Unread",
        partyId: "",
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
            appointmentDate: newValue
        }));
    };

    const handleEditParty = async () => {
        const apptime = formData.appointmentDate
        const replacetime = "T" + formData.appointmentTime + ":00"
        const realAppointmentTime = apptime.replace("T00:00:00", replacetime)
        console.log(partyData.appointmentTime)
        console.log(formData)
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/party`,
                {
                    method: "PUT",
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
                    body: JSON.stringify(formData),
                }
            );
        } catch (error) {
            console.log("error" + error);
        }
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/notify/createNotify`,
                {
                    method: "POST",
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
                    body: JSON.stringify(formEditDataNoti),
                }
            );
        } catch (error) {
            console.log("error" + error);
        }
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/notify/delete/${formData.partyId}`,
                {
                    method: "DELETE",
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
                    body: JSON.stringify(formDeleteDataNoti),
                }
            );
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
        } catch (error) {
            console.log("error" + error);
        }
        // navigate(`/party/${formData.partyName}`);
        navigate('/myparty');
    };

    const handleDeleteParty = async () => {
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/notify/delete/${formData.partyId}`,
                {
                    method: "DELETE",
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
                    body: JSON.stringify(formDeleteDataNoti),
                }
            );
        } catch (error) {
            console.log("error" + error);
        }
        try {
            const response = await fetch(
                `https://tungty-service-be.onrender.com/notify/delete/${formData.partyId}`,
                {
                    method: "DELETE",
                    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", },
                    body: JSON.stringify(formDeleteDataNoti),
                }
            );
        } catch (error) {
            console.log("error" + error);
        }
    };

 

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}> {/* กำหนด LocalizationProvider และ AdapterDayjs */}
            <div style={{ width: "100vw", height: "100vh", backgroundColor: "#EFEFEF" }}>
                <div style={{ backgroundColor: "#4542C1", padding: "1px", color: "#ffffff", position: "relative" }}>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <h3>Edit Party</h3>
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

                    <Select value={selectedType} onChange={handleTypeChange} style={{ width: "100%", backgroundColor: '#D9D9D9' }}  >
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
                        <MenuItem value="other">อื่นๆ</MenuItem>
                    </Select>
                    <label style={{ color: "#4542C1" }}>Party name :</label><br />
                    <WhiteTextField style={{ backgroundColor: "#D9D9D9", width: "100%" }} value={formData.partyName} onValueChange={(e) => handleChange("partyName", e.target.value)} />
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
                    <div>
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
                    </div>
                    <div style={{ textAlign: "center", alignContent: "center", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <YellowButton title="Save" handleOnClick={handleEditParty} />
                        <YellowButton title="Delete" handleOnClick={handleDeleteParty} style={{ backgroundColor: 'red', color: 'black' }} />
                    </div>
                </div>
            </div>
        </LocalizationProvider>
    );
};