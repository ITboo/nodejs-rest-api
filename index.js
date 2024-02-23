import http from 'http'
import { getItems } from './controllers/itemsController.js';

const PORT = 3000;
const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    const { pathname } = url;

    if (req.method === 'GET' && pathname === '/items') {
        await getItems(req, res)
    } else {
        res.statusCode = 404;
        res.end = 'Not Found'
    }
})
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})