/* eslint-disable react/destructuring-assignment */
import React from "react";
import propTypes from "prop-types";

class PersonalDataForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      tel: "",
    };
  }

  handleNameChange = (event) => {
    this.setState(
      {
        name: event.target.value,
      },
      () => this.props.onChange(this.state)
    );
  };

  handleSurnameChange = (event) => {
    this.setState(
      {
        surname: event.target.value,
      },
      () => this.props.onChange(this.state)
    );
  };

  handleEmailChange = (event) => {
    this.setState(
      {
        email: event.target.value,
      },
      () => this.props.onChange(this.state)
    );
  };

  handleTelChange = (event) => {
    this.setState(
      {
        tel: event.target.value,
      },
      () => this.props.onChange(this.state)
    );
  };

  render() {
    return (
      <div className="form">
        <h1>Personal data</h1>
        <form className="flex-col" method="get">
          <div className="input">
            <label htmlFor="name">
              Name:
              <input
                onChange={(event) => this.handleNameChange(event)}
                value={this.state.name}
                id="name"
                type="text"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="surname">
              Surname:
              <input
                onChange={(event) => this.handleSurnameChange(event)}
                value={this.state.surname}
                id="surname"
                type="text"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="email">
              E-mail:
              <input
                onChange={(event) => this.handleEmailChange(event)}
                value={this.state.email}
                id="email"
                type="email"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="phone">
              Phone:
              <input
                onChange={(event) => this.handleTelChange(event)}
                value={this.state.tel}
                id="phone"
                type="tel"
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}
PersonalDataForm.propTypes = {
  onChange: propTypes.func.isRequired,
};
export default PersonalDataForm;
