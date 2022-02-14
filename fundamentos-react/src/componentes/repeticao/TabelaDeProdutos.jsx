/* eslint-disable import/no-anonymous-default-export */
import "./TabelaDeProdutos.css"
import produtos from '../../data/produtos';

import React from "react";

export default props=>{
    console.log(produtos, 'aqui');

    

    const tabelaDeProdutos = produtos.map((produto, index)=>{
        
        const pricePtBR = Number(produto.price)
        .toLocaleString('pt-Br', {
            style:'currency',
             currency:'BRL'
        });

        return (
            <tr key={produto.id} style={{'text-align': 'left'}} className={(index % 2 === 0) ? 'par' : '' }>
                <td>{produto.id}</td>
                <td>{produto.product}</td>
                <td>{pricePtBR}</td>
            </tr>
        );
    });
    return(
      <div className="tabela-produtos"> 
          <table>
              <thead>
                  <tr>
                      <th>Id</th>
                      <th>Produto</th>
                      <th>Preço</th>
                  </tr>
              </thead>
              <tbody>
                 {tabelaDeProdutos}
              </tbody>
          </table>
      </div>
    );
}