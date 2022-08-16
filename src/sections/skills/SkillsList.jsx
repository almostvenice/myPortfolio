import { SKILLS } from "../../app/shared/SKILLS";
import { Col, Row } from "reactstrap";
import { IconContext } from "react-icons";
import "./skills.css";
import { useState } from "react";
import { getFilteredList } from "./../projects/skillsSlice";
import ProjectCardList from "./../projects/ProjectCardList";

const SkillsList = ({ onItemSelect }) => {
  const [selectedSkill, setSelectedSkill] = useState(getFilteredList);

  const handleSkillChange = (event) => {
    setSelectedSkill(event);
    console.log(event);
  };

  const skillsList = SKILLS.map((skill) => {
    return (
      <li
        key={skill.name}
        className="list-inline-item mx-3"
        onClick={() => handleSkillChange(onItemSelect(skill))}
      >
        <span>
          <div className="skillsItem text-center rounded">
            <button className="rounded">
              <div style={{ width: "5rem" }}>
                <IconContext.Provider
                  value={{ size: "3rem", color: "rgb(1, 165, 165)" }}
                >
                  <div style={{ paddingTop: "8px" }}>{skill.class}</div>
                </IconContext.Provider>
              </div>
              <p
                className="text-center"
                style={{
                  fontSize: "110%",
                  marginTop: "4px",
                  fontFamily: "Lobster",
                  color: "black",
                }}
              >
                {skill.name != " " ? skill.name : skill.subName}
              </p>
            </button>
          </div>
        </span>
      </li>
    );
  });

  return (
    <>
      <Row>
        <Col md="12" className="text-center">
          <div>
            <h1 style={{ marginTop: "18px" }}>
              <span
                id="skills"
                className="text-white"
                style={{ fontFamily: "Lobster" }}
              >
                Skills
              </span>
            </h1>
          </div>
          <div>
            <ul className="list-inline mx-auto skill-icon">{skillsList}</ul>
          </div>
        </Col>
      </Row>
      <ProjectCardList selectedSkills={selectedSkill} />
    </>
  );
};

export default SkillsList;
