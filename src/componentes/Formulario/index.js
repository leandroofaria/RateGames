import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

  const avaliacoes = 
      ['Ótimo',
      'Bom',
      'Mediano',
      'Ruim',
      'Horrível']

  const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Form foi submetido => ', nome, genero, imagem, rank)
  }

  const [nome, setNome] = useState('')
  const [genero, setGenero] = useState('')
  const [imagem, setImagem] = useState('')
  const [rank, setRank] = useState('')

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogo</h2>
        <CampoTexto label="Nome" placeholder="Digite o nome do jogo" 
        obrigatorio={true}
        valor={nome}
        aoAlterar={valor => setNome(valor)}/>
        <CampoTexto label="Gênero" placeholder="Digite o gênero do jogo" 
        obrigatorio={true}
        valor={genero}
        aoAlterar={valor => setGenero(valor)} />
        <CampoTexto label="Imagem" placeholder="Insira uma imagem do jogo" 
        obrigatorio={true}
        valor={imagem}
        aoAlterar={valor => setImagem(valor)} />
        <ListaSuspensa label="Rank" itens={avaliacoes}
        obrigatorio={true}
        valor={rank}
        aoAlterar={valor => setRank(valor)}/>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
