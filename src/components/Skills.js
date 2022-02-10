import React, { Component } from 'react';
import SkillModal from './SkillModal'

class Skills extends Component {
  constructor() {
    super();

    this.state = {
      primarySkills: ['Rails', 'React', 'Scrum'],
      secondarySkills: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'Ruby', 'SQL', 'Git', 'Github']
    };

    this.addSkill = this.addSkill.bind(this)
    this.removePrimarySkill = this.removePrimarySkill.bind(this)
    this.removeSecondarySkill = this.removeSecondarySkill.bind(this)
  }

  addSkill(name, kind) {
    if (kind === 'primary') {
      this.setState({
        primarySkills: [...this.state.primarySkills, name]
      });
    } else {
      this.setState({
        secondarySkills: [...this.state.secondarySkills, name]
      });
    }
  }

  removePrimarySkill(indexToRemove) {
    this.setState({
      primarySkills: this.state.primarySkills.filter((_, index) => index !== indexToRemove)
    });
  }

  removeSecondarySkill(indexToRemove) {
    this.setState({
      secondarySkills: this.state.secondarySkills.filter((_, index) => index !== indexToRemove)
    });
  }

  render() {
    return (
      <div className="card-body py-0">
        <h3 className="mt-3 mb-0 text-md-left">
          <i className="fas fa-star mr-1"></i>
            Skills
          <i className="fas fa-plus-circle fa-xs ml-2" data-toggle="modal" data-target="#newSkillModal"></i>
        </h3>

        {this.state.primarySkills.length > 0 &&
          <div className="d-md-flex text-md-left mt-2">
            {this.state.primarySkills.map((item, index) => {
              return (
                <p key={index} id={index} className="mb-0 font-weight-bold">
                  {item}
                  <span onClick={this.removePrimarySkill.bind(this, index)}>
                    <i className="far fa-trash-alt fa-sm ml-2"></i>
                  </span>
                  {this.state.primarySkills.length !== index + 1 &&
                    <span className="d-none d-md-inline mx-1">-</span>
                  }
                </p>
              )
            })}
          </div>
        }

        {this.state.secondarySkills.length > 0 &&
          <div className="d-md-flex text-md-left mt-2">
            {this.state.secondarySkills.map((item, index) => {
              return (
                <p key={index} id={index} className="mb-0">
                  {item}
                  <span onClick={this.removeSecondarySkill.bind(this, index)}>
                    <i className="far fa-trash-alt fa-sm ml-2"></i>
                  </span>
                  {this.state.secondarySkills.length !== index + 1 &&
                    <span className="d-none d-md-inline mx-1">-</span>
                  }
                </p>
              )
            })}
          </div>
        }

        <SkillModal addSkill={this.addSkill} />
      </div>
    );
  }
}

export default Skills;
