import "./topbar.css";
import {NavLink} from 'react-router-dom'
import {CgHome, CgYoutube} from "react-icons/cg";
import {CgProfile} from "react-icons/cg";
import {CgPhone} from "react-icons/cg";

export default function NavLinks(props){
    return(
            <div className="linksContainer">
                    
            <NavLink to="/Home"  activestyle={{color: 'black'}} exact="true" onClick={() => props.isMobile && props.closeMobileMenu()}><span><i><CgHome/>Home</i></span>
            </NavLink>
            <br></br>
            <NavLink to="/About" activestyle={{color: 'black'}} exact="true" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i ><CgProfile/>About me</i></span>
            </NavLink>
            <br></br>
            <a href="../Youtube" activestyle={{color: 'black'}} exact="true" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i className="Youtube"><CgYoutube />Youtube</i></span>
            </a>
            <br></br>
            <NavLink to="/Contact" activestyle={{color: 'black'}} exact="true" onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgPhone/>Contact me</i></span>
            </NavLink>
            
            </div>
    
    )}
    