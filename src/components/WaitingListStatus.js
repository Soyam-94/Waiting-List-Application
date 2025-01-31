import React, { useState } from 'react';

const WaitingListStatus = ({ waitingList }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Define items per page as a constant

    // Calculate total items based on the waiting list passed as props
    const totalItems = waitingList.length; 
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage; 
    const endIndex = startIndex + itemsPerPage; 

    // Paginate the items using slice method
    const paginatedItems = waitingList.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            <h2 className="text-center">Current Waiting List Status</h2>
            {totalItems === 0 ? (
                <p className="text-center">No one is currently on the waiting list.</p>
            ) : (
                <div>
                    <ul className="list-group">
                        {paginatedItems.map((user, index) => (
                            <li key={user.id} className="list-group-item">
                                <div>
                                    <strong>Name:</strong> {user.name} <br />
                                    <strong>Invite Code:</strong> {user.code} ({user.isValid ? 'Valid' : 'Invalid'}) <br />
                                    <strong>Position:</strong> {index + 1 + (currentPage - 1) * itemsPerPage} <br />
                                    <strong>Estimated Wait Time:</strong> {index + 1 + (currentPage - 1) * itemsPerPage} days
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="pagination mt-3">
                        {currentPage > 1 && (
                            <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                        )}
                        {Array.from({ length: totalPages }, (_, i) => (
                            <button 
                                key={i + 1} 
                                onClick={() => handlePageChange(i + 1)} 
                                disabled={currentPage === i + 1} // Disable button if it's the current page
                            >
                                Page: {i + 1}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default WaitingListStatus;