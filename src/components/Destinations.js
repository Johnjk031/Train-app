import React, { Component } from "react";

class Destinations extends Component {
    render() {
   return(
    <section className="grid-destinations">
        <article className="sthlm">
          <h5 className="destination-text">STOCKHOLM</h5>
          <p className="depart">10:30</p>
        </article>

      <article className="img-arr-art">
        <img src={"http://cdn.onlinewebfonts.com/svg/img_423359.png"} className="arrow-img" alt="arrow-img" />
        </article>

        <article className="gbg">
        <h5 className="destination-text">GÖTEBORG</h5>
        <p className="arival">14:45</p>
      </article>
   </section>
   )}
}
export default Destinations;






