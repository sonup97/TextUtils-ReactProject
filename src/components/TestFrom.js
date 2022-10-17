import React, { useState } from "react";

// console.log(useState('Enter text here2');)

export default function TestFrom(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        console.log("Uppercase was clicked"+text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    // const handleCapitalize = () => {
    //     // console.log("Capitilized was clicked"+text);
    //     let lis = text.split(' ');
    //     console.log(lis);
    //     let newText;
    //     // for (let li in lis ){
    //     //        t = (li[0].toUpperCase + li.slice(1,li.length));
    //     //        newText = newText + t;
    //     // }
    //     // console.log(lis[1].toUpperCase());
    //     // console.log(lis.length)
    //     for (let i = 0; i < lis.length; i++) {
    //         // console.log("in for loopS");
    //         console.log(i.slice(1,2));
    //         newText += (i[0].toUpperCase()); //+ i.slice(1,i.length));
    //         // console.log(newText);
    //       }
    //     //   
    //     //   console.log(newText);
    //     setText(newText);
    // }
    const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) === 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
    }
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)

    }
    const [text ,setText] = useState('Enter text here2');
    
    // text = "new text"  // Wrong way to change the state
    // setText("new text"); // Correct way to change the  state  
    return (
        <>  <div className="container">
        <form>
            <h1>{props.heading} </h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
            {/* <buttton className="btn btn-primary mx-2" onClick={handleCapitalize}>Convert to Capitalize</buttton> */}
            <button className="btn btn-primary mx-2" onClick={onAlternatingCase}>Convert to AlternatingCase</button>

      </form>
    </div>
    <div className="container my-4">
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length } Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
      
    );
}
