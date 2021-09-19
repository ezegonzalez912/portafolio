import React from 'react'
import arrow from '../../img/flecha.svg'
import project1IMG from '../../img/proyecto1.png'
import project2IMG from '../../img/proyecto2.png'
import project3IMG from '../../img/proyecto3.png'
import project4IMG from '../../img/proyecto4.png'
import Slide from 'react-reveal/Slide';
import { technologies } from '../../data/technologies'
import { ProjectItem } from './ProjectItem'

export const ListProjects = () => {

    const {react, sass, css, javascript, typescript} = technologies;

    const projects = {
        project1: [react, sass, javascript],
        project2: [react, css, typescript],
        project3: [react, sass, typescript],
        project4: [react, css, javascript],
    }

    return (
        <div className='list-projects'>
            <div className='projects'>
                <Slide left>
                    <ProjectItem 
                        projectIMG={project1IMG}
                        title={["FMS", "Votacion"]}
                        technologies={projects.project1}
                        website={'https://fmsvotacion.com'}
                        repository={'https://github.com/ezegonzalez912/fmsvotacion2'}
                    />
                    <ProjectItem 
                        projectIMG={project2IMG}
                        title={["Challenge", "Softvision"]}
                        technologies={projects.project2}
                        website={'https://ezegonzalez912.github.io/challenge-softvision'}
                        repository={'https://github.com/ezegonzalez912/challenge-softvision'}
                    />
                    <ProjectItem 
                        projectIMG={project3IMG}
                        title={["Challenge", "Aerolab"]}
                        technologies={projects.project3}
                        website={'https://ezegonzalez912.github.io/challenge-aerolab/'}
                        repository={'https://github.com/ezegonzalez912/challenge-aerolab'}
                    />
                    <ProjectItem 
                        projectIMG={project4IMG}
                        title={["Challenge", "Alkemy"]}
                        technologies={projects.project4}
                        website={'https://ezegonzalez912.github.io/challenge-alkemy/'}
                        repository={'https://github.com/ezegonzalez912/challenge-alkemy'}
                    />
                </Slide>
            </div>
            <Slide left>
                <a className='icon view-more' href='https://github.com/ezegonzalez912' target='_blank' rel="noreferrer">
                    <img className='arrow' src={arrow} alt='arrow'/>
                </a>
            </Slide>
        </div>
    )
}
