import React from "react";
import { useState, useEffect } from "react";
import { WhiteTextField } from "../../components/WhiteTextField";
import { YellowButton } from "../../components/YellowButton";
import { Padding } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CloudinaryUploadWidget from "../../components/CloudinaryUploadWidget";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";

export const Register = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");
  // const [allusername, setallUsername] = useState([]);
  const [publicId, setPublicId] = useState("");
  // Replace with your own cloud name
  const [cloudName] = useState("dppojpoug");
  // Replace with your own upload preset
  const [uploadPreset] = useState("xwmhguyo");

  // Upload Widget Configuration
  // Remove the comments from the code below to add
  // additional functionality.
  // Note that these are only a few examples, to see
  // the full list of possible parameters that you
  // can add see:
  //   https://cloudinary.com/documentation/upload_widget_reference

  const [uwConfig] = useState({
    cloudName,
    uploadPreset,
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName,
    },
  });

  const myImage = cld.image(publicId);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    username: "",
    password: "",
    studentId: "",
    faculty: "",
    field: "",
    year: "",
    profileImg: "",
    aboutMe: "nice to meet you",
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
    handleChange("profileImg", publicId);
    // console.log(formData);
    e.preventDefault();
    if (
      formData.name == "" ||
      formData.surname == "" ||
      formData.username == "" ||
      formData.password == "" ||
      formData.studentId == "" ||
      formData.faculty == "" ||
      formData.field == "" ||
      formData.year == "" ||
      formData.profileImg == ""
    ) {
      setErrorMsg("กรุณากรอกข้อมูลให้ครบถ้วน!");
      throw new Error(`กรุณากรอกข้อมูลให้ครบถ้วน!`);
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

      if (!response.ok) {
        const responseData = await response.json();
        console.log(responseData.errorMessage.includes("username"));
        if (responseData.errorMessage.includes("username")) {
          setErrorMsg("username นี้มีคนใช้แล้ว");
          throw new Error(`username ซ้ำ`);
        } else if (responseData.errorMessage.includes("studentId")) {
          setErrorMsg("student ID นี้มีคนใช้แล้ว");
          throw new Error(`studentId ซ้ำ`);
        }
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

          <div
            style={{
              marginBottom: "30px",
              display: "flex",
              flexDirection: "row",
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
                marginRight: "1rem"
              }}
            >
              Profile Image
            </h3>
            <CloudinaryUploadWidget
              uwConfig={uwConfig}
              setPublicId={setPublicId}
            />
            <div
              style={{
                width: "200px",
                justifyContent: "center",
                justifyItems: "center",
                alignContent: "center",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <AdvancedImage
                style={{ maxWidth: "100%" }}
                cldImg={myImage}
                plugins={[responsive(), placeholder()]}
              />
            </div>
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
