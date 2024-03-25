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
    name: "NinEAynGNa",
    surname: "NinEAynGNa",
    username: "NinEAynGNa",
    password: "NinEAynGNa",
    studentId: "64070012",
    faculty: "NinEAynGNa",
    field: "NinEAynGNa",
    year: "3",
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
    // if (username == "" || password == "") {
    //   setErrorMsg("กรุณากรอกข้อมูลให้ครบถ้วน!");
    // }
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
      const responses = await Promise.all(
        fetch("http://localhost:8083/user/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        })
      );

      const responseArray = [];

      for (const response of responses) {
        if (!response.ok) throw new Error(`Error ${response.status}`);

        responseArray.push(await response.json());
      }

      console.log(responseArray);

      // console.log(response.json());

      // if (!response.ok) {
      //   setErrorMsg("gay");
      //   throw new Error("เกิดข้อผิดพลาดในการลงทะเบียน");
      // }

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
