import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="I developed a full-stack e-commerce application with features including email authentication, product reviews and comments, payment integration, filters, and an admin page for managing products and categories. Implemented using React, Node.js, Express, and MongoDB, this project showcases my skills in building robust and scalable web applications."
              ghLink="https://github.com/Prap1/ShopKart"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="I designed a doctor appointment system enabling users to register, check doctor availability, and book appointments. Developed user and admin pages, incorporating notification functionality. Demonstrates proficiency in user management, data flow, and creating a seamless experience for scheduling and managing doctor appointments. Implemented using React, Node.js, Express, and MongoDB."
              ghLink="https://github.com/Prap1/DoctorAppointment"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Developed a feature-rich blog website backend using Java, Spring Boot, MySQL, and Spring Security. Empowered users to create, delete, and update their blog posts while ensuring data integrity and security. Implemented an admin module to manage users effectively. "
              ghLink="https://github.com/Prap1/Blog-backend"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Developed a ReactJS and Node.js based portfolio web application showcasing projects, an about section, and a resume section. Integrated a contact form for users to send messages, utilizing email functionality."
              ghLink="https://github.com/Prap1/Portfolio1"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Photo Editor App"
              description="
              Developed an Android photo editor app using Android Studio, enabling users to edit and enhance their photos with filters. Integrated Google Ads for monetization. "
              ghLink="https://github.com/Prap1/EditorApp"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
