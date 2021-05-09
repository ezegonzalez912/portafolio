import React from 'react'
import Fade from 'react-reveal/Fade';

export const ProyectoItem = ({proyecto, texto, website, repositorio}) => {
    return (
        <div className='ProyectoItem'>
            <Fade>
                <div className='PytInformacion'>
                    <p className='PytInformacion_Titulo'><span className='ColorRosa'>Pagina</span> web<span className='ColorRosa'>.</span> </p>
                    <p className='PytInformacion_Subtitulo'>{texto}</p>
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
