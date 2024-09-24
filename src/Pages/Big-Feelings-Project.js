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

      {/* Main content area */}
      <div className="content-container">
        {/* Left column */}
        <div className="column">
          {/* Add content for the left column here */}
          <p>
            The Big Feelings project aimed to develop a web application that
            allows children to learn, understand, and manage their emotions.
            This project was undertaken as a solo initiative, utilising Agile
            methodologies for both design and development.
          </p>
        </div>

        {/* Embedded website */}
        <div className="iframe-container">
          <iframe
            src="https://big-feelings-project-1234.web.app/"
            title="Big Feelings Project - Interactive Web Application"
            className="project-iframe"
          />
        </div>
      </div>
    </div>
  );
}

export default BigFeelingsProject;
