const path = require('path') 
 
 let pessoas = [];
 
 class PessoasControllers{
    static index(req,res){
        res.sendFile(path.resolve('index.html'))
        
    }

    static pessoa(req,res){
        res.render('index')
    }

    static sobre(req,res){
        res.render('sobre')
    }

    static store(req,res){
        
     let pessoa  = req.body

     pessoa.idade = 2022-pessoa.ano
    pessoas.push(pessoa)
    console.log(pessoas)

        res.redirect('/')

  }
}

module.exports = PessoasControllers;