import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import propTypes from "prop-types";
import School from "./School";

function EducationForm(props) {
  const { onChange } = props;
  const getFromStorage = () => {
    if ("education" in localStorage) {
      const edu = JSON.parse(localStorage.getItem("education"));
      return edu;
    }
    return [];
  };
  const [schools, setSchools] = useState(getFromStorage());

  const saveToStorage = () => {
    localStorage.setItem("education", JSON.stringify(schools));
  };
  useEffect(() => {
    getFromStorage();
  }, []);

  useEffect(() => {
    onChange(schools, "education");
    saveToStorage();
  }, [schools]);

  const handleDelete = (schoolKey) => {
    setSchools(schools.filter((searched) => searched.id !== schoolKey));
  };

  const handleSchoolChanges = (updatedSchool) => {
    const newSchools = [...schools];
    const found = newSchools.findIndex((pos) => pos.id === updatedSchool.id);
    newSchools[found] = updatedSchool;
    setSchools(newSchools);
  };

  return (
    <div className="form">
      <button
        onClick={() => setSchools([{ id: uniqid() }, ...schools])}
        type="button"
        className="bg-yellow add-btn shadow fff radius margin"
      >
        New school
      </button>
      <div className="list">
        {schools.map((pos) => (
          <School
            schoolId={pos.id}
            onDelete={handleDelete}
            key={pos.id}
            onChange={handleSchoolChanges}
            inputs={pos}
          />
        ))}
      </div>
    </div>
  );
}

EducationForm.propTypes = {
  onChange: propTypes.func.isRequired,
};

export default EducationForm;
