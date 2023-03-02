import React from "react";
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
    };
  }

  handleStateChange = (newSurname) => {
    this.props.onChange(newSurname);
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
          <PersonalDataForm onChange={this.handleStateChange} />
          <EducationForm />
          <JobExpForm />
        </div>
        <div className="nav-buttons flex-row space-between align-center bold">
          <nav
            onClick={this.moveLeft}
            className="prev font2 bg-yellow rounded-button shadow"
          >
            <ion-icon name="chevron-back-outline" />{" "}
          </nav>
          <nav className="bg-yellow shadow radius">
            <button type="button" className="apply bold font1">
              Apply
            </button>
          </nav>
          <nav
            onClick={this.moveRight}
            className="next font2 bg-yellow rounded-button shadow"
          >
            <ion-icon name="chevron-forward-outline" />{" "}
          </nav>
        </div>
      </div>
    );
  }
}

export default Forms;
