//importar express
const express =  require("express")
const cors = require("cors")

const app = express()

//transforma json em js
app.use(express.json())
app.use(cors())
//lista de produtos
let produtos = []

//primeira rota 
app.get("/", (req, res) => {
    res.send("API funcionando")
})

app.get("/produtos", (req, res) => {
    res.json(produtos)
})

//contando o total de produtos
app.get("/produtos/total", (req, res) => {
    res.json(produtos.length)
})

//pegando o valor total dos produtos
app.get("/produtos/valortotal", (req, res) => {
    let valorTotal = 0
    
    produtos.forEach(produto => {
        valorTotal += produto.preco
    })

    res.json(valorTotal)
})

app.get("/produtos/totalcategoria", (req, res) => {
    let totalCategora = new set(produtos.map(p => p.categoria)).size

    res.json(totalCategora)
})

app.post("/produtos", (req, res) => {
    const produto = req.body.produto
    const categoria = req.body.categoria
    const preco = Number(req.body.preco)  

    produtos.push({
        id: Date.now(),
        produto: produto,
        categoria: categoria,
        preco: preco 
    })

    res.json({mensagem: "Produto criado"})
})

app.delete("/produtos/:id", (req, res) => {
    let id = Number(req.params.id)

    produtos = produtos.filter(p => p.id != id)

    res.json({mensagem: "produto removida"})
})

//fznd o server escutar a porta 3000
app.listen(3000, () => {
    console.log("servidor rodando")
})

