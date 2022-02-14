import { useState } from 'react';
import ReferenceModal from './ReferenceModal';

const SpecificReferences = ({ title, defaultReferences }) => {
  const [references, setReferences] = useState(defaultReferences);

  function addItem(item) {
    setReferences([...references, item]);
  }

  function removeItem(indexToRemove) {
    setReferences(references.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="col-12 col-md-6 mt-3 text-md-left">
      <h3>
        <i className="fas fa-asterisk mr-1"></i>
        {title} References
        <i
          className="fas fa-plus-circle fa-xs ml-2"
          data-toggle="modal"
          data-target={`#new${title}ReferenceModal`}
        ></i>
      </h3>

      {references.map((item, index) => {
        return (
          <div key={index} id={index} className="row mt-2 align-items-center">
            <p className="col-12 col-md-6 mb-0 font-weight-bold">
              {item.fullName}
              <span onClick={() => removeItem(index)}>
                <i className="far fa-trash-alt fa-sm ml-2"></i>
              </span>
            </p>
            <p className="col-12 col-md-5 mb-0 font-weight-bold text-md-left">{item.mobile}</p>
            <p className="col-12 col-md-6 mb-0">{item.company}</p>
            <p className="col-12 col-md-6 mb-0 text-md-left">{item.position}</p>
          </div>
        );
      })}

      <ReferenceModal title={title} addItem={addItem} />
    </div>
  );
};

export default SpecificReferences;
