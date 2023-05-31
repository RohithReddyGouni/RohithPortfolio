import React from "react";
//import "../styles/FooterStyles.css";
import { Typography } from "@mui/material";
import resumeData from "../utils/resumeData";

function Footer() {
  return (
    <div
      className="footer"
      style={{
        backgroundColor: "#1e1e1e",
        color: "white",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "70px",
        borderRadius: "8px",
        padding: "20px 25px",
      }}
    >
      <div className="footer_left">
        <Typography
          className="footer_name"
          style={{
            fontSize: "small",
            textAlign: "end",
            color: "#9c9c9c",
          }}
        >
          {resumeData.data.name}
        </Typography>
      </div>

      <div className="footer_right">
        <Typography
          className="footer_copyright"
          style={{
            fontSize: "small",
            textAlign: "end",
            color: "#9c9c9c",
          }}
        >
          Designed and Developed by{" "}
          <a
            href="https://www.linkedin.com/in/rohithreddygouni/"
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#ffc500",
            }}
          >
            Rohith Reddy Gouni
          </a>
          <br />
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
