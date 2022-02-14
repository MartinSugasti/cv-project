import { useState } from 'react';

const AboutMe = () => {
  const [value, setValue] = useState(
    'I am an industrial engineer, with experience working in supply chain. However, due to vocational preferences, I decided on a change in my professional profile and started studying Software Engineering and working as a full-stack developer. As a personal challenge and in search of new experiences, I moved to Barcelona in August 2021 with my partner.'
  );
  const [editing, setEditing] = useState(false);

  function editInput() {
    setEditing(true);
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function inputFocusOut() {
    setEditing(false);
  }

  let valueElement;
  if (editing) {
    valueElement = (
      <textarea
        className="w-100"
        rows="5"
        value={value}
        onChange={handleChange}
        onBlur={inputFocusOut}
        autoFocus
      />
    );
  } else {
    valueElement = value;
  }

  return (
    <div className="card-body py-0">
      <h3 className="mt-3 mb-0 text-md-left">
        <i className="fas fa-user mr-1"></i>
        About Me
        <span role="button" onClick={editInput}>
          <i className="fas fa-edit fa-xs ml-2"></i>
        </span>
      </h3>

      {valueElement !== '' && <p className="mt-2 mb-0 text-md-left">{valueElement}</p>}
    </div>
  );
};

export default AboutMe;
