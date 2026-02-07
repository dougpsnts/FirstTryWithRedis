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
    console.log('Conected to Redis!');
 
    app.get('/', async (req, res) => {
        // A simple counter to track visits
        const visitas = await client.incr('Visits Counter');
        res.send(`Hi there! This page has been visited ${visitas} times.`);
    });
 
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}
 
startServer();