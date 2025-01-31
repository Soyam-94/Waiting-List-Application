import React, { useState } from 'react';

const WaitingList = ({ addToWaitingList }) => {
    const [inviteCode, setInviteCode] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inviteCode && name) {
            addToWaitingList(name, inviteCode);
            setMessage("You've been added to the waiting list!");
            setInviteCode('');
            setName('');
        } else {
            setMessage('Please provide both name and invite code.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="text-center">
                <div className="form-group">
                    <label htmlFor="name">Your Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="inviteCode">Enter Invite Code:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="inviteCode" 
                        value={inviteCode} 
                        onChange={(e) => setInviteCode(e.target.value)} 
                        placeholder="Invite Code"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success join-btn">Join</button>
            </form>
            {message && <p className="mt-2 messege-box">{message}</p>}
        </div>
    );
};

export default WaitingList;