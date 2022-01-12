import "./topbar.css";
import {NavLink} from 'react-router-dom'
import {CgCloud, CgHome} from "react-icons/cg";
import {CgUserlane} from "react-icons/cg";
import {CgBell} from "react-icons/cg";


export default function NavLinks(props){
    return(
            <div className="linksContainer">
                    
            <NavLink to="/Home" activeStyle={{color: 'black'}} exact onClick={() => props.isMobile && props.closeMobileMenu()}><span><i><CgHome/>Home</i></span>
            </NavLink>
            <br></br>
            <NavLink to="/About" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i ><CgUserlane/>About</i></span>
            </NavLink>
            <br></br>
            <NavLink to="/Youtube" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgBell/>Youtube</i></span>
            </NavLink>
            <br></br>
            <NavLink to="/Contact" activeStyle={{color: 'black'}} onClick={() => props.isMobile && props.closeMobileMenu()} ><span><i><CgCloud />Contact Me</i></span>
            </NavLink>
            </div>
    
    )}
    