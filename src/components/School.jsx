/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import propTypes from "prop-types";

class School extends React.PureComponent {
  constructor(props) {
    super(props);
    if (this.props.inputs) {
      this.state = {
        name: this.props.inputs.name,
        fos: this.props.inputs.fos,
        degree: this.props.inputs.degree,
        start: this.props.inputs.start,
        end: this.props.inputs.end,
        id: this.props.schoolId,
      };
    } else {
      this.state = {
        name: "",
        fos: "",
        degree: "Bachelors",
        start: "",
        end: "",
        id: this.props.schoolId,
      };
    }
  }

  handleChangesName = (event, key) => {
    this.setState(
      {
        [key]: event.target.value,
      },
      () => this.props.onChange(this.state)
    );
  };

  render() {
    const { schoolId, onDelete } = this.props;
    const { name, fos, degree, start, end } = this.state;
    return (
      <form className="school-form radius bg-lb" method="get">
        <label htmlFor="school-name" className="school-name">
          School name:
          <input
            value={name}
            onChange={(event) => this.handleChangesName(event, "name")}
            type="text"
            id="schoolName"
          />
        </label>
        <label htmlFor="field" className="field">
          Field of study:
          <input
            value={fos}
            onChange={(event) => this.handleChangesName(event, "fos")}
            type="text"
            id="field"
          />
        </label>
        <label htmlFor="degree" className="degree">
          Degree:
          <select
            value={degree}
            onChange={(event) => this.handleChangesName(event, "degree")}
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
            onChange={(event) => this.handleChangesName(event, "start")}
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
            onChange={(event) => this.handleChangesName(event, "end")}
            type="number"
            id="end"
            min={this.state.start ? this.state.start : "2030"}
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
