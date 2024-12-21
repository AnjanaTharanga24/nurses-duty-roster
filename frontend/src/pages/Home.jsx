import React, { useState } from "react";
import "../css/home.css";
import CreateNurseForm from "../component/CreateNurseForm";
import DisplayNurses from "../component/DisplayNurses";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import CSS for DatePicker

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <div className="d-flex mt-4 mb-5">
             <div className="d-flex calendar-container mt-4">
                <h4 className="mt-2">Select Date</h4>
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="form-control ms-3"
                  dateFormat="MMMM d, yyyy" 
                />
              </div>
        <button
          className="create-nurse-button btn btn-success"
          onClick={handleShow}
        >
          <i className="fa fa-plus p-2" aria-hidden="true"></i>
          Create Nurse
        </button>
      </div>

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${showModal ? "show" : ""}`}
        style={{ display: showModal ? "block" : "none" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create New Nurse</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <CreateNurseForm onClose={handleClose} />
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {showModal && (
        <div className="modal-backdrop fade show" onClick={handleClose}></div>
      )}

      <div className="display-container">
        <DisplayNurses />
      </div>
    </div>
  );
}

export default Home;
