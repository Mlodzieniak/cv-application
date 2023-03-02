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
      form: {},
    };
  }

  handleStateChange = (newForm) => {
    this.setState({ form: newForm });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Forms onChange={this.handleStateChange} />
        <Overview form={this.state.form} />
        <Footer />
      </div>
    );
  }
}

export default App;
