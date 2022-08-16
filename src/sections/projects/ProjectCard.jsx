import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";
import "./projects.css";
import { FaGithub } from "react-icons/fa";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const ProjectCard = ({ project }) => {
  const { image, name, description, skill, link } = project;
  return (
    <Card id="myCards">
      <Player
        id="lottiePlayer"
        autoplay
        loop
        src={image}
        style={{
          height: "9rem",
          width: "100%",
          marginBottom: -15,
        }}
      >
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
      <a
        className="cardLinks"
        href={link}
        target="_blank"
        rel="noreferrer noopener"
      >
        <FaGithub size={25} />
      </a>
      <CardBody className="theseCards">
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {skill}
        </CardSubtitle>
        <CardText id="cardDescription">{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
