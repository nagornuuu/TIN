const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {

    const { x, y } = url.parse(req.url, true).query;
    const operation = url.parse(req.url, true).pathname.substring(1);

    if (isNaN(x) || isNaN(y)) {
        return res.end('<h1>Argumenty nie sa liczbami</h1>');
    }

    let result;
    if (operation === 'dodaj') {
        result = parseFloat(x) + parseFloat(y);
    } else if (operation === 'odejmij') {
        result = parseFloat(x) - parseFloat(y);
    } else if (operation === 'pomnoz') {
        result = parseFloat(x) * parseFloat(y);
    } else if (operation === 'podziel') {
        if (parseFloat(y) === 0) {
            return res.end('<h1>Nie mozna dzielic przez zero</h1>');
        }
        result = parseFloat(x) / parseFloat(y);
    } else {
        return res.end('<h1>Nieprawidlowa operacja</h1>');
    }

    res.end(`<h1>${x} ${operation} ${y} = ${result}</h1>`, 'utf-8');
});

const port = 3000;
server.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
