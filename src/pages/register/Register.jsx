import React from "react";
import { useState } from "react";
import { WhiteTextField } from "../../components/WhiteTextField";
import { YellowButton } from "../../components/YellowButton";
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    studentId: "",
    faculty: "",
    field: "",
    year: "",
  });

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/");
  };

  return (
    <div
      style={{ width: "100dvw", height: "100%", backgroundColor: "#4542C1" }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#FDC319", marginTop: "0px", paddingTop: 30 }}>
          REGISTER
        </h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Name
            </h3>
            <WhiteTextField
              value={formData.name}
              onValueChange={(e) => handleChange("name", e.target.value)}
              placeholder="Name"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Surname
            </h3>
            <WhiteTextField
              value={formData.surname}
              onValueChange={(e) => handleChange("surname", e.target.value)}
              placeholder="Surname"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Username
            </h3>
            <WhiteTextField
              value={formData.username}
              onValueChange={(e) => handleChange("username", e.target.value)}
              placeholder="Username"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Password
            </h3>
            <WhiteTextField
              value={formData.password}
              onValueChange={(e) => handleChange("password", e.target.value)}
              placeholder="Password"
              type="password"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Student ID
            </h3>
            <WhiteTextField
              value={formData.studentId}
              onValueChange={(e) => handleChange("studentId", e.target.value)}
              placeholder="Student ID"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Faculty
            </h3>
            <WhiteTextField
              value={formData.faculty}
              onValueChange={(e) => handleChange("faculty", e.target.value)}
              placeholder="Faculty"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Field
            </h3>
            <WhiteTextField
              value={formData.field}
              onValueChange={(e) => handleChange("field", e.target.value)}
              placeholder="Field"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h3
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Year
            </h3>
            <WhiteTextField
              value={formData.year}
              onValueChange={(e) => handleChange("year", e.target.value)}
              placeholder="Year"
            />
          </div>
          <div style={{ paddingBottom: "24px" }}>
            <YellowButton
              title="Register"
              handleOnClick={handleSubmit}
            ></YellowButton>
          </div>
        </form>
      </div>
    </div>
  );
};
