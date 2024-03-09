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
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do jogo</h2>
        <CampoTexto label="Nome" placeholder="Digite o nome do jogo" 
        obrigatorio={true}/>
        <CampoTexto label="Gênero" placeholder="Digite o gênero do jogo" 
        obrigatorio={true}/>
        <CampoTexto label="Imagem" placeholder="Insira uma imagem do jogo" 
        obrigatorio={true}/>
        <ListaSuspensa label="Rank" itens={avaliacoes}
        obrigatorio={true}/>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
