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
      city: "",
      street: "",
      linked: "",
      about: "",
    };
  }

  componentDidMount() {
    if ("personalData" in localStorage) {
      const data = JSON.parse(localStorage.getItem("personalData"));
      this.setState(
        {
          name: data.name,
          surname: data.surname,
          email: data.email,
          tel: data.tel,
          city: data.city,
          street: data.street,
          linked: data.linked,
          about: data.about,
        },
        () => this.props.onChange(this.state, "personalData")
      );
    }
  }

  handleChange = (event, key) => {
    this.setState(
      {
        [key]: event.target.value,
      },
      () => {
        this.props.onChange(this.state, "personalData");
        localStorage.setItem("personalData", JSON.stringify(this.state));
      }
    );
  };

  render() {
    return (
      <div className="form">
        <form className="flex-col" method="get">
          <div className="input">
            <label htmlFor="name">
              <div className="label">Name:</div>
              <input
                onChange={(event) => this.handleChange(event, "name")}
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
                onChange={(event) => this.handleChange(event, "surname")}
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
                onChange={(event) => this.handleChange(event, "email")}
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
                onChange={(event) => this.handleChange(event, "tel")}
                value={this.state.tel}
                id="phone"
                type="tel"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="city">
              City:
              <input
                onChange={(event) => this.handleChange(event, "city")}
                value={this.state.city}
                id="city"
                type="text"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="street">
              Street:
              <input
                onChange={(event) => this.handleChange(event, "street")}
                value={this.state.street}
                id="street"
                type="text"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="linked">
              Linkedin:
              <input
                onChange={(event) => this.handleChange(event, "linked")}
                value={this.state.linked}
                id="linked"
                type="text"
              />
            </label>
          </div>
          <div className="input">
            <label htmlFor="about">
              About:
              <textarea
                rows="7"
                onChange={(event) => this.handleChange(event, "about")}
                value={this.state.about}
                id="about"
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
