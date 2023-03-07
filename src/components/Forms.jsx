/* eslint-disable react/destructuring-assignment */
import React from "react";
import propTypes from "prop-types";
import PersonalDataForm from "./PersonalDataForm";
import EducationForm from "./EducationForm";
import JobExpForm from "./JobExpForm";

class Forms extends React.PureComponent {
  constructor(props) {
    super(props);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);

    this.state = {
      left: 0,
      personalData: {},
      education: [],
    };
  }

  handlePersonalDataChange = (newForm) => {
    this.setState({
      personalData: newForm,
    });
  };

  handleEducationChange = (newSchools) => {
    this.setState({
      education: newSchools,
    });
  };

  applyForm = () => {
    const { personalData, education } = this.state;
    this.props.onChange(personalData, education);
  };

  moveLeft() {
    this.setState((prevState) => ({ left: prevState.left + 40 }));
    if (this.state.left >= 0) {
      this.setState({
        left: 0,
      });
    }
  }

  moveRight() {
    this.setState((prevState) => ({ left: prevState.left - 40 }));
    if (this.state.left <= -80) {
      this.setState({
        left: -80,
      });
    }
  }

  render() {
    const { left } = this.state;
    return (
      <div className="forms bg-white">
        <div
          style={{ transform: `translateX(${left}vw)` }}
          className="slider flex-row"
        >
          <PersonalDataForm onChange={this.handlePersonalDataChange} />
          <EducationForm onChange={this.handleEducationChange} />
          <JobExpForm />
        </div>
        <div className="nav-buttons flex-row space-between align-center bold">
          <button
            type="button"
            onClick={this.moveLeft}
            className="prev font2 bg-yellow rounded-button shadow"
          >
            <ion-icon name="chevron-back-outline" />{" "}
          </button>
          <nav className="bg-yellow shadow radius">
            <button
              onClick={this.applyForm}
              type="button"
              className="apply bold font1"
            >
              Apply
            </button>
          </nav>
          <button
            type="button"
            onClick={this.moveRight}
            className="next font2 bg-yellow rounded-button shadow"
          >
            <ion-icon name="chevron-forward-outline" />{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default Forms;

Forms.propTypes = {
  onChange: propTypes.func.isRequired,
};
