const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Ustawienie EJS jako silnika widoków
app.set('view engine', 'ejs');

// Ustawienie middleware do parsowania danych przesyłanych
app.use(bodyParser.urlencoded({ extended: true }));

// Ustawienie middleware do obsługi plików statycznych (style.css w folderze styles)
app.use(express.static('styles'));


// Strona z formularzem
app.get('/', (req, res) => {
    res.render('forms');
});

// Strona wyswietlajaca wyniki
app.post('/result', (req, res) => {
    const { name, email, message } = req.body;
    res.render('result', { name, email, message });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
