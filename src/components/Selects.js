import React, { useState } from "react";
const { forwardRef, useImperativeHandle } = React;

const Select = forwardRef((props, ref) => {

  
  // state = {
  // numberValue : "1",
  // titleValue : "Ms"
  //   };
  
  const [numberValue, setNumberValue] = useState("1")
  const [titleValue, setTitleValue] = useState("Ms")


  let changeNumber = (e) =>{
    setNumberValue(e.target.value);
  }

  let changeTitle = (e) =>{
    setTitleValue(e.target.value);
  }

  useImperativeHandle(ref, () => ({

    getAlert() {
      if (numberValue <= 1) {
      console.log(`${numberValue} ticket for you ${titleValue}`)
      }
      else {
        console.log(`${numberValue} tickets for you ${titleValue}`)
      }
    }

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
          <option value="Annat">Annat</option>
        </select>
      </article>

    </section>

  })

export default Select;