import React, { Component } from "react";

class Terms extends Component {
 
 state = {
   doesAllow : false
 };

 changeAllow = e => {
   this.setState({doesAllow : e.target.checked})
 }

 logStuff = () => {
  console.log(`Does the person allow the terms? ${this.state.doesAllow}`)
}
 
  render() {
    const {doesAllow} = this.state;
    return <section className="checkbox">
      <input type="checkbox" className="allow-terms-checkbox" checked={doesAllow} onChange={this.changeAllow} />
      <label className="allow-terms-text">Godkänner vilkoren</label>
    </section>
  }
}
export default Terms;