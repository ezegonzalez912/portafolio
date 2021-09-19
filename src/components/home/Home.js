import React from 'react'
import { Mouse } from './Mouse'
import { HomeContact } from './HomeContact'
import { HomeTitle } from './HomeTitle'
import { HomeSubtitle } from './HomeSubtitle'
import Jump from 'react-reveal/Jump';
import Slide from 'react-reveal/Slide';

export const Home = () => {
    return (
        <div className='SeccionContainer' id='inicio'>
            <Mouse />
            <Slide left duration={1000}>
                <HomeSubtitle />
            </Slide>
            <Slide left duration={1200}>
                <HomeTitle />
            </Slide>
            <Jump>
                <HomeContact duration={1400}/>
            </Jump>
        </div>
    )
}
