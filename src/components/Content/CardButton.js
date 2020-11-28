import './container.css';
import React from 'react';



const CardButton = (props) =>{

    const handleClick = () =>{
        props.onClick();
    }
    return(
        <button className="buttonCard" onClick={handleClick} >Hide / Show</button>
   )
}

export default CardButton;