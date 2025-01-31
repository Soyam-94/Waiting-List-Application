import React from 'react';

const WaitingListStatus = ({ waitingList }) => {
    return (
        <React.Fragment>
            <div>
                <h3 className="text-center mb-3">Current Waiting List Status</h3>
                {waitingList.length === 0 ? (
                    <p className="text-center mb-3">No one is currently on the waiting list.</p>
                ) : (
                    <ul className="list-group">
                        {waitingList.map((user, index) => (
                            <li key={user.id} className="list-group-item">
                                <div>
                                    <strong>Name:</strong> {user.name} <br />
                                    <strong>Invite Code:</strong> {user.code} ({user.isValid ? 'Valid' : 'Invalid'}) <br />
                                    <strong>Position:</strong> {index + 1} <br />
                                    <strong>Estimated Wait Time:</strong> {index + 1} days
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </React.Fragment>
    );
};

export default WaitingListStatus;