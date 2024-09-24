import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from 'react-router-dom'; // Correct import for useNavigate
import KeyboardImage from "../Images/Keyboard.png";
import MouseImage from "../Images/mouse.png";
import StreamDeckImage from "../Images/Streamdeck.png";

function Home() {
  const navigate = useNavigate(); 

  const [displayedTextLine1, setDisplayedTextLine1] = useState("");
  const [displayedTextLine2, setDisplayedTextLine2] = useState("");
  const [showCursorLine1, setShowCursorLine1] = useState(true);
  const [showCursorLine2, setShowCursorLine2] = useState(false);
  const [streamDeckExpanded, setStreamDeckExpanded] = useState(false);
  const [activeBubble, setActiveBubble] = useState(null);

  const streamDeckRef = useRef(null);

  const textLine1 = "Hello, I'm Leanna";
  const textLine2 = "a passionate Integrated Masters student in Computer Science.";

  useEffect(() => {
    let index1 = 0;
    const interval1 = setInterval(() => {
      setDisplayedTextLine1(textLine1.slice(0, index1 + 1));
      index1++;
      if (index1 === textLine1.length) {
        clearInterval(interval1);
        setShowCursorLine1(false);
        setShowCursorLine2(true);

        let index2 = 0;
        const interval2 = setInterval(() => {
          setDisplayedTextLine2(textLine2.slice(0, index2 + 1));
          index2++;
          if (index2 === textLine2.length) {
            clearInterval(interval2);
            setShowCursorLine2(false);
          }
        }, 100);
      }
    }, 100);

    return () => {
      clearInterval(interval1);
    };
  }, []);

  const toggleStreamDeckExpansion = () => {
    setStreamDeckExpanded(!streamDeckExpanded);
  };

  const handleBubbleClick = (bubble) => {
    setActiveBubble(bubble === activeBubble ? null : bubble); // Close if the same button is clicked again
  };

  const handleClickOutside = useCallback((event) => {
    if (
      streamDeckRef.current &&
      !streamDeckRef.current.contains(event.target)
    ) {
      setStreamDeckExpanded(false);
      setActiveBubble(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  const goToProjects = () => {
    navigate("/projects"); 
  };

  return (
    <div id="home" className="section">
      <div className="h2-container">
        <h2>
          {displayedTextLine1}
          {showCursorLine1 && <span className="cursor">|</span>}
        </h2>
        <h2>
          {displayedTextLine2}
          {showCursorLine2 && <span className="cursor">|</span>}
        </h2>
      </div>
      <div className="spacer" style={{ height: "100px" }}></div>
      <div className="image-container">
        <div className="background-table">
          <div className="mousemat"></div>
          <div className="keyboard-container">
            <img src={KeyboardImage} className="large-image" alt="Keyboard" />
            <div className="overlay-circle-hobbies" onClick={() => {}}>
              <div className="speech-bubble">
                My Hobbies include gaming, programming, and exploring the latest
                tech trends. I enjoy both competitive and story-driven games. In
                programming, I love building small projects and learning new
                languages.
              </div>
            </div>
            <div className="overlay-circle-skills" onClick={() => {}}>
              <div className="speech-bubble">
                I have experience with several programming languages and
                frameworks, including C++, C#, Python, React, and Flutter. While
                I'm not an expert yet, I enjoy working with these technologies
                and am always learning to improve. My creativity drives me to
                explore innovative solutions and build user-friendly
                applications.
              </div>
            </div>
            <div className="overlay-circle-goals" onClick={() => {}}>
              <div className="speech-bubble">
                My goal is to become a skilled developer, either in web
                development or full-stack development. I also have a passion for
                design, and I enjoy working with tools like Figma to create
                intuitive and user-friendly interfaces. I am always looking to
                expand my skills and take on new challenges in both coding and
                design.
              </div>
            </div>
          </div>

          {/* Stream Deck Container */}
          <div
            ref={streamDeckRef} 
            className="streamdeck-container"
            onClick={(e) => {
              e.stopPropagation(); 
              if (!streamDeckExpanded) toggleStreamDeckExpansion(); 
            }}
          >
            <img
              src={StreamDeckImage}
              className={`streamdeck-image ${
                streamDeckExpanded ? "expanded" : ""
              }`}
              alt="Stream Deck"
            />
            {streamDeckExpanded && (
              <div className="streamdeck-expansion">
                <img
                  src={StreamDeckImage}
                  className="expanded-streamdeck-image"
                  alt="Expanded Stream Deck"
                />
                {/* Invisible buttons */}
                <a
                  href="https://www.linkedin.com/in/leanna-r-06a818300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="invisible-button invisible-button-linkedin"
                  aria-label="LinkedIn Profile"
                ></a>
                <a
                  href="/Leanna_Roys_CV.pdf"
                  download="Leanna_Roys_CV.pdf"
                  className="invisible-button invisible-button-cv"
                  aria-label="Download CV"
                ></a>
                <a
                  href="mailto:leannajane2002@outlook.com"
                  className="invisible-button invisible-button-outlook"
                  aria-label="Email Leanna"
                ></a>
                <a
                  href="https://github.com/Leannaaaa"
                  className="invisible-button invisible-button-github"
                  aria-label="GitHub Profile"
                ></a>
                {/* Phone Number */}
                <button
                  className="invisible-button invisible-phone-number"
                  onClick={() => handleBubbleClick("phone")}
                ></button>
                {/* Spotify */}
                <button
                  className="invisible-button invisible-spotify"
                  onClick={() => handleBubbleClick("spotify")}
                ></button>
                {/* Android Studio */}
                <button
                  className="invisible-button invisible-android-studio"
                  onClick={() => handleBubbleClick("android-studio")}
                ></button>
                {/* Firebase */}
                <button
                  className="invisible-button invisible-firebase"
                  onClick={() => handleBubbleClick("firebase")}
                ></button>
                {/* VSC */}
                <button
                  className="invisible-button invisible-vsc"
                  onClick={() => handleBubbleClick("vsc")}
                ></button>
                {/* VS */}
                <button
                  className="invisible-button invisible-vs"
                  onClick={() => handleBubbleClick("vs")}
                ></button>
                {/* Projects */}
                <button
                  className="invisible-button invisible-projects"
                  onClick={goToProjects}
                ></button>
              </div>
            )}
          </div>

          {/* Conditional speech bubbles */}
          {activeBubble === "phone" && (
            <div className="speech-bubble phone-number">
              My mobile number is: +44 07851754112
            </div>
          )}
          {activeBubble === "spotify" && (
            <div className="speech-bubble spotify">
              I enjoy listening to rap, pop, and bass-heavy music while
              programming.
            </div>
          )}
          {activeBubble === "android-studio" && (
            <div className="speech-bubble android-studio">
              I have experience with Android Studio and enjoy building mobile
              apps.
            </div>
          )}
          {activeBubble === "firebase" && (
            <div className="speech-bubble firebase">
              I have experience using the back-end Firebase, I have used this on
              previous projects and this portfolio.
            </div>
          )}
          {activeBubble === "vsc" && (
            <div className="speech-bubble vsc">
              I have had many years of experience with Visual Studio Code.
            </div>
          )}
          {activeBubble === "vs" && (
            <div className="speech-bubble vs">
              I have had many years of experience with Visual Studio as well.
            </div>
          )}
          <div className="mouse-container">
            <img src={MouseImage} className="mouse-image" alt="Mouse" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
