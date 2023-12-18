import React, { useState } from 'react'
import "./Form.css"

const Form = () => {
    const [text,setText]=useState("");
    const handleChange=(e)=>{
    setText(e.target.value)
    }
    
    const Uppercase=()=>{
        let newText = text.toUpperCase();
        setText(newText);    
    }
    const Lowercase=()=>{
        let newText=text.toLowerCase();
        setText(newText)
    }
    const Clear=()=>{
        setText("")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
     
    }
    
  return (
  <section>
    <div className="body-con">
        <div className="head">
            <h2>Try TextEditor For Free- Word Counter, Character Counter, Remove Extra Spaces</h2>
        </div>
        <div className="form-container">
            <form>
                <textarea className="form-control" value={text} onChange={handleChange} rows="8"></textarea>
            </form>
        </div>
        <div className="button">
        <button className="btn btn-primary mx-1 my-1" onClick={Uppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={Lowercase} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={Clear} >Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Space</button>
        </div>
        <div className="my-3">
        <h2>Your Text Summary</h2>
        <h2>Text Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        </div>
    </div>
  </section>
  )
}

export default Form
