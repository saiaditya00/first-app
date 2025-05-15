
import React, { useState } from 'react'



export default function Textform(props) {
    const [text, setText] = useState("Enter text here");

    // setText("enter another text here");

    const handleUpClick = () => {
        // console.log("Uppercase was clicked "+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);

    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
    }


    return (
        <>
            <div className='container' >
                <h1>{props.headling} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-secondary" onClick={handleClearClick}>Reset</button>
            </div>
            <div className='container my-3 '>
                <h1> Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} charaters</p>
                <h2>preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}
