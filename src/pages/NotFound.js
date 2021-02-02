import React from 'react';
import './styles/NotFound.css';
import error404 from '../images/404-error-animate.svg'

export default function NotFound() {
  return (
    <div className="NotFound">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>Ooops...! 404</h1>
            <h3>Parece que estas perdido</h3>
          </div>
          <div className="col-6">
            <img className="" src={error404} alt="nave" />

          </div>
        </div>
      </div>
    </div>
  );
}


