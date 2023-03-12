/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import propTypes, { any } from "prop-types";
import uniqid from "uniqid";
import Duty from "./Duty";

class Job extends React.PureComponent {
  constructor(props) {
    super(props);

    if (this.props.inputs.description) {
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
        description: [],
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

  changeDesc = (duty, id) => {
    const { description } = this.state;
    const index = description.findIndex((desc) => desc.id === id);
    const newArr = [...description];
    newArr[index].text = duty;
    this.setState(
      {
        description: newArr,
      },
      () => this.props.onChange(this.state)
    );
  };

  addDesc = () => {
    this.setState((prevState) => ({
      description: [
        ...prevState.description,
        {
          text: "",
          id: uniqid(),
        },
      ],
    }));
  };

  deleteDesc = (jobKey) => {
    const { description } = this.state;
    this.setState(
      {
        description: description.filter((searched) => searched.id !== jobKey),
      },
      () => this.props.onChange(this.state)
    );
  };

  render() {
    const { jobId, onDelete } = this.props;
    const { company, position, description, start, end } = this.state;
    return (
      <div className="radius bg-lb">
        <form method="get" className="job-form">
          <label htmlFor="jobName" className="job-name">
            Company:
            <input
              value={company}
              onChange={(event) => this.handleChanges(event, "company")}
              type="text"
              id="jobName"
            />
          </label>
          <label htmlFor="field" className="job-pos">
            Position:
            <input
              value={position}
              onChange={(event) => this.handleChanges(event, "position")}
              type="text"
              id="field"
            />
          </label>
          <label htmlFor="description" className="job-desc">
            <button
              className="bg-yellow add-btn shadow fff radius margin"
              type="button"
              onClick={this.addDesc}
            >
              Add duty
            </button>
            {description.map((desc) => (
              <Duty
                onDelete={this.deleteDesc}
                onChange={this.changeDesc}
                value={desc.text}
                key={desc.id}
                id={desc.id}
              />
            ))}
          </label>
          <label htmlFor="start" className="job-start">
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
          <label htmlFor="end" className="job-end">
            End year:
            <input
              value={end}
              onChange={(event) => this.handleChanges(event, "end")}
              type="number"
              id="end"
              min={this.state.start ? this.state.start : "2030"}
            />
          </label>
          <button
            className="school-delete-btn"
            onClick={() => onDelete(jobId)}
            type="button"
          >
            ❌
          </button>
        </form>
      </div>
    );
  }
}
Job.defaultProps = {
  inputs: {
    company: "",
    position: "",
    description: [""],
    start: "",
  },
};
Job.propTypes = {
  jobId: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  inputs: propTypes.shape({
    company: propTypes.string,
    position: propTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    description: propTypes.arrayOf(any),
    start: propTypes.string,
    end: propTypes.string,
  }),
};

export default Job;
