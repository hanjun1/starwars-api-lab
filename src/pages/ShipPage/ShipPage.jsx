import React from 'react';
import { Link, Redirect } from 'react-router-dom'

function ShipPage(props) {
    return (
        <div>
            {props.location.state ? (
                <div>
                    <p>Name: {props.location.state.name}</p>
                    <p>Model: {props.location.state.model}</p>
                    <Link to='/'>Return</Link>
                </div>
            ) : (
                <Redirect to='/'/>
            )}
        </div>
    )
}

export default ShipPage;