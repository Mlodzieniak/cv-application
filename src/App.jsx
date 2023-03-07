/* eslint-disable react/destructuring-assignment */
// import logo from './styles/logo.svg';
import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import Forms from "./components/Forms";

class App extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      personalData: {},
      education: [],
    };
  }

  handleStateChange = (newPersonalData, newEducation) => {
    this.setState({ personalData: newPersonalData });
    this.setState({ education: newEducation });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Forms onChange={this.handleStateChange} />
        <Overview
          personalData={this.state.personalData}
          education={this.state.education}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
