import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";

export const HomeSubtitle = () => {

    const { name } = useParams();

    const [nameCorrect, setNameCorrect] = useState("")

    useEffect(() => {
        if(name){
            setNameCorrect(name.split("").reverse().join("").toUpperCase())
        }
    }, [name])

    return (
        <div>
            {
                !name ?
                <p className='TituloSecundario'>ESTAS EN <br/>
                MI PORTAFOLIO<br/>
                PERSONAL</p>
                :
                <p className='TituloSecundario'>HOLA <span className='ColorRosa'>{nameCorrect}</span><span className="title_animated">👋</span><br/>
                GRACIAS<br/>
                POR LA VISITA
                </p>
            }
        </div>
    )
}
