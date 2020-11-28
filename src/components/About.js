import React, { Fragment } from 'react';
import Me from '../rachel_reilly.jpg'

function About(){

return (
    <Fragment>
    <section>
    <h2>About</h2>
    <img className='rachel-image' src={Me} />
    </section>
    </Fragment>
)

}

export default About;