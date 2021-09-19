import React from 'react'
import Fade from 'react-reveal/Fade';

export const ProjectItem = ({projectIMG, technologies, website, repository, title}) => {

    return (
        <div className='project-item'>
            <Fade>
                <div className='PytInformacion'>
                    <p className='PytInformacion_Titulo'><span className='ColorRosa'>{title[0]}</span> {title[1]}<span className='ColorRosa'>.</span> </p>
                    <div className='PytInformacion_Imagenes'>
                        {
                            technologies.map( (technologie, index) => (
                                <img key={index} src={technologie.img} alt={technologie.name} title={technologie.name}/>
                            ))
                        }
                    </div>
                    <div>
                        <a className='PytInformacion_Boton' rel="noreferrer" href={repository} target="_blank">Repositorio</a>
                        <a className='PytInformacion_Boton' rel="noreferrer" href={website} target="_blank">Sitio web</a>
                    </div>
                </div>
            </Fade>
            <img src={projectIMG} alt='project'/>
        </div>
    )
}
