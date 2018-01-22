import React from 'react';
import ReactDOM from 'react-dom';

const DropDown = () => {
    return (
            <div className="dropdown">
                <p>Sort by:</p>
                <h4>Peg Score</h4>
                <div className="dropdown-content">
                    <h5>Artist</h5>
                    <h5>Publisher</h5>
                </div>
            </div>
    )
}
export default DropDown