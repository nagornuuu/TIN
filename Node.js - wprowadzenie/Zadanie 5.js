const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;
    const { x, y } = queryObject;
    const operation = url.parse(req.url, true).pathname.substring(1);

    let result;
    switch (operation) {
        case 'dodaj':
            result = parseFloat(x) + parseFloat(y);
            break;
        case 'odejmij':
            result = parseFloat(x) - parseFloat(y);
            break;
        case 'pomnóż':
            result = parseFloat(x) * parseFloat(y);
            break;
        case 'podziel':
            result = parseFloat(x) / parseFloat(y);
            break;
        default:
            result = 'Invalid operation';
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<html><body>Wynik operacji ${operation} dla liczb ${x} i ${y} to: ${result}</body></html>`);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
