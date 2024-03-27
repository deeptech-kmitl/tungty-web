import React from "react";
import { useState, useEffect } from "react";
import { WhiteTextField } from "../../components/WhiteTextField";
import { YellowButton } from "../../components/YellowButton";
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  // const [allusername, setallUsername] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    studentId: "",
    faculty: "",
    field: "",
    year: "",
    profileImg: "Test",
  });

  useEffect(() => {
    // Set initial partylist state when component mounts
    const bodyOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = bodyOverflow;
    };
  }, []);

  const handleChange = (name, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formData.name == "" ||
      formData.surname == "" ||
      formData.username == "" ||
      formData.password == "" ||
      formData.studentId == "" ||
      formData.faculty == "" ||
      formData.field == "" ||
      formData.year == ""
    ) {
      setErrorMsg("กรุณากรอกข้อมูลให้ครบถ้วน!");
    }
    // ใช้ตรวจ username ที่ซ้ำ
    // try {
    //   const response = await fetch(
    //     `http://localhost:8083/user`,
    //     {
    //       headers: { "Content-Type": "application/json", },
    //     }
    //   );
    //   // console.log(token)
    //   // console.log(response.status);
    //   const data = await response.json();
    //   // console.log(data);

    //   setallUsername(data);
    // } catch (error) {
    //   console.log("error" + error);
    // }

    // const filteredList = allusername.filter((element) =>
    //   element.username.toLowerCase().includes(search.toLowerCase())
    // );
    // if (filteredList) {
    //   setErrorMsg("username มีคนใช้แล้ว");
    // }
    try {
      const response = await fetch(
        "https://tungty-service-be.onrender.com/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // if (!response.ok) {
      //   throw new Error(`Error ${response.status}`);
      // }

      const responseData = await response.json();
      console.log(responseData.errorMessage.includes("username"));
      if (responseData.errorMessage.includes("username")) {
        setErrorMsg("username นี้มีคนใช้แล้ว");
        throw new Error(`username ซ้ำ`);
      } else if (responseData.errorMessage.includes("studentId")) {
        setErrorMsg("student ID นี้มีคนใช้แล้ว");
        throw new Error(`studentId ซ้ำ`);
      }

      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        width: "100dvw",
        height: "100dvh",
        backgroundColor: "#4542C1",
        overflowY: "scroll",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "#FDC319", marginTop: "0px", paddingTop: 30 }}>
          REGISTER
        </h1>
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={handleSubmit}
        >
          <div
            style={{
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <h3
              style={{
                textAlign: "left",
                color: "#ffffff",
                justifyContent: "baseline",
                justifyItems: "baseline",
                alignContent: "baseline",
                alignItems: "baseline",
                alignSelf: "baseline",
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
          <div
            style={{
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <h3
              style={{
                textAlign: "left",
                color: "#ffffff",
                justifyContent: "baseline",
                justifyItems: "baseline",
                alignContent: "baseline",
                alignItems: "baseline",
                alignSelf: "baseline",
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
          <div
            style={{
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <h3
              style={{
                textAlign: "left",
                color: "#ffffff",
                justifyContent: "baseline",
                justifyItems: "baseline",
                alignContent: "baseline",
                alignItems: "baseline",
                alignSelf: "baseline",
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
          <div
            style={{
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <h3
              style={{
                textAlign: "left",
                color: "#ffffff",
                justifyContent: "baseline",
                justifyItems: "baseline",
                alignContent: "baseline",
                alignItems: "baseline",
                alignSelf: "baseline",
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
          <div
            style={{
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <h3
              style={{
                textAlign: "left",
                color: "#ffffff",
                justifyContent: "baseline",
                justifyItems: "baseline",
                alignContent: "baseline",
                alignItems: "baseline",
                alignSelf: "baseline",
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
          <div
            style={{
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <h3
              style={{
                textAlign: "left",
                color: "#ffffff",
                justifyContent: "baseline",
                justifyItems: "baseline",
                alignContent: "baseline",
                alignItems: "baseline",
                alignSelf: "baseline",
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
          <div
            style={{
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <h3
              style={{
                textAlign: "left",
                color: "#ffffff",
                justifyContent: "baseline",
                justifyItems: "baseline",
                alignContent: "baseline",
                alignItems: "baseline",
                alignSelf: "baseline",
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
          <div
            style={{
              marginBottom: "30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              justifyItems: "center",
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <h3
              style={{
                textAlign: "left",
                color: "#ffffff",
                justifyContent: "baseline",
                justifyItems: "baseline",
                alignContent: "baseline",
                alignItems: "baseline",
                alignSelf: "baseline",
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
          <h4 style={{ color: "#FF5C5C" }}>{errorMsg}</h4>
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
