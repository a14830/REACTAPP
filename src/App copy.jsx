import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import Mensagem from './Mensagem';
import Alerta from './Alerta';
import Contador from './Contador';
import Formulario from './Formulario';
import Notas from './Notas';

function App() {
  return (
    <div className="container mt-4">

      <Notas/>

    </div>
  );
}

export default App
