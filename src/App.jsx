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
      surname: "",
    };
  }

  handleStateChange = (newSurname) => {
    this.setState({ surname: newSurname });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Forms onChange={this.handleStateChange} surname={this.state.surname} />
        <Overview surname={this.state.surname} />
        <Footer />
      </div>
    );
  }
}

export default App;
