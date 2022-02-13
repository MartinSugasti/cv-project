import React, { Component } from 'react';

class ReferenceModal extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(addItem, event) {
    event.preventDefault();

    // create item and add it to the items list
    const newItem = {
      fullName: document.getElementById(`new-${this.props.title}-reference-fullName`).value,
      mobile: document.getElementById(`new-${this.props.title}-reference-mobile`).value,
      company: document.getElementById(`new-${this.props.title}-reference-company`).value,
      position: document.getElementById(`new-${this.props.title}-reference-position`).value
    }
    addItem(newItem)

    // next is to clean form
    document.getElementById(`new-${this.props.title}-reference-fullName`).value = ''
    document.getElementById(`new-${this.props.title}-reference-mobile`).value = ''
    document.getElementById(`new-${this.props.title}-reference-company`).value = ''
    document.getElementById(`new-${this.props.title}-reference-position`).value = ''


    // next is to hide modal
    const modal = document.getElementById(`new${this.props.title}ReferenceModal`);
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('style', 'display: none');
    const modalsBackdrops = document.getElementsByClassName('modal-backdrop');
    for (let i = 0; i < modalsBackdrops.length; i += 1) {
      document.body.removeChild(modalsBackdrops[i]);
    }
    document.body.classList.remove('modal-open');
  }

  render() {
    return (
      <div className="modal fade" id={`new${this.props.title}ReferenceModal`} tabIndex="-1" aria-labelledby="newReference" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-dark">
            <form id={`new${this.props.title}ReferenceForm`} onSubmit={this.handleSubmit.bind(this, this.props.addItem)}>
              <div className="modal-header text-center">
                <h3 className="modal-title w-100">{this.props.title} Reference</h3>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body pb-0">
                <div className="form-group row">
                  <label htmlFor={`new-${this.props.title}-reference-fullName`} className="col-form-label col-12 col-sm-4 text-sm-right mr-2">Full Name:</label>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control" id={`new-${this.props.title}-reference-fullName`} required="required" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor={`new-${this.props.title}-reference-mobile`} className="col-form-label col-12 col-sm-4 text-sm-right mr-2">Mobile:</label>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control" id={`new-${this.props.title}-reference-mobile`} required="required" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor={`new-${this.props.title}-reference-company`} className="col-form-label col-12 col-sm-4 text-sm-right mr-2">Company:</label>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control" id={`new-${this.props.title}-reference-company`} required="required" />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor={`new-${this.props.title}-reference-position`} className="col-form-label col-12 col-sm-4 text-sm-right mr-2">Position:</label>
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control" id={`new-${this.props.title}-reference-position`} required="required" />
                  </div>
                </div>
              </div>

              <div className="modal-footer justify-content-center">
                <button type="submit" className="btn btn-dark">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ReferenceModal;
