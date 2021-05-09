import React from 'react'
import { MenuTitulo } from './MenuTitulo'
import { Link } from "react-scroll";
import Slide from 'react-reveal/Slide';

export const MenuVertical = () => {
    return (
        <div className='MenuVertical'>
            <MenuTitulo />
            <div>
                <Slide right duration={1000}>
                    <Link 
                        activeClass="MenuActive"
                        to="inicio"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={300}
                        className='MenuVerticalText'
                    >INICIO</Link>
                </Slide>
                <Slide right duration={1200}>
                    <Link 
                        activeClass="MenuActive"
                        to="sobreMi"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={300}
                        className='MenuVerticalText'
                    >SOBRE Mi</Link>
                </Slide>
                <Slide right duration={1400}>
                    <Link 
                        activeClass="MenuActive"
                        to="proyectos"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={300}
                        className='MenuVerticalText'
                    >PROYECTOS</Link>
                </Slide>
                <Slide right duration={1600}>
                    <Link 
                        activeClass="MenuActive"
                        to="contacto"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={300}
                        className='MenuVerticalText'
                    >CONTACTO</Link>
                </Slide>
            </div>
        </div>
    )
}
