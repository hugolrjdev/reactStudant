import express from 'express';

const routes = express.Router();

routes.get('/', (request, response)=>{
    return response.json({mensage: 'DeUR0ck'})
});

export default routes;