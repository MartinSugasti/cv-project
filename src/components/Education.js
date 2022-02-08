import React, { Component } from 'react';

class Education extends Component {
  render() {
    return (
      <div className="card-body py-0">
        <h3 className="mt-3 mb-0 text-md-left">
          <i className="fas fa-university mr-1"></i>
          Education
          <i className="fas fa-plus-circle fa-xs ml-2"></i>
        </h3>

        <div className="row align-items-center text-md-left mt-2">
          <p className="col-12 col-md-4 mb-0 font-weight-bold">Software Engineering<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <p className="col-12 col-md-5 mb-0">Engineering Faculty, UDELAR</p>
          <p className="col-12 col-md-3 mb-0 font-weight-bold text-md-right">2018 - Present</p>
        </div>

        <div className="row align-items-center text-md-left mt-2">
          <p className="col-12 col-md-4 mb-0 font-weight-bold">Industrial and Mechanical Engineering<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <p className="col-12 col-md-5 mb-0">Engineering Faculty, UDELAR</p>
          <p className="col-12 col-md-3 mb-0 font-weight-bold text-md-right">2009 - 2015</p>
        </div>

        <div className="row align-items-center text-md-left mt-2">
          <p className="col-12 col-md-4 mb-0 font-weight-bold">First Certificate in English<i className="far fa-trash-alt fa-sm ml-2"></i></p>
          <p className="col-12 col-md-5 mb-0">University of Cambridge</p>
          <p className="col-12 col-md-3 mb-0 font-weight-bold text-md-right">2000 - 2008</p>
        </div>
      </div>
    );
  }
}

export default Education;
