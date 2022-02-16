/* eslint-disable import/no-anonymous-default-export */
export default props =>{
    return(
        <div>
            <span>Nome: {props.nome} </span>
            <span> Idade: {props.idade} </span>
            <span>{props.nerd ? "Verdadeiro" : "Falso"}!</span>
        </div>
    );
}