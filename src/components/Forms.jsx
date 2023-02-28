import React from "react";
import PersonalDataForm from "./PersonalDataForm";
import EducationForm from "./EducationForm";
import JobExpForm from "./JobExpForm";

class Forms extends React.PureComponent {
  render() {
    return (
      <div className="forms bg-white">
        <div className="slider flex-row">
          <PersonalDataForm />
          <EducationForm />
          <JobExpForm />
        </div>
        <div className="nav-buttons flex-row space-between align-center bold">
          <nav className="prev font2 bg-yellow rounded-button shadow">
            <ion-icon name="chevron-back-outline" />{" "}
          </nav>
          <nav className="bg-yellow shadow radius">
            <button type="button" className="apply bold font1">
              Apply
            </button>
          </nav>
          <nav className="next font2 bg-yellow rounded-button shadow">
            <ion-icon name="chevron-forward-outline" />{" "}
          </nav>
        </div>
      </div>
    );
  }
}

export default Forms;
