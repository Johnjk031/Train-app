import React, { Component } from "react";

class Trainclass extends Component {
    constructor(props) {
        super(props);
    this.state = {
        value : ""
    };
}
    onChange = e =>{
        this.setState({value : e.target.value})
    };

    logStuff = () => {
        console.log(`${this.state.value}`)
      }

    render() {
        return <section className="train-class">
            <article className="second-class-article">
                <input type="radio" className="second-class" name="second-class" value="second class" onChange={this.onChange} checked={this.state.value === "second class"} />
                <label className="label-text">2:a klass</label>

            </article>
            <article className="first-class-article">
                <input type="radio" className="first-class" name="first-class" value="first class" onChange={this.onChange} checked={this.state.value === "first class"} />
                <label className="label-text">1:a klass</label>
            </article>

        </section>
    }
}
export default Trainclass;