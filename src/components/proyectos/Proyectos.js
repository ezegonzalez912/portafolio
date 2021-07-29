import React from 'react'
import { ListaProyectos } from './ListaProyectos'
import { ProyectosTitulo } from './ProyectosTitulo'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

export const Proyectos = () => {
    return (
        <div className='SeccionContainer' id='proyectos'>
            <div className='SubSeccionContainer'>
                <Slide left duration={1000}>
                    <ProyectosTitulo />
                </Slide>
                <Fade>
                    <ListaProyectos />
                </Fade>
            </div>
        </div>
    )
}
