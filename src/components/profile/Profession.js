import React, { Component } from 'react';
import { FaUserGraduate } from "react-icons/fa";

import { IconContext } from "react-icons";

    class Profession extends Component {
        render() { 
  return (
    <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
  
    <div class="card bg-dark text-white">
  <img style={{size:"50px"}} src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d29ya3xlbnwwfHwwfHw%3D&w=1000&q=80" class="card-img" alt="..."/>
  
  <div class="card-img-overlay">
    <FaUserGraduate />
    <h5 class="card-title"><b>Profession</b></h5>
    <p style={{color:"blak"}}  class="card-text">I am currently a student at GO My Code Academy,Agronomist Engineer is looking for a new opportunity as a 
    software Developper  Motivated, curious, ambitious, always looking to improve my skills.</p>
    <p class="card-text"><b>SKIILS</b> <br/> -HTML/CSS <br/> -JAVASCRIPT <br/> -REACT <br/> -Visual Studio <br/></p>
    
  </div>
</div>
    </IconContext.Provider>
  );
}}
export default Profession;
