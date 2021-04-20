import React from 'react';
import Ship from '../../components/Ship/Ship';
import { Link } from 'react-router-dom';
import './MainPage.css'

function MainPage(props) {
    return (
        <div className="MainPage">
            {
              props.allStarships ? (
                props.allStarships.map((p) => (
                  <Link
                    to={{
                      pathname: "/starship",
                      state: p,
                    }}
                    key={p.name}
                  >
                    <Ship key={p.name} name={p.name} />
                  </Link>
                ))
              ) : (
                <p>No Ships</p>
              )
            }
        </div>
    )
}

export default MainPage;