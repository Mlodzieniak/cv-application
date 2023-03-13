/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

function PersonalDataForm(props) {
  const { onChange } = props;

  const propCheck = (type) => {
    const data = JSON.parse(localStorage.getItem("personalData"));
    return data[type] ? data[type] : "";
  };
  const [name, setName] = useState(propCheck("name"));
  const [surname, setSurname] = useState(propCheck("surname"));
  const [email, setEmail] = useState(propCheck("email"));
  const [tel, setTel] = useState(propCheck("tel"));
  const [city, setCity] = useState(propCheck("city"));
  const [street, setStreet] = useState(propCheck("street"));
  const [linked, setLinked] = useState(propCheck("linked"));
  const [about, setAbout] = useState(propCheck("about"));

  // constructor(props) {
  //   super(props);
  //    = {
  //     name: "",
  //     surname: "",
  //     email: "",
  //     tel: "",
  //     city: "",
  //     street: "",
  //     linked: "",
  //     about: "",
  //   };
  // }

  // componentDidMount() {
  //   if ("personalData" in localStorage) {
  //     const data = JSON.parse(localStorage.getItem("personalData"));
  //     this.setState(
  //       {
  //         name: data.name,
  //         surname: data.surname,
  //         email: data.email,
  //         tel: data.tel,
  //         city: data.city,
  //         street: data.street,
  //         linked: data.linked,
  //         about: data.about,
  //       },
  //       () => this.props.onChange(, "personalData")
  //     );
  //   }
  // }

  // const changeName = (e)=>{setName(e.target.value)}
  // const changeSurname = (e)=>{setSurname(e.target.value)}
  // const changeEmail = (e)=>{setEmail(e.target.value)}
  // const changeTel = (e)=>{setTel(e.target.value)}
  // const changeCity = (e)=>{setCity(e.target.value)}
  // const changeStreet = (e)=>{setStreet(e.target.value)}
  // const changeLinked = (e)=>{setLinked(e.target.value)}
  // const changeAbout = (e)=>{setName(e.target.value)}

  // handleChange = (event, key) => {
  //   this.setState(
  //     {
  //       [key]: event.target.value,
  //     },
  //     () => {
  //       this.props.onChange(, "personalData");
  //       localStorage.setItem("personalData", JSON.stringify());
  //     }
  //   );
  // };
  useEffect(() => {
    const obj = { name, surname, email, tel, city, street, linked, about };
    onChange(obj);
    localStorage.setItem("personalData", JSON.stringify(obj));
  }, [name, surname, email, tel, city, street, linked, about]);
  return (
    <div className="form">
      <form className="flex-col" method="get">
        <div className="input">
          <label htmlFor="name">
            <div className="label">Name:</div>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
              id="name"
              type="text"
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="surname">
            Surname:
            <input
              onChange={(e) => {
                setSurname(e.target.value);
              }}
              value={surname}
              id="surname"
              type="text"
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="email">
            E-mail:
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              id="email"
              type="email"
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="phone">
            Phone:
            <input
              onChange={(e) => {
                setTel(e.target.value);
              }}
              value={tel}
              id="phone"
              type="tel"
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="city">
            City:
            <input
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
              id="city"
              type="text"
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="street">
            Street:
            <input
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              value={street}
              id="street"
              type="text"
            />
          </label>
        </div>
        <div className="input">
          <label htmlFor="linked">
            Linkedin:
            <input
              onChange={(e) => {
                setLinked(e.target.value);
              }}
              value={linked}
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
              onChange={(e) => {
                setAbout(e.target.value);
              }}
              value={about}
              id="about"
              type="tel"
            />
          </label>
        </div>
      </form>
    </div>
  );
}
PersonalDataForm.propTypes = {
  onChange: propTypes.func.isRequired,
};
export default PersonalDataForm;
