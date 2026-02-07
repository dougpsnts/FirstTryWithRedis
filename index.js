const espress = require('express');
const redis = require('redis');
const app = espress();
const port = 3000;

// Client`s Redis setup
const client = redis.createClient(
    { url: 'redis://redis:6379' 
});
// 'redis://redis:6379' is the service name defined in docker-compose.yml

client.on('error', (err) => console.log('Erro no Redis Client', err));

async function startServer() {
    await client.connect();
    console.log('Conectado ao Redis!');
 
    app.get('/', async (req, res) => {
        // A simple counter to track visits
        const visitas = await client.incr('contador_visitas');
        res.send(`Olá! Esta página foi visitada ${visitas} vezes.`);
    });
 
    app.listen(port, () => {
        console.log(`Servidor rodando em http://localhost:${port}`);
    });
}
 
startServer();