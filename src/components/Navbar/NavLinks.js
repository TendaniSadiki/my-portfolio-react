import {Link} from 'react-router-dom'

export default function NavLinks(props){
    return(
            <div>  
                    <nav>
                <ul>
                    <li>
                    <Link to="/" className='links'>Home</Link>
                    </li>
                    <li>
                    <Link to="/About" className='links'>About</Link>
                    </li>
                    <li>
                    <Link to="/Youtube" className='links'>Youtube</Link>
                    </li>
                    <li>
                    <Link to="/Contact" className='links'>Contact me</Link>
                    </li>
                </ul>
            </nav>
            </div>
    
    )}
    