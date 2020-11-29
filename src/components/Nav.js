import React from 'react';
import {Link} from 'react-router-dom';

function Nav(){


    return(
        <nav>
            <ul>
               <Link to='/projects'><li>Portfolio</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/'><li>Contact</li></Link>
                <Link  to='/'><li>Blog</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;