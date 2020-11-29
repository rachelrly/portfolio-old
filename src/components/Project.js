import React, {useState, Fragment} from 'react';
import Screenshot from './Screenshot';

function Project(props){
    const [toggleOpen, setToggleOpen] = useState(false)

    return (
        <section>
        <h3 onClick={()=>setToggleOpen(!toggleOpen)}>{props.title}</h3>

        {
            toggleOpen
        ? <div className='project-wrapper'>
            {props.content.map((c, index) => <div className='paragraph-wrapper project-item' key={index}><p className='project-item project-p'>{c}</p></div>)}
            {props.images.map((i, index) => <Screenshot key={index} {...i}/>)}
        </div>
            : null
        }
        </section>
    )
}

export default Project;