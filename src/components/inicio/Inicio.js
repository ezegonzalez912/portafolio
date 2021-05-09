import React from 'react'
import { Desliza } from './Desliza'
import { InicioContacto } from './InicioContacto'
import { InicioTitulo1 } from './InicioTitulo1'
import { InicioTitulo2 } from './InicioTitulo2'
import Jump from 'react-reveal/Jump';
import Slide from 'react-reveal/Slide';

export const Inicio = () => {
    return (
        <div className='SeccionContainer' id='inicio'>
            <Desliza />
            <Slide left duration={1000}>
                <InicioTitulo2 />
            </Slide>
            <Slide left duration={1200}>
                <InicioTitulo1 />
            </Slide>
            <Jump>
                <InicioContacto duration={1400}/>
            </Jump>
        </div>
    )
}
