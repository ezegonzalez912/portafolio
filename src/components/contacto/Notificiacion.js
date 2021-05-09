import React from 'react'
import Slide from 'react-reveal/Slide';

export const Notificiacion = ({icon, text}) => {
    return (
        <div className='Notificacion_Contenedor'>
            <Slide top>
                <div className='Notificacion'>
                    <img alt='' src={icon} />
                    <p className='Notificiacion_Texto'>{text}</p>
                </div>
            </Slide>
        </div>
    )
}
