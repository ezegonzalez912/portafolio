import React from 'react'
import { ListProjects } from './ListProjects'
import { ProjectTitle } from './ProjectTitle'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export const Projects = () => {
    return (
        <div className='SeccionContainer' id='proyectos'>
            <div className='SubSeccionContainer'>
                <Slide left duration={1000}>
                    <ProjectTitle />
                </Slide>
                <Fade>
                    <ListProjects />
                </Fade>
            </div>
        </div>
    )
}
