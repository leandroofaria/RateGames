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
  

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do jogo</h2>
        <CampoTexto label="Nome" placeholder="Digite o nome do jogo" />
        <CampoTexto label="Gênero" placeholder="Digite o gênero do jogo" />
        <CampoTexto label="Imagem" placeholder="Insira uma imagem do jogo" />
        <ListaSuspensa label="Rank" itens={avaliacoes}/>
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
