import React from 'react'
import { ProyectoItem } from './ProyectoItem'
import flecha from '../../img/flecha.svg'
import proyecto1 from '../../img/proyecto1.png'
import proyecto2 from '../../img/proyecto2.png'
import proyecto3 from '../../img/proyecto3.png'
import proyecto4 from '../../img/proyecto4.png'
import Slide from 'react-reveal/Slide';

export const ListaProyectos = () => {
    return (
        <div className='ListaProyectos'>
            <div className='Proyectos'>
                <Slide left>
                    <ProyectoItem proyecto={proyecto1}
                    texto={`Proyecto desarrollado en React Js, una página web con diversas funciones,
                    donde se implementaron diversos paquetes npm, mucha lógica de javascript, LocalStorage,
                    entre otras muchas cosas.`}
                    website={'https://ezegonzalez912.github.io/fmsvotacion/'}
                    repositorio={'https://github.com/ezegonzalez912/fmsvotacion'}/>
                    <ProyectoItem proyecto={proyecto2}
                    texto={`Mi portafolio personal desarrollado en React JS, 100% resposive, 
                    con animaciones y un diseño atractivo.`}
                    website={'https://ezegonzalez912.github.io/portafolio/'}
                    repositorio={'https://github.com/ezegonzalez912/portafolio'}/>
                    <ProyectoItem proyecto={proyecto3}
                    texto={`un gran proyecto que requirió mucho tiempo de trabajo, 
                    100% resposive, se implementó LocalStorage, se crearon
                    custom hooks, entre otras muchas cosas.`}
                    website={'https://fmsvotacion.com'}
                    repositorio={'https://github.com/ezegonzalez912/fmsvotacion2'}/>
                    <ProyectoItem proyecto={proyecto4}
                    texto={`Una simple carta de presentación animada,
                    la misma fue creada en las tecnologías básicas, HTML, CSS y JS`}
                    website={'https://ezegonzalez912.github.io/presentacion/'}
                    repositorio={'https://github.com/ezegonzalez912/presentacion'}/>
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
