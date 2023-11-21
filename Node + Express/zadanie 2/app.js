/** importy modułów
 * http - modul do obslugi serwera HTTP
 * url - modul do parsowania adresow URL
 * fs - modul do obslugi systemu plikow
 */
const http = require('http');
const url = require('url');
const fs = require('fs');

/**
 * funkcja do wyslania bledu
 * */
function sendError(res, statusCode, message) {
    res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
    res.end(message);
}

/**
 *  funkcja do wyslania odpowiedzi
 *  */
function sendResponse(res, statusCode, contentType, data) {
    res.writeHead(statusCode, { 'Content-Type': contentType });
    res.end(data);
}

/**
 * Funkcja sluzy do przekierowywania odpowiedzi HTTP na inna lokalizacje (URL)
 *  */
function respondWithRedirect(res, location) {
    res.writeHead(302, { 'Location': location });
    res.end();
}

/**
 * funkcja readFile jest wrapperem do odczytu pliku 'forms.html' i wyslania jego zawartosci jako odpowiedzi HTTP
 * */
function readFile(filename, res) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            sendError(res, 500, 'Internal Server Error');
            return;
        }
        sendResponse(res, 200, 'text/html', data); // Poprawiono na sendResponse
    });
}

/**
 * Obsluga danych przeslane z formularza i zapisanie ich do pliku 'params.txt'
 * */
function handleFormData(req, res) {
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const paramValue = body.split('=')[1];
        fs.appendFile('params.txt', `${paramValue}\n`, (err) => {
            if (err) {
                sendError(res, 500, 'Internal Server Error');
                return;
            }
            respondWithRedirect(res, '/');
        });
    });
}

const server = http.createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);
    if (reqUrl.pathname === '/') {
        readFile('forms.html', res);
    } else if (reqUrl.pathname === '/result' && req.method === 'POST') {
        handleFormData(req, res);
    } else {
        sendError(res, 404, 'Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
