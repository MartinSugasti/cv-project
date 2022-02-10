import React, { Component } from 'react';

class AboutMe extends Component {
  constructor() {
    super();

    this.state = {
      value: "I am an industrial engineer, with experience working in supply chain. However, due to vocational preferences, I decided on a change in my professional profile and started studying Software Engineering and working as a full-stack developer. As a personal challenge and in search of new experiences, I moved to Barcelona in August 2021 with my partner.",
      editing: false
    };

    this.editInput = this.editInput.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.inputFocusOut = this.inputFocusOut.bind(this)
  }

  editInput() {
    this.setState({
      editing: true
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  inputFocusOut() {
    this.setState({
      editing: false
    });
  }

  render() {
    let valueElement
    if (this.state.editing) {
      valueElement = <textarea className="w-100" rows="5" value={this.state.value} onChange={this.handleChange} onBlur={this.inputFocusOut} autoFocus />
    } else {
      valueElement = this.state.value
    }

    return (
      <div className="card-body py-0">
        <h3 className="mt-3 mb-0 text-md-left">
          <i className="fas fa-user mr-1"></i>
          About Me
          <span role="button" onClick={this.editInput}>
            <i className="fas fa-plus-circle fa-xs ml-2"></i>
          </span>
        </h3>

        {valueElement !== '' &&
          <p className="mt-2 mb-0 text-md-left">
            {valueElement}
          </p>
        }
      </div>
    );
  }
}

export default AboutMe;
