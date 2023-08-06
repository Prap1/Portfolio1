import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import weather from "../../Assets/Projects/weather.png"
import eccomerce from "../../Assets/eccomerce.png";
import blog from "../../Assets/Projects/blog.jpeg";
import doctor from "../../Assets/doctorappoint.png";
import { useInView } from "react-intersection-observer"; 
// Import the hook
import Zoom from 'react-reveal/Zoom';
function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [projectsVisible, setProjectsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setProjectsVisible(true);
    }
  }, [inView]);

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
        <Zoom bottom >
        <Row
          ref={ref}
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          <Col md={4} className="project-card">
            <div
              className={`project-card-inner ${projectsVisible ? "slide-in" : ""}`}
            >
              <ProjectCard
                imgPath={eccomerce}
                isBlog={false}
                title="ShopKart"
                description="I developed a full-stack e-commerce application with features including email authentication, product reviews and comments, payment integration, filters, and an admin page for managing products and categories. Implemented using React, Node.js, Express, and MongoDB."
                ghLink="https://github.com/Prap1/ShopKart"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div
              className={`project-card-inner ${projectsVisible ? "slide-in" : ""}`}
            >
              <ProjectCard
                imgPath={doctor}
                isBlog={false}
                title="DoctorAppointment"
                description="I designed a doctor appointment system enabling users to register, check doctor availability, and book appointments. Developed user and admin pages, incorporating notification functionality. Demonstrates proficiency in user management, data flow, and creating a seamless experience for scheduling and managing doctor appointments. Implemented using React, Node.js, Express, and MongoDB."
                ghLink="https://github.com/Prap1/DoctorAppointment"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div
              className={`project-card-inner ${projectsVisible ? "slide-in" : ""}`}
            >
              <ProjectCard
                imgPath={blog}
                isBlog={false}
                title="Blog"
                description="Developed a feature-rich blog website backend using Java, Spring Boot, MySQL, and Spring Security. Empowered users to create, delete, and update their blog posts while ensuring data integrity and security. Implemented an admin module to manage users effectively."
                ghLink="https://github.com/Prap1/Blog-backend"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div
              className={`project-card-inner ${projectsVisible ? "slide-in" : ""}`}
            >
              <ProjectCard
                imgPath={weather}
                isBlog={false}
                title="Weather App"
                description="Engage with my Kotlin-powered weather app. Real-time temperature, humidity, sunrise, sunset, and wind speed data seamlessly delivered. With a user-friendly interface, leverage the dynamic search bar to access city-specific weather updates. This project showcases my prowess in Kotlin and app development, offering accurate weather insights with a touch of interactivity."
                ghLink="https://github.com/Prap1/weatherApp"
                demoLink="https://drive.google.com/file/d/1nJfZweeqwiS9kRZ08aMCddZIqHO5JZ83/view?usp=sharing"
              />
            </div>
          </Col>

          <Col md={4} className="project-card">
            <div
              className={`project-card-inner ${projectsVisible ? "slide-in" : ""}`}
            >
              <ProjectCard
                imgPath={portfolio}
                isBlog={false}
                title="Portfolio"
                description="Developed a ReactJS and Node.js based portfolio web application showcasing projects, an about section, and a resume section. Integrated a contact form for users to send messages, utilizing email functionality."
                ghLink="https://github.com/Prap1/Portfolio1"
                demoLink="https://charming-ray-shoe.cyclic.app/"
              />
            </div>
          </Col>
         
        </Row>
        </Zoom>
      </Container>
    </Container>
  );
}

export default Projects;
