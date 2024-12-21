import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';


function CreateNurseForm({onClose}) {

  const [formData,setFormData] = useState({
     name:""
  })
  const {name} = formData

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/nurse/create",formData);

      setFormData(response.data);
      console.log(response.data);
      onClose();

      toast.success('Nurse created successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      
      setTimeout(()=>{
        window.location.reload();
      },3500)
      
    } catch (error) {
      toast.error('please add a name', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      console.log({msg:error.message})
    }
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="nurseName" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={name}
          onChange={(e)=>setFormData({...formData,name:e.target.value})}
          id="nurseName"
          placeholder="Enter name"
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CreateNurseForm;