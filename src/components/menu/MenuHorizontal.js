import React from 'react'
import inicio from '../../img/inicio.svg'
import sobremi from '../../img/sobremi.svg'
import proyectos from '../../img/proyectos.svg'
import contactoWhite from '../../img/contactoWhite.svg'
import { Link } from "react-scroll";

export const MenuHorizontal = () => {

    return (
        <div className='MenuHorizontal'>
            <Link
            activeClass="active"
            to="inicio"
            spy={true}
            smooth={true}
            duration={300}
            ><img className='MenuIcon' src={inicio} alt=''/></Link>
            <Link
            activeClass="active"
            to="sobreMi"
            spy={true}
            smooth={true}
            duration={300}
            ><img className='MenuIcon' src={sobremi} alt=''/></Link>
            <Link
            activeClass="active"
            to="proyectos"
            spy={true}
            smooth={true}
            duration={300}
            ><img className='MenuIcon' src={proyectos} alt=''/></Link>
            <Link
            activeClass="active"
            to="contacto"
            spy={true}
            smooth={true}
            duration={300}
            ><img className='MenuIcon' src={contactoWhite} alt=''/></Link>
        </div>
    )
}
