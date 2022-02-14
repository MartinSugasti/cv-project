import { Component } from 'react';

class EditableInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      editing: false,
    };

    this.editInput = this.editInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputFocusOut = this.inputFocusOut.bind(this);
  }

  editInput() {
    this.setState({
      editing: true,
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  inputFocusOut() {
    this.setState({
      editing: false,
    });
  }

  render() {
    let valueElement;
    if (this.state.editing) {
      valueElement = (
        <input
          type="text"
          className="mw-100"
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={this.inputFocusOut}
          autoFocus
        />
      );
    } else {
      valueElement = this.state.value;
    }

    return (
      <div>
        {valueElement}
        <span role="button" onClick={this.editInput}>
          <i className="fas fa-edit fa-sm ml-2"></i>
        </span>
      </div>
    );
  }
}

export default EditableInput;
