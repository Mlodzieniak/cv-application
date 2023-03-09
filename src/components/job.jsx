/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import propTypes from "prop-types";

class Job extends React.PureComponent {
  constructor(props) {
    super(props);
    if (this.props.inputs) {
      this.state = {
        company: this.props.inputs.company,
        position: this.props.inputs.position,
        description: this.props.inputs.description,
        start: this.props.inputs.start,
        end: this.props.inputs.end,
        id: this.props.jobId,
      };
    } else {
      this.state = {
        company: "",
        position: "",
        description: "",
        start: "",
        end: "",
        id: this.props.jobId,
      };
    }
  }

  handleChanges = (event, key) => {
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
              onChange={(event) => this.handleChanges(event, "company")}
              type="text"
              id="jobName"
            />
          </label>
          <label htmlFor="field">
            Position:
            <input
              value={position}
              onChange={(event) => this.handleChanges(event, "position")}
              type="text"
              id="field"
            />
          </label>
          <label htmlFor="description">
            Description:
            <input
              value={description}
              onChange={(event) => this.handleChanges(event, "description")}
              type="text"
              id="description"
            />
          </label>
          <label htmlFor="start">
            Start year:
            <input
              value={start}
              onChange={(event) => this.handleChanges(event, "start")}
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
              onChange={(event) => this.handleChanges(event, "end")}
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
  inputs: propTypes.shape({
    company: propTypes.string.isRequired,
    position: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    start: propTypes.string.isRequired,
    end: propTypes.string.isRequired,
  }).isRequired,
};

export default Job;
