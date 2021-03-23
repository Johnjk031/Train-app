import React, { useState } from "react";
const { forwardRef, useImperativeHandle } = React;


let Trainclass = forwardRef((props, ref) => {
    
        const [value, setValue] = useState("")

    let onChange = (e) =>{
        setValue(e.target.value)
    };

    useImperativeHandle(ref, () => ({

        getTrainClass() {
            console.log(value)
        }
    
      }));

    

        return <section className="train-class">
            <article className="second-class-article">
                <input type="radio" className="second-class" name="second-class" value="second class" onChange={onChange} checked={value === "second class"} />
                <label className="label-text">2:a klass</label>

            </article>
            <article className="first-class-article">
                <input type="radio" className="first-class" name="first-class" value="first class" onChange={onChange} checked={value === "first class"} />
                <label className="label-text">1:a klass</label>
            </article>

        </section>
    })
export default Trainclass;