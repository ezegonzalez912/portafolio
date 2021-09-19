import { useState } from 'react';
import './App.css';
import { Contacto } from './components/contacto/Contacto';
import { Notificiacion } from './components/contacto/Notificiacion';
import { Home } from './components/home/Home';
import { Menu } from './components/menu/Menu';
import { Projects } from './components/proyectos/Projects';
import { SobreMi } from './components/sobre mi/SobreMi';
import check from './img/check.svg'
import error from './img/error.svg'

function App() {

  const [notificacion, setNotificacion] = useState('none')

  return (
    <div className="App">
      {
        notificacion === 'check' ? <Notificiacion icon={check} text={'¡Correo enviado correctamente!'}/>
        : notificacion === 'error' ? <Notificiacion icon={error} text={'¡Correo no enviado!'}/> : null
      }
      <Menu />
      <Home />
      <SobreMi />
      <Projects />
      <Contacto setNotificacion={setNotificacion}/>
    </div>
  );
}

export default App;
