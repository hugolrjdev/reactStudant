/* eslint-disable import/no-anonymous-default-export */

export default props =>{

    const gerarIdade = () => parseInt(Math.random() * (20)) + 50;
    const gerarNerd = ()=> Math.random() > 0.5;

    return(
        <div>
            <div>
                Filho
            </div>
            <div>
                <button onClick={
                    function (e) {
                        props.quandoClicar('Alber Moreira', gerarIdade(), gerarNerd());
                    }
                }>Fornecer informações</button>
            </div>
        </div>
    );
}