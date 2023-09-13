import { Component, useEffect } from "react";
import "./uidesign.css";
import React, { useState } from 'react';
import App from "../App";
import person1 from './person1.jpeg';
import ac from './ac.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { faAirConditioner } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faDroplet } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-regular-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';




function UiDesign() 
    {
       
        
      return(
    <>
    <div className=" header">
        <div className="photo">
            <img src={person1} alt="person1"/>
            <div className="detail">
                <div className="in-detail">
                <h1>Hi,KARAN M</h1>
                <h5>7 device active</h5>
            </div>
            </div>
        </div>
        <div className="things">
            <h1><FontAwesomeIcon icon={faBolt} /></h1><h1 className="ai">AI Power Analytics </h1>
            <h1 className="arrow"><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h1>
            <div className="div1"><img src={ac} alt="ac"/><h4>Air Conditioner</h4>
            <p>2 unit | 18kwh</p>
            <h1 className="arrow1"> <FontAwesomeIcon icon={faChevronRight} /></h1>
            </div>
            <div className="div2"><h1 className="wifi"><FontAwesomeIcon icon={faWifi} /></h1><h4>WI-FI Router</h4>
            <p>1 unit | 8kwh</p>
            <h1 className="arrow2"> <FontAwesomeIcon icon={faChevronRight} /></h1>
            </div>
            <div className="div2"><h1 className="wifi"><FontAwesomeIcon icon={faTv} /></h1><h4>Smart TV</h4>
            <p>2 unit | 12kwh</p>
            <h1 className="arrow2"> <FontAwesomeIcon icon={faChevronRight} /></h1>
            </div>
            <div className="div2"><h1 className="wifi"><FontAwesomeIcon icon={faDroplet} /></h1><h4>Humidifier</h4>
            <p>1 unit | 2kwh</p>
            <h1 className="arrow2"> <FontAwesomeIcon icon={faChevronRight} /></h1>
            </div>
           <div className="air" id="air">
           <h2 className="snow"><FontAwesomeIcon icon={faSnowflake} /></h2>
           <h1>Air Conditioner </h1>
           <br></br>
           <p>Auto cooling</p>
           <div className="toggle-button-cover">
      <div id="button-3" className="button r" >
        <input className="checkbox" type="checkbox" id="showAir" />
        <div className="knobs" id="showAir"></div>
        <div className="layer" id="showAir"></div>
      </div>
    </div>
    <h1 className="temp">24 <h1 className="drop"> <FontAwesomeIcon icon={faCircle} /></h1></h1>
           <p className="temper">Temperature</p>
           </div>
        </div>
    </div>
    <div className="last">
        <div className="div3"><h1 className="sun"><FontAwesomeIcon icon={faSun} /></h1>
        <h2 className="dot">..</h2>
        <h4 className="mrng">Morning Scencs</h4>
        <p className="dev">7 Devices</p>
        </div>
        <div className="div4"><h1 className="moon"><FontAwesomeIcon icon={faMoon} /></h1>
        <h2 className="dot">..</h2>
        <h4 className="mrng">Night Scencs</h4>
        <p className="dev">2 Devices</p>
        </div>
        <div className="add"><h1 className="plus"><FontAwesomeIcon icon={faPlus} /></h1><h1 className="eight">You created 8 scencs</h1></div>
        <button className="button">
        Add
        </button>
    </div>
    </>
      )
      
}
export default UiDesign;