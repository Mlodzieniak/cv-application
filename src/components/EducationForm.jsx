/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import uniqid from "uniqid";
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
              list={schools}
              key={pos.id}
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

export default EducationForm;
