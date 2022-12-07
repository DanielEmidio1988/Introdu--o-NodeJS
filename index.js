//Configuração inicial
const express = require('express') //Vai procurar o express dentro da node_modules e importa-lo para o projeto
const mongoose = require('mongoose')
const app = express() //Agora o express será utilizado no projeto

//forma de ler JSON / middleware: recursos executados entre nossas requisições e respostas
app.use( //quando utilizo use, estou utilizando uma middleware
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

//Rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//Rota inicial /endpoint
app.get('/',(req,res)=>{
    //mostrar req

    res.json({message: 'Oi express!'})
})

//Entregar uma porta 
const DB_USER = 'daniel'
const DB_PASSWORD = encodeURIComponent('AXsA1A3vmlYNNfm6')

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.kytidm3.mongodb.net/bancodaapi?retryWrites=true&w=majority`)
//criando uma promisse para condicionar a conexão com o MongoDB
.then(()=>{
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)//configurando a porta que vou ler
})
.catch((err) => console.log(err))

// app.listen(3000) 