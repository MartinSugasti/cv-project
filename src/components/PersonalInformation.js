import { Component } from 'react';
import EditableInput from './EditableInput';

class PersonalInformation extends Component {
  render() {
    return (
      <div className="card-body py-0">
        <h1 className="card-title mt-3 mb-0">
          <EditableInput value="Martin Sugasti" />
        </h1>

        <div className="row mt-2">
          <span className="col-12 col-lg-4 card-text">
            <i className="far fa-envelope"></i>
            <br />
            <EditableInput value="martinsugasti@gmail.com" />
          </span>

          <span className="col-12 col-lg-4 card-text">
            <i className="fas fa-phone-alt"></i>
            <br />
            <EditableInput value="+34 696 924 288" />
          </span>

          <span className="col-12 col-lg-4 card-text">
            <i className="fas fa-map-marker-alt"></i>
            <br />
            <EditableInput value="Barcelona, Spain" />
          </span>
        </div>
      </div>
    );
  }
}

export default PersonalInformation;
