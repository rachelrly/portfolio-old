import React, { Fragment } from 'react';
import Me from '../images/rachel_reilly.jpg'
import {about} from '../store.json';

function About(){

return (
    <Fragment>
    <section>
    <h2>About</h2>
    <img className='rachel-image' src={Me} />
    <article>
    <p></p>

    </article>
    </section>
    </Fragment>
)

}

export default About;