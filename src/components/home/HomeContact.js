import React from 'react'
import contacto from '../../img/contacto.svg'

export const HomeContact = () => {
    return (
        <div>
            <a href='mailto:ezegonzalez912@gmail.com' target='_blank' rel="noreferrer" className='icon'>
                <img className='IconContaco' src={contacto} alt='contact' />
            </a>
        </div>
    )
}
