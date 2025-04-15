import React from "react";
import './onnyoku.css';
import { NavLink } from "react-router-dom";

function Onnyoku(){
    return(
        <div className="onyoku">
      <NavLink to="/" className="nav-item">
        下から
      </NavLink>
        </div>
    )
}

export default Onnyoku;