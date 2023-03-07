/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import propTypes from "prop-types";

class School extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      fos: "",
      degree: "",
      id: this.props.schoolId,
    };
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
    const { name, fos, degree } = this.state;
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
            <input
              value={degree}
              onChange={(event) => this.handleChangesName(event, "degree")}
              type="text"
              id="degree"
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
};

export default School;
