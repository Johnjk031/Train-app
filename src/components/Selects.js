import React, { useState } from "react";
const { forwardRef, useImperativeHandle } = React;


const Select = forwardRef((props, ref) => {

  
  // use state to set initial value  
  const [numberValue, setNumberValue] = useState("1")
  const [titleValue, setTitleValue] = useState("Ms")

 // change amount of tickets
  let changeNumber = (e) =>{
    setNumberValue(e.target.value);
  }

  // change title value
  let changeTitle = (e) =>{
    setTitleValue(e.target.value);
  }

  // use ref to callback data from child component
  useImperativeHandle(ref, () => ({

    // amount of tickets
    getAlert: () => {
     
      return(`${numberValue} `)
      
    },

    // title value
    getTitle: () => {
      if (titleValue !== "")
      {
        return(`${titleValue}. `)
      }
      else {
        return(`${titleValue}`)
      }
      
    },

   // correcting grammar
    getGrammar: () => {
      if (numberValue <= 1) {
      return(` biljett till:`)
      }
      else {
        return(` biljetter till:`)
      }
    },






  }));


    return <section className="select-forms">
      <article className="ticket-amount">
        <p className="select-ticket-text">Antal biljetter</p>
        <select className="select" value={numberValue} onChange={changeNumber}>
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
        <select className="select"  value={titleValue} onChange={changeTitle}>
          <option value="Ms">Ms</option>
          <option value="Mr">Mr</option>
          <option value="">Annat</option>
        </select>
      </article>

    </section>

  })

export default Select;