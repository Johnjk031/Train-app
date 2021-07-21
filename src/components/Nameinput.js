import React, { useState } from "react";
const { forwardRef, useImperativeHandle } = React;


const NameInput = forwardRef((props, ref) => {
  

  
// use state to set initial value
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")


 // set first name depending on user input
  let changeFirstName = e => {
    setFirstName(e.target.value);
  }


  // set last name depending on user input
 let changeLastName = e => {
  setLastName(e.target.value);
  }
  
  // Use refs to send data back from child component
  useImperativeHandle(ref, () => ({

    // send first name back
    getFirstName: () => {
     return(`${firstName.charAt(0).toUpperCase() + firstName.slice(1)}`)
    },

    // send last name back
    getLastName: () => {
      return(`${lastName.charAt(0).toUpperCase() + lastName.slice(1)}`)
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