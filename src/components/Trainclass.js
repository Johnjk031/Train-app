import React, { useState } from "react";
const { forwardRef, useImperativeHandle } = React;


let Trainclass = forwardRef((props, ref) => {
    
      
// use state to set initial value
    const [value, setValue] = useState("")

    
      
// use set value to selected radio button
    let onChange = (e) =>{
        setValue(e.target.value)
    };

    // use ref to callback value
    useImperativeHandle(ref, () => ({

     // return selected class
        getTrainClass() {
            return(`${value}`)
        }
    
      }));

    props = value;

        return <section className="train-class">
            <article className="second-class-article">
                <input type="radio" className="second-class" name="second-class" value="andra klass" onChange={onChange} checked={value === "andra klass"} />
                <label className="label-text">2:a klass</label>

            </article>
            <article className="first-class-article">
                <input type="radio" className="first-class" name="first-class" value="första klass" onChange={onChange} checked={value === "första klass"} />
                <label className="label-text">1:a klass</label>
            </article>

        </section>
    })
export default Trainclass;