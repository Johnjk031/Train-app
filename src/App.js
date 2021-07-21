import './App.css';
import React, { useRef, useState } from "react";
import Terms from './components/allowTerms';
import Destinations from './components/Destinations';
import Header from './components/header';
import NameInput from './components/Nameinput';
import Select from './components/Selects';
import Trainclass from './components/Trainclass';


function App() {


  
// initialise ref variables
  const trainClassRef = useRef();
  const selectRef = useRef();
  const nameRef = useRef();

  
 
// make shure cs allow terms
  const [checked, setAllow] = useState(false);

  let onchange = (data) => {
    setAllow(data)
}


// when cs submits & is ready to book
  const [booked, setBooked] = useState(false);




// change state to true if cs provided valid information
  let bookIt = () => {
    if (checked
      &&
      trainClassRef.current.getTrainClass() !== ""
      &&
      nameRef.current.getFirstName() !== ""
      &&
      nameRef.current.getLastName() !== "") {
      setBooked(true);

    }

  };

  // refresh page
  const refreshPage = ()=>{
    window.location.reload();
 }


                  // before submit
  return (
    <div className="App">
      <section className="frame">
        <Header />
        <Destinations />
        <section className={booked ? 'hide' : 'sec-wrapper'}>
          <Trainclass ref={trainClassRef} />
          <Select ref={selectRef} />
          <NameInput ref={nameRef} />
          <Terms data={checked} onchange={(e) => { onchange(e); } } />
     

          <section className="submit-button-section">
            <form>
              <button type="button"
                className="submit-button"
                onClick={bookIt}>Boka biljetter</button>
            </form>
          </section>
        </section>
      </section>


                {/* after submit */}
      <section className={booked ? 'data' : 'hide'}> 


        <p className="data-hide">{booked ? `${selectRef.current.getAlert()
          + trainClassRef.current.getTrainClass()
          + selectRef.current.getGrammar()} 
        `
          : ""}</p>

        <p className="title-class">{booked ? selectRef.current.getTitle() : ""}</p>

        <p className="name-class">{booked ? `${nameRef.current.getFirstName()
          + " " + nameRef.current.getLastName()}
    `
          : ""}</p>

         <section className="qr-section">
         <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"} className="qr-code" alt="qr-code" />
         </section>

         <button type="button"
                onClick={refreshPage}
                id="refresh">
                  Ny biljett</button>

      </section>


    </div>
  );
}

export default App;
