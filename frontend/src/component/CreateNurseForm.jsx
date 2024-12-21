import React from "react";

function CreateNurseForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="nurseName" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="nurseName"
          placeholder="Enter name"
        />
      </div>
      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateNurseForm;