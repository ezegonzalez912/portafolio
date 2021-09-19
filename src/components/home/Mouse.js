import React from 'react'
import mouse from '../../img/mouse.png'
import Fade from 'react-reveal/Fade';

export const Mouse = () => {
    return (
        <div className='MouseContainer'>
            <Fade>
                <img className='Mouse' src={mouse} alt='mouse'/>
                <p>desplazate</p>
                <p>para ver mas</p>
            </Fade>
        </div>
    )
}
