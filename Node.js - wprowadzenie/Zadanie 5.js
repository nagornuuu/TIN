// module http i url
const http = require("http");
const url = require("url");

// Server
const server = http.createServer((req, res) => {

    // Pobiernie argumentów z adresu URL
    const { x, y } = url.parse(req.url, true).query;
    const operation = url.parse(req.url, true).pathname.substring(1);

    // sprawdzenie czy argumenty są liczbami
    if (isNaN(parseFloat(x)) || isNaN(parseFloat(y))) {
        return res.end('<h1>Argumenty nie sa liczbami</h1>');
    }

    // operacje matematyczne
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

    // Wynik w postaci minimalistycznej strony HTML
    res.end(`<h1>${x} ${operation} ${y} = ${result}</h1>`, 'utf-8');
});

const port = 3000;
server.listen(port, () => {
    console.log(`http://localhost:${port}/`);
});
