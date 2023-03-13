import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import PersonalDataForm from "./PersonalDataForm";
import EducationForm from "./EducationForm";
import JobExpForm from "./JobExpForm";

function Forms(props) {
  const { onChange } = props;
  const [left, setLeft] = useState(0);
  const [personalData, setPersonalData] = useState({});
  const [education, setEducation] = useState([]);
  const [jobs, setJobs] = useState([]);

  const changePersonalData = (newData) => {
    setPersonalData(newData);
  };
  const changeEducationData = (newData) => {
    setEducation(newData);
  };
  const changeJobs = (newData) => {
    setJobs(newData);
  };

  const moveLeft = () => {
    setLeft(left + 40);
    if (left >= 0) setLeft(0);
  };

  const moveRight = () => {
    setLeft(left - 40);
    if (left <= -80) setLeft(-80);
  };

  useEffect(() => onChange(personalData, education, jobs), []);

  return (
    <div className="forms bg-white">
      <div
        style={{ transform: `translateX(${left}vw)` }}
        className="slider flex-row"
      >
        <PersonalDataForm onChange={changePersonalData} />
        <EducationForm onChange={changeEducationData} />
        <JobExpForm onChange={changeJobs} />
      </div>
      <div className="nav-buttons flex-row space-between align-center bold">
        <button
          type="button"
          onClick={moveLeft}
          className="prev font2 bg-yellow rounded-button shadow"
        >
          <ion-icon name="chevron-back-outline" />{" "}
        </button>
        <nav className="bg-yellow shadow radius">
          <button
            onClick={() => onChange(personalData, education, jobs)}
            type="button"
            className="apply bold font1 "
          >
            Apply
          </button>
        </nav>
        <button
          type="button"
          onClick={moveRight}
          className="next font2 bg-yellow rounded-button shadow"
        >
          <ion-icon name="chevron-forward-outline" />{" "}
        </button>
      </div>
    </div>
  );
}
Forms.propTypes = {
  onChange: propTypes.func.isRequired,
};
export default Forms;
