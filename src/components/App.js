import React from "react";
import Tabs from "./Tabs";

export default function App() {
  const tabsData = [
    { title: "Tab 1", content: "This is content for Tab 1" },
    { title: "Tab 2", content: "This is content for Tab 2" },
    { title: "Tab 3", content: "This is content for Tab 3" },
  ];

  return <Tabs tabs={tabsData} />;
}
