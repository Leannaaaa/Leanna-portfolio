import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  const [displayedTextLine1, setDisplayedTextLine1] = useState("");
  const [showCursorLine1, setShowCursorLine1] = useState(true);

  const textLine1 = "Projects";

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

  const goBackToHome = () => {
    navigate("/");
  };

  const goToBigFeelingsProject = () => {
    navigate("/big-feelings-project");
  };

  return (
    <div className="projects-page">
      <button className="back-button" onClick={goBackToHome}>
        Back
      </button>

      <div className="projects-header">
        <h1>
          {displayedTextLine1}
          {showCursorLine1 && <span className="cursor">|</span>}
        </h1>
      </div>

      {/* Container for the Projects */}
      <div className="projects-container">
        {/* Rectangle for Big Feelings Project */}
        <div className="project-box" onClick={goToBigFeelingsProject}>
          <h2>Big Feelings Project</h2>
          <p className="project-description">A project made with Flutter framework and Firebase, to help children manage and validate their emotions</p>
          <p className="project-description2">Created March 2024</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
