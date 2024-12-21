import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import axios from "axios";
function DisplayNurses() {
  const [nurses, setNurses] = useState([]);

  useEffect(() => {
    getAllNurses();
  }, []);

  const getAllNurses = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/nurse/");
      setNurses(response.data);
      console.log(response.data);
    } catch (error) {
      console.log({ msg: error.message });
    }
  };
  return (
    <div className="container">
      <div className="row">
        {nurses.map((nurse) => (
          <div className="col-md-4" key={nurse._id}>
            <div className="card nurse-card shadow">
              <img
                src={logo}
                width="100px"
                className="card-img mt-3"
                alt="nurse logo"
              />
              <h2 className="card-title text-center mt-3">{nurse.name}</h2>

              <select
                className="form-select w-75 align-self-center mt-3 mb-3"
                aria-label="Default select example"
              >
                <option selected="">Select Duty Type</option>
                <option value={1}>Morning</option>
                <option value={2}>Afternoon</option>
                <option value={3}>Night</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayNurses;
