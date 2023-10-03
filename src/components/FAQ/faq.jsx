import React, { useState, useEffect } from "react";
import "./FAQ.css";

function Accordion({ panel, idx }) {
  const [activeTab, setActiveTab] = useState(100);

  const activateTab = (idx) => {
    setActiveTab((prevActiveTab) => (prevActiveTab === idx ? -1 : idx));
  };

  const [height, setHeight] = useState(0);
  const isActive = activeTab === idx;

  useEffect(() => {
    const el = document.querySelector(`#panel-${idx} .panel__inner`);
    const newHeight = isActive ? el.scrollHeight : 0;
    setHeight(newHeight);
  }, [isActive, idx]);

  return (
    <div className="accordion" role="tablist">
      <div
        className="panel"
        role="tabpanel"
        aria-expanded={isActive}
        id={`panel-${idx}`}
      >
        <button
          className="panel__label"
          role="tab"
          onClick={() => activateTab(idx)}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            {panel.label}
          </div>
        </button>
        <div
          className="panel__inner"
          style={{ height: `${height}px` }}
          aria-hidden={!isActive}
        >
          <p className="panel__content">{panel.content}</p>
        </div>
      </div>
    </div>
  );
}

export { Accordion };
