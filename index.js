const express = require("express")
const app = express();
const {engine} = require('express-handlebars')
const routes = require('./routes/routes')
const port = 3000;

app.engine('handlebars',engine())
app.set('view engine','handlebars')

app.use(express.urlencoded({extended:true}))

app.use('/',routes)

app.listen(port,()=>{
    console.log("SERVIDOR INICIADO NA PORTA "+port);
})