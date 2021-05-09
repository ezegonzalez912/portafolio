import React from 'react'
import { MenuVertical } from './MenuVertical'
import { MenuHorizontal } from './MenuHorizontal'
import Fade from 'react-reveal/Fade';

export const Menu = () => {

    return (
        <div className='MenuContainer'>
            <Fade right>
                <MenuVertical />
            </Fade>
            <MenuHorizontal />
        </div>
    )
}
