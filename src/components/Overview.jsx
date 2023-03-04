import React from "react";
import propTypes from "prop-types";

class Overview extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { form } = this.props;
    return (
      <div className="overview bg-lb">
        <h1>Name: {form.name}</h1>
        <h1>Surname: {form.surname}</h1>
        <h1>e-mail: {form.email}</h1>
        <h1>tel: {form.tel}</h1>
      </div>
    );
  }
}
Overview.defaultProps = {
  form: {
    name: "",
    surname: "",
    email: "",
    tel: "",
  },
};
Overview.propTypes = {
  form: propTypes.shape({
    name: propTypes.string,
    surname: propTypes.string,
    email: propTypes.string,
    tel: propTypes.string,
  }),
};

export default Overview;
