import React from 'react'


function Screenshot(props){

    return(
        <div className='screenshot-wrapper project-item'>
            <img src={require(`../images${props.path}`)} alt={props.alt} className='screenshot'/>
        </div>
    )
}

export default Screenshot;