import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function BigFeelingsProject() {
  const navigate = useNavigate();

  const [displayedTextLine1, setDisplayedTextLine1] = useState("");
  const [showCursorLine1, setShowCursorLine1] = useState(true);

  const textLine1 = "Big Feelings Project";

  useEffect(() => {
    let index1 = 0;
    const interval1 = setInterval(() => {
      setDisplayedTextLine1(textLine1.slice(0, index1 + 1));
      index1++;
      if (index1 === textLine1.length) {
        clearInterval(interval1);
        setShowCursorLine1(false);
      }
    }, 100);

    return () => {
      clearInterval(interval1);
    };
  }, []);

  const goBackToPrevious = () => {
    navigate("/projects");
  };

  return (
    <div className="big-feelings-page">
      <button className="back-button" onClick={goBackToPrevious}>
        Back
      </button>

      <div className="projects-header">
        <h1>
          {displayedTextLine1}
          {showCursorLine1 && <span className="cursor">|</span>}
        </h1>
      </div>

      {/* Embedded website */}
      <div className="monitors-section">
        <iframe
          src="https://big-feelings-project-1234.web.app/"
          title="Project Website"
          className="project-iframe"
        />
      </div>
    </div>
  );
}

export default BigFeelingsProject;
