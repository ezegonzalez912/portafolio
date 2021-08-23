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
                    texto={`Un gran proyecto que requirió mucho tiempo de trabajo, 
                    100% resposive, se implementó LocalStorage, se crearon
                    custom hooks, entre otras muchas cosas.`}
                    website={'https://fmsvotacion.com'}
                    repositorio={'https://github.com/ezegonzalez912/fmsvotacion2'}/>
                    <ProyectoItem proyecto={proyecto4}
                    texto={`MERNTASK, un aplicación donde se enfocó trabajar con context y reducers para manejar el estado global.
                    Aún falta implementar el lado del servidor, para tener el stack MERN completo.`}
                    website={'https://ezegonzalez912.github.io/MERNTask/'}
                    repositorio={'https://github.com/ezegonzalez912/MERNTask'}/>
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
