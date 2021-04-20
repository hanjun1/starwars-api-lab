import React from 'react';
import './Ship.css';

function Ship(props) {
    return (
        <div className="Ship">
            <p>{props.name}</p>
        </div>
    );
}

export default Ship;