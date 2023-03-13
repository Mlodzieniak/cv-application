import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

function Duty(props) {
  const { id, value, onChange, onDelete } = props;
  const [text, setText] = useState(value || "");
  const update = (e) => {
    setText(e.target.value);
  };
  useEffect(() => onChange(text, id), [text]);

  return (
    <div className="duty">
      <textarea value={text} onChange={(event) => update(event)} type="text" />
      <button
        className="duty-delete-btn"
        onClick={() => onDelete(id)}
        type="button"
      >
        ❌
      </button>
    </div>
  );
  // }
}

Duty.propTypes = {
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
};
export default Duty;
