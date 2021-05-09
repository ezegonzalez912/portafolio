import React, { useState } from 'react'
import Slide from 'react-reveal/Slide';
import emailjs from 'emailjs-com';

export const Formulario = ({setNotificacion}) => {

    const enviarEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ue1jz5k', 'template_kwia4mg', e.target, 'user_CgDUy3ZayGxZnTO4u11aw')
            .then(() => {
                setNotificacion('check')
                setInputName('')
                setInputEmail('')
                setInputMensaje('')
                setTimeout( () => {
                    setNotificacion('none')
                }, 2500)
            }, () => {
                setNotificacion('error')
                setTimeout( () => {
                    setNotificacion('none')
                }, 2500)
        });
    }

    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputMensaje, setInputMensaje] = useState('')

    return (
        <div>
            <form className='Formulario' onSubmit={enviarEmail}>
                <div className='Formulario_Datos'>
                <Slide left duration={1250}>
                    <div className='Formulario_Dato'>
                        <p className='Formulario_Label'>Nombre*</p>
                        <input className='Formulario_Input' value={inputName} onChange={(e) => setInputName(e.target.value)} type='text' name="user_name" required/>
                    </div>
                </Slide>
                <Slide left duration={1300}>
                    <div className='Formulario_Dato'>   
                        <p className='Formulario_Label'>Email*</p>
                        <input className='Formulario_Input' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} type='email' name="user_email" required/>
                    </div>
                </Slide>
                </div>
                <Slide left duration={1350}>
                    <div>
                        <p className='Formulario_Label'>Mensaje*</p>
                        <textarea className='Formulario_input Input_Mensaje' value={inputMensaje} onChange={(e) => setInputMensaje(e.target.value)} name="message" required/>
                    </div>
                </Slide>
                <Slide left duration={1400}>
                    <button className='Formulario_Boton'>Enviar</button>
                </Slide>
            </form>
        </div>
    )
}
