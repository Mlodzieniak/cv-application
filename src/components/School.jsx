/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import propTypes from "prop-types";

class School extends React.PureComponent {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       schools: props.list,
  //     };
  //   }

  render() {
    const { schoolId, onDelete } = this.props;
    return (
      <div className="school">
        <form method="get">
          <label htmlFor="schoolName">
            School name:
            <input type="text" id="schoolName" />
          </label>
          <label htmlFor="field">
            Field of study:
            <input type="text" id="field" />
          </label>
          <label htmlFor="degree">
            Degree:
            <input type="text" id="degree" />
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
  //   list: propTypes.shape({
  //     id: propTypes.string.isRequired,
  //   }),
};

export default School;
