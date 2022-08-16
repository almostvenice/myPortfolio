import { Container } from "reactstrap";
import ProjectsList from "./ProjectsList";
import "./projects.css";

const ProjectCardList = ({ selectedSkills }) => {
  return (
    <Container>
      <ProjectsList selectedSkills={selectedSkills} />
    </Container>
  );
};

export default ProjectCardList;
