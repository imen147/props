
import React from 'react';

const FullName = (props) => {
    console.log(props);

  
    return (
        <div style ={{color:"black",textAlign:"center"}}>
    <h1 style ={{
        textAlign:"center",
        color:"pink",
        textTransform: "uppercase",
        fontFamily: 'Roboto Condensed',margin:"auto",
    }}
    >  {props.firstName} {props.lastName}</h1>

    
        </div>

    );
};

export default FullName;
