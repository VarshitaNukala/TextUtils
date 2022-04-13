import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import Alert from '../Alert/Alert.components.jsx'

export default function NavBar(props) {
  const newMode = props.mode === 'light' ? 'dark' : 'light';

  const changeBackground = (e) => {
    if (props.mode === 'dark') {
      document.body.style.backgroundColor = e.target.value;
      //document.getElementById('myBox').backgroundColor=e.target.value

      document.body.style.color = 'white';
      console.log(document.getElementById('myBox').backgroundColor);
      // Alert('Dark Mode has been enabled Successfully', 'success');
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'rgb(1 35 85)';
      //props.showAlert('Light Mode has been enabled Successfully', 'success');
    }
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={} style={{height:'30px', width:'30px'}}></div>
          </div> */}
          <div>
            <input
              type="color"
              id="head"
              name="head"
              onChange={changeBackground}
            />
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label text-${newMode}`}
              htmlFor="flexSwitchCheckDefault"
            >
              Toggle Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  // title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'default title',
  aboutText: 'default about',
};
