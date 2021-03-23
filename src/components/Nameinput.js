import React, { useState } from "react";
const { forwardRef, useImperativeHandle } = React;


const NameInput = forwardRef((props, ref) => {
  

  /*state = {
    firstName : "",
    lastName : ""
  }
  */  

 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")

  let changeFirstName = e => {
    setFirstName(e.target.value);
  }

 let changeLastName = e => {
  setLastName(e.target.value);
  }
  
  useImperativeHandle(ref, () => ({

    getFirstName: () => {
     return(`${firstName}`)
    },
    getLastName: () => {
      return(`<p>${lastName}</p>`)
     }


  }));
  
 



    return <section className="input-forms">

      <article className="firstname">
        <p className="first-name-text">Förnamn</p>
        <input type="text" className="firstname-input" value={firstName} onChange={changeFirstName}/>
      </article>

      <article className="lastname">
        <p className="last-name-text">Efternamn</p>
        <input type="text" className="lastname-input" value={lastName} onChange={changeLastName} />
      </article>

    </section>
})
export default NameInput;