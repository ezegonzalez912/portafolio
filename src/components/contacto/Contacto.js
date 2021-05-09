import React from 'react'
import {ContactoTitulo} from './ContactoTitulo'
import {ContactoTitulo2} from './ContactoTitulo2'
import { Formulario } from './Formulario'
import Slide from 'react-reveal/Slide';
import Jump from 'react-reveal/Jump';
import { ContactoWsp } from './ContactoWsp';

export const Contacto = ({setNotificacion}) => {
    return (
        <div className='SeccionContainer' id='contacto'>
            <Slide left duration={1000}>
                <ContactoTitulo2 />
            </Slide>
            <div>
                <Slide left duration={1200}>
                    <ContactoTitulo />
                </Slide>
                <Formulario setNotificacion={setNotificacion}/>
            </div>
            <Jump left duration={1450}>
                <ContactoWsp />
            </Jump>
        </div>
    )
}
