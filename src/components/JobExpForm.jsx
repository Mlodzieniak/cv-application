/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import uniqid from "uniqid";
import propTypes from "prop-types";
import Job from "./job";

class JobForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
  }

  componentDidMount() {
    if ("jobs" in localStorage) {
      const saved = JSON.parse(localStorage.getItem("jobs"));
      this.setState(
        {
          jobs: saved.jobs,
        },
        () => {
          const { onChange } = this.props;
          const { jobs } = this.state;
          onChange(jobs, "jobs");
        }
      );
    }
  }

  handleDelete = (jobKey) => {
    const { jobs } = this.state;
    this.setState(
      {
        jobs: jobs.filter((searched) => searched.id !== jobKey),
      },
      () => {
        // eslint-disable-next-line react/destructuring-assignment
        // eslint-disable-next-line react/destructuring-assignment
        this.props.onChange(this.state.jobs, "jobs");
      }
    );
  };

  handleJobChanges = (updatedJob) => {
    const { jobs } = this.state;
    const newJobs = [...jobs];
    const found = newJobs.findIndex((pos) => pos.id === updatedJob.id);
    newJobs[found] = updatedJob;
    this.setState(
      {
        jobs: newJobs,
      },
      () => {
        // eslint-disable-next-line react/destructuring-assignment
        // eslint-disable-next-line react/destructuring-assignment
        this.props.onChange(this.state.jobs, "jobs");
        localStorage.setItem("jobs", JSON.stringify(this.state));
      }
    );
  };

  render() {
    const { jobs } = this.state;

    return (
      <div className="form">
        <button
          onClick={() =>
            this.setState((prevState) => ({
              jobs: [{ id: uniqid() }, ...prevState.jobs],
            }))
          }
          type="button"
          className="bg-yellow add-btn shadow fff radius margin"
        >
          New job
        </button>
        <div className="list">
          {jobs.map((pos) => (
            <Job
              jobId={pos.id}
              onDelete={this.handleDelete}
              key={pos.id}
              onChange={this.handleJobChanges}
              inputs={pos}
            />
          ))}
        </div>
      </div>
    );
  }
}

JobForm.propTypes = {
  onChange: propTypes.func.isRequired,
};

export default JobForm;
