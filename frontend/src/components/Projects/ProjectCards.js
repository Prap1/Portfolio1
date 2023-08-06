import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useInView } from "react-intersection-observer"; // Import the hook
import Zoom from 'react-reveal/Zoom';
import { PiArrowSquareOutBold } from "react-icons/pi" ; 

function ProjectCards(props) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setCardVisible(true);
    }
  }, [inView]);

  return (
    <Zoom bottom when={cardVisible}>
      <Card className="project-card-view" ref={ref}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <PiArrowSquareOutBold /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </Zoom>
  );
}

export default ProjectCards;
