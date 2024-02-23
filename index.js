import http from 'http'

const PORT = 3000;
const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`)
    const { pathname } = url;

    if(req.method==='GET'&& pathname==='/hi'){
        res.end(`<h1>Hi</h1>`)
    }else{
        res.statusCode=404;
        res.end='Not Found'
    }
})
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
})