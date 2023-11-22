import React, { useState, useEffect } from 'react';
import '../LeaveRequest/LeaveRequest.css';
import { FaUser } from "react-icons/fa6";
import { MdAdminPanelSettings } from "react-icons/md"

export default function LeaveRequest() {
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('black');
  const [requestStatus, setRequestStatus] = useState(null);
  const [userId, setUserId] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(' Waiting for approval from your administrator!');
    localStorage.setItem('requestStatus', 'pending');
  };
  const handleAccept = () => {
    setMessage(`Accepted! You can leave User ID: ${userId}`);
    // Set status to 'accepted' in local storage
    localStorage.setItem('requestStatus', 'accepted');
    setMessageColor('green');
  };
  const handleDecline = () => {
    setMessage(`Declined! Stay at work!User ID: ${userId}`);
    // Set status to 'declined' in local storage
    localStorage.setItem('requestStatus', 'declined');
    setMessageColor('red');
  };
  useEffect(() => {
    // Apply changes on component mount
    if (requestStatus === 'accepted') {
      // Apply styling for accepted status
      document.body.classList.add('accepted');
    } else if (requestStatus === 'declined') {
      // Apply styling for declined status
      document.body.classList.add('declined');
    }
  }, [requestStatus]);
  const isSubmitDisabled = userId === '';

  return (
    <div className={`Row ${requestStatus === 'accepted' ? 'Accepted' : ''} ${requestStatus === 'declined' ? 'Declined' : ''}`}>
    <div className="absolute mt-52 ml-48  
                    w-80 float-left border-2 p-2  
                    rounded-xl shadow-xl text-xl">


      <form onSubmit={handleSubmit}>
        <h1>Leave Request Form</h1>
        <br></br>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <FaUser size={50} />
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
            onChange={(e) => setUserId(e.target.value)}
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
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </div>
        {message && <p className='LeaveRequest-Message'>{message}</p>}
      </form>

    </div>
    <div className='Admin'>
  <div className='Header-Text'></div>
  <div style={{ display: 'flex', justifyContent: 'center',marginTop:'50px'}}>
          <MdAdminPanelSettings size={50} />
        </div>  
  <div>
    <h1 className='Admin'>Admin Decision for the Leave Request</h1>
    <br>
    </br>
    <h1 align='center'>User ID:</h1>
    <h2 align='center'> {userId}</h2>
  
    <div className='button-container'>
      <div className='buttongreen'>
        <button className='buttongreen' onClick={handleAccept}>ACCEPT</button>
      </div>
      <div className='buttonred'>
        <button className='buttonred' onClick={handleDecline}>DECLINE</button>
      </div>
    </div>
    {userId && <p className='Admin-Message'>User ID: {userId}</p>}
  </div>
</div>
</div>
        
      
    
  );
}