import React, { useEffect, useState } from "react";
import propTypes from "prop-types";

function School(props) {
  const { schoolId, onDelete, onChange, inputs } = props;

  const [name, setName] = useState(inputs.name ? inputs.name : "");
  const [fos, setFos] = useState(inputs.fos ? inputs.fos : "");
  const [degree, setDegree] = useState(
    inputs.degree ? inputs.degree : "Bachelors"
  );
  const [start, setStart] = useState(inputs.start ? inputs.start : "");
  const [end, setEnd] = useState(inputs.end ? inputs.end : "");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeFos = (e) => {
    setFos(e.target.value);
  };
  const handleChangeDegree = (e) => {
    setDegree(e.target.value);
  };
  const handleChangeStart = (e) => {
    setStart(e.target.value);
  };
  const handleChangeEnd = (e) => {
    setEnd(e.target.value);
  };

  useEffect(() => {
    const states = { name, fos, degree, start, end, id: schoolId };
    onChange(states);
  }, [name, fos, degree, start, end]);
  return (
    <form className="school-form radius bg-lb" method="get">
      <label htmlFor="school-name" className="school-name">
        School name:
        <input
          value={name}
          onChange={(event) => handleChangeName(event, "name")}
          type="text"
          id="schoolName"
        />
      </label>
      <label htmlFor="field" className="field">
        Field of study:
        <input
          value={fos}
          onChange={(event) => handleChangeFos(event, "fos")}
          type="text"
          id="field"
        />
      </label>
      <label htmlFor="degree" className="degree">
        Degree:
        <select
          value={degree}
          onChange={(event) => handleChangeDegree(event, "degree")}
          type="text"
          id="degree"
        >
          <option value="Bachelors">Bachelors</option>
          <option value="Masters">Masters</option>
          <option value="Doctors">Doctors</option>
          <option value="High school">High school</option>
        </select>
      </label>{" "}
      <label htmlFor="start" className="start">
        Start year:
        <input
          value={start}
          onChange={(event) => handleChangeStart(event, "start")}
          type="number"
          id="start"
          min="1950"
          max={new Date().getFullYear()}
        />
      </label>
      <label htmlFor="end" className="end">
        End year:
        <input
          value={end}
          onChange={(event) => handleChangeEnd(event, "end")}
          type="number"
          id="end"
          min={start || "2030"}
        />
      </label>
      <button
        onClick={() => onDelete(schoolId)}
        type="button"
        className="school-delete-btn"
      >
        ❌
      </button>
    </form>
  );
}
School.propTypes = {
  schoolId: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  inputs: propTypes.shape({
    name: propTypes.string,
    fos: propTypes.string,
    degree: propTypes.string,
    start: propTypes.string,
    end: propTypes.string,
  }).isRequired,
};

export default School;
