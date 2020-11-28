import './navbar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () =>{
    
    const [active, setActive] = React.useState(true);
      
    const handleClick = () => {
        
        setActive(!active);
                      
    };
   
   return(
        <div className="navbar">
            <ul className="nav_block">
                <li className={`item_${active ? "show" : "hide"}`}><a  href="http://localhost:3000/">CSS Layout</a></li>
                <li className={`item_${active ? "show" : "hide"}`}><a  href="http://localhost:3000/">CSS Layout</a></li>
                <li className={`item_${active ? "show" : "hide"}`}><a  href="http://localhost:3000/">CSS</a></li>
                <li className={`item_${active ? "show" : "hide"}`}><a  href="http://localhost:3000/">CSS Layout</a></li>
                <li className={`item_${active ? "show" : "hide"}`}><a  href="http://localhost:3000/">CSS Layout</a></li>
                <li className={`button-${active ? "show" : "hide"}`} onClick={handleClick}><FontAwesomeIcon icon={faBars}/></li>
                <li className={`button-${active ? "hide" : "show"}`} onClick={handleClick}><FontAwesomeIcon icon={faTimes}/></li>
            </ul>
        </div>

    )
}
export default Navbar;