import React from "react";
import logo from '../assets/images/logo.png'

function DisplayNurses() {
  return (
    <div>
      <div className="d-flex justify-content-center display-container">
        <div className="card nurse-card shadow">
          <img src={logo} width="100px" className="card-img mt-3" />
          <h2 className="card-title text-center mt-3">R.M. Kumarihami</h2>
        </div>

        <div className="card nurse-card shadow">
          <img src={logo} width="100px" className="card-img mt-3" />
          <h2 className="card-title text-center mt-3">R.M. Kumarihami</h2>
        </div>

        <div className="card nurse-card shadow">
          <img src={logo} width="100px" className="card-img mt-3" />
          <h2 className="card-title text-center mt-3">R.M. Kumarihami</h2>
        </div>
      </div>

      <div className="d-flex justify-content-center display-container">
        <div className="card nurse-card shadow">
          <img src={logo} width="100px" className="card-img mt-3" />
          <h2 className="card-title text-center mt-3">R.M. Kumarihami</h2>
        </div>

        <div className="card nurse-card shadow">
          <img src={logo} width="100px" className="card-img mt-3" />
          <h2 className="card-title text-center mt-3">R.M. Kumarihami</h2>
        </div>

        <div className="card nurse-card shadow">
          <img src={logo} width="100px" className="card-img mt-3" />
          <h2 className="card-title text-center mt-3">R.M. Kumarihami</h2>
        </div>
      </div>
    </div>
  );
}

export default DisplayNurses;
