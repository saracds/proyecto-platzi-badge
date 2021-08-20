import React from 'react';
import './styles/NotFound.css';
import error404 from '../images/404-error-animate.svg'
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="NotFound">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6">
            <h1>Ooops...! 404</h1>
            <h3>Parece que estas perdido</h3>
            <Link className="btn btn-primary btn-lg" to="/">
                Regresemos
            </Link>
          </div>
          <div className="col-12 col-sm-6">
            <img className="" src={error404} alt="nave" />
          </div>
        </div>
      </div>
    </div>
  );
}


