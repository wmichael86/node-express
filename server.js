const express = require('express');
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsiteRouter');
const promotionsRouter = require('./routes/promotionsRouter')
const partnersRouter = require('./routes/partnersRouter')

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());


// Csmpsites Routes
app.use('/campsites', campsiteRouter);
app.use('/campsites/:campsiteId', campsiteRouter);
// Promotions Routes
app.use('/promotions', promotionsRouter);
app.use('/promotions/:promotionId', promotionsRouter);
//Partners Routes
app.use('/partners', partnersRouter);
app.use('/partners/:partnerId', partnersRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});










