import React from 'react'
import { ProyectoItem } from './ProyectoItem'
import flecha from '../../img/flecha.svg'
import proyecto1 from '../../img/proyecto1.png'
import proyecto2 from '../../img/proyecto2.png'
import proyecto3 from '../../img/proyecto3.png'
import Slide from 'react-reveal/Slide';

export const ListaProyectos = () => {
    return (
        <div className='ListaProyectos'>
            <div className='Proyectos'>
                <Slide left>
                    <ProyectoItem proyecto={proyecto1}
                    texto={`Proyecto desarrollado en React Js, una pagina web con diversas funciones,
                    se implementaron diversos paquetes npm, mucha logica de javascript, LocalStorage,
                    entre otras muchas cosas.`}
                    website={'https://fmsvotacion.com'}
                    repositorio={''}/>
                    <ProyectoItem proyecto={proyecto2}
                    texto={`Mi portafolio personal desarrollado en React JS, 100% resposive, 
                    con animaciones y un diseño atractivo.`}
                    website={''}
                    repositorio={''}/>
                    <ProyectoItem proyecto={proyecto3}
                    texto={`********`}
                    website={''}
                    repositorio={''}/>
                    <ProyectoItem proyecto={proyecto3}
                    texto={`********`}
                    website={''}
                    repositorio={''}/>
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
