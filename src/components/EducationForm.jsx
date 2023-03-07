/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import uniqid from "uniqid";
import propTypes from "prop-types";
import School from "./School";

class EducationForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
    };
  }

  handleDelete = (schoolKey) => {
    const { schools } = this.state;
    this.setState({
      schools: schools.filter((searched) => searched.id !== schoolKey),
    });
  };

  handleSchoolChanges = (updatedSchool) => {
    console.log(updatedSchool);

    const { schools } = this.state;
    const newSchools = [...schools];
    const found = newSchools.findIndex((pos) => pos.id === updatedSchool.id);
    console.log(found);
    newSchools[found] = updatedSchool;
    this.setState(
      {
        schools: newSchools,
      },
      () => {
        // eslint-disable-next-line react/destructuring-assignment
        console.log(this.state.schools);
        // eslint-disable-next-line react/destructuring-assignment
        this.props.onChange(this.state.schools);
      }
    );
  };

  render() {
    const { schools } = this.state;

    return (
      <div className="form">
        <h2>EducationForm</h2>
        <div className="list">
          {schools.map((pos) => (
            <School
              schoolId={pos.id}
              onDelete={this.handleDelete}
              key={pos.id}
              onChange={this.handleSchoolChanges}
            />
          ))}
        </div>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              schools: [{ id: uniqid() }, ...prevState.schools],
            }))
          }
          type="button"
        >
          New school
        </button>
      </div>
    );
  }
}

EducationForm.propTypes = {
  onChange: propTypes.func.isRequired,
};

export default EducationForm;
