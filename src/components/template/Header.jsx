import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'


export default props =>

  <nav className="nav navbar navbar-expand-lg">
    <Link className="navbar-brand" Link to={props.link}>Balanço Patrimonial</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2" id="navbarNavDropdown" >
          <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link className="nav-link" Link to="/registrar"><i className="fa fa-user-plus"></i> Registrar</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" Link to="/login"><i className="fa fa-sign-in"></i> Login</Link>
              </li>
          </ul>
      </div>
    </div>
  </nav>
