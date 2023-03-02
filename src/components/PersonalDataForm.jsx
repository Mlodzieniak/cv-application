/* eslint-disable react/destructuring-assignment */
import React from "react";

class PersonalDataForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      surname: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      surname: event.target.value,
    });
    this.props.onChange(this.state.surname);
  };

  render() {
    return (
      <div className="form">
        <h1>Personal data</h1>
        <form className="flex-col" method="get">
          <div className="input">
            <label htmlFor="name">Name:</label>
            <input id="name" type="text" />
          </div>
          <div className="input">
            <label htmlFor="surname">Surname:</label>
            <input
              onChange={(event) => this.handleChange(event)}
              value={this.state.surname}
              id="surname"
              type="text"
            />
          </div>
          <div className="input">
            <label htmlFor="email">E-mail:</label>
            <input id="email" type="email" />
          </div>
          <div className="input">
            <label htmlFor="phone">Phone:</label>
            <input id="phone" type="tel" />
          </div>
        </form>
      </div>
    );
  }
}

export default PersonalDataForm;
