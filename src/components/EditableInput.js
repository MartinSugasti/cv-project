import { useState } from 'react';

const EditableInput = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
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
      <input
        type="text"
        className="mw-100"
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
    <div>
      {valueElement}
      <span role="button" onClick={editInput}>
        <i className="fas fa-edit fa-sm ml-2"></i>
      </span>
    </div>
  );
};

export default EditableInput;
