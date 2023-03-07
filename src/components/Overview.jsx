/* eslint-disable react/forbid-prop-types */
import React from "react";
import propTypes from "prop-types";
import uniqid from "uniqid";

class Overview extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { personalData, education } = this.props;
    return (
      <div className="overview bg-lb">
        <h1>Name: {personalData.name}</h1>
        <h1>Surname: {personalData.surname}</h1>
        <h1>e-mail: {personalData.email}</h1>
        <h1>tel: {personalData.tel}</h1>
        <div>
          {education.map((school) => (
            <div key={uniqid()}>
              {" "}
              <p className="">School name: {school.name}</p>
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
  },
  education: [],
};
Overview.propTypes = {
  personalData: propTypes.shape({
    name: propTypes.string,
    surname: propTypes.string,
    email: propTypes.string,
    tel: propTypes.string,
  }),
  education: propTypes.array,
};

export default Overview;
