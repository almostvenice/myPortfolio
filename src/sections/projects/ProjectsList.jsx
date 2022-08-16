import ProjectCard from "./ProjectCard";
import { Row } from "reactstrap";
import { useEffect, useState, useMemo } from "react";
import { getFilteredList } from "./skillsSlice";

const ProjectsList = ({ selectedSkills }) => {
  //what i have in SkillsList.jsx should be transfered here and only should pass in the skill to the ProjectCardList
  const filteredList = selectedSkills;
  const projects = filteredList.map((project) => {
    return (
      <ProjectCard
        key={project.id}
        project={project}
        style={{}}
        // onClick={() => onItemSelect(project)}        this will activate the modal
      />
    );
  });

  return <Row style={{ justifyContent: "center" }}>{projects}</Row>;
};

export default ProjectsList;
