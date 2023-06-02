import React from "react";
//import "../styles/ProfileStyles.css";
import { Typography } from "@mui/material";
import ProfilePic from "../assets/images/Sunset.jpeg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CustomTimeline from "../components/CustomTimeline";
import CustomTimelineItem from "../components/CustomTimelineItem";
import GetAppIcon from "@mui/icons-material/GetApp";
import CustomButton from "../components/CustomButton";
import resumeData from "../utils/resumeData";

const Profile = () => {
  let email = resumeData.data.email;
  let name = resumeData.data.name;
  let jobtitle = resumeData.data.title;

  let social = resumeData.data.social.slice(0, -3);

  return (
    <div
      className="profile"
      style={{
        backgroundColor: "white",
        borderRadius: "6px",
        width: "100%",
        display: "inline-block",
      }}
    >
      <div
        className="profile_name"
        style={{
          lineHeight: "18px",

          padding: "20px",
        }}
      >
        <Typography
          className="name"
          style={{
            textTransform: "uppercase",
            fontSize: "17px",
            fontWeight: "bold",
          }}
        >
          {" "}
          Rohith Reddy Gouni
        </Typography>
        <Typography
          className="title"
          style={{ fontSize: "13px", color: "#777" }}
        >
          Software Development Engineer
        </Typography>
      </div>

      <figure
        className="profile_image"
        style={{
          marginTop: "-10px",
          webkitClipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%)",
          clipPath: "polygon(0 9%, 100% 0, 100% 94%, 0% 100%)",
        }}
      >
        <img
          className="img"
          src={ProfilePic}
          alt=""
          style={{ width: "100%" }}
        />
      </figure>

      <div
        className="profile_information"
        style={{ top: 0, left: 0, margin: "-40px 10px 30px" }}
      >
        <CustomTimeline icon={<PersonOutlineIcon />}>
          <CustomTimelineItem key="Name" title="Name" text={name} />
          <CustomTimelineItem key="Title" title="Title" text={jobtitle} />
          <CustomTimelineItem key="Email" title="Email" text={email} />
          {social.map((key) => (
            <CustomTimelineItem
              key={key.text}
              title={key.text}
              text={key.profile}
              link={key.link}
            />
          ))}
        </CustomTimeline>
        <br />
        <div
          className="button_container"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
          onClick={(e) => {
            window.open(
              `${require("../utils/RohithReddy_Gouni_Resume.pdf")}`,
              "_blank"
            );
          }}
        >
          <CustomButton text={"Download Resume"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
