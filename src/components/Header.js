import React from "react";
import { Nav, Navbar } from "react-bootstrap";
//import "../styles/HeaderStyles.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { HomeRounded, Telegram } from "@mui/icons-material";

import resumeData from "../utils/resumeData.js";
import CustomButton from "./CustomButton";

function Header({ props }) {
  const pathname = props?.location?.pathname;
  return (
    <Navbar
      expands="lg"
      sticky="top"
      className="header"
      style={{
        marginBottom: "30px",
        backgroundColor: "white",
        padding: "0 22px 0 0",
        borderRadius: "6px",
        boxShadow: "0px 2px 92px 0px rgba(0, 0, 0, 0.07)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Nav.Link className="header_navlink" as={NavLink} to="/">
        <Navbar.Brand
          className="header_home"
          style={{
            backgroundColor: "#ffc500",
            padding: "22px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}
        >
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Nav
        className="header_left"
        style={{
          display: "flex",
          alignItems: "center",
          marginRight: "auto",
        }}
      >
        <span style={{ margin: "0 10px" }}></span>
        <Nav.Link
          as={NavLink}
          to="/"
          className={
            pathname === "/" ? styles.header_link_active : styles.header_link
          }
          style={{ fontWeight: "500", color: "black" }}
        >
          Resume
        </Nav.Link>
        <span style={{ margin: "0 10px" }}></span>
        <Nav.Link
          as={NavLink}
          to="/portfolio"
          className={
            pathname === "/portfolio"
              ? styles.header_link_active
              : styles.header_link
          }
          style={{ fontWeight: "500", color: "black" }}
        >
          Projects
        </Nav.Link>
      </Nav>
      <div
        className="header_right"
        style={{ display: "flex", alignItems: "center" }}
      >
        {resumeData.data.social.map((key) => (
          <a
            key={key.text}
            href={key.link}
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "12px", color: "black" }}
          >
            {key.icon}
          </a>
        ))}

        <div
          onClick={() => window.open("mailto:rgouni1@stevens.edu")}
          style={{ cursor: "pointer" }}
        >
          <CustomButton text={"Mail Me"} icon={<Telegram />} />
        </div>
      </div>
    </Navbar>
  );
}

export default Header;

const styles = {
  header_link: {
    fontWeight: 500,
    color: "#ffc500",
  },
  header_link_active: {
    fontWeight: 500,
    color: "#ffc500",
  },
};
