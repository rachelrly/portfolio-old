import React, { Fragment } from 'react';
import Me from '../rachel_reilly.jpg'

function About(){

return (
    <Fragment>
    <h2>About</h2>
    <img className='rachel-image' src={Me} />
    </Fragment>
)

}

export default About;