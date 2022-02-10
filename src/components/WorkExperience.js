import React, { Component } from 'react';
import WorkExperienceModal from './WorkExperienceModal'

class WorkExperience extends Component {
  constructor() {
    super();

    this.state = {
      items: [
        {
          position: 'Full Stack Developer',
          company: 'Vairix',
          startDate: '2022-02',
          endDate: '',
          location: 'Montevideo, Uruguay',
          description: 'Since joining the team, I have worked as a full-stack developer using Ruby on Rails framework. Alongside RoR, I have gained experience with other languages and development tools such as React.'
        },
        {
          position: 'Full Stack Developer',
          company: 'EagerWorks SRL',
          startDate: '2019-09',
          endDate: '2022-02',
          location: 'Montevideo, Uruguay',
          description: 'Since joining the team, I have worked as a full-stack developer using Ruby on Rails framework. Alongside RoR, I have gained experience with other languages and development tools such as HTML, CSS, JS, git, GitHub, and SQL. During this time, I have dealt with a variety of clients, spanning from small local companies to large multinational corporations using Agile/Scrum development techniques, staying in touch with clients daily, and reaching mutual agreements on ideas and next steps.'
        },
        {
          position: 'Maintenance Analyst',
          company: 'Montevideo Refrescos SRL',
          startDate: '2017-04',
          endDate: '2019-10',
          location: 'Montevideo, Uruguay',
          description: 'Planned preventive and corrective maintenance for the Coca-Cola products bottling company in Uruguay. Coordinated availability of resources such as specialized technicians and spare parts with different divisions.- Led a team of 15 operators in a periodic manner.- Executed the maintenance management migration in SAP when the company ownership changed from The Coca-Cola Company to FEMSA. At this point, approximately 1,800 maintenance plans were redesigned.'
        },
        {
          position: 'Production Coordinator',
          company: 'Yazaki Uruguay SA',
          startDate: '2015-05',
          endDate: '2016-12',
          location: 'Las Piedras, Uruguay',
          description: 'Supervised production plan on a daily basis, coordinating activities with 3 production supervisors. Provided production capacity insights and information as inputs for the company\'s production strategy.- Led a team of 200 plant operators with 4 plant supervisors direct reports.- Negotiated with labor unions in weekly bi-lateral meetings.'
        },
        {
          position: 'Technician Assistant',
          company: 'Abengoa Teyma SA',
          startDate: '2012-11',
          endDate: '2013-10',
          location: 'Montevideo, Uruguay',
          description: 'Constructed the electro-mechanical cost-estimate of water purification plant and of concrete/cement plant extension.'
        }
      ]
    };

    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  addItem(item) {
    console.log(item)
    this.setState({
      items: [...this.state.items, item]
    });
  }

  removeItem(indexToRemove) {
    this.setState({
      items: this.state.items.filter((_, index) => index !== indexToRemove)
    });
  }

  formatDate(date) {
    const yearMonth = date.split('-')
    return `${parseInt(yearMonth[1], 10)}/${yearMonth[0]}`
  }

  render() {
    return (
      <div className="card-body py-0">
        <h3 className="mt-3 mb-0 text-md-left">
          <i className="fas fa-university mr-1"></i>
            Work Experience
          <i className="fas fa-plus-circle fa-xs ml-2" data-toggle="modal" data-target="#newWorkExperienceItemModal"></i>
        </h3>

        {this.state.items.map((item, index) => {
          return (
            <div key={index} id={index} className="text-md-left mt-2">
              <div className="row">
                <div className="col-12 col-md-6 align-items-center">
                  <p className="mb-0 font-weight-bold">
                    {item.position}
                    <span onClick={this.removeItem.bind(this, index)}>
                      <i className="far fa-trash-alt fa-sm ml-2"></i>
                    </span>
                  </p>
                  <p className="mb-0 font-weight-bold">{item.company}</p>
                </div>

                <div className="col-12 col-md-6 align-items-center">
                  <p className="mb-0 font-weight-bold text-md-right">{this.formatDate(item.startDate)} - {item.endDate ? this.formatDate(item.endDate) : 'Present'}</p>
                  <p className="mb-0 font-weight-bold text-md-right">{item.location}</p>
                </div>
              </div>

              <p className="mb-0">
                {item.description}
              </p>
            </div>
          )
        })}

        <WorkExperienceModal addItem={this.addItem} />
      </div>
    );
  }
}

export default WorkExperience;
