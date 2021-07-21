import React, {  } from "react";


const Terms = (props) => {
 
// change checkbox value depending on user 
const changeAllow = event => {
  props.onchange(event.target.checked)
}
    return <section className="checkbox">
      <input type="checkbox" className="allow-terms-checkbox" checked={props.data} onChange={changeAllow} />
      <label className="allow-terms-text">Godkänner vilkoren</label>
    </section>

}
export default Terms;