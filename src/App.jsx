// import logo from './styles/logo.svg';
import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Overview from "./components/Overview";
import Footer from "./components/Footer";
import Forms from "./components/Forms";

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <Forms />
        <Overview />
        <Footer />
      </div>
    );
  }
}

export default App;
