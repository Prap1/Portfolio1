import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import Slide from "react-reveal/Slide";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
  
    axios
      .post("/api/send-email", { name, email, message })
      .then((response) => {
        console.log(response.data);
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to send message.");
      });
  };
 
  
  
  
  
  
  return (
    <Container fluid className="home-about-section" id="about">
      
      <Container>
        <Slide top>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/Prap1"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Praphoo18178269"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/praphool-kumar-975868194/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://instagram.com/praphool.programmer?igshid=NGExMmI2YTkyZg=="
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
              <div style={{ marginTop: "23px" }}>
                Or <span style={{ color: "#c066cd" }}>Send</span> Message{" "}
                <span style={{ color: "#c066cd" }}>↓</span>{" "}
              </div>
            </Col>
          </Row>
        </Slide>
        <StyledContactForm>
          <Form onSubmit={handleSubmit}>
            <label></label>
            <Slide left>
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Slide>
            <label></label>
            <Slide left>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Slide>
            <label></label>
            <Slide left>
              <textarea
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Slide>
            <Slide left>
              <input type="submit" className="but" value="Send" />
            </Slide>
            <ToastContainer />
          </Form>
        </StyledContactForm>
      </Container>
    </Container>
  );
};

export default Contact;
const StyledContactForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 40px;
  form {
    width: 400px;
    display: flex;
    flex-direction: column;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
    .but:hover{
      transform: translateY(5px);
    }
  }
`;
