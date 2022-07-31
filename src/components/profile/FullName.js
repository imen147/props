
import React from 'react';

const fullName = (props) => {

  
    return (
        <div style ={{color:"black",textAlign:"center"}}>
    <h1 style ={{
        textAlign:"center",
        color:"pink",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }}
    >  {props.firstName} {props.lastName}</h1>

    {props.children}
        </div>

    );
};

export default fullName;