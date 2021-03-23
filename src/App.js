import './App.css';
import React, { useRef, useState } from "react";
import Terms from './components/allowTerms';
import Destinations from './components/Destinations';
import Header from './components/header';
import NameInput from './components/Nameinput';
import Select from './components/Selects';
import Trainclass from './components/Trainclass';


let App = () => {


let logShit = (e) => {
e.preventDefault()
  console.log('test')
  if (checked === false || nameRef.current.getFirstName() === '<p> </p>'){
    console.log('fyll i')
  }
  else {
  trainClassRef.current.getTrainClass()
  selectRef.current.getAlert()
  console.log(nameRef.current.getFirstName())
  console.log(nameRef.current.getLastName())
}
}


const trainClassRef = useRef();
const selectRef = useRef();
const nameRef = useRef();



const [checked, setAllow] = useState(false)

 let onchange = (data) => {
   setAllow(data)
 }
console.log(checked)




  return (
    <div className="App">
    <section className="frame">
      <Header />
      <Destinations />
      <img src={"http://cdn.onlinewebfonts.com/svg/img_423359.png"} className="arrow-img" alt="arrow-img" />
      <Trainclass ref={trainClassRef} />
      <Select ref={selectRef}/>
      <NameInput ref={nameRef} />
    <Terms data={checked} onchange={(e) => { onchange(e)}} />


    <section className="submit-button-section">
     <form>
      <button type="submit" className="submit-button" onClick={logShit}>Boka biljetter</button>
      </form>
    </section>

    </section>

    </div>
  );
}

export default App;
