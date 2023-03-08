/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import propTypes from "prop-types";

class Job extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      position: "",
      description: "",
      start: "",
      end: "",
      id: this.props.jobId,
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
    const { jobId, onDelete } = this.props;
    const { company, position, description, start, end } = this.state;
    return (
      <div className="job">
        <form method="get">
          <label htmlFor="jobName">
            Company:
            <input
              value={company}
              onChange={(event) => this.handleChangesName(event, "company")}
              type="text"
              id="jobName"
            />
          </label>
          <label htmlFor="field">
            Position:
            <input
              value={position}
              onChange={(event) => this.handleChangesName(event, "position")}
              type="text"
              id="field"
            />
          </label>
          <label htmlFor="description">
            Description:
            <input
              value={description}
              onChange={(event) => this.handleChangesName(event, "description")}
              type="text"
              id="description"
            />
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
        <button onClick={() => onDelete(jobId)} type="button">
          ❌
        </button>
      </div>
    );
  }
}
Job.propTypes = {
  jobId: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Job;
