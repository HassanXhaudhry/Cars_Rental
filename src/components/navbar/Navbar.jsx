import React, { Fragment } from "react";
import "./Navbar.css";
import {  BiSearch} from "react-icons/bi";
import heart from "../../images/heart.png";
import bell from "../../images/bell.png";
import filter from "../../images/filter.png";
import settings from "../../images/settings.png";
import img1 from '../../images/img1.jpg';

const Navbar = () => {

  return (
    <Fragment>
  
        <div className="navbar">
          <div className="navbar-container container">
            
            <h2 className="heading" >MORENT</h2>

            <div className="input-field">
            <button className="input-filed-icon"><BiSearch/></button>
            <input className="input-field-inner" type="text" placeholder="Type to search" />
          <span className="filterimg"> <img src={filter}  alt="" width="18px" height="18px"/></span>
            </div>

            <div className="nav-right">
    
              <ul className=  "nav-menu">
                <li className="nav-item">
               <img style={{marginTop:"10px"}} src={heart} alt="" width="20px" height="20px" />
                </li>
                <li className="nav-item">
                <img style={{marginTop:"10px"}} src={bell} alt="" width="20px" height="20px" />
                </li>
                <li className="nav-item">
                <img style={{marginTop:"8px"}} src={settings} alt="" width="25px" height="25px" />
                </li>
                <li >
               <img style={{borderRadius:"50%", cursor:"pointer"}} src={img1} alt="" width="43px" height="43px" />
                </li>
                
                
              </ul>
            </div>
          </div>
        </div>
    </Fragment>
  );
};

export default Navbar;
