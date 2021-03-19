import React, { Component } from "react";

class Select extends Component {
  
  state = {
   numberValue : "1",
   titleValue : "Ms"
  };
  
  logStuff = () => {
    console.log(`${this.state.numberValue}`)
    console.log(`${this.state.titleValue}`)
  }

  changeNumber = e =>{
    this.setState({numberValue : e.target.value});
  }

  changeTitle = e =>{
    this.setState({titleValue : e.target.value});
  }

  render() {
    return <section className="select-forms">
      <article className="ticket-amount">
        <p className="select-ticket-text">Antal biljetter</p>
        <select className="select" value={this.state.numberValue} onChange={this.changeNumber}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </article>

      <article className="title">
        <p className="select-title-text">Titel</p>
        <select className="select"  value={this.state.titleValue} onChange={this.changeTitle}>
          <option value="Ms">Ms</option>
          <option value="Mr">Mr</option>
          <option value="Annat">Annat</option>
        </select>
      </article>

    </section>

  }
}
export default Select;