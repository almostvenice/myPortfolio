import { SKILLS } from "../../app/shared/SKILLS";
import { PROJECTSLIST } from "./../../app/shared/PROJECTSLIST";

const initialState = {
  skillsArray: SKILLS,
  projectsArray: PROJECTSLIST,
};

export const selectAllSkills = () => {
  return initialState.skillsArray;
};

export const selectSkillById = (skill) => {
  console.log(skill.id);
  return initialState.skillsArray.filter(
    (skill) => skill.id !== parseInt(skill.id)
  );
};

export const getFilteredList = (skill) => {
  // Avoid filter when selectedCategory is null
  if (!skill) {
    return PROJECTSLIST;
  }
  return PROJECTSLIST.filter((item) => item.skill.includes(skill.name));
  // return PROJECTSLIST.filter((item) => item.skill == skill.name);
};
 //Match with REGEX 