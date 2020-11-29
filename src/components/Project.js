import React, {useState, Fragment} from 'react';

function Project(props){
    const [toggleOpen, setToggleOpen] = useState(false)
console.log(props)
const jsx = props.images.map((i, index) => {
    const str = `../images${i.path}`;
    const im = require(str);

return(<img className='project-item project-img' key={index} src={im} alt={i.alt} />)
})
    return (
        <section>
        <h3 onClick={()=>setToggleOpen(!toggleOpen)}>{props.title}</h3>

        {
            toggleOpen
        ? <div className='project-wrapper'>
            {props.content.map((c, index) => <p className='project-item project-p' key={index}>{c}</p>)}
            {jsx}
        </div>
            : null
        }
        </section>
    )
}

export default Project;