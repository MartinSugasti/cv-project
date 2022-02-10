import React, { Component } from 'react';
import ReferenceModal from './ReferenceModal'

class SpecificReferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      references: this.props.defaultReferences
    };

    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  addItem(item) {
    this.setState({
      references: [...this.state.references, item]
    });
  }

  removeItem(indexToRemove) {
    this.setState({
      references: this.state.references.filter((_, index) => index !== indexToRemove)
    });
  }

  render() {
    return (
      <div className="col-12 col-md-6 mt-3 text-md-left">
        <h3>
          <i className="fas fa-asterisk mr-1"></i>
            {this.props.title} References
          <i className="fas fa-plus-circle fa-xs ml-2" data-toggle="modal" data-target="#newReferenceModal"></i>
        </h3>

        {this.state.references.map((item, index) => {
          return (
            <div key={index} id={index} className="row mt-2 align-items-center">
              <p className="col-12 col-md-6 mb-0 font-weight-bold">
                {item.fullName}
                <span onClick={this.removeItem.bind(this, index)}>
                  <i className="far fa-trash-alt fa-sm ml-2"></i>
                </span>
              </p>
              <p className="col-12 col-md-5 mb-0 font-weight-bold text-md-left">{item.mobile}</p>
              <p className="col-12 col-md-6 mb-0">{item.company}</p>
              <p className="col-12 col-md-6 mb-0 text-md-left">{item.position}</p>
            </div>
          )
        })}

        <ReferenceModal title={this.props.title} addItem={this.addItem} />
      </div>
    );
  }
}

export default SpecificReferences;
