import React, { Component } from "react";

class NameInput extends Component {
  

  state = {
    firstName : "",
    lastName : ""
  }
    
  changeFirstName = e => {
    this.setState({firstName : e.target.value});
  }

  changeLastName = e => {
    this.setState({lastName : e.target.value});
  }

  logStuff = () => {
    console.log(`${this.state.firstName}`)
    console.log(`${this.state.lastName}`)
  }
  render() {
    return <section className="input-forms">

      <article className="firstname">
        <p className="first-name-text">Förnamn</p>
        <input type="text" className="firstname-input" value={this.state.firstName} onChange={this.changeFirstName}/>
      </article>

      <article className="lastname">
        <p className="last-name-text">Efternamn</p>
        <input type="text" className="lastname-input" value={this.state.lastName} onChange={this.changeLastName} />
      </article>

    </section>
  }
}
export default NameInput;