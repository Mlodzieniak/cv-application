/* eslint-disable react/forbid-prop-types */
import React from "react";
import propTypes from "prop-types";
import uniqid from "uniqid";

function Overview(props) {
  const { personalData, education, jobs } = props;

  return (
    <div className="overview bg-white">
      <div className="names">
        <h1>{personalData.name}</h1>
        <h1>{personalData.surname}</h1>
      </div>
      <div className="adress">
        <h3>Address</h3>
        <p>{personalData.city}</p>
        <p>{personalData.street}</p>
      </div>

      <div className="phone">
        <h3>Tel </h3>
        <p>{personalData.tel}</p>
      </div>
      <div className="email">
        <h3>E-mail </h3>
        <p>{personalData.email}</p>
      </div>
      <div className="linked">
        <h3>Linked</h3>
        <p>{personalData.linked}</p>
      </div>
      <p>{personalData.about}</p>

      <div className="education">
        <h3 className="span">Education</h3>

        {education.map((school) => (
          <div className="school" key={uniqid()}>
            <p className="cv-years bold">
              {school.start} - {school.end}
            </p>
            <div>
              <p className="bold">{school.name}</p>
              <p className="">{school.fos}</p>
              <p className="">{school.degree}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="experience">
        <h3 className="span">Experience</h3>
        <span />
        {jobs.map((job) => (
          <div className="job" key={uniqid()}>
            {" "}
            <p className="cv-years bold">
              {job.start} - {job.end}
            </p>
            <div className="job-main">
              <p className="bold">{job.company}</p>

              <p className="">{job.position}</p>
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
    </div>
  );
}
Overview.defaultProps = {
  personalData: {
    name: "",
    surname: "",
    email: "",
    tel: "",
    city: "",
    street: "",
    linked: "",
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
    city: propTypes.string,
    street: propTypes.string,
    linked: propTypes.string,
    about: propTypes.string,
  }),
  education: propTypes.array,
  jobs: propTypes.array,
};

export default Overview;
