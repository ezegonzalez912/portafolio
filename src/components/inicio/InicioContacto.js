import React from 'react'
import contacto from '../../img/contacto.svg'

export const InicioContacto = () => {
    return (
        <div>
            <a href='mailto:ezegonzalez912@gmail.com' target='_blank' rel="noreferrer" className='Icon'>
                <img className='IconContaco' src={contacto} alt='' />
            </a>
        </div>
    )
}
