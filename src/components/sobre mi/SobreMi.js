import React from 'react'
import { Redes } from './Redes'
import { SobreMiTitulo1 } from './SobreMiTitulo1'
import { SobreMiTitulo2 } from './SobreMiTitulo2'
import { SobreMITitulo3 } from './SobreMITitulo3'
import Slide from 'react-reveal/Slide';

export const SobreMi = () => {
    return (
        <div className='SeccionContainer' id='sobreMi'>
            <Slide left duration={1000}>
                <SobreMiTitulo2 />
            </Slide>
            <div>
                <Slide left duration={1200}>
                    <SobreMiTitulo1 />
                </Slide>
                <Slide left duration={1400}>
                    <SobreMITitulo3 />
                </Slide>    
            </div>
            <Redes />
        </div>
    )
}
