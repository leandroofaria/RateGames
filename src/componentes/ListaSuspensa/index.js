import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={(evento) => props.aoAlterar(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                {props.itens.map((item, index) => {
                    return <option key={index}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default ListaSuspensa;
