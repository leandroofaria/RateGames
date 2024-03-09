import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/index.js';
import Formulario from './componentes/Formulario/index.js';
import { useState } from 'react';

function App() {

  const [jogos, setJogos] = useState([])

  const aoNovoJogoAdicionado = (jogo)=> {
    console.log(jogo)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoJogoCadastrado = {jogo => aoNovoJogoAdicionado(jogo)} />
    </div>
  );
}

export default App;
