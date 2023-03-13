import React, { useEffect, useState } from "react";
import propTypes, { any } from "prop-types";
import uniqid from "uniqid";
import Duty from "./Duty";

function Job(props) {
  const { jobId, onDelete, onChange, inputs } = props;
  const [company, setCompany] = useState(inputs.company ? inputs.company : "");
  const [position, setPosition] = useState(
    inputs.position ? inputs.position : ""
  );
  const [description, setDescription] = useState(
    inputs.description ? inputs.description : []
  );
  const [start, setStart] = useState(inputs.start ? inputs.start : "");
  const [end, setEnd] = useState(inputs.end ? inputs.end : "");

  // constructor(props) {
  //   super(props);

  //   if (this.props.inputs.description) {
  //     this.state = {
  //       company: this.props.inputs.company,
  //       position: this.props.inputs.position,
  //       description: this.props.inputs.description,
  //       start: this.props.inputs.start,
  //       end: this.props.inputs.end,
  //       id: this.props.jobId,
  //     };
  //   } else {
  //     this.state = {
  //       company: "",
  //       position: "",
  //       description: [],
  //       start: "",
  //       end: "",
  //       id: this.props.jobId,
  //     };
  //   }
  // }
  const changeCompany = (e) => {
    setCompany(e.target.value);
  };
  const changePosition = (e) => {
    setPosition(e.target.value);
  };
  const changeStart = (e) => {
    setStart(e.target.value);
  };
  const changeEnd = (e) => {
    setEnd(e.target.value);
  };

  // handleChanges = (event, key) => {
  //   this.setState(
  //     {
  //       [key]: event.target.value,
  //     },
  //     () => this.props.onChange(this.state)
  //   );
  // };
  const changeDesc = (duty, id) => {
    const index = description.findIndex((desc) => desc.id === id);
    const newArr = [...description];
    newArr[index].text = duty;
    setDescription(newArr);
  };

  // changeDesc = (duty, id) => {
  //   const { description } = this.state;
  //   const index = description.findIndex((desc) => desc.id === id);
  //   const newArr = [...description];
  //   newArr[index].text = duty;
  //   this.setState(
  //     {
  //       description: newArr,
  //     },
  //     () => this.props.onChange(this.state)
  //   );
  // };

  const addDesc = () => {
    setDescription([
      description,
      {
        text: "",
        id: uniqid(),
      },
    ]);
  };
  // addDesc = () => {
  //   this.setState((prevState) => ({
  //     description: [
  //       ...prevState.description,
  //       {
  //         text: "",
  //         id: uniqid(),
  //       },
  //     ],
  //   }));
  // };
  const deleteDesc = (jobKey) => {
    setDescription(description.filter((searched) => searched.id !== jobKey));
  };

  // deleteDesc = (jobKey) => {
  //   const { description } = this.state;
  //   this.setState(
  //     {
  //       description: description.filter((searched) => searched.id !== jobKey),
  //     },
  //     () => this.props.onChange(this.state)
  //   );
  // };
  // //
  //   render() {
  //     const { jobId, onDelete } = this.props;
  //     const { company, position, description, start, end } = this.state;
  useEffect(() => {
    const myJob = { company, position, description, start, end, id: jobId };
    onChange(myJob);
  });
  return (
    <div className="radius bg-lb">
      <form method="get" className="job-form">
        <label htmlFor="jobName" className="job-name">
          Company:
          <input
            value={company}
            onChange={(event) => changeCompany(event, "company")}
            type="text"
            id="jobName"
          />
        </label>
        <label htmlFor="field" className="job-pos">
          Position:
          <input
            value={position}
            onChange={(event) => changePosition(event, "position")}
            type="text"
            id="field"
          />
        </label>
        <label htmlFor="description" className="job-desc">
          <button
            className="bg-yellow add-btn shadow fff radius margin"
            type="button"
            onClick={addDesc}
          >
            Add duty
          </button>
          {description.map((desc) => (
            <Duty
              onDelete={deleteDesc}
              onChange={changeDesc}
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
            onChange={(event) => changeStart(event, "start")}
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
            onChange={(event) => changeEnd(event, "end")}
            type="number"
            id="end"
            min={start || "2030"}
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
// }
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
