import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ul>
        {tabs.map((tab, i) => (
          <li key={i} onClick={() => setActive(i)}>
            {tab.title}
          </li>
        ))}
      </ul>

      <div>
        {tabs[active] && tabs[active].content}
      </div>
    </div>
  );
};

export default Tabs;
