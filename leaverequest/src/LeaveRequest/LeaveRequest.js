import React, { useState } from 'react';
import '../LeaveRequest/LeaveRequest.css';
import { FaUser } from "react-icons/fa6";

export default function LeaveRequest() {
  const [message, setMessage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(' Waiting for approval from your administrator!');
  };

  return (
    
    <div className="absolute mt-52 ml-48  
                    w-80 float-left border-2 p-2  
                    rounded-xl shadow-xl text-xl">
                       

      <form onSubmit={handleSubmit}>
      <h1>Leave Request Form</h1>
      <br></br> 
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <FaUser size={50}  />
      </div>
      
        <div>
          <label className="text-sm">Name*</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300  
                            text-sm rounded-lg focus:border-blue-500 
                            w-full p-2.5"
            type="text"
            placeholder="Enter your Name"
            required
          />
          <br></br>
          <label className="text-sm">LastName*</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300  
                            text-sm rounded-lg focus:border-blue-500 
                            w-full p-2.5"
            type="text"
            placeholder="Enter your LastName"
            required
          />
          <br></br>
          <label className="text-sm">ID*</label>
          <br></br>
          <input
            className="bg-gray-50 border border-gray-300  
                            text-sm rounded-lg focus:border-blue-500 
                            w-full p-2.5"
            type="text"
            placeholder="Enter your ID"
            required
          />
          <br></br>
          <label className="text-sm">Leave Type*</label>
          <br></br>
          <select
            className="bg-gray-50 border border-gray-300  
                            text-gray-600 text-sm rounded-lg  
                            focus:border-blue-500 w-full p-2.5"
            required
          >
            <option value="Sick">Sick Leave</option>
            <option value="Travel">Travel Leave</option>
            <option value="Emergency">Emergency Leave</option>
            <option value="Others">Others</option>
          </select>
          <br></br>
          <button
            className="bg-blue-500 hover:bg-blue-700  
                            text-white font-bold  
                            py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
        {message && <p className='LeaveRequest-Message'>{message}</p>}
      </form>
     
    </div>
  );
}