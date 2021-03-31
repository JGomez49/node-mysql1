const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app = express();

//importing routes
const clienteRoutes = require('./routes/cliente');


// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '6A5pr0pAn0',
    port: 3306,
    database: 'nodemysql1'
}, 'single' ));


//routes
app.use('/', clienteRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));

//starting the server
app.listen(3000, ()=>{
    console.log('Servidor escuchando en puerto 3000');
})