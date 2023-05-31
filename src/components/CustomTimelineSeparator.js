import React from "react";
//import "../styles/CustomTimelineStyles.css";
import { TimelineSeparator, TimelineConnector, TimelineDot } from "@mui/lab";

function CustomTimelineSeparator() {
  return (
    <div>
      <TimelineSeparator
        className="separator_padding"
        style={{ paddingLeft: "18px" }}
      >
        <TimelineDot
          variant="outlined"
          className="timeline_dot"
          style={{
            color: "black",
            borderColor: "#ffc500",
            padding: "2px",
          }}
        />

        <TimelineConnector style={{ backgroundColor: "black" }} />
      </TimelineSeparator>
    </div>
  );
}

export default CustomTimelineSeparator;
