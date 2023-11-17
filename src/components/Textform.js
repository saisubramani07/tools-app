import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        console.log("uppercase"+text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to uppercase','success');
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to lowercase','success');
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('Text cleared','success');
    }
    const handleExtraSpaceClick = ()=>{
        let newText = text.split(/[ ]+/);
        console.log(newText);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed','success');
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to clipboard','success');
    }
    const handleOnClick = (event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>{props.heading}</h2>
            <div class="mb-3">
                <textarea class="form-control" value={text} onChange={handleOnClick} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className='btn btn-primary mx-0.5' onClick={handleUpClick}>Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Lowercase</button>
            <button className='btn btn-primary mx-0.5' onClick={handleCopyClick}>Copy</button>
            <button className='btn btn-primary mx-1' onClick={handleExtraSpaceClick}>Remove extra space</button>
            <button className='btn btn-primary mx-5' onClick={handleClearClick}>Clear</button>
        </div>
        <div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Text summary</h2>
            <p>{text.split(" ").length} word and {text.length} character</p>
        </div>
        </>
    )
}
