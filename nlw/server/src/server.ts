import express, { application } from 'express';

const app = express();

app.use(express.json());

const users = [
    {id: 0, nome: 'Hugo Lélio', age: '33'},
    {id: 1, nome: 'Thuany Lima', age: '23'},
    {id: 2, nome: 'Valentina Lélio', age: '5'},
    {id: 3, nome: 'Hugo L. Neto', age: '0.6'},
];

app.get('/users', (request, response)=>{
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user=>{user.nome.includes(search)}) : users;
    // se houver search filtre todos os itens tem no nome incluido o texto... se não mostre a lista sem filtros

    response.json(filteredUsers);
});

app.get('/users/:id', (request, response)=>{
    const id = Number(request.params.id);

    const user = users[id];
    
    response.json(user);
})

app.post('/users', (request,response)=>{

    const data = request.body;

    console.log(data)

    const user = {
        name: data.nome,
        email: data.email
    }

    return response.json(user);
})

app.listen(3333, ()=>{
    console.log('DeUR0ck')
})

