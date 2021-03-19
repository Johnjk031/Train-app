import './App.css';
import React, { Component } from "react";
import Terms from './components/allowTerms';
import Destinations from './components/Destinations';
import Header from './components/header';
import NameInput from './components/Nameinput';
import Select from './components/Selects';
import Trainclass from './components/Trainclass';


class App extends Component {
  render() {

let logShit = (e) => {
e.preventDefault()
  this.refs.train.logStuff()
  this.refs.select.logStuff()
  this.refs.name.logStuff()
  this.refs.allow.logStuff()
}

  return (
    <div className="App">
    <section className="frame">
      <Header />
      <Destinations />
      <img src={"http://cdn.onlinewebfonts.com/svg/img_423359.png"} className="arrow-img" alt="arrow-img" />
      <Trainclass ref="train"/>
      <Select ref="select"/>
      <NameInput ref="name"/>
    <Terms ref="allow"/>


    <section className="submit-button-section">
     <form>
      <button type="submit" className="submit-button" onClick={logShit}>Boka biljetter</button>
      </form>
    </section>

    </section>
    </div>
  );
}
}
export default App;
