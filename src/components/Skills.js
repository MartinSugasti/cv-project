import React, { Component } from 'react';

class Skills extends Component {
  render() {
    return (
      <div className="card-body py-0">
        <h3 className="mt-3 text-md-left">
          <i className="fas fa-star mr-1"></i>
          Skills
          <i className="fas fa-plus-circle fa-xs ml-2"></i>
        </h3>

        <div className="d-md-flex text-md-left mt-2">
          <p className="mb-0 font-weight-bold">Rails<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <span className="d-none d-md-inline mx-1">-</span>
          <p className="mb-0 font-weight-bold">React<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <span className="d-none d-md-inline mx-1">-</span>
          <p className="mb-0 font-weight-bold">Scrum<i className="far fa-trash-alt fa-sm ml-2"></i></p>
        </div>

        <div className="d-md-flex text-md-left mt-2">
          <p className="mb-0">HTML<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <span className="d-none d-md-inline mx-1">-</span>
          <p className="mb-0">CSS<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <span className="d-none d-md-inline mx-1">-</span>
          <p className="mb-0">Bootstrap<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <span className="d-none d-md-inline mx-1">-</span>
          <p className="mb-0">Javascript<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <span className="d-none d-md-inline mx-1">-</span>
          <p className="mb-0">Ruby<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <span className="d-none d-md-inline mx-1">-</span>
          <p className="mb-0">SQL<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <span className="d-none d-md-inline mx-1">-</span>
          <p className="mb-0">Git<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <span className="d-none d-md-inline mx-1">-</span>
          <p className="mb-0">Github<i className="far fa-trash-alt fa-sm ml-2"></i></p>
        </div>
      </div>
    );
  }
}

export default Skills;
