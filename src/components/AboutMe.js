import React, { Component } from 'react';

class AboutMe extends Component {
  render() {
    return (
      <div className="card-body py-0">
        <h3 className="mt-3 mb-0 text-md-left">
          <i className="fas fa-user mr-1"></i>
          About Me
          <i className="fas fa-plus-circle fa-xs ml-2"></i>
        </h3>
        <p className="mt-2 mb-0 text-md-left">
          I am an industrial engineer, with experience working in supply chain. However, due to vocational preferences, I decided on a change in my professional profile and started studying Software Engineering and working as a full-stack developer. As a personal challenge and in search of new experiences, I moved to Barcelona in August 2021 with my partner.
        </p>
      </div>
    );
  }
}

export default AboutMe;
