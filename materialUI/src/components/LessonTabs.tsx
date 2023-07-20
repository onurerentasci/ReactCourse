import React from "react";
import { Tabs, TabList, Tab, TabPanel } from "@mui/joy";

function LessonTabs() {
  return (
    <Tabs>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanel value={0}>First</TabPanel>
      <TabPanel value={1}>Second</TabPanel>
      <TabPanel value={2}>Third</TabPanel>
    </Tabs>
  );
}

export default LessonTabs;
