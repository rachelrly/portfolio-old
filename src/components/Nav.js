import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../css/Nav.css'

function Nav(){
const [expanded, setExpanded] = useState(false)

    return(
        <nav onClick={()=>setExpanded(!expanded)}>
            {expanded   
            ?<ul>
               <Link to='/projects'><li>Portfolio</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/'><li>Contact</li></Link>
                <Link  to='/'><li>Blog</li></Link>
            </ul>
            : null}
        </nav>
    )
}

export default Nav;