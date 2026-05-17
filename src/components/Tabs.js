import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{ cursor: "pointer", marginBottom: "5px" }}
          >
            {tab.title}
          </li>
        ))}
      </ul>

      <div>
        {tabs[activeIndex] && <p>{tabs[activeIndex].content}</p>}
      </div>
    </div>
  );
};

export default Tabs;
