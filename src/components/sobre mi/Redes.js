import React from 'react'
import contacto from '../../img/contacto.svg'
import github from '../../img/github.svg'
import linkedin from '../../img/linkedin.svg'
import Jump from 'react-reveal/Jump';

export const Redes = () => {
    return (
        <div className='Redes'>
            <Jump duration={1000}>
                <a className='Icon' href='mailto:ezegonzalez912@gmail.com' target='_blank' rel="noreferrer">
                    <img className='IconContaco' src={contacto} alt='' />
                </a>
            </Jump>
            <Jump duration={1200}>
                <a className='Icon' href='https://github.com/ezegonzalez912' target='_blank' rel="noreferrer">
                    <img className='IconContaco' src={github} alt='' />
                </a>
            </Jump>
            <Jump duration={1400}>
                <a className='Icon' href='https://www.linkedin.com/in/ezequiel-gonzalez-9a17b3208/' target='_blank' rel="noreferrer">
                    <img className='IconContaco' src={linkedin} alt='' />
                </a>
            </Jump>
        </div>
    )
}
