import React from "react";
import { useState } from "react";
import { WhiteTextField } from "../../components/WhiteTextField";
import { YellowButton } from "../../components/YellowButton";
import { Padding } from "@mui/icons-material";

export const Register = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
            <h4
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Name
            </h4>
            <WhiteTextField
              value={formData.name}
              onValueChange={handleChange}
              name="name"
              placeholder="Name"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Surname
            </h4>
            <WhiteTextField
              value={formData.surname}
              onValueChange={handleChange}
              name="surname"
              placeholder="Surname"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Username
            </h4>
            <WhiteTextField
              value={formData.username}
              onValueChange={handleChange}
              name="username"
              placeholder="Username"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Password
            </h4>
            <WhiteTextField
              value={formData.password}
              onValueChange={handleChange}
              name="password"
              placeholder="Password"
              type="password"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Student ID
            </h4>
            <WhiteTextField
              value={formData.studentId}
              onValueChange={handleChange}
              name="studentId"
              placeholder="Student ID"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Faculty
            </h4>
            <WhiteTextField
              value={formData.faculty}
              onValueChange={handleChange}
              name="faculty"
              placeholder="Faculty"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Field
            </h4>
            <WhiteTextField
              value={formData.field}
              onValueChange={handleChange}
              name="field"
              placeholder="Field"
            />
          </div>
          <div style={{ marginBottom: "30px" }}>
            <h4
              style={{
                marginLeft: "36px",
                textAlign: "left",
                color: "#ffffff",
              }}
            >
              Year
            </h4>
            <WhiteTextField
              value={formData.year}
              onValueChange={handleChange}
              name="year"
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
