import React, {useEffect, Fragment, useState} from 'react';
import Project from './Project'
import data from '../store.json';

function Projects(){
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(data.projects)
    }, []);

return (
    <div className='project-container'>
        {projects.length && projects.map(p => <Project key={p.title} {...p} />)}
    </div>
)

}

export default Projects;