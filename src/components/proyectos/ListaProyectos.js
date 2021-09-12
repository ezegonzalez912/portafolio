import React from 'react'
import { ProyectoItem } from './ProyectoItem'
import flecha from '../../img/flecha.svg'
import proyecto1 from '../../img/proyecto1.png'
import proyecto2 from '../../img/proyecto2.png'
import proyecto3 from '../../img/proyecto3.png'
import proyecto4 from '../../img/proyecto4.png'
import Slide from 'react-reveal/Slide';
import { tecnologias } from '../../data/tecnologias'

export const ListaProyectos = () => {

    const {react, sass, css, javascript, typescript} = tecnologias;

    const proyectos = {
        proyecto1: [react, sass, javascript],
        proyecto2: [react, css, javascript],
        proyecto3: [react, sass, typescript],
        proyecto4: [react, css, javascript],
    }

    return (
        <div className='ListaProyectos'>
            <div className='Proyectos'>
                <Slide left>
                    <ProyectoItem proyecto={proyecto1}
                    title={["FMS", "Votacion"]}
                    tecnologias={proyectos.proyecto1}
                    website={'https://fmsvotacion.com'}
                    repositorio={'https://github.com/ezegonzalez912/fmsvotacion2'}/>
                    <ProyectoItem proyecto={proyecto2}
                    title={["Portafolio", "personal"]}
                    tecnologias={proyectos.proyecto2}
                    website={'https://ezegonzalez912.github.io/portafolio/'}
                    repositorio={'https://github.com/ezegonzalez912/portafolio'}/>
                    <ProyectoItem proyecto={proyecto3}
                    title={["Challenge", "Aerolab"]}
                    tecnologias={proyectos.proyecto3}
                    website={'https://ezegonzalez912.github.io/challenge-alkemy/'}
                    repositorio={'https://github.com/ezegonzalez912/challenge-alkemy'}/>
                    <ProyectoItem proyecto={proyecto4}
                    title={["Challenge", "Alkemy"]}
                    tecnologias={proyectos.proyecto4}
                    website={'https://ezegonzalez912.github.io/challenge-alkemy/'}
                    repositorio={'https://github.com/ezegonzalez912/challenge-alkemy'}/>
                </Slide>
            </div>
            <Slide left>
                <a className='Icon VerMas' href='https://github.com/ezegonzalez912?tab=repositories' target='_blank' rel="noreferrer">
                    <img className='Flecha' src={flecha} alt=''/>
                </a>
            </Slide>
        </div>
    )
}
