import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";

function LessonTimeline() {
  return (
    <Timeline>
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Yemek ye</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot /> {/* nokta */}
            <TimelineConnector /> {/* çubuk */}
          </TimelineSeparator>
          <TimelineContent>Kod yaz</TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent>Uyu</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Timeline>
  );
}

export default LessonTimeline;
