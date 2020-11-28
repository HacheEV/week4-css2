import CardButton from './CardButton.js';
import './container.css';
import React from 'react';



const Card = () => {

    const Lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    
    const [active, setActive] = React.useState(true);
                
    const handleClick = () => {
        
        setActive(!active);
                                 
    }; 
    return(
        <div className="card-container">
            <div className="card-unity">
                <div className={`card-block-${active ? "show" : "hide"}`}>
                    <div className="card-title">Card Title</div>
                    <div className="card-body">{Lorem}</div>
                </div>
                <CardButton onClick={handleClick}/>
            </div>
           
        </div>
        
    )
}
export default Card;