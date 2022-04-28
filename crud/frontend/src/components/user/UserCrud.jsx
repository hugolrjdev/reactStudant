/* eslint-disable no-useless-constructor */
import React, { Component } from "react";
import axios from 'axios';
import Main from '../templates/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir.'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: { name: '', email: '' },
    list: []
}// estado inicial zerado modelo do banco e lista de exibição

export default class UserCrud extends Component {

    state = {...initialState}

    componentWillMount(){
        axios(baseUrl).then(response => {
            this.setState({list: response.data}); //metodo get
        }).catch(err=>{
            console.log(err);
        })
    }

    clear(){
        this.setState({user: initialState.user}); // passar objeto vazio
    }

    save(){
        const user = this.state.user; // objeto vazio dentro de state  
        const method = user.id ? 'put' : 'post';
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl

        axios[method](url, user).then(response=>{
            const list =  this.getUpdatedList(response.data);
            this.setState({user: initialState.user, list}); // limpando dados e atualiza a list a partir da função getUpDateList
            console.log(list, 'aqui')
        }).catch((err)=>{
            console.log(err);
        })

        // axios.post('http://localhost:3000/users', user).then(response=>{
        //     const list =  this.getUpdatedList(response.data);
        //     this.setState({user: initialState.user, list});
        //     console.log(list, 'aqui')
        // }).catch(err=>{
        //     console.error(err);
        // }) // incluir usuario

    }

    getUpdatedList(user, add = true){
        const list = this.state.list.filter(u => u.id !== user.id); // se o id for diferente do user.id ele adiciona no inicio da lista e depois retorna list
        if(add){
            list.unshift(user);
        }
        return list
    }

    updateField(evt){
        const user = { ...this.state.user } //userClone
        user[evt.target.name] = evt.target.value;
        this.setState({ user })
    }


    renderForm(){

        console.log(this.state.list)
        return(
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">nome</label>
                            <input type="text" className="form-control"
                            name="name"
                            value={this.state.user.name}
                            onChange={e=>{ this.updateField(e)}}
                            placeholder="digite um nome"
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="text" className="form-control"
                            name="email"
                            value={this.state.user.email}
                            onChange={e=>{this.updateField(e)}}
                            placeholder="Digite o email..."
                            />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary" 
                        onClick={e=>{this.save(e)}}>
                            Salvar
                        </button>
                        <button className="btn btn-secondary ml-2"
                        onClick={e=>{this.clear(e)}}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        
        )
    }



    load(user){
        this.setState({user});
    }

    remove(user){
        axios.delete(`${baseUrl}/${user.id}`).then(response=>{
            const list = this.getUpdatedList(user, false); // verifica qual usuario é igual ao usuario recebido depois atualiza a lista removendo o mesmo
            this.setState( {list} );
        })
    }




    renderTable(){
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }


    renderRows(){
        return this.state.list.map(user =>{
           return(
               <tr key={user.id}>
                   <td>{user.id}</td>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>
                       <button className="btn btn-warning" onClick={() => {this.load(user)}}>
                           <i className="fa fa-pencil"></i>
                       </button>
                       <button className="btn btn-danger ml-2">
                           <i className="fa fa-trash"></i>
                       </button>
                   </td>
               </tr>
           )
        })
    }
    
    render(){
        return(
            <Main {...headerProps}>
                Cadastro de Usuário
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        );
    }


}