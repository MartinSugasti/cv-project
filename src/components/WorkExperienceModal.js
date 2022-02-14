const WorkExperienceModal = ({ addItem }) => {
  function handleSubmit(event) {
    event.preventDefault();

    // create item and add it to the items list
    const newItem = {
      position: document.getElementById('new-work-experience-item-position').value,
      company: document.getElementById('new-work-experience-item-company').value,
      startDate: document.getElementById('new-work-experience-item-start-date').value,
      endDate: document.getElementById('new-work-experience-item-end-date').value,
      location: document.getElementById('new-work-experience-item-location').value,
      description: document.getElementById('new-work-experience-item-description').value,
    };
    addItem(newItem);

    // next is to clean form
    document.getElementById('new-work-experience-item-position').value = '';
    document.getElementById('new-work-experience-item-company').value = '';
    document.getElementById('new-work-experience-item-start-date').value = '';
    document.getElementById('new-work-experience-item-end-date').value = '';
    document.getElementById('new-work-experience-item-location').value = '';
    document.getElementById('new-work-experience-item-description').value = '';

    // next is to hide modal
    const modal = document.getElementById('newWorkExperienceItemModal');
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('style', 'display: none');
    const modalsBackdrops = document.getElementsByClassName('modal-backdrop');
    for (let i = 0; i < modalsBackdrops.length; i += 1) {
      document.body.removeChild(modalsBackdrops[i]);
    }
    document.body.classList.remove('modal-open');
  }

  return (
    <div
      className="modal fade"
      id="newWorkExperienceItemModal"
      tabIndex="-1"
      aria-labelledby="newWorkExperienceItem"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-dark">
          <form id="newWorkExperienceItemForm" onSubmit={handleSubmit}>
            <div className="modal-header text-center">
              <h3 className="modal-title w-100">Work Experience</h3>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body pb-0">
              <div className="form-group row">
                <label
                  htmlFor="new-work-experience-item-position"
                  className="col-form-label col-12 col-sm-4 text-sm-right mr-2"
                >
                  Position:
                </label>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="new-work-experience-item-position"
                    required="required"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="new-work-experience-item-company"
                  className="col-form-label col-12 col-sm-4 text-sm-right mr-2"
                >
                  Company:
                </label>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="new-work-experience-item-company"
                    required="required"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="new-work-experience-item-start-date"
                  className="col-form-label col-12 col-sm-4 text-sm-right mr-2"
                >
                  Start:
                </label>
                <div className="col-12 col-sm-6">
                  <input
                    type="month"
                    className="form-control"
                    id="new-work-experience-item-start-date"
                    required="required"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="new-work-experience-item-end-date"
                  className="col-form-label col-12 col-sm-4 text-sm-right mr-2"
                >
                  End:
                </label>
                <div className="col-12 col-sm-6">
                  <input
                    type="month"
                    className="form-control"
                    id="new-work-experience-item-end-date"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="new-work-experience-item-location"
                  className="col-form-label col-12 col-sm-4 text-sm-right mr-2"
                >
                  Location:
                </label>
                <div className="col-12 col-sm-6">
                  <input
                    type="text"
                    className="form-control"
                    id="new-work-experience-item-location"
                    required="required"
                  />
                </div>
              </div>

              <div className="form-group row">
                <label
                  htmlFor="new-work-experience-item-description"
                  className="col-form-label col-12 col-sm-4 text-sm-right mr-2"
                >
                  Description:
                </label>
                <div className="col-12 col-sm-6">
                  <textarea
                    className="form-control"
                    id="new-work-experience-item-description"
                    rows="5"
                    required="required"
                  />
                </div>
              </div>
            </div>

            <div className="modal-footer justify-content-center">
              <button type="submit" className="btn btn-dark">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceModal;
