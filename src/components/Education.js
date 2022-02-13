import React, { Component } from 'react';
import EducationModal from './EducationModal'

class Education extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          degree: 'Software Engineering',
          school: 'Engineering Faculty, UDELAR',
          startDate: '2018',
          endDate: ''
        },
        {
          degree: 'Industrial and Mechanical Engineering',
          school: 'Engineering Faculty, UDELAR',
          startDate: '2009',
          endDate: '2015'
        },
        {
          degree: 'First Certificate in English',
          school: 'University of Cambridge',
          startDate: '2000',
          endDate: '2008'
        }
      ]
    };

    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  addItem(item) {
    this.setState({
      items: [...this.state.items, item]
    });
  }

  removeItem(indexToRemove) {
    this.setState({
      items: this.state.items.filter((_, index) => index !== indexToRemove)
    });
  }

  render() {
    return (
      <div className="card-body py-0">
        <h3 className="mt-3 mb-0 text-md-left">
          <i className="fas fa-university mr-1"></i>
          Education
          <i className="fas fa-plus-circle fa-xs ml-2" data-toggle="modal" data-target="#newEducationItemModal"></i>
        </h3>

        {this.state.items.map((item, index) => {
          return (
            <div key={index} id={index} className="row align-items-center text-md-left mt-2">
              <p className="col-12 col-md-4 mb-0 font-weight-bold">
                {item.degree}
                <span onClick={this.removeItem.bind(this, index)}>
                  <i className="far fa-trash-alt fa-sm ml-2"></i>
                </span>
              </p>
              <p className="col-12 col-md-5 mb-0">{item.school}</p>
              <p className="col-12 col-md-3 mb-0 font-weight-bold text-md-right">{item.startDate} - {item.endDate ? item.endDate : 'Present'}</p>
            </div>
          )
        })}

        <EducationModal addItem={this.addItem} />
      </div>
    );
  }
}

export default Education;
