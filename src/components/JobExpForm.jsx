import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import propTypes from "prop-types";
import Job from "./job";

function JobForm(props) {
  const { onChange } = props;
  const [jobs, setJobs] = useState(
    "jobs" in localStorage ? JSON.parse(localStorage.getItem("jobs")).jobs : []
  );

  const handleDelete = (jobKey) => {
    setJobs(jobs.filter((searched) => searched.id !== jobKey));
  };

  const handleJobChanges = (updatedJob) => {
    const newJobs = [...jobs];
    const found = newJobs.findIndex((pos) => pos.id === updatedJob.id);
    newJobs[found] = updatedJob;
    setJobs(newJobs);
  };
  useEffect(() => {
    onChange(jobs);
    localStorage.setItem("jobs", JSON.stringify({ jobs }));
  }, [jobs]);

  return (
    <div className="form">
      <button
        onClick={() => setJobs([{ id: uniqid() }, ...jobs])}
        type="button"
        className="bg-yellow add-btn shadow fff radius margin"
      >
        New job
      </button>
      <div className="list">
        {jobs.map((pos) => (
          <Job
            jobId={pos.id}
            onDelete={handleDelete}
            key={pos.id}
            onChange={handleJobChanges}
            inputs={pos}
          />
        ))}
      </div>
    </div>
  );
}

JobForm.propTypes = {
  onChange: propTypes.func.isRequired,
};

export default JobForm;
