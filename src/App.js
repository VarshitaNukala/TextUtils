import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar.components.jsx';
import Alert from './components/Alert/Alert.components.jsx';
import TextForm from './components/TextForm/TextForm.components.jsx';
import About from './components/About/About.component.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css';

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(1 35 85)';
      document.body.style.color = 'white';
      document.title = 'TextUtils - Dark Mode';
      showAlert('Dark Mode has been enabled Successfully', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'rgb(1 35 85)';
      showAlert('Light Mode has been enabled Successfully', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };
  return (
    <>
      <Router>
        <NavBar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About"
        />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
