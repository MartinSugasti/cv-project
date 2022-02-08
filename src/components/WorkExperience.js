import React, { Component } from 'react';

class WorkExperience extends Component {
  render() {
    return (
      <div className="card-body py-0">
        <h3 className="mt-3 mb-0 text-md-left">
          <i className="fas fa-hard-hat mr-1"></i>
          Work Experience
          <i className="fas fa-plus-circle fa-xs ml-2"></i>
        </h3>

        <div className="text-md-left mt-2">
          <div className="row">
            <div className="col-12 col-md-6 align-items-center">
              <p className="mb-0 font-weight-bold">Full Stack Developer<i className="far fa-trash-alt fa-sm ml-2"></i></p>
              <p className="mb-0 font-weight-bold">Vairix</p>
            </div>

            <div className="col-12 col-md-6 align-items-center">
              <p className="mb-0 font-weight-bold text-md-right">2/2021 - Present</p>
              <p className="mb-0 font-weight-bold text-md-right">Montevideo, Uruguay</p>
            </div>
          </div>

          <p className="mb-0">
            Since joining the team, I have worked as a full-stack developer using Ruby on Rails framework. Alongside RoR, I have gained experience with other languages and development tools such as React.
          </p>
        </div>

        <div className="text-md-left mt-2">
          <div className="row">
            <div className="col-12 col-md-6 align-items-center">
              <p className="mb-0 font-weight-bold">Full Stack Developer<i className="far fa-trash-alt fa-sm ml-2"></i></p>
              <p className="mb-0 font-weight-bold">EagerWorks SRL</p>
            </div>

            <div className="col-12 col-md-6 align-items-center">
              <p className="mb-0 font-weight-bold text-md-right">9/2019 - 2/2021</p>
              <p className="mb-0 font-weight-bold text-md-right">Montevideo, Uruguay</p>
            </div>
          </div>

          <p className="mb-0">
            Since joining the team, I have worked as a full-stack developer using Ruby on Rails framework. Alongside RoR, I have gained experience with other languages and development tools such as HTML, CSS, JS, git, GitHub, and SQL.
            During this time, I have dealt with a variety of clients, spanning from small local companies to large multinational corporations using Agile/Scrum development techniques, staying in touch with clients daily, and reaching mutual agreements on ideas and next steps.
          </p>
        </div>

        <div className="text-md-left mt-2">
          <div className="row">
            <div className="col-12 col-md-6 align-items-center">
              <p className="mb-0 font-weight-bold">Maintenance Analyst<i className="far fa-trash-alt fa-sm ml-2"></i></p>
              <p className="mb-0 font-weight-bold">Montevideo Refrescos SRL</p>
            </div>

            <div className="col-12 col-md-6 align-items-center">
              <p className="mb-0 font-weight-bold text-md-right">4/2017 - 10/2019</p>
              <p className="mb-0 font-weight-bold text-md-right">Montevideo, Uruguay</p>
            </div>
          </div>

          <p className="mb-0">
            Planned preventive and corrective maintenance for the Coca-Cola products bottling company in Uruguay. Coordinated availability of resources such as specialized technicians and spare parts with different divisions.<br/>
            - Led a team of 15 operators in a periodic manner.<br/>
            - Executed the maintenance management migration in SAP when the company ownership changed from The Coca-Cola Company to FEMSA. At this point, approximately 1,800 maintenance plans were redesigned.
          </p>
        </div>

        <div className="text-md-left mt-2">
          <div className="row">
            <div className="col-12 col-md-6 align-items-center">
              <p className="mb-0 font-weight-bold">Production Coordinator<i className="far fa-trash-alt fa-sm ml-2"></i></p>
              <p className="mb-0 font-weight-bold">Yazaki Uruguay SA</p>
            </div>

            <div className="col-12 col-md-6 align-items-center">
              <p className="mb-0 font-weight-bold text-md-right">5/2015 - 12/2016</p>
              <p className="mb-0 font-weight-bold text-md-right">Las Piedras, Uruguay</p>
            </div>
          </div>

          <p className="mb-0">
            Supervised production plan on a daily basis, coordinating activities with 3 production supervisors. Provided production capacity insights and information as inputs for the company's production strategy.<br/>
            - Led a team of 200 plant operators with 4 plant supervisors direct reports.<br/>
            - Negotiated with labor unions in weekly bi-lateral meetings.
          </p>
        </div>

        <div className="text-md-left mt-2">
          <div className="row">
            <div className="col-12 col-md-6 align-items-center">
              <p className="mb-0 font-weight-bold">Technician Assistant<i className="far fa-trash-alt fa-sm ml-2"></i></p>
              <p className="mb-0 font-weight-bold">Abengoa Teyma SA</p>
            </div>

            <div className="col-12 col-md-6 align-items-center">
              <p className="mb-0 font-weight-bold text-md-right">11/2012 - 10/2013</p>
              <p className="mb-0 font-weight-bold text-md-right">Montevideo, Uruguay</p>
            </div>
          </div>

          <p className="mb-0">
            Constructed the electro-mechanical cost-estimate of water purification plant and of concrete/cement plant extension.
          </p>
        </div>
      </div>
    );
  }
}

export default WorkExperience;
