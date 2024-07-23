const express = require('express');
const path = require('path');
const { analyzeLog } = require('./logParser');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
// app.set('views', 'views')
app.use(express.static('public'));

app.get('/', (req, res) => {
    const logFile = path.join(__dirname, 'logs', 'sample.log');
    const analysisResult = analyzeLog(logFile);
    res.render('index', { result: analysisResult });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});