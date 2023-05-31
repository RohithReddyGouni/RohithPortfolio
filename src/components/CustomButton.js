import React from "react";
import { Button } from "@mui/material";
//import "../styles/ButtonStyles.css";

function CustomButton({ text, icon }) {
  return (
    <Button
      className="custom_btn"
      endIcon={
        icon ? (
          <div
            style={{
              color: "#000",
              background: "#fff",
              borderRadius: "50px",
              height: "27px",
              width: "27px",
              lineHeight: "29px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </div>
        ) : null
      }
      style={{
        backgroundColor: "#ffc500",
        fontSize: "14px",
        fontWeight: "500",
        border: "0",
        borderRadius: "50px",
        padding: "1px 12px",
        lineHeight: "35px",
        minWidth: "100px",
        outline: "none",
      }}
    >
      <span
        style={{
          fontSize: "14px",
          textTransform: "none",
          textAlign: "center",
          width: "100%",
          marginRight: "5px",
          marginLeft: "5px",
        }}
      >
        {text}
      </span>
    </Button>
  );
}

export default CustomButton;
