import { useState } from 'react';
import EducationModal from './EducationModal';

const Education = () => {
  const [items, setItems] = useState([
    {
      degree: 'Software Engineering',
      school: 'Engineering Faculty, UDELAR',
      startDate: '2018',
      endDate: '',
    },
    {
      degree: 'Industrial and Mechanical Engineering',
      school: 'Engineering Faculty, UDELAR',
      startDate: '2009',
      endDate: '2015',
    },
    {
      degree: 'First Certificate in English',
      school: 'University of Cambridge',
      startDate: '2000',
      endDate: '2008',
    },
  ]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function removeItem(indexToRemove) {
    setItems(items.filter((_, index) => index !== indexToRemove));
  }

  return (
    <div className="card-body py-0">
      <h3 className="mt-3 mb-0 text-md-left">
        <i className="fas fa-university mr-1"></i>
        Education
        <i
          className="fas fa-plus-circle fa-xs ml-2"
          data-toggle="modal"
          data-target="#newEducationItemModal"
        ></i>
      </h3>

      {items.map((item, index) => {
        return (
          <div key={index} id={index} className="row align-items-center text-md-left mt-2">
            <p className="col-12 col-md-4 mb-0 font-weight-bold">
              {item.degree}
              <span onClick={() => removeItem(index)}>
                <i className="far fa-trash-alt fa-sm ml-2"></i>
              </span>
            </p>
            <p className="col-12 col-md-5 mb-0">{item.school}</p>
            <p className="col-12 col-md-3 mb-0 font-weight-bold text-md-right">
              {item.startDate} - {item.endDate ? item.endDate : 'Present'}
            </p>
          </div>
        );
      })}

      <EducationModal addItem={addItem} />
    </div>
  );
};

export default Education;
