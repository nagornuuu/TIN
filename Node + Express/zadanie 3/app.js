/**
 * bodyParser -  Middleware do obsługi danych z formularza.
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Ustawienie EJS jako silnika widoków
app.set('view engine', 'ejs');

//Ustawienie middleware do parsowania danych przesyłanych z formularza HTML.
app.use(bodyParser.urlencoded({ extended: true }));

/** Strona z formularzem
 * Gdy klient żada strony glownej ('/') za pomoca metody GET
 * serwer renderuje formularz (forms.ejs)
 */
app.get('/', (req, res) => {
    res.render('forms');
});

/** Strona wyswietlajaca wyniki
 * Gdy klient przesyla formularz za pomocą metody POST na sciezke /result
 * serwer pobiera dane z formularza (imię, email, wiadomość)
 * i renderuje stronę wynikową (result.ejs)
 * */
app.post('/result', (req, res) => {
    const { name, email, message } = req.body;
    res.render('result', { name, email, message });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
