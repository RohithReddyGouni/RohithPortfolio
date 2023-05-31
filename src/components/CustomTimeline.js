import React from "react";
import "../styles/CustomTimelineStyles.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

import { Typography } from "@mui/material";

function CustomTimeline({ title, icon, children }) {
  return (
    <Timeline className="timeline">
      {/* First item */}
      <TimelineItem className="timeline_first_item">
        <TimelineSeparator>
          <TimelineDot className="timeline_dot_header">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className="timeline_header">
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>
      {children}
    </Timeline>
  );
}

export default CustomTimeline;
