import React, { useState } from 'react';
//import Alert from './Alert/Alert.components.jsx'

export default function TextForm(props) {
  const colorButton = props.mode === 'light' ? 'dark' : 'light';
  const handleOnChange = (event) => {
    let userText = event.target.value;
    setText(userText);
  };
  const handleUPClick = () => {
    setText(text.toUpperCase());
    console.log(document.getElementById('head'));
    props.showAlert('Converted To Uppercase', 'success');
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
    props.showAlert('Converted To Lowercase', 'success');
  };

  const handleCapiClick = () => {
    let userInput = text.split(' ');
    for (var i = 0; i < userInput.length; i++) {
      userInput[i] =
        userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1);
    }
    let newText = userInput.join(' ');
    setText(newText);
    props.showAlert('Capitalized Text', 'success');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard', 'success');
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert('Speaking Successful', 'success');
  };

  const handleClearText = () => {
    setText('');
    props.showAlert('Cleared Text', 'success');
  };

  const [text, setText] = useState('');
  // text='new text'//wrong way to change the state
  // setText('new text')//right way
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: props.mode === 'light' ? 'black' : 'white',
              color: props.mode === 'light' ? 'white' : 'black',
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn-${colorButton} my-2`}
          onClick={handleUPClick}
        >
          Convert To Uppercase
        </button>
        <button
          className={`btn btn-${colorButton} mx-2 my-2`}
          onClick={handleLowClick}
        >
          Convert To Lowercase
        </button>
        <button
          className={`btn btn-${colorButton} mx-2 my-2`}
          onClick={handleCapiClick}
        >
          Capitalize Text
        </button>

        <button
          className={`btn btn-${colorButton} mx-2 my-2`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          className={`btn btn-${colorButton} mx-2 my-2`}
          onClick={handleClearText}
        >
          Clear Text
        </button>

        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
      </div>
      <div className="container">
        <h1>Your text summary</h1>
        <h6>
          {/* {text.length == 0 ? 0 : text.match(/(\w+)/g).length} words and{' '} */}
          {text.length == 0
            ? 0
            : text.split(' ').filter((ele) => {
                return ele.length !== 0;
              }).length}{' '}
          words and {text.length} characters
        </h6>
        <h6>
          {text.length == 0 ? 0 : text.match(/(\w+)/g).length * 0.008} minutes
          to read this text
        </h6>
        <h2>Preview</h2>
        <h6>{text.length > 0 ? text : 'Enter text to preview'}</h6>
      </div>
    </>
  );
}
