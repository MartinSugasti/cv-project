import { useState } from 'react';
import SkillModal from './SkillModal';

const Skills = () => {
  const [primarySkills, setPrimarySkills] = useState(['Rails', 'React', 'Scrum']);
  const [secondarySkills, setSecondarySkills] = useState([
    'HTML',
    'CSS',
    'Bootstrap',
    'Javascript',
    'Ruby',
    'SQL',
    'Git',
    'Github',
  ]);

  function addSkill(name, kind) {
    if (kind === 'primary') {
      setPrimarySkills([...primarySkills, name]);
    } else {
      setSecondarySkills([...secondarySkills, name]);
    }
  }

  function removePrimarySkill(indexToRemove) {
    setPrimarySkills(primarySkills.filter((_, index) => index !== indexToRemove));
  }

  function removeSecondarySkill(indexToRemove) {
    setSecondarySkills(secondarySkills.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="card-body py-0">
      <h3 className="mt-3 mb-0 text-md-left">
        <i className="fas fa-star mr-1"></i>
        Skills
        <i
          className="fas fa-plus-circle fa-xs ml-2"
          data-toggle="modal"
          data-target="#newSkillModal"
        ></i>
      </h3>

      {primarySkills.length > 0 && (
        <div className="d-md-flex text-md-left mt-2">
          {primarySkills.map((item, index) => {
            return (
              <p key={index} id={index} className="mb-0 font-weight-bold">
                {item}
                <span onClick={() => removePrimarySkill(index)}>
                  <i className="far fa-trash-alt fa-sm ml-2"></i>
                </span>
                {primarySkills.length !== index + 1 && (
                  <span className="d-none d-md-inline mx-1">-</span>
                )}
              </p>
            );
          })}
        </div>
      )}

      {secondarySkills.length > 0 && (
        <div className="d-md-flex text-md-left mt-2">
          {secondarySkills.map((item, index) => {
            return (
              <p key={index} id={index} className="mb-0">
                {item}
                <span onClick={() => removeSecondarySkill(index)}>
                  <i className="far fa-trash-alt fa-sm ml-2"></i>
                </span>
                {secondarySkills.length !== index + 1 && (
                  <span className="d-none d-md-inline mx-1">-</span>
                )}
              </p>
            );
          })}
        </div>
      )}

      <SkillModal addSkill={addSkill} />
    </div>
  );
};

export default Skills;
