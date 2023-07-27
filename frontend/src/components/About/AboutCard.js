import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Praphool Kumar </span>
            from <span className="purple"> Bihar, India.</span>
            <br /> I am a B.tech  computer Science 2023 passout student 
            
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every failure gives a chance to start a new and afresh life!"{" "}
          </p>
         
          <footer className="blockquote-footer">Praphool</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
