import React from "react";
import { Typography } from "@mui/material";
import { TimelineContent, TimelineItem } from "@mui/lab";
//import "../styles/ProfileStyles.css";
import CustomTimelineSeparator from "./CustomTimelineSeparator.js";

function CustomTimelineItem({ title, text, link }) {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent
        className="timeline_content"
        style={{ marginTop: "1px", marginBottom: "12px" }}
      >
        {link ? (
          <Typography
            className="timeline_text"
            style={{
              fontSize: "13.5px !important",
              color: "#787878 !important",
              fontWeight: "400 !important",
            }}
          >
            <strong
              className="timeline_title_strong"
              style={{ color: "black !important" }}
            >
              {title}:
            </strong>{" "}
            <br />
            <a
              textDecoration="none"
              className="timeline_text_a"
              style={{ color: "#787878 !important", textDecoration: "none" }}
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              {text}
            </a>
          </Typography>
        ) : (
          <Typography
            className="timeline_text"
            style={{
              fontSize: "13.5px !important",
              color: "pink !important",
              fontWeight: "400 !important",
            }}
          >
            <strong
              className="timeline_title_strong"
              style={{ color: "black !important" }}
            >
              {title}:
            </strong>
            <br />
            <span style={{ color: "gray" }}>{text}</span>
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
}

export default CustomTimelineItem;
