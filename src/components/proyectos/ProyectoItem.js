import React from 'react'
import Fade from 'react-reveal/Fade';

export const ProyectoItem = ({proyecto, tecnologias, website, repositorio, title}) => {

    return (
        <div className='ProyectoItem'>
            <Fade>
                <div className='PytInformacion'>
                    <p className='PytInformacion_Titulo'><span className='ColorRosa'>{title[0]}</span> {title[1]}<span className='ColorRosa'>.</span> </p>
                    <div className='PytInformacion_Imagenes'>
                        {
                            tecnologias.map( (tecnologia, index) => (
                                <img key={index} src={tecnologia.img} alt={tecnologia.name} title={tecnologia.name}/>
                            ))
                        }
                    </div>
                    <div>
                        <a className='PytInformacion_Boton' rel="noreferrer" href={repositorio} target="_blank">Repositorio</a>
                        <a className='PytInformacion_Boton' rel="noreferrer" href={website} target="_blank">Sitio web</a>
                    </div>
                </div>
            </Fade>
            <img src={proyecto} alt=''/>
        </div>
    )
}
