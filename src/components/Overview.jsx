/* eslint-disable react/forbid-prop-types */
import React from "react";
import propTypes from "prop-types";
import uniqid from "uniqid";

class Overview extends React.PureComponent {
  render() {
    const { personalData, education, jobs } = this.props;
    return (
      <div className="overview bg-white">
        <div className="names">
          <h1>{personalData.name}</h1>
          <h1>{personalData.surname}</h1>
        </div>
        <div className="email">
          <h3>E-mail </h3>
          <p>{personalData.email}</p>
        </div>
        <div className="phone">
          <h3>Tel </h3>
          <p>{personalData.tel}</p>
        </div>
        <p>{personalData.about}</p>
        <div className="experience">
          {jobs.map((job) => (
            <div className="job" key={uniqid()}>
              {" "}
              <p className="years">
                {job.start} - {job.end}
              </p>
              <div className="job-main">
                <p className="">{job.position}</p>
                <p className="">{job.company}</p>
                <ul>
                  {job.description.map((desc) => (
                    <li key={uniqid()} className="duty">
                      {desc.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="education">
          {education.map((school) => (
            <div className="school" key={uniqid()}>
              {" "}
              <p className="">School name: {school.name}</p>
              <p className="">Field of study: {school.fos}</p>
              <p className="">Degree: {school.degree}</p>
              <p className="">Start year: {school.start}</p>
              <p className="">End year: {school.end}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
Overview.defaultProps = {
  personalData: {
    name: "",
    surname: "",
    email: "",
    tel: "",
    about: "",
  },
  education: [],
  jobs: [],
};
Overview.propTypes = {
  personalData: propTypes.shape({
    name: propTypes.string,
    surname: propTypes.string,
    email: propTypes.string,
    tel: propTypes.string,
    about: propTypes.string,
  }),
  education: propTypes.array,
  jobs: propTypes.array,
};

export default Overview;
