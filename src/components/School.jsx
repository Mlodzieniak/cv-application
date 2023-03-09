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
      <div className="school">
        <form method="get">
          <label htmlFor="schoolName">
            School name:
            <input
              value={name}
              onChange={(event) => this.handleChangesName(event, "name")}
              type="text"
              id="schoolName"
            />
          </label>
          <label htmlFor="field">
            Field of study:
            <input
              value={fos}
              onChange={(event) => this.handleChangesName(event, "fos")}
              type="text"
              id="field"
            />
          </label>
          <label htmlFor="degree">
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
          </label>
          <label htmlFor="start">
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
          <label htmlFor="end">
            End year:
            <input
              value={end}
              onChange={(event) => this.handleChangesName(event, "end")}
              type="number"
              id="end"
              min={this.state.start ? this.state.start : "2030"}
            />
          </label>
        </form>
        <button onClick={() => onDelete(schoolId)} type="button">
          ❌
        </button>
      </div>
    );
  }
}
School.propTypes = {
  schoolId: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  inputs: propTypes.shape({
    name: propTypes.string.isRequired,
    fos: propTypes.string.isRequired,
    degree: propTypes.string.isRequired,
    start: propTypes.string.isRequired,
    end: propTypes.string.isRequired,
  }).isRequired,
};

export default School;
