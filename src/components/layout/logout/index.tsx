import React from "react";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSE } from "../../../SEProvider";

const Logout = () =>{

  const se = useSE()
  
  const handleLogout = ()=>{
    se.actions.logout();
  }
  
  return (
    <ul className="navbar-nav justify-content-right">
      <li className="nav-item">
        <a onClick={handleLogout} className="nav-link" id="signOut">
          <FontAwesomeIcon icon={faSignOutAlt}/> Sair
        </a>
      </li>
    </ul>
  )
}

export default Logout