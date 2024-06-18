import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faGuitar, faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './SkillsSection.css'; // Import your CSS file

function SkillsSection() {
  return (
    <section className="skills-section">
      <h2 className="skills-heading">What I Love Doing</h2>
      <ul>
        <li className="zigzag-item right">
          <div className="content">
            <h3>Web Development</h3>
            <p className="web-dev">
              I am a web developer, passionate about crafting websites and apps. Coding is my way of creating meaningful online experiences. I am on a continuous journey of growth in the ever-evolving landscape of web development.
            </p>
          </div>
          <FontAwesomeIcon icon={faLaptopCode} className="icon" />
        </li>
        <li className="zigzag-item left">
          <FontAwesomeIcon icon={faGuitar} className="icon" />
          <div className="content">
            <h3>Playing Guitar</h3>
            <p className="guitar-text">
              Playing the guitar isn't just a skill; it's my passionate love affair. With every note, I breathe life into melodies that make my heart sing. It's not just an instrument; it's an extension of my soul.
            </p>
          </div>
        </li>
        <li className="zigzag-item right">
          <div className="content">
            <h3>Workouts</h3>
            <p className="workout-text">
              Working out is something I absolutely love; it gives me so much energy and keeps me excited. I enjoy pushing myself and seeing the results pay off. It’s my time to unwind and clear my head while staying fit. It’s taught me a lot about discipline and how great it feels to reach my goals.
            </p>
          </div>
          <FontAwesomeIcon icon={faDumbbell} className="icon" />
        </li>
      </ul>
    </section>
  );
}

export default SkillsSection;
